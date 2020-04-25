var html = {
    preset: function (param, atome_id) {
        switch (param) {
            case 'box':
                if (!document.getElementById(atome_id)) {
                    $('#html_view').append("<" + param + " id=" + atome_id + " class='atomes'></" + param + ">");
                }
                break;
            case 'text':
                if (!document.getElementById(atome_id)) {
                    $('#html_view').append("<label contenteditable=\"true\" id=" + atome_id + " class='atomes'>text to replace</label>");

                }
                break;
            case 'circle':
                $('#html_view').append("<" + param + " id=" + atome_id + " style='border-radius: 100%' class='atomes' ></" + param + ">");
                break;
            default:
        }

    },

    color: function (value, atome_id) {
        value = value.split(",");
        if (value.length > 1) {
         //   console.log("gradient!!! here yes!!!!!");
        }
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
        document.getElementById(atome_id).style.transform = "rotate(" + value + "deg)";
    },

    transparency: function (value, atome_id) {
        document.getElementById(atome_id).style.opacity = value;
    },

    smooth: function (value, atome_id) {
        document.getElementById(atome_id).style.borderRadius = value+"px";
    },

    blur: function (value, atome_id) {
        document.getElementById(atome_id).style.filter = "blur(" + value + "px)";
    },

    width: function (value, atome_id) {

        var objectType = Opal.Object.$grab(atome_id).$type();
        if (objectType == "text") {
            document.getElementById(atome_id).style.fontSize = value + "px";
        } else {
            document.getElementById(atome_id).style.width = value + "px";
        }


    },

    height: function (value, atome_id) {
        document.getElementById(atome_id).style.height = value + "px";
    },

    size: function (value, atome_id) {

        var objectType = Opal.Object.$grab(atome_id).$type();
        if (objectType == "text") {
            document.getElementById(atome_id).style.fontSize = value + "px";
        } else {
            alert("create alogo here to find if width or height is bigger the apply settings");
            // document.getElementById(atome_id).style.backgroundColor = value;
        }
    },

    type: function (value, atome_id) {
    },

    name: function (value, atome_id) {
    },

    shadow: function (value, atome_id, add) {
        var x = Opal.Object.$get_hash_value(value, "x");
        var y = Opal.Object.$get_hash_value(value, "y");
        var blur = Opal.Object.$get_hash_value(value, "blur");
        var thickness = Opal.Object.$get_hash_value(value, "thickness");
        var color = Opal.Object.$get_hash_value(value, "color");
        var invert = Opal.Object.$get_hash_value(value, "invert");
        if (x == "") {
            x = 0;
        }
        if (y == "") {
            y = 0;
        }
        if (blur == "") {
            blur = 5;
        }
        if (thickness == "") {
            thickness = 3;
        }
        if (color == "") {
            color = "black";
        }

        if (invert == "") {
            invert = "";
        }
        if (invert == "true") {
            invert = "inset";
        }

        var objectType = Opal.Object.$grab(atome_id).$type();

        if (add==true){
            if (objectType == "text") {
                document.getElementById(atome_id).style.textShadow = document.getElementById(atome_id).style.textShadow +","+color + " " +x + 'px ' + y + 'px ' + blur + 'px ' ;
            } else {
                document.getElementById(atome_id).style.boxShadow = document.getElementById(atome_id).style.boxShadow+","+x + 'px ' + y + 'px ' + blur + 'px ' + thickness + 'px ' + color + " " + invert;
            }
        }
        else{
            if (objectType == "text") {
                document.getElementById(atome_id).style.textShadow = color + " " +x + 'px ' + y + 'px ' + blur + 'px ' ;
            } else {
                document.getElementById(atome_id).style.boxShadow = x + 'px ' + y + 'px ' + blur + 'px ' + thickness + 'px ' + color + " " + invert;
            }

        }



    },

    border: function (value, atome_id) {
        // value = value.split(",");
        // border_hash = Opal.hash(...value);
        color = Opal.Object.$get_hash_value(value, "color");
        thickness = Opal.Object.$get_hash_value(value, "thickness");
        pattern = Opal.Object.$get_hash_value(value, "pattern");
        if (color == "") {
            color = "black";
        }
        if (thickness == "") {
            thickness = "3";
        }
        if (pattern == "") {
            pattern = "solid";
        }
        document.getElementById(atome_id).style.border = thickness + 'px ' + pattern + ' ' + color;
    },

    /////////////// events
    key: function (value, atome_id) {
        alert("we have to create the proc")
        $("#" + atome_id).keyup(function () {
            Opal.Object.$trig(atome_id);
        });
    },

    find_property_declaration_in_ide: function (value, property, id) {
        // todo : Attention bug if many empty line at the end of the IDE only the y is written in IDE
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

       document.getElementById(atome_id).style.pointerEvents="auto";
        $("#" + atome_id).keyup(function () {
            var id = Opal.Object.$grab(atome_id).$id();
            var text_found = document.getElementById(atome_id).innerText;
            content_property_declaration_position = html.find_property_declaration_in_ide(text_found, "content", id);
            html.insert_in_ide(text_found, "content", content_property_declaration_position, id);
        });
    },

    touch: function (value, atome_id) {
        $("#" + atome_id).unbind("click");
        document.getElementById(atome_id).style.pointerEvents="auto";
        $("#" + atome_id).on( "click", function(e)  {
            Opal.Object.$trig(atome_id);

        });
    },

    draggable: function (value, atome_id) {
        var id = Opal.Object.$grab(atome_id).$id();
        if (value == "true") {
            document.getElementById(atome_id).style.pointerEvents="auto";
            $("#" + atome_id).draggable({
                start: function () {
                    // todo : Attention bug if many empty line at the end of the IDE only the y is written in IDE
                    x_position = parseInt(document.getElementById(atome_id).style.left);
                    y_position = parseInt(document.getElementById(atome_id).style.top);
                    x_property_declaration_position = html.find_property_declaration_in_ide(x_position, "x", id);
                    y_property_declaration_position = html.find_property_declaration_in_ide(y_position, "y", id);

                    html.insert_in_ide(x_position, "x", x_property_declaration_position, id);
                    html.insert_in_ide(y_position, "y", y_property_declaration_position, id);

                    // Opal.Object.$opal_setter(atome_id, "x", x_position);
                    // Opal.Object.$opal_setter(atome_id, "y", y_position);
                },
                drag: function () {
                     x_position = parseInt(document.getElementById(atome_id).style.left);
                     y_position = parseInt(document.getElementById(atome_id).style.top);
                    html.insert_in_ide(x_position, "x", x_property_declaration_position, id);
                    html.insert_in_ide(y_position, "y", y_property_declaration_position, id);
                    //Important $opal_setter may trig an infinite loop tha'ts why it's so slow
                    // Opal.Object.$opal_setter(atome_id, "x", x_position);
                    // Opal.Object.$opal_setter(atome_id, "y", y_position);

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
            document.getElementById(atome_id).style.pointerEvents="none";
            $("#" + atome_id + "").draggable('disable');
        }
    },

    drag: function (value, atome_id) {
        var id = Opal.Object.$grab(atome_id).$id();
        // if (value == "true") {
        document.getElementById(atome_id).style.pointerEvents="auto";
        $("#" + atome_id).draggable({
            start: function () {

            },
            drag: function () {
                x_position = parseInt(document.getElementById(atome_id).style.left);
                y_position = parseInt(document.getElementById(atome_id).style.top);
                // html.insert_in_ide(x_position, "x", x_property_declaration_position, id);
                // html.insert_in_ide(y_position, "y", y_property_declaration_position, id);
                //Important $opal_setter may trig an infinte loop tha'ts why it's so slow
                // Opal.Object.$opal_setter(atome_id, "x", x_position);
                // Opal.Object.$opal_setter(atome_id, "y", y_position);
                // x_position = parseInt(document.getElementById(atome_id).style.left);
                // y_position = parseInt(document.getElementById(atome_id).style.top);
                // Opal.Object.$drag(atome_id, [x_position, y_position]);

                // return x_position;
                // Opal.Object.$grab(atome_id).$drag(x_position);
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
        alert(value);
        // t=text()
        // t.child({width: 200})
    },


};
