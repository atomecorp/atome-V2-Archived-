//console.log("hello");
// alert('ok!!');

jQuery.get('app/app.rb', function(data) {
    // alert(data);
    Opal.eval(data);
    //process text file line by line
    // $('#div').html(data.replace('n',''));
});



var foo = {
    bar: function (val1, val2) {
        alert(val1+":"+val2);
    },
};
 // foo.bar("hhh","jjj");
// Opal.Object.$foo={bar: function(){alert("cool");}}

   // Opal.Object.$foo.bar(1, "cool");
