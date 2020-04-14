// //console.log("hello");
// // alert('ok!!');
// function htmllizer(functionToCall, val1, val2) {
//     eval(functionToCall+"('"+val1+"','"+val2+"')");
// }
// jQuery.get('app/app.rb', function(data) {
//     // alert(data);
//     Opal.eval(data);
//     //process text file line by line
//     // $('#div').html(data.replace('n',''));
// });
//
//
//
//
//
// var foo = {
//     bar: function (val1, val2) {
//         alert(val1+":"+val2);
//     }
// };
//   // foo.bar("hhh","jjj");
// // Opal.Object.$foo={bar: function(){alert("cool");}};
// //
//
//
//    // Opal.Object.$foo.bar(1, "cool");
// // function verif() {
// // alert("good!!");
// // }
// // foo.bar('poil', 'poilu');
//
//  // foo.bar();
//
//
//
// var myGradesCalculat = (function () {
//     // Keep this variable private inside this closure scope
//     var myGrades = [93, 95, 88, 0, 55, 91];
//     // Expose these functions via an interface while hiding
//     // the implementation of the module within the function() block
//
//     return {
//         average: function() {
//             var total = myGrades.reduce(function(accumulator, item) {
//                 return accumulator + item;
//             }, 0);
//
//             return'Your average grade is ' + total / myGrades.length + '.';
//         },
//
//         failing: function() {
//             var failingGrades = myGrades.filter(function(item) {
//                 return item < 70;
//             });
//
//             return 'You failed ' + failingGrades.length + ' times.';
//         }
//     };
// })();
// function myGradesCalculate(){
// function titi(){
//     alert("goody");
// }
// return titi();
// }
//
// // var toto=function(){
// //     average: function() {
// //
// //         alert("kooly");
// //     }
// //     return average;
// //
// // };
// //
// // toto.average();
//
//
// // myGradesCalculate().titi()
// //  alert(myGradesCalculat.failing()); // 'You failed 2 times.'
// // alert(myGradesCalculat.average()); // 'Your average grade is 70.33333333333333.'
//
// // var foo =function(){
// // function bar(){
// //     alert('goody');
// // }
// // return bar();
// // };
// //
// //
// // toto = function () {
// //
// //     titi= function(){
// //         alert('cool');
// //     };
// //     tutu= function () {
// //         alert("super good");
// //     };
// //     return null;
// // }
//
// // toto().tutu();
//
//
//
//
// // zim_lib = function () {
// //     function extend_obj(obj_to_extend, method_name, function_to_call) {
// //         if (typeof (obj_to_extend) == "string") {
// //             add_method = obj_to_extend + ".prototype." + method_name + " = function (" + method_name + "){" + function_to_call + "(this," + method_name + ");}";
// //             new Function(add_method)();
// //         } else {
// //             obj_to_extend.forEach(function (obj_type) {
// //                 add_method = obj_to_extend + ".prototype." + method_name + " = function (" + method_name + "){" + function_to_call + "(this," + method_name + ");}";
// //                 new Function(add_method)();
// //             });
// //         }
// //     }
// //
// //     ////////////////////  zim object  use extend_obj object
// //     function set_id_method() {
// //         alert("cool");
// //         // obj.id = id;
// //         // if (myIDS.indexOf(id) == -1) {
// //         //     id_position = myIDS.length;
// //         //     myIDS[id_position] = id;
// //         //     myObjects[id_position] = obj;
// //         // } else {
// //         //     id_position = myIDS.indexOf(id);
// //         //     myObjects[id_position] = obj;
// //         // }
// //         // ;
// //     };
// //     extend_obj("Container", "set_id", "zim_lib.set_id_method");
// //
// //     //////////////////// add  method dynamically
// //     function set_color_method(obj, color) {
// //         obj.getChildAt(0).color = color;
// //         zim_lib.app.stage.update();
// //     }
// //
// //     extend_obj("Container", "color", "zim_lib.set_color_method");
// //
// //
// //     function set_change_method(obj, change) {
// //         zim_lib.app.stage.update();
// //     }
// //
// //     function set_text_method(obj, text) {
// //         obj.getChildAt(0).text = text;
// //         zim_lib.app.stage.update();
// //     }
// //     extend_obj("Container", "text", "zim_lib.set_text_method");
// //     /////////////////// init Zim canvas ////////////////
// //     wd = parseInt(window.innerWidth);
// //     hg = parseInt(window.innerHeight);
// //     var scaling = "full";
// //     var width = window.innerWidth;
// //     var height = window.innerHeight;
// //     var color = "rgba(38, 38, 38, 1)";
// //     var outerColor = "transparent";
// //     var app = {};
// //     var frame = new Frame(scaling, width, height, color, outerColor);
// //     frame.on("ready", function () {
// //         //frame.canvas.id = "zim_canvas"; #attention if we change canvas id the canvas can't be resize anymore!!!
// //         var stage = app.stage = frame.stage;
// //         var stageW = frame.width;
// //         var stageH = frame.height;
// //         stage.update();
// //     });
// //     props_to_expose = {app, set_id_method, grab, set_color_method, set_change_method, set_text_method}
// //     var ret = {};
// //     Object.keys(props_to_expose).forEach(function (key) {
// //         ret[key] = props_to_expose[key];
// //     });
// //     return ret;
// //
// // }();
//
// // zim_lib.set_id_method("vool");
