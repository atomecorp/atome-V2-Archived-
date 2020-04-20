var html = {
    preset: function (param, atome_id) {
        switch (param) {
            case 'box':
                if (!document.getElementById(atome_id)) {
                    $('#html_view').append("<" + param + " id=" + atome_id + " style='display:block; overflow:visible'></" + param + ">");
                }
                break;
            case 'text':
                if (!document.getElementById(atome_id)) {
                    $('#html_view').append("<label contenteditable=\"true\" id=" + atome_id + " style='overflow:visible;outline: none; -webkit-user-select: text;-khtml-user-select: text;-moz-user-select: text;-o-user-select: text; user-select: text;position:absolute;display:block'>text to replace</label>");

                }
                // <label contenteditable="true">Exemple</label>
                //     console.log('text is div + text');
                break;
            case 'circle':
                $('#html_view').append("<" + param + " id=" + atome_id + " style='display:block; border-radius: 100%;overflow:visible'></" + param + ">");
                // console.log('circle is div');
                break;
            default:
            //console.log('Sorry, we are out of ' + expr + '.');
        }

    },

    color: function (value, atome_id) {
        var objectType = Opal.Object.$grab(atome_id).$type();
        if (objectType == "text") {
            document.getElementById(atome_id).style.color = value;
        } else {
            document.getElementById(atome_id).style.backgroundColor = value;
        }
    },

    content: function (value, atome_id) {
        var objectType = Opal.Object.$grab(atome_id).$type();
        if (objectType == "text") {
            document.getElementById(atome_id).innerText = value;

        } else {
            document.getElementById(atome_id).innerText = value;
          alert('change function');
        }
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
        document.getElementById(atome_id).style.zIndex = value;
    },
    rotate: function (value, atome_id) {
        document.getElementById(atome_id).style.transform = "rotate("+value+"deg)";
    },
    transparency: function (value, atome_id) {
        document.getElementById(atome_id).style.opacity = value;
    },
    blur: function (value, atome_id) {
        document.getElementById(atome_id).style.filter= "blur("+value+"px)";
    },

    width: function (value, atome_id) {
        document.getElementById(atome_id).style.width = value + "px";

    },

    height: function (value, atome_id) {
        document.getElementById(atome_id).style.height = value + "px";
    },

    size: function (value, atome_id) {

        var objectType = Opal.Object.$grab(atome_id).$type();
        if (objectType == "text") {
            document.getElementById(atome_id).style.fontSize = value+"px";
        } else {
            alert("create alogo here to find if width or height is bigger the apply settings");
            // document.getElementById(atome_id).style.backgroundColor = value;
        }
    },


    type: function (value, atome_id) {

        // console.log(value);
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

    /////////////// events
    key: function (value, atome_id) {
        alert("we have to create the proc")
        $("#" + atome_id).keyup(function () {
            Opal.Object.$trig(atome_id);
        });
    },

    find_property_declaration_in_ide: function (value, property, id) {
        search_content = "get(\"" + id + "\")." + property;
        code = editor.getDoc().getValue("\n");
        code_lines = code.split("\n");
        nb_of_lines = code_lines.length;
        var lastItem = code_lines.pop();
        // if the last line is fill then we must add a new line
        if (lastItem != "") {
            Opal.Object.$replace("", nb_of_lines);
        }
        found_pos = Opal.Object.$find(code, search_content);
        return found_pos;
    },
    insert_in_ide: function (value, property, find_property_declaration_position, id) {
        Opal.Object.$replace("get(\"" + id + "\")." + property + "(\"" + value + "\")", find_property_declaration_position);
    },


    editable: function (value, atome_id) {

        $("#" + atome_id).keyup(function () {
            var id = Opal.Object.$grab(atome_id).$id();
            var text_found = document.getElementById(atome_id).innerText;
            content_property_declaration_position = html.find_property_declaration_in_ide(text_found, "content", id);
            html.insert_in_ide(text_found, "content", content_property_declaration_position, id);
        });
    },

    touch: function (value, atome_id) {
        $("#" + atome_id).unbind("click");
        $("#" + atome_id).click(function () {
            x_position = parseInt(document.getElementById(atome_id).style.left);
            Opal.Object.$trig(atome_id);
        });
    },

    draggable: function (value, atome_id) {
        var id = Opal.Object.$grab(atome_id).$id();
        if (value == "true") {
            $("#" + atome_id).draggable({
                start: function () {
                    x_position = parseInt(document.getElementById(atome_id).style.left);
                    x_property_declaration_position = html.find_property_declaration_in_ide(x_position, "x", id);
                    html.insert_in_ide(x_position, "x", x_property_declaration_position, id);

                    y_position = parseInt(document.getElementById(atome_id).style.top);
                    y_property_declaration_position = html.find_property_declaration_in_ide(y_position, "y", id);
                    html.insert_in_ide(y_position, "y", y_property_declaration_position, id);
                    Opal.Object.$opal_setter(atome_id, "x", x_position);
                    Opal.Object.$opal_setter(atome_id, "y", y_position);
                },
                drag: function () {
                    x_position = parseInt(document.getElementById(atome_id).style.left);
                    x_property_declaration_position = html.find_property_declaration_in_ide(x_position, "x", id);
                    html.insert_in_ide(x_position, "x", x_property_declaration_position, id);

                    y_position = parseInt(document.getElementById(atome_id).style.top);
                    y_property_declaration_position = html.find_property_declaration_in_ide(y_position, "y", id);
                    html.insert_in_ide(y_position, "y", y_property_declaration_position, id);
                    Opal.Object.$opal_setter(atome_id, "x", x_position);
                    Opal.Object.$opal_setter(atome_id, "y", y_position);

                },
                stop: function () {
                    x_position = parseInt(document.getElementById(atome_id).style.left);
                    y_position = parseInt(document.getElementById(atome_id).style.top);
                    html.insert_in_ide(x_position, "x", x_property_declaration_position, id);
                    html.insert_in_ide(y_position, "y", y_property_declaration_position, id);
                    Opal.Object.$opal_setter(atome_id, "x", x_position);
                    Opal.Object.$opal_setter(atome_id, "y", y_position);
                }
            });

            $("#" + atome_id + "").draggable("enable");
        } else {
            $("#" + atome_id + "").draggable('disable');
        }
    },

    drag: function (value, atome_id) {
        var id = Opal.Object.$grab(atome_id).$id();
        // if (value == "true") {
        $("#" + atome_id).draggable({
            start: function () {

            },
            drag: function () {
                x_position = parseInt(document.getElementById(atome_id).style.left);
                y_position = parseInt(document.getElementById(atome_id).style.top);
                return x_position;
                Opal.Object.$grab(atome_id).$drag(x_position);
            },
            stop: function () {

            }
        });

        // $("#" + atome_id + "").draggable("enable");
        // } else {
        //     $("#" + atome_id + "").draggable('disable');
        // }
    },
    child: function (value, atome_id) {
       //alert(value);
        // t=text()
        // t.child({width: 200})
    },

};
