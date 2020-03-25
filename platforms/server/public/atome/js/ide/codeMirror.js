/////////////////////:/ Code mirror init \\\\\\\\\\\\\\\\\\\\\\\\\\\
document.body.onresize = function (event) {
    var console_drag_bar_bottom_pos = (window.innerHeight - parseInt($("#console_drag_bar").css("top")));
    default_console_height = window.innerHeight - console_height;
    $("#console_drag_bar").css("top", default_console_height);
    $("#ide_container").css("top", parseInt($("#ide_drag_bar").css("top")) + drag_bar_height);
    editor.setSize("100%", "100%");
    var console_drag_bar_bottom_pos = (window.innerHeight - parseInt($("#console_drag_bar").css("top")));
    $("#ruby_console_back").css("top", parseInt($("#console_drag_bar").css("top")) + drag_bar_height / 2);
    editor.setSize("100%", "100%");
    $("#ide_container").css("bottom", window.innerHeight-$("#console_drag_bar").css("top"));
};

//////////////////// create ide \\\\\\\\\\\\\\\\\
var drag_bar_height = 16;
var console_height = 100;
var initial_pos_of_ide = 300;
var auto_run_active = false;
var auto_format_active = false;
$("body").append("<div id='ide_drag_bar'></div>");
$("body").append("<div id='ide_container'></div>");
$("#ide_container").append("<textarea id='code' name='code'></textarea>");

var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    lineNumbers: true,
    codeFolding: true,
    styleActiveLine: true,
    indentWithTabs: true,
    matchTags: true,
    matchBrackets: true,
    electricChars: true,
    mode: "ruby",
    lineWrapping: true,
    indentAuto: true,
    autoCloseBrackets: true,
    tabMode: "shift",
    autoRefresh: true
});
editor.setOption("theme", "3024-night");
function getSelectedRange() {
    return {
        from: editor.getCursor(true),
        to: editor.getCursor(false)
    };
}

$("#ide_drag_bar").css("height", drag_bar_height);
$("#ide_drag_bar").css("top", (window.innerHeight - initial_pos_of_ide) + "px");
$("#ide_container").css("top", parseInt($("#ide_drag_bar").css("top")) + drag_bar_height);
editor.setSize("100%", "100%");

$('#ide_drag_bar').draggable({
    containment: [0, 0, 0, window.innerHeight - drag_bar_height * 3],
    drag: function () {
        $("#ide_container").css("top", parseInt($("#ide_drag_bar").css("top")) + drag_bar_height);
        editor.setSize("100%", "100%");
    }
});

$('#ide_drag_bar').click(function () {
    Opal.Object.$run_code();
})

$("body").append("<div id='ruby_console_back'></div>");
$("#ruby_console_back").append("<div id='ruby_console'></div>");
$("body").append("<div id='console_drag_bar'></div>");


$("#console_drag_bar").css("height", drag_bar_height);


$('#console_drag_bar').draggable({
    containment: [0, parseInt($("#ide_drag_bar").css("top")) + drag_bar_height, 0, window.innerHeight - drag_bar_height],
    drag: function () {
        console_height = window.innerHeight - parseInt($("#console_drag_bar").css("top"));
        var console_drag_bar_bottom_pos = (window.innerHeight - parseInt($("#console_drag_bar").css("top")));
        $("#ide_container").css("bottom", console_drag_bar_bottom_pos);
        $("#ruby_console_back").css("top", parseInt($("#console_drag_bar").css("top")) + drag_bar_height / 2);
        editor.setSize("100%", "100%");
    }
});

default_console_height = window.innerHeight - console_height;
$("#console_drag_bar").css("top", default_console_height);
$("#ruby_console_back").css("top", default_console_height + (drag_bar_height / 2));
