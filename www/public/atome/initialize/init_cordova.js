document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
    var hashed_id;
    Fingerprint2.get(function (components) {
        hashed_id = Fingerprint2.x64hash128(components.map(function (pair) { return pair.value }).join(), 31);
    });
        $(document).ready(function () {
           // brython({debug: 0});
            //now we clear the console and add a few methods to obtain a bit better ruby debugging
            console.clear();
            console.log = function(message) {
              Opal.Object.$log(message);
            };
            console.info = function(message) {
                Opal.Object.$log("info : "+message);
            };
            console.warn = function(message) {
                Opal.Object.$log("warn : "+message);
            };
            console.error = function(message) {
                Opal.Object.$log("error : "+message);
            };
        });
}
