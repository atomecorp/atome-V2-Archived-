document.addEventListener('deviceready', onDeviceReady, false);
// Opal.require('opal');
// Opal.require('native');
// Opal.require('opal-parser');
function onDeviceReady() {
    // const atomic_mode="atome";
    var hashed_id;
    Fingerprint2.get(function (components) {
        hashed_id = Fingerprint2.x64hash128(components.map(function (pair) { return pair.value }).join(), 31);
    });
    //$.ajax({url: 'atome/atome.js', dataType: 'script', success: "success"});
    // Opal.require('opal');
    // Opal.require('native');
    // Opal.require('opal-parser');
    // $.ajax({url: 'atome/ruby/apis.rb', dataType: 'text', success: function (data) {Opal.eval(data)}});
    // $.ajax({url: 'atome/ruby/render_engines/transpile_eDen_to_js.rb', dataType: 'text', success: function (data) {Opal.eval(data);}});
    // $.ajax({url: 'atome/ruby/render_engines/transpile_fabric_to_js.rb', dataType: 'text', success: function (data) {Opal.eval(data);}});
    // $.ajax({url: 'atome/ruby/render_engines/transpile_headless_to_js.rb', dataType: 'text', success: function (data) {Opal.eval(data);}});
    // $.ajax({url: 'atome/ruby/render_engines/transpile_html_to_js.rb', dataType: 'text', success: function (data) {Opal.eval(data);}});
    // $.ajax({url: 'atome/ruby/render_engines/transpile_konva_to_js.rb', dataType: 'text', success: function (data) {Opal.eval(data);}});
    // $.ajax({url: 'atome/ruby/render_engines/transpile_three_to_js.rb', dataType: 'text', success: function (data) {Opal.eval(data);}});
    // $.ajax({url: 'atome/ruby/render_engines/transpile_urho3D_to_js.rb', dataType: 'text', success: function (data) {Opal.eval(data);}});
    // $.ajax({url: 'atome/ruby/render_engines/transpile_vocal_to_js.rb', dataType: 'text', success: function (data) {Opal.eval(data);}});
    // $.ajax({url: 'atome/ruby/render_engines/transpile_zim_to_js.rb', dataType: 'text', success: function (data) {Opal.eval(data);}});
        $(document).ready(function () {

            // user app
            // $.get( "atome/atome.js" );
            // $.get('app/app.rb')
            //     .done(function (data) {
            //         Opal.eval(data);
            //     }).fail(function () {
            //     // not exists code
            // });
            // if (typeof atomic_mode !== 'undefined'){
            //     // atome proprietary methods
            //     $.get('atome/core/atome.rb')
            //         .done(function (data) {
            //             Opal.eval(data);
            //         }).fail(function () {
            //         // not exists code
            //     });
            //     // atome object & apis
            //     $.get('atome/core/neutron.rb')
            //         .done(function (data) {
            //             Opal.eval(data);
            //         }).fail(function () {
            //         // not exists code
            //     });
            // }
           // brython({debug: 0});
            //now we clear the console and add a few methods to obtain a bit better ruby debugging
            // console.clear();
            console.log = function(message) {
              Opal.Object.$log(message);
            };
            console.info = function(message) {
                Opal.Object.$log("info : "+message);
            };
            console.warn = function(message) {
                Opal.Object.$log("warn : "+message);
            };
            console.error = function(message) {
                Opal.Object.$log("error : "+message);
            };
        });
}
