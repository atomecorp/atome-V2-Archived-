####################################### view generator ##########################

####### zim render engine #############

def zim_clear(option = :view)
  option = option.to_sym
  `
   zim_lib.app.stage.removeAllChildren();
   zim_lib.app.stage.clear();
   zim_lib.app.stage.update();`
end

module Zim_renderer
  @visual_obj_list = []
  @code_footer = ""
  @code_header = ""
  # # code constructor for zim display
  def zim_formated_code
    code = ""
    code = @code_header + "\n" + @visual_obj_list.join("\n") + "\n" + @code_footer
  end

  #######  Zim objects #############
  def zim_constructor(atome_object, atome)
    atome_id = atome.atome_id
    %x{
  var container = new Container();
  container.set_id(#{atome_id});
    if (#{atome_object}=="Shape"){
/// patch de merde pour les shapes (stars)
const colors = [purple, pink, blue, green, yellow, orange, red];
  var atome_object = new Shape(20,20,20,20);
atome_object.graphics.f(shuffle(colors)[0]).dp(0,0,18,6,rand(.5,.8));
atome_object.width=100
atome_object.height=100
atome_object.x=100
atome_object.y=100
/// fin de patch de merde
}else{
  var atome_object = new window[#{atome_object}]();
}

  container.addChild(atome_object);
  // container.drag();
var obj_id;
var x_def_pos;
var y_def_pos;

container.on("mousedown", function(evt) {
obj_id=Opal.Object.$decode(this.id);
// we seek the following sequence position in current script
search_x="get(\""+obj_id+"\").x"
search_y="get(\""+obj_id+"\").y"
code=editor.getDoc().getValue("\n");
x_def_pos=Opal.Object.$find(code,search_x);
// we add a line if the last line is not empty
    code_lines=code.split("\n");
    code_length=code_lines.length;
    last_line=code_lines[code_length-1];
    if (last_line!=""){
        Opal.Object.$replace("" , code_length);
        x_def_pos=code_length
    }
//code=editor.getDoc().getValue("\n");
y_def_pos=Opal.Object.$find(code,search_y);
    });

  container.on("pressmove", function(evt) {
Opal.Object.$replace("get(\""+obj_id+"\").x("+this.x+")"  , x_def_pos);
Opal.Object.$replace("get(\""+obj_id+"\").y("+this.y+")"  , y_def_pos);
    });
container.on("pressup", function(evt) {
//user=Opal.Atome.$user();
filename=Opal.Atome.$project();
content=editor.getDoc().getValue("\n");
//filename=user+"."+project
//alert(filename)
;Opal.Object.$store(filename, content)
  });
 // var line;
//atome_object.on("mousedown", function(evt) {
//   i=Opal.top.$my_meth();
//Opal.BAZ.$release_all
//  Opal.Atome.$verif;
//
//   var cursor = editor.getCursor()
//   line = editor.getLine(cursor.line)
//     });

 //   atome_object.on("pressmove", function(evt) {
 //     pos_x=evt.stageX;
 //     pos_y=evt.stageY;
 //     console.log(line);
 //     var from = {line: 1, ch: 0};
 //     var to = {line: 1};
 //     editor.replaceRange(line+"("+pos_x.toString()+")", from, to);
//});
  container.addTo(zim_lib.app.stage);
  zim_lib.app.stage.update();
     }
  end

  #######  Zim create objects #############
  def zim_gen_obj(type, atome)
    if type.to_sym == :box
      type = :Rectangle
    elsif type.to_sym == :ellipse
      type = :Circle
    elsif type.to_sym == :star
      type = :Shape
    elsif type.to_sym == :shape
      type = :Bloob
    elsif type.to_sym == :text
      type = :Label
    elsif type.to_sym == :eDen
      type = :Label
    elsif type.to_sym == :human
      type = :Label
    end
    type = type.capitalize
    if atome.visible.to_sym == :true
      zim_constructor(type, atome)
    end
  end

  #######  Zim events #############
  def zim_touch *opts, &bloc
    #opts to pass alt touch double touch long , etc...
    if bloc
      `
  	zim_lib.grab(#{self.atome_id}).on("click", function (evt) {#{instance_exec(&bloc)};});
	//zim_lib.grab(#{self.atome_id}).on("click", function (evt) {#{yield};});
  	`
    end
  end

  def zim_drag *opts, &proc
    `
	 zim_lib.grab(#{self.atome_id}).drag({currentTarget:true});
   `
  end

  def zim_change *opts, &proc
    `
	 zim_lib.grab(#{self.atome_id}).change({currentTarget:true});
   `
  end

  #######  zim properties #############

  def zim_gen_prop(properties, atome, opt)
    atome_id = atome.atome_id
    #below patch to allow user to use method with = or without
    exeptions_list = [:color=, :x, :y, :z, :width, :height, :content=]
    if exeptions_list.include? properties.to_sym
      if properties.end_with? "="
        properties = properties.sub("=", "")
      else
        properties = properties + "="
      end
    end

    if properties == "content" || properties == "child"
      properties = :text
      if properties == "content"
        opt = opt.gsub("\n", "\\n")
      end
    end
    #below patch to replace width and height with wdithOnly and heightOnly to allow lose ratio
    if properties.to_sym == :width= || properties.to_sym == :height=
      properties = properties.sub("=", "") + "Only="
    end
    fct_to_send = "zim_lib.grab('#{atome_id}').#{properties}('#{opt}');"
    if atome.visible.to_sym == :true

      `
    eval(#{fct_to_send});
    zim_lib.app.stage.update();
    `
    end

  end
end

################### end of zim classs ##################

def zim_play media
  `
 	var src;
 	var soundInstance;
 	var displayStatus;
 	function start_play(media)
 	{
 		var assetsPath = "assets/";
 		src = assetsPath + media;
 		createjs.Sound.alternateExtensions = ["m4a"];
 		createjs.Sound.addEventListener("fileload", playSound);
 		createjs.Sound.registerSound(src);
 		function playSound(event) { soundInstance = createjs.Sound.play(event.src); };
 	}
   start_play("Neuro_Synth.wav");
   `
end


################ Zim class here ################
#class Zim
#  include Zim_renderer, Konva_renderer
#
#  def toto
#    box
#  end
#
#end