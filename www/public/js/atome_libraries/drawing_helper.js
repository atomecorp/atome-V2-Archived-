class DrawingHelper {
    constructor(width, height, drawingEventListener) {
        this.width = width;
        this.height = height;

        this.drawingEventListener = drawingEventListener;

        this.modeType = {
            Use: 'Use',
            Select: 'Select',
            Draw: 'Draw'
        };

        this.mode = this.modeType.Use;
    }

    connect() {
        this.frame = new Frame("view",
            this.width,
            this.height,
            light,
            dark,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            "atomeZimCanvas");
        const self = this;
        this.frame.on("ready", () => {
            const stage = this.frame.stage;

            var backing = new Rectangle(this.frame.width, this.frame.height, white).center();

            // const line = new Shape().addTo();

            const precision = 50;
            const curving = 0.25;
            const color = blue;
            const thickness = 4;

            let points = [];
            let squiggle;
            let squiggleInitialised = false;

            function beginDraw(x, y) {
                points.push([x,y]);

                squiggle = new Squiggle({
                    color: color,
                    thickness: thickness,
                    controlType: "none",
                    interactive: false
                });

                stage.update();
            }

            function mouseDrag(x, y) {
                const lastX = points[points.length - 1][0];
                const lastY = points[points.length - 1][1];

                if (dist(lastX, lastY, x, y) > precision) {
                    points.push([x, y]);
                    squiggle.points = points;

                    if(!squiggleInitialised) {
                        squiggle.addTo();
                        squiggleInitialised = true;
                    }
                }
                stage.update();
            }

            function mouseUp(x, y) {
                points.push([x, y]);

                zim.loop(squiggle.pointObjects, function(obj, i, t){
                    if (i===0) return;
                    if (i===t-1) return;
                    const previousPoint = squiggle.pointControls[i - 1];
                    const nextPoint = squiggle.pointControls[i + 1];
                    const middleX = (previousPoint.x + nextPoint.x) / 2;
                    const middleY = (previousPoint.y + nextPoint.y) / 2;

                    const w = middleX - obj[0].x;
                    const h = middleY - obj[0].y;

                    let a = Math.atan2(h, w) * zim.DEG;
                    a = (360+a)%360;
                    const a2 = zim.angle(obj[0].x, obj[0].y, nextPoint.x, nextPoint.y);

                    if (a > a2) {
                        a = (a-a2 < 180) ? a - 90 : a + 90;
                    } else {
                        a = (a2-a < 180) ? a + 90 : a - 90;
                    }

                    const d = zim.dist(previousPoint.x, previousPoint.y, nextPoint.x, nextPoint.y) / 2 * curving;

                    obj[2].x=-d;
                    obj[2].y=0;
                    obj[3].x=d;
                    obj[3].y=0;
                    obj[3].color = red;
                    obj[0].rotation=a;

                    obj[4] = "mirror";
                });
                squiggle.update();

                points = [];
                squiggleInitialised = false;

                stage.update();
            }

            backing.on("mousedown", function(e) {
                switch (self.mode) {
                    case self.modeType.Use:
                        break;
                    case self.modeType.Draw:
                        beginDraw(self.frame.mouseX, self.frame.mouseY);
                        break;
                }
            });

            backing.on("pressmove", function(e) {
                switch (self.mode) {
                    case self.modeType.Use:
                        break;
                    case self.modeType.Draw:
                        mouseDrag(self.frame.mouseX, self.frame.mouseY);
                        break;
                }
            });

            backing.on("pressup", function () {
                switch (self.mode) {
                    case self.modeType.Use:
                        break;
                    case self.modeType.Draw:
                        mouseUp(self.frame.mouseX, self.frame.mouseY);
                        break;
                }
            });

            this.drawingEventListener.onConnected();
        });
    }

    setMode(mode) {
        console.log("mode set to " + mode);
        this.mode = mode;
    }
}