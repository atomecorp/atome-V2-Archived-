var  html = {
    color: function (color, atome_id) {
        document.getElementById(atome_id).style.color = color;

    },

    x: function (value, atome_id) {
        var x_position = document.getElementById(atome_id);
        x_position.style.position = "absolute";
        x_position.style.left = value +'px';
    },

    y: function (value, atome_id) {
        var y_position = document.getElementById(atome_id);
        y_position.style.position = "absolute";
        y_position.style.top = value +'px';
    },

    z: function (value, atome_id) {
        document.getElementById(atome_id).style.transform = "translateZ(${value + 'px'})";
    },

    width: function (value, atome_id) {
        document.getElementById(atome_id).style.height = value;

    },

    height: function (value, atome_id) {
        document.getElementById(atome_id).style.width = value;
    },

    shadow: function (shadow_x, shadow_y, blur_radius, spread_radius, atome_id, color) {
         shadow_x = 0;
         shadow_y = 0;
         blur_radius = 7;
         spread_radius = 2;
        document.getElementById(atome_id).style.boxShadow = shadow_x + 'px ' +shadow_y + 'px ' + blur_radius + 'px ' + spread_radius + 'px ' +color;

    },

    border: function(width_border, border_style, color,atome_id) {
        width_border = 2;
        border_style = ['none', 'dotted', 'inset', 'solid'];
        document.getElementById(atome_id).style.border = width_border + 'px '+ border_style + ' ' +color;
    }
};


