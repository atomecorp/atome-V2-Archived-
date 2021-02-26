// Wrap console.log(..) in a conditional based on a debug flag
const debug = true;

function log(message) {
    if (debug) {
        console.log(message);
    }
}

log('Populating dropdown with cities'); // prints if debug is true



console.clear();
console.log = function(message) {
    Opal.Object.$log(message);
};
console.info = function(message) {
    Opal.Object.$log(message);
};
console.warn = function(message) {
    Opal.Object.$log(message);
};
console.error = function(message) {
    Opal.Object.$log(message);
};