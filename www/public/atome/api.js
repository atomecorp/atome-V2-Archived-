//////////////////// add grab method  \\\\\\\\\\\\\\\\\

function opalizer(functionToCall, param, atome_id, id) {

    if (typeof(param)=="function"){
        eval(functionToCall+"("+param+",'"+atome_id+"')");
    }else
    {
        eval(functionToCall+"('"+param+"','"+atome_id+"','"+id+"')");

    }
}

function grab(id) {
    obj = myObjects[myIDS.indexOf(id)];
    //zim_lib.app.stage.update();
    return obj;
}

var myIDS = [];
var myObjects = [];
var fitToObjeList = [];

////////////////////////// ruby interpreter ////////////////////
function debug(code) {
    try {
        Opal.eval(code);
    } catch (error) {
        console.log(JSON.stringify(error));
        //the line below should provide better debug but cause error when typing "clear" in the ide
       // msg = "puts \"" + error.stack + "\"";
        msg = "puts \"" + error + "\"";
        Opal.eval(msg);
    }
}

function run_script(content) {
    // content = content.split("render");
    // var previous_part = "";
    // content.forEach(function (code, index) {
    //     if (index == 0) {
    //         debug(code);
    //         previous_part = code.replace("sleep", "");
    //     } else {
    //         setTimeout(function () {
    //             code = previous_part + code;
    //             Opal.Object.$clear("view");
    //             debug(code);
    //             previous_part = code.replace("sleep", "");
    //         }, index * 10);
    //     }
    // });
    debug(content)
}

function flash(file) {
    alert(file);
}

function get_image(file) {

    $("#output").remove();
    $("body").append('<img id="output" />');
    $("#output").css("z-index", 50000);
    $("#output").css("position", "absolute");

    var reader = new FileReader();
    reader.onload = function () {
        var dataURL = reader.result;
        var output = document.getElementById('output');
        /////////////////// try one of the three solutions ///////////
        output.src = dataURL;
        // or
        // output.src = "cdvfile:////persistent/jeezs/5 2.jpg";
        // or
        //output.src = "file://localhost/persistent/jeezs/5 2.jpg";
    };
    var file = new Blob([file], {type: 'image/jpeg'});
    reader.readAsDataURL(file);
}

function add_to_ide(content, run) {
    editor.getDoc().setValue(content);

// below code to check if code editor must be open at startup
    if (content.includes("#open_ide(:open)") || content.includes("#open_ide('open')") || content.includes('#open_ide("open")') || content.includes('#open_ide()') || content.includes('#open_ide')) {
        // only to ensure open_ide is not triggered when it is commented
    } else if (content.includes("open_ide(:open)") || content.includes("open_ide('open')") || content.includes('open_ide("open")') || content.includes('open_ide()') || content.includes('open_ide')) {
        Opal.Object.$open_ide("open");
    }

// below code to check if console must be open at startup
    if (content.includes("#open_console(:open)") || content.includes("#open_console('open')") || content.includes('#open_console("open")') || content.includes('#open_console()') || content.includes('#open_console')) {
        // only to ensure open_console is not triggered when it is commented
    } else if (content.includes("open_console(:open)") || content.includes("open_console('open')") || content.includes('open_console("open")') || content.includes('open_console()') || content.includes('open_console')) {
        Opal.Object.$open_console("open");
    }
// below code to check if code must be run at startup
    if (content.includes("#run")) {
        // only to ensure run is not triggered when it is commented
    } else if (content.includes("run")) {
        Opal.Object.$run_code();
    }

}


function browser_location() {
    // todo install : cordova-plugin-geolocation plugin to make it work
    // if(navigator.geolocation) {
    //     // L'API est disponible
    //     geoloc = []
    //     navigator.geolocation.getCurrentPosition(showPosition);
    //
    //     function showPosition(position) {
    //         geoloc[0] = position.coords.latitude;
    //         geoloc[1] = position.coords.longitude;
    //
    //     }
    // } else {
    //     // No support, give us an alternative
    // }
    geoloc = "45.76988489999991_3.060128150002545";
    return geoloc;

}

