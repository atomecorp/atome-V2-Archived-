//////////////////// add grab method  \\\\\\\\\\\\\\\\\\


function get_proc_content(proc_send) {
    return String(proc_send);
}


function opalizer(nameSpace, functionToCall, param, atome_id, add) {
    // console.log("msg from api.js line 10, param: "+param +" "+typeof (param));
// alert(typeof(param) )
    if (typeof (param) == "function") {
        window[nameSpace][functionToCall](param, atome_id.toString(), add);
        // eval(functionToCall+"("+param+",'"+atome_id+"')");
    } else if (typeof (param) == "object") {
        window[nameSpace][functionToCall](param, atome_id.toString(), add);
        // var a =  Opal.hash(param[0]).$$keys;
        // var b =  Opal.hash(param[0]);

        // alert("api line 16 : "+b);

        // alert("api line 16"+typeof(param[0])+" "+param[0]);

        // eval(functionToCall+"("+param+",'"+atome_id+"')");
        // eval(functionToCall+"(['"+param+"'],'"+atome_id+"','"+id+"')");
    } else {
        // console.log('kjhkjh');
        //        Opal.Object.$puts("msg from api.js line 30  : "+nameSpace+'.'+functionToCall+"('"+param+"','"+atome_id+"','"+id+"')");
        // console.log(functionToCall+" : "+param)
        // eval(functionToCall+"('"+param+"','"+atome_id+"','"+id+"')");
        //    window[nameSpace.toString()][functionToCall.toString()](param.toString(),atome_id.toString(),id.toString());
        window[nameSpace][functionToCall](param, atome_id.toString());
        //window["html"]["x"](200,652321,atome_id);
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

function protect_accent(str) {
    var accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';

    //var accentsOut=accented_chars;
    accentsOut = ['\\300', '\\301', '\\302', '\\303', '\\304', '\\305', '\\340', '\\341', '\\342', '\\343', '\\344', '\\345', '\\322', '\\323', '\\324', '\\325', '\\325', '\\326', '\\330', '\\362', '\\363', '\\364', '\\365', '\\366', '\\370', '\\310', '\\311', '\\312', '\\313', '\\350', '\\351', '\\352', '\\353', '\\360', '\\307', '\\347', '\\320', '\\314', '\\315', '\\316', '\\317', '\\354', '\\355', '\\356', '\\357', '\\331', '\\332', '\\333', '\\334', '\\371', '\\372', '\\373', '\\374', '\\321', '\\361', '\\undefined', '\\undefined', '\\undefined', '\\377', '\\375', '\\undefined', '\\undefined']

    str = str.split('');
    var strLen = str.length;
    var i, x;
    for (i = 0; i < strLen; i++) {
        if ((x = accents.indexOf(str[i])) != -1) {
            str[i] = accentsOut[x];
        }
    }
    return str.join('');
}

function debug(code) {
    try {
        code = protect_accent(code);
        Opal.eval(code);
    } catch (error) {
        console.log(JSON.stringify(error));
        msg = "puts \"" + error.stack + "\"";
        Opal.eval(msg);
    }
}

function run_script(content) {
    debug(content);
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

function send_to_ide(content, run) {

    content=content.replace("\\351","é")
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
    file_content = content.split("\n");
    file_content.forEach(function (line) {
        if (line.startsWith("run")) {
            Opal.Object.$run_code(true);
        }
        if (run) {
            Opal.Object.$run_code(true);
        }
    });

}

// function add_to_console(content){
//     Opal.Object.$puts(content);
// }


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

