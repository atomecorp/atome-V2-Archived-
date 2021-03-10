class StreamingHelper {
    constructor(width, height, framerate, remoteVideoElement, localVideoElement, streamingEventListener) {
        this.width = width;
        this.height = height;
        this.framerate = framerate;
        this.remoteVideoElement = remoteVideoElement;
        this.localVideoElement = localVideoElement;
        this.streamingEventListener = streamingEventListener;
    }

    connect() {
        this.pc = undefined;
        this.configuration = {
            iceServers: [{
                urls: 'stun:stun.l.google.com:19302' // Google's public STUN server
            }]
        };

        //TODO: Generate random name
        this.roomName = 'observable-' + 123681518164516845;
        this.drone = new ScaleDrone('5SZm1WHeELXOMdSe');

        const self = this;

        this.drone.on('open', error => {
            if (error) {
                return self.streamingEventListener.onError(error);
            }
            self.room = self.drone.subscribe(self.roomName);
            self.room.on('open', error => {
                if (error) {
                    self.streamingEventListener.onError(error);
                }
            });
            // We're connected to the room and received an array of 'members'
            // connected to the room (including us). Signaling server is ready.
            self.room.on('members', members => {
                if (members.length >= 3) {
                    return alert('The room is full');
                }
                // If we are the second user to connect to the room we will be creating the offer
                const isOfferer = members.length === 2;
                self.startWebRTC(isOfferer);
                self.startListeningToSignals();
            });
        });
    }

    startWebRTC(isOfferer) {
        this.pc = new RTCPeerConnection(this.configuration);

        const self = this;
        // 'onicecandidate' notifies us whenever an ICE agent needs to deliver a
        // message to the other peer through the signaling server
        this.pc.onicecandidate = event => {
            if (event.candidate) {
                self.sendMessage({'candidate': event.candidate});
            }
        };

        // If user is offerer let the 'negotiationneeded' event create the offer
        if (isOfferer) {
            this.pc.onnegotiationneeded = () => {
                self.createOffer();
            }
        }

        // When a remote stream arrives display it in the #remoteVideo element
        this.pc.onaddstream = event => {
            self.remoteVideoElement.srcObject = event.stream;
        };

        navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true,
        }).then(stream => {
            // Display your local video in #localVideo element
            self.localVideoElement.srcObject = stream;
            // Add your stream to be sent to the conneting peer
            self.pc.addStream(stream);
        }, this.streamingEventListener.onError);
    }

    sendMessage(message) {
        this.drone.publish({
            room: this.roomName,
            message
        });
    }

    startListeningToSignals() {
        const self = this;
        // Listen to signaling data from Scaledrone
        this.room.on('data', (message, client) => {
            // Message was sent by us
            if (!client || client.id === self.drone.clientId) {
                return;
            }
            if (message.sdp) {
                // This is called after receiving an offer or answer from another peer
                self.pc.setRemoteDescription(new RTCSessionDescription(message.sdp), () => {
                    // When receiving an offer lets answer it
                    if (self.pc.remoteDescription.type === 'offer') {
                        self.createAnswer();
                    }
                }, self.streamingEventListener.onError);
            } else if (message.candidate) {
                // Add the new ICE candidate to our connections remote description
                self.pc.addIceCandidate(
                    new RTCIceCandidate(message.candidate), self.streamingEventListener.onConnected, self.streamingEventListener.onError
                );
            }
        });
    }

    createAnswer() {
        const self = this;
        this.pc.createAnswer().then((description) => {
            self.setLocalDescription(description, self);
        }).catch(this.streamingEventListener.onError);
    }

    createOffer() {
        const self = this;
        this.pc.createOffer().then((description) => {
            self.setLocalDescription(description, self);
        }).catch(this.streamingEventListener.onError);
    }

    setLocalDescription(description, parent) {
        parent.pc.setLocalDescription(
            description,
            () => parent.sendMessage({'sdp': parent.pc.localDescription}),
            parent.streamingEventListener.onError
        );
    }
}