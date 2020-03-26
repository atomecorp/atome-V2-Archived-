/////////////////////////////////////////////////////////////////////////

window.ondragover = function (e) {
    e.preventDefault();
};
window.ondrop = function (e) {
    e.preventDefault();
    upload(e);
};

function img_to_zim(e, file) {
    alert ('ok for now');
    // var reader = new FileReader();
    // reader.onload = function () {
    //     var dataURL = reader.result;
    //     // var output = document.getElementById('output');
    //     // output.src = dataURL;
    //     ///////////////////////////////
    //     const load = zim_lib.frame.loadAssets("iconBig.png", "https://d309knd7es5f10.cloudfront.net/codepen/");
    //     load.on("complete", () => {
    //         zim_lib.frame.asset("iconBig.png").center().gesture();
    //         zim_lib.app.stage.update(); // this is needed to show any changes
    //     });
    //     ///////////////////////////////
    // };
    // reader.readAsDataURL(file);
}

function retry_to_get_the_img_informations(img_width){
    setTimeout(function(){
        console.log(("missed but "+img_width));
    }, 7000	);
}

function import_visual_medias(e, file) {
    alert("imported")
    $( "#output" ).remove();
    $("body").append('<img id="output" />');
    $("#output").css("z-index",50000);
    $("#output").css("position","absolute");

    var input = e.target;
    var reader = new FileReader();
    reader.onload = function () {
        var dataURL = reader.result;
        var output = document.getElementById('output');
        output.src = dataURL;
        img_width=document.getElementById('output').width
        if (img_width !=0){
            console.log("sucess"+img_width );
        }
        else {
            retry_to_get_the_img_informations(img_width);
        }
    };
     // alert("the file is : "+file.name);
    ///////////////// to test uncommnet  line below  and write directly on drop /////////////
    // write_file(file.name, file.slice());
    ///////////////// to end test comment line below  /////////////

   Opal.Object.$store(file.name, file);



    reader.readAsDataURL(file);
}

function import_audio(e, file) {
    var input = e.target;
    var reader = new FileReader();
    reader.onload = function () {
        var dataURL = reader.result
        // var output = document.getElementById('output');
        //output.src = dataURL;
    };
    reader.readAsDataURL(file);
}

function import_text(e, file) {
    var textType = /text.*/;
    if (file.type.match(textType)) {
        var reader = new FileReader();
        reader.onload = function (e) {
            fileDisplayArea.innerText = reader.result;
        };
        reader.readAsText(file);
    }
}

function upload(e) {

    var files = e.dataTransfer.files
    // alert(files.length);
    for (var i = 0; i < files.length; i++) {
        file_type = files[i].type;
        file_name = files[i].name;
        file_datas = files[i].name;
        console.log(file_datas);
////////////////////////////////////////////////////////////////////////////////////////
        switch (file_type) {
            case 'video/quicktime':
                import_visual_medias(e, files[i]);
                break;
            case 'video/x-m4v':
                import_visual_medias(e, files[i]);
                break;
            case 'text/plain':
                import_text(e, files[i]);
                break;
            case 'video/mp4':
                import_visual_medias(e, files[i]);
                break;
            case 'audio/x-m4a':
                import_audio(e, files[i]);
                break;
            case 'image/png':
                import_visual_medias(e, files[i]);
                img_to_zim(e, files[i]);
                break;
            case 'image/jpeg':
                import_visual_medias(e, files[i]);
                img_to_zim(e, files[i]);
                break;
            case 'text/xml':
                import_text(e, files[i]);
                break;
            case 'image/svg+xml':
                import_visual_medias(e, files[i]);
                break;
                break;
            default:
                console.log('Unknown file format');
        }
    }
}