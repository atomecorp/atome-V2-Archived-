//
// /////// Zimjs init
//
// //////////////////// code to allow  adding new methods to zim classes
// zim_lib = function () {
//
//     function extend_obj(obj_to_extend, method_name, function_to_call) {
//         if (typeof (obj_to_extend) == "string") {
//             add_method = obj_to_extend + ".prototype." + method_name + " = function (" + method_name + "){" + function_to_call + "(this," + method_name + ");}";
//             new Function(add_method)();
//         } else {
//             obj_to_extend.forEach(function (obj_type) {
//                 add_method = obj_to_extend + ".prototype." + method_name + " = function (" + method_name + "){" + function_to_call + "(this," + method_name + ");}";
//                 new Function(add_method)();
//             });
//         }
//     }
//
//     ////////////////////  zim object  use extend_obj object
//     function set_id_method(obj, id) {
//         obj.id = id;
//         if (myIDS.indexOf(id) == -1) {
//             id_position = myIDS.length;
//             myIDS[id_position] = id;
//             myObjects[id_position] = obj;
//         } else {
//             id_position = myIDS.indexOf(id);
//             myObjects[id_position] = obj;
//         }
//         ;
//     };
//     extend_obj("Container", "set_id", "zim_lib.set_id_method");
//
//     //////////////////// add  method dynamically
//     function set_color_method(obj, color) {
//         obj.getChildAt(0).color = color;
//         zim_lib.app.stage.update();
//     }
//
//     extend_obj("Container", "color", "zim_lib.set_color_method");
//
//
//     function set_change_method(obj, change) {
//         zim_lib.app.stage.update();
//     }
//
//     function set_text_method(obj, text) {
//         obj.getChildAt(0).text = text;
//         zim_lib.app.stage.update();
//     }
//     extend_obj("Container", "text", "zim_lib.set_text_method");
//     /////////////////// init Zim canvas ////////////////
//     wd = parseInt(window.innerWidth);
//     hg = parseInt(window.innerHeight);
//     var scaling = "full";
//     var width = window.innerWidth;
//     var height = window.innerHeight;
//     var color = "rgba(38, 38, 38, 1)";
//     var outerColor = "transparent";
//     var app = {};
//     var frame = new Frame(scaling, width, height, color, outerColor);
//     frame.on("ready", function () {
//         //frame.canvas.id = "zim_canvas"; #attention if we change canvas id the canvas can't be resize anymore!!!
//         var stage = app.stage = frame.stage;
//         var stageW = frame.width;
//         var stageH = frame.height;
//         stage.update();
//     });
//     props_to_expose = {app, set_id_method, grab, set_color_method, set_change_method, set_text_method}
//     var ret = {};
//     Object.keys(props_to_expose).forEach(function (key) {
//         ret[key] = props_to_expose[key];
//     });
//     return ret;
//
// }();