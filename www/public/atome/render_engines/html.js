var html = {
    preset: function (param, atome_id) {
        switch (param) {
            case 'box':
                if (!document.getElementById(atome_id)) {
                    $('#html_view').append("<" + param + " id=" + atome_id + " style='width:100px;height:100px;position:absolute;color:red;background-color:orange;display:block'></" + param + ">");
                }
                break;
            case 'text':
                if (!document.getElementById(atome_id)) {
                    $('#html_view').append("<label contenteditable=\"true\" id=" + atome_id + " style='font-size:37px;outline: none; -webkit-user-select: text;-khtml-user-select: text;-moz-user-select: text;-o-user-select: text; user-select: text;position:absolute;color:red;display:block'>text to replace</label>");

                }
            // <label contenteditable="true">Exemple</label>
                console.log('text is div + text');
                break;
            case 'circle':
                console.log('circle is div');
                // expected output: "Mangoes and papayas are $2.79 a pound."
                break;
            default:
                console.log('Sorry, we are out of ' + expr + '.');
        }

    },

    color: function (color, atome_id) {
        document.getElementById(atome_id).style.backgroundColor = color;

    },

    content: function (value, atome_id) {
        document.getElementById(atome_id).innerText = value ;

    },


    x: function (value, atome_id) {
        var x_position = document.getElementById(atome_id);
        x_position.style.position = "absolute";
        x_position.style.left = value + 'px';
    },

    y: function (value, atome_id) {
        var y_position = document.getElementById(atome_id);
        y_position.style.position = "absolute";
        y_position.style.top = value + 'px';
    },

    z: function (value, atome_id) {
        document.getElementById(atome_id).style.transform = "translateZ(${value + 'px'})";
    },

    width: function (value, atome_id) {
        document.getElementById(atome_id).style.width = value + "px";

    },


    height: function (value, atome_id) {
        document.getElementById(atome_id).style.height = value + "px";
    },
    type: function (value, atome_id) {
        // document.getElementById(atome_id).style.height = value;
    },
    shadow: function (shadow_x, shadow_y, blur_radius, spread_radius, atome_id, color) {
        shadow_x = 0;
        shadow_y = 0;
        blur_radius = 7;
        spread_radius = 2;
        document.getElementById(atome_id).style.boxShadow = shadow_x + 'px ' + shadow_y + 'px ' + blur_radius + 'px ' + spread_radius + 'px ' + color;

    },

    border: function (width_border, border_style, color, atome_id) {
        width_border = 2;
        border_style = ['none', 'dotted', 'inset', 'solid'];
        document.getElementById(atome_id).style.border = width_border + 'px ' + border_style + ' ' + color;
    },
    touch: function (value, atome_id) {
        $("#" + atome_id).unbind("click");
        $("#" + atome_id).click(function () {
            Opal.Object.$trig(atome_id);
        });
    },

    draggable: function (value, atome_id, id) {

        if (value == "true") {
            $("#" + atome_id).draggable({
                start: function () {
                    search_x = "get(\"" + id + "\").x";
                    search_y = "get(\"" + id + "\").y";
                    code = editor.getDoc().getValue("\n");
// we add a line if the last line is not empty
                    code_lines = code.split("\n");
                    code_length = code_lines.length;
                    last_line = code_lines[code_length - 1];
                    x_def_pos = Opal.Object.$find(code, search_x);
                    Opal.Object.$replace("", code_length);
                    y_def_pos = Opal.Object.$find(code, search_y);
                    if (x_def_pos == y_def_pos) {
                        y_def_pos = y_def_pos + 1;
                    }
                },
                drag: function () {
                    Opal.Object.$replace("get(\"" + id + "\").x(" + parseInt(document.getElementById(atome_id).style.left) + ")", x_def_pos);
                    Opal.Object.$replace("get(\"" + id + "\").y(" + parseInt(document.getElementById(atome_id).style.top) + ")", y_def_pos);
//Opal.Object.$grab(#{id}).x(x_def_pos);
//Opal.Object.$grab(#{id}).y(y_def_pos);
                },
                stop: function () {
                    Opal.Object.$replace("get(\"" + id + "\").x(" + parseInt(document.getElementById(atome_id).style.left) + ")", x_def_pos);
                    Opal.Object.$replace("get(\"" + id + "\").y(" + parseInt(document.getElementById(atome_id).style.top) + ")", y_def_pos);
                }
            });

            $("#" + atome_id + "").draggable("enable");
        } else {
            $("#" + atome_id + "").draggable('disable');
        }
    }

};
