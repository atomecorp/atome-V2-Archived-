i=0;
var html = {

    preset: function (param, atome_id,) {

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
                if (!document.getElementById(atome_id)) {
                    $('#html_view').append("<" + param + " id=" + atome_id + " style='border-radius: 100%' class='atomes' ></" + param + ">");
                }
                break;
            case 'video':
                if (!document.getElementById(atome_id)) {
                    // html.getSize(atome_id)

                    // $('#html_view').append("<div id=" + atome_id + " style='width: 300px;height: 300px;' class='atomes'></div>");
                    $('#html_view').append("<div id=" + atome_id + " class='atome'><video controls='' preload='none' poster='' style='width:100%; height:100%'><source id='atome_id' src='./medias/videos/Lion_king.mp4' /></video>");
                    // poster='nice-default.jpg'
                }
                break;
            case 'image':
                if (!document.getElementById(atome_id)) {
                    // html.getSize(atome_id)

                    // $('#html_view').append("<div id=" + atome_id + " style='width: 300px;height: 300px;' class='atomes'></div>");
                    $('#html_view').append("<div id=" + atome_id + " style='background-image: url(./medias/images/atome.svg);width: 300px;height:300px;' class='atomes'></div>");

                }

                break;
            default:
        }



    },

    parse_filter: function (atome_id, filterToRemove) {
        let filter_list = ["blur", "brightness", "contrast", "drop-shadow", "grayscale", "hue-rotate", "invert", "opacity", "saturate", "sepia", "url"];
        object = $('#' + atome_id)
        filters_set = object.css("filter");

        filter_list.forEach(function (filter) {
            var re = new RegExp(filter, 'g');
            filters_set = filters_set.replace(re, "***" + filter);
        });
        filters_set = filters_set.split("***")
        filter_kept = [];
        filters_set.forEach(function (fx) {
            if (!fx.startsWith(filterToRemove) && !fx.startsWith("non")) {
                filter_kept.push(fx);
            }
        });

        filter_kept = filter_kept.join(' ');
        // Opal.Object.$puts(filter_kept);
        return filter_kept;
    },

    getMedia: function (value, atome_id) {
        content = Opal.Object.$grab(atome_id).$content();
        var image = './medias/images/' + content + '.png';
        var img = new Image();
        img.onload = function () {
            var height = this.height;
            var width = this.width;
            $('#' + atome_id).css("width", width);
            $('#' + atome_id).css("height", height);

            // Opal.Object.$opal_setter(atome_id, "width", width);
            // Opal.Object.$opal_setter(atome_id, "height", height);
        };
        img.src = image;
    },

    content: function (value, atome_id, add) {

        var objectType = Opal.Object.$grab(atome_id).$type();

        if (objectType == "text") {

            document.getElementById(atome_id).innerText = value;

        } else {
            $('#' + atome_id).css("background-image", "url(./medias/images/" + value + ".png)");
            // html.getMedia(value, atome_id, "png");
        }
    },

    width: function (value, atome_id, add) {

        // Opal.Object.$clear();
        // Opal.Object.$puts(i);
        i++;
        if (Opal.Object.$grab(atome_id).$type() == "text") {
            document.getElementById(atome_id).style.fontSize = value + "px";
        } else if (Opal.Object.$grab(atome_id).$type() == "image") {
            html.getMedia("width", atome_id);
        } else {
            document.getElementById(atome_id).style.width = value + "px";
        }


    },

    height: function (value, atome_id) {


        if (Opal.Object.$grab(atome_id).$type() == "image") {
            html.getMedia("height", atome_id);
        } else {
            document.getElementById(atome_id).style.height = value + "px";
        }
    },

    color: function (value, atome_id) {
        if (value == 0) {
            value = "transparent";
        }
        value = value.split(",");
        if (value.length > 1) {
            //   console.log("gradient!!! here yes!!!!!");
        }
        if (Opal.Object.$grab(atome_id).$type() == "text") {
            document.getElementById(atome_id).style.color = value;
        } else if (Opal.Object.$grab(atome_id).$type() == "shape") {
            document.getElementById(atome_id).style.backgroundColor = value;

        } else if (Opal.Object.$grab(atome_id).$type() == "image") {
            document.getElementById(atome_id).style.backgroundColor = "transparent";
        }

    },

    x: function (value, atome_id) {
        var x_position = document.getElementById(atome_id);
        x_position.style.left = value + 'px';
    },

    y: function (value, atome_id) {
        var y_position = document.getElementById(atome_id);
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
        document.getElementById(atome_id).style.borderRadius = value + "px";
    },

    blur: function (value, atome_id, add) {

        // var object = $("#" + atome_id);
        // filter_set = html.parse_filter(atome_id, "blur");
        // document.getElementById(atome_id).style.filter = filter_set + " blur(" + value + "px)";
        if (value == 0) {//we delete the shadow!
            document.getElementById(atome_id).style.filter = " blur(0px)";
            }
        else{

            // if (add == true) {

            document.getElementById(atome_id).style.filter = " blur(" + value + "px)";
            // } else {
            //     document.getElementById(atome_id).style.filter = " blur(" + value + "px)";
            //
            // }
        }
    },

    size: function (value, atome_id) {

        if (Opal.Object.$grab(atome_id).$type() == "text") {
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

    delete: function (value, atome_id) {
        $("#" + atome_id).remove();
    },

    shadow: function (value, atome_id, add) {

        if (value == 0) {//we delete the shadow!
            if (Opal.Object.$grab(atome_id).$type() == "text") {
                document.getElementById(atome_id).style.textShadow = "0px 0px 0px transparent";
            } else if (Opal.Object.$grab(atome_id).$type() == "image") {
                document.getElementById(atome_id).style.filter = "drop-shadow(0 0 0 transparent);";
            } else {
                document.getElementById(atome_id).style.boxShadow = "0px 0px 0px transparent";
            }
        } else {//we set the shadow!
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


            if (add == true) {
                if (Opal.Object.$grab(atome_id).$type() == "text") {
                    document.getElementById(atome_id).style.textShadow = document.getElementById(atome_id).style.textShadow + "," + color + " " + x + 'px ' + y + 'px ' + blur + "px";
                } else if (Opal.Object.$grab(atome_id).$type() == "image") {
                    document.getElementById(atome_id).style.filter = document.getElementById(atome_id).style.filter + " drop-shadow(" + x + "px " + y + "px " + blur + "px " + color + ")";
                } else {
                    document.getElementById(atome_id).style.boxShadow = document.getElementById(atome_id).style.boxShadow + "," + x + 'px ' + y + 'px ' + blur + 'px ' + thickness + 'px ' + color + " " + invert;
                }
            } else {
                if (Opal.Object.$grab(atome_id).$type() == "text") {
                    document.getElementById(atome_id).style.textShadow = color + " " + x + 'px ' + y + 'px ' + blur + 'px ';
                } else if (Opal.Object.$grab(atome_id).$type() == "image") {
                    // todo : temporary patch all fliter accumaulate we must remove all drop shadow while kkep all other effect then apply the new shadow
                    // filter_set = html.parse_filter(atome_id, "drop-shadow");
                    //document.getElementById(atome_id).style.filter = filter_set+" drop-shadow(" + x + "px " + y + "px " + blur + "px " + color + ")";
                    document.getElementById(atome_id).style.filter = " drop-shadow(" + x + "px " + y + "px " + blur + "px " + color + ")";
                } else {
                    document.getElementById(atome_id).style.boxShadow = x + 'px ' + y + 'px ' + blur + 'px ' + thickness + 'px ' + color + " " + invert;
                }

            }
        }


    },

    border: function (value, atome_id) {
        if (value == 0) {
            document.getElementById(atome_id).style.border = "0px solid transparent";
        } else {
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

        }
    },

    /////////////// events
    key: function (value, atome_id) {
        alert("we have to create the proc when key press")
        $("#" + atome_id).keyup(function () {
            Opal.Object.$trig(atome_id);
        });
    },
/// function for bi directional code when dragging object
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

        document.getElementById(atome_id).style.pointerEvents = "auto";
        $("#" + atome_id).keyup(function () {
            var id = Opal.Object.$grab(atome_id).$id();
            var text_found = document.getElementById(atome_id).innerText;
            content_property_declaration_position = html.find_property_declaration_in_ide(text_found, "content", id);
            html.insert_in_ide(text_found, "content", content_property_declaration_position, id);
        });
    },

    touch: function (value, atome_id) {
        $("#" + atome_id).unbind("click");
        document.getElementById(atome_id).style.pointerEvents = "auto";
        $("#" + atome_id).on("click", function (e) {
            Opal.Object.$trig(atome_id);

        });
    },

    draggable: function (value, atome_id) {
        var id = Opal.Object.$grab(atome_id).$id();
        if (value == "true") {
            document.getElementById(atome_id).style.pointerEvents = "auto";
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
                    Opal.Object.$clear();
                    Opal.Object.$puts(x_position);
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
            document.getElementById(atome_id).style.pointerEvents = "none";
            $("#" + atome_id + "").draggable('disable');
        }
    },

    drag: function (value, atome_id) {
        var id = Opal.Object.$grab(atome_id).$id();
        // if (value == "true") {
        document.getElementById(atome_id).style.pointerEvents = "auto";
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
var motion = {
    animate: function (value, atome_id) {
        var start = value['$[]']("start");
        var end = value['$[]']("end");
        var duration = value['$[]']("duration");
        var curve = value['$[]']("curve");
        var property = value['$[]']("property");
        var finished = value['$[]']("finished");
        var loop = value['$[]']("loop");


        var a_start = {};
        var a_end = {};
        var a_duration = {};
        var a_curve = {};
        var a_property = {};
        var a_finished = {};


        if (start == "") {
            start = 0;
        }
        if (end == "") {
            end = 200;
        }

        if (duration == "") {
            duration = 2000;
        }
        if (property == "") {
            property = "x";
        }

        if (curve == "") {
            curve = "easeOutBounce";
        }

        if (finished == "") {
            finished = "";
        }
        if (loop == "") {
            loop = 1;
        }
        var objectType = Opal.Object.$grab(atome_id).$type();

        if (typeof (start) == "object") {
            start.$keys().forEach((item) => {
                key = item;
                val = start['$[]'](key);
                if (key == "background" && objectType == "text") {
                    key = "color";
                }
                a_start[key] = val;

            });
        } else {

            a_start[property] = start;
        }
        var objectType = Opal.Object.$grab(atome_id).$type();

        if (typeof (end) == "object") {
            end.$keys().forEach((item) => {
                key = item;
                val = end['$[]'](key);
                if (key == "background" && objectType == "text") {
                    key = "color";
                }
                a_end[key] = val;

            });
        } else {
            a_end[property] = end;

        }

        a_duration[property] = duration;
        a_curve[property] = curve;
        a_property[property] = property;
        a_finished[property] = finished;
//////////////////////// popmotion
        var {easing, tween, styler} = window.popmotion;

        var divStyler = styler(document.querySelector('#' + atome_id));
        tween({
            from: a_start,
            to: a_end,
            duration: duration,
            ease: easing[curve],
            flip: loop,
        }).start(divStyler.set);


    },

}