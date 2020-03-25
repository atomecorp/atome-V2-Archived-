/////// create file ///////
function create_file(file_name) {
    var type = window.PERSISTENT;
    var size = 5 * 1024 * 1024;
    window.requestFileSystem(type, size, successCallback, errorCallback);

    function successCallback(fs) {
        fs.root.getFile(file_name, {create: true, exclusive: true}, function (fileEntry) {
        }, errorCallback);
    }

    function errorCallback(error) {
        console.log("File already exist !!! ERROR: " + error.code);
    }
}

/////// write file ///////
function write_file(file_name, file_content, trig_function, params) {
    // console.log(file_name+ "maybe transform the file_content in json to be able to read assets files");
    var type = window.PERSISTENT;
    var size = 5 * 1024 * 1024;
    window.requestFileSystem(type, size, successCallback, errorCallback);

    function successCallback(fs) {
        fs.root.getFile(file_name, {create: true}, function (fileEntry) {
            fileEntry.createWriter(function (fileWriter) {
                fileWriter.onwriteend = function (e) {
                };
                fileWriter.onerror = function (e) {
                    console.log('Write failed: ' + e.toString());
                };
                var blob = new Blob([file_content], {type: 'text/plain'});
                // var blob = new Blob([file_content], {type: file_content.type});
                fileWriter.write(blob);
                if (trig_function != false) {
                    Opal.eval(trig_function + "('" + params + "')");
                }
            }, errorCallback);
        }, errorCallback);
    }

    function errorCallback(error) {
        console.log("ERROR: " + error.code);
    }
}

/////// read file ///////
// usage  the first param "file_name" is used to get the file if it succeed it run the function passed in the "trig_function" params, the third param "params" is used to passed params  to the function , the fourth and last params is used in case of a file not found error then if run the function passed in the params: "err_callb_fct"
function read_file(file_name, trig_function, params, err_callb_fct) {
    var type = window.PERSISTENT;
    var size = 5 * 1024 * 1024;
    window.requestFileSystem(type, size, successCallback, errorCallback);

    function successCallback(fs) {
        fs.root.getFile(file_name, {}, function (fileEntry) {
            fileEntry.file(function (file) {
                var reader = new FileReader();
                reader.onloadend = function (e) {
                    var file_content = this.result;
                    file_content = file_content.replace(/'/g, "\\'");
                    if (params == "") {
                        Opal.eval(trig_function + "('" + file_content + "')");
                    } else {
                        Opal.eval(trig_function + "('" + file_content + "','" + params + "')");
                    }
                    if (trig_function == "add_to_screen") {
                        //we change the project_on_screen var to the new project name
                        file_name = file_name.split(".")[1];
                        Opal.Atome.$project_on_screen(file_name);
                        Opal.Object.$project_list_send_to_set_last_project();
                    }

                };
                reader.readAsText(file);
            }, errorCallback2);
        }, errorCallback);
    }

    function errorCallback2(err) {
        console.log("file call is : " + file_name + "ERROR: maybe crash " + err.code);
    }

    function errorCallback(error) {
        try {
            Opal.eval(err_callb_fct);
        } catch (err) {
            console.error(err);
        }
    }
}

/////// remove file ///////
function remove_file(file_name) {
    var type = window.PERSISTENT;
    var size = 5 * 1024 * 1024;
    window.requestFileSystem(type, size, successCallback, errorCallback);

    function successCallback(fs) {
        fs.root.getFile(file_name, {create: false}, function (fileEntry) {
            fileEntry.remove(function () {
                console.log("File: " + file_name + " was removed.");
            }, errorCallback);
        }, errorCallback);
    }

    function errorCallback(error) {
        console.log("ERROR: " + error.code);
    }
}
