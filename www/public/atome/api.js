//////////////////// add grab method  \\\\\\\\\\\\\\\\\


function get_proc_content(proc_send){
  return String(proc_send);
}


function opalizer(nameSpace,functionToCall, param, atome_id, id) {
   // console.log("msg from api.js line 10, param: "+param +" "+typeof (param));
// alert(typeof(param) )
    if (typeof(param)=="function"){
        window[nameSpace][functionToCall](param,atome_id.toString());
       // eval(functionToCall+"("+param+",'"+atome_id+"')");
    }
    else if (typeof(param)=="object"){
        window[nameSpace][functionToCall](param,atome_id.toString());
     // var a =  Opal.hash(param[0]).$$keys;
     // var b =  Opal.hash(param[0]);

        // alert("api line 16 : "+b);

        // alert("api line 16"+typeof(param[0])+" "+param[0]);

        // eval(functionToCall+"("+param+",'"+atome_id+"')");
       // eval(functionToCall+"(['"+param+"'],'"+atome_id+"','"+id+"')");
    }

    else
    {
 // console.log('kjhkjh');
 //        Opal.Object.$puts("msg from api.js line 30  : "+nameSpace+'.'+functionToCall+"('"+param+"','"+atome_id+"','"+id+"')");
        // console.log(functionToCall+" : "+param)
     // eval(functionToCall+"('"+param+"','"+atome_id+"','"+id+"')");
     //    window[nameSpace.toString()][functionToCall.toString()](param.toString(),atome_id.toString(),id.toString());
        window[nameSpace][functionToCall](param,atome_id.toString());
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

