// var example = [["atome_id", "70339791460800"], ["renderer", "html"], ["color", "blue"], ["type", "shape"], ["preset", "box"], ["x", 70], ["y", 40], ["z", 50], ["width", 100], ["height", 100]];
//
// function removeFromArray(array,itemsListToRemove){
//     itemsListToRemove.forEach(function(item, index){
//         array.splice(item-index, 1);
//     });
// }
//
// var html = {
//     color: function (value, atome_id) {
//
//     },
//
//     x: function (value, atome_id) {
//
//     },
//
//     y: function (value, atome_id) {
//
//     },
//
//     z: function (value, atome_id) {
//
//     },
//
//     width: function (value, atome_id) {
//
//     },
//
//     height: function (value, atome_id) {
//
//     },
//
//     constructor: function (type, preset, atome_id, atome) {
//
//         //html['receiver'](example);
//         atome.forEach(function (properties) {
//             //html[properties[0]](properties[1], atome_id);
//
//             html['color']('yellow', atome_id);
//         });
//
//     },
//
//     receiver: function (atome) {
//
//         var removeElements = []
//
//         atome.forEach(function (properties, index) {
//             if (properties[0] == 'renderer') {
//                 removeElements.push(index);
//                 //atome.splice(index, 1);
//             } else if (properties[0] == 'atome_id') {
//                 removeElements.push(index);
//                 var atome_id = properties[1];
//                 //atome.splice(index, 1);
//             } else if (properties[0] == 'type') {
//                 removeElements.push(index);
//                 var type = properties[1];
//                 //atome.splice(index, 1);
//             } else if (properties[0] == 'preset') {
//                 removeElements.push(index);
//                 var preset = properties[1];
//                 //atome.splice(index, 1);
//             }
//         });
//         removeFromArray(atome,removeElements);
//         // alert(atome);
// //         alert(atome);
//         //html['constructor'](type,preset,atome_id,atome);
//     }
// };
//
//
// html['receiver'](example);
//
//
// // function opal_jquery(param,id) {
// //     if (!document.getElementById(id)) {
// //         $('#html_view').append("<"+param+" id="+id+">qsdfdgsdfgsdfgsdf</"+param+">");
// //         // document.getElementById('html_view').innerHTML="";
// //         // var atome = document.createElement(param);
// //         // atome.id = id;
// //         // atome.style.backgroundColor = "red";
// //         // atome.style.width = "100px";
// //         // atome.style.height = "100px";
// //         // atome.style.zIndex = "5000";
// //         // atome.style.position = "absolute";
// //         // atome.style.display = "block";
// //         // document.getElementById('html_view').appendChild(atome);
// //     }
// // }

function iMi(){
    alert('goodyy!!');
}
// iMi();