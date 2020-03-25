// fileName = "mon premier script";
// fileContent = "box()";

var activeFlow = new WebSocket('ws://' + window.location.host + window.location.pathname);


activeFlow.onopen = function (m) {
    activeFlow.send("WebSocket works!, it's a sucess!!'");
};
activeFlow.onmessage = function (m) {
    console.log(m.data);
    //Opal.eval(trig_function + "('"+ params + "')");
};

activeFlow.onclose = function () {
};



function create_file(file_name) {

}


function write_file(file_name, file_content, trig_function, params) {
    // function successCallback(fs) {
    //     // fs.root.getFile(file_name, {create: true}, function (fileEntry) {
    //     //     fileEntry.createWriter(function (fileWriter) {
    //     //         fileWriter.onwriteend = function (e) {
    //     //         };
    //     //         fileWriter.onerror = function (e) {
    //     //             console.log('Write failed: ' + e.toString());
    //     //         };
    //     //         var blob = new Blob([file_content], {type: 'text/plain'});
    //     //         // var blob = new Blob([file_content], {type: file_content.type});
    //     //         fileWriter.write(blob);
    //     //         if (trig_function != false) {
    //     //             Opal.eval(trig_function + "('"+ params + "')");
    //     //         }
    //     //     }, errorCallback);
    //     // }, errorCallback);
    // }

    // function errorCallback(error) {
    //     console.log("ERROR: " + error.code);
    // }
var data_to_send=[ "write",file_name, file_content, trig_function, params]
    activeFlow.send(data_to_send);
}






function read_file(file_name, trig_function, params, err_callb_fct) {

    // function successCallback(fs) {
    //     // fs.root.getFile(file_name, {}, function (fileEntry) {
    //     //     fileEntry.file(function (file) {
    //     //         var reader = new FileReader();
    //     //         reader.onloadend = function (e) {
    //     //             var file_content = this.result;
    //     //             if (params == "") {
    //     //                 Opal.eval(trig_function + "('" + file_content + "')");
    //     //             } else {
    //     //                 Opal.eval(trig_function + "('" + file_content + "','" + params + "')");
    //     //             }
    //     //         };
    //     //
    //     //         reader.readAsText(file);
    //     //     }, errorCallback2);
    //     // }, errorCallback);
    // }
    //
    // function errorCallback2(err) {
    //     console.log("file call is : " + file_name + "ERROR: maybe crash " + err.code);
    // }
    //
    // function errorCallback(error) {
    //     try {
    //         Opal.eval(err_callb_fct);
    //     } catch (err) {
    //         console.error(err);
    //     }
    // }

}



function remove_file(file_name) {
}




