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
####### Urho3D render engine #############
module Urho3D_renderer

end
####### Fabric render engine #############
module Fabric_renderer

end
####### Html render engine #############
def html_view
  #below we create the html view that will contain all atomes
  `
    var html_view = document.createElement("div");
   html_view.setAttribute("id", "html_view");
    html_view.id = "html_view";
    html_view.style.left = "0px";
    html_view.style.top = "0px";
    html_view.style.right = "0px";
    html_view.style.bottom = "0px";
    html_view.style.zIndex = "1";
    html_view.style.position = "absolute";
    html_view.style.display = "block";
    document.getElementsByTagName('body')[0].appendChild(html_view);
`
end

#def synchronise_code id, param
#
#  puts "id is #{id}, param is #{param}"
#
#  #Opal.Object.$replace("get(\""+obj_id+"\").x("+this.x+")"  , x_def_pos);
#  #Opal.Object.$replace("get(\""+obj_id+"\").y("+this.y+")"  , y_def_pos);
#end


#

html_view
module Html

  def initialize (*val)

  end

  def self.init(properties, id)
    properties.each do |property|
      #puts "properties : #{properties} id : #{id}"
      if property.class == Hash
        self.send(property.keys[0], property.values[0], id)
      elsif property.class == Array
        parent_id = ìd
        property.each do |sub_property|
          if sub_property.class == Hash
            self.send(sub_property.keys[0], sub_property.values[0], parent_id)
          end
        end
      end
    end
  end

  def self.preset param, id
    if param.to_sym == :box
      param = :div
    end
    `

if (!document.getElementById(#{id})) {
        $('#html_view').append("<"+param+" id="+id+" style='width:100px;height:100px;position:absolute;color:red;background-color:orange;display:block'></"+param+">");
}

`

  end

  def self.type param, id

  end

  def self.color param, id
    `document.getElementById(#{id}).style.backgroundColor = #{param}`
  end

  def self.draggable param = :true, atome_id
    if param == :true
      #important delete the line below
      #id=atome_id
      atome_id=atome_id.to_s
      id=Atome.atomes[atome_id].id
      #puts id
     `
$( "#"+#{atome_id}+"" ).draggable({
     start: function() {
//alert('atome_id is '+#{id}+", we have to ind the id ")
search_x="get(\""+#{id}+"\").x"
search_y="get(\""+#{id}+"\").y"
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
y_def_pos=Opal.Object.$find(code,search_y);
      },
      drag: function() {
Opal.Object.$replace("get(\""+#{id}+"\").x("+parseInt(document.getElementById(#{atome_id}).style.left)+")"  , x_def_pos);
Opal.Object.$replace("get(\""+#{id}+"\").y("+parseInt(document.getElementById(#{atome_id}).style.top)+")"  , y_def_pos);
      },
      stop: function() {
//filename=Opal.Atome.$project();
//content=editor.getDoc().getValue("\n");
      }
});
$( "#"+#{atome_id}+"" ).draggable("enable")
`


    elsif param == :false
      #`alert("false")`
      `$( "#"+#{atome_id}+"" ).draggable('disable')`
    end
  end


  def self.x param, id
    `document.getElementById(#{id}).style.left = #{param}+"px"`
  end

  def self.y param, id
    `document.getElementById(#{id}).style.top = #{param}+"px"`
  end

end


#module Html
#  def initialize (*val)
#
#  end
#
#  def self.init(properties)
#    puts properties
#    properties.each do |property|
#      if property.keys[0] != :renderer
#        if property.keys[0] == :preset
#          self.send(property.values[0] )
#
#        elsif property.keys[0] == :type
#          #self.send(property.values[0])
#          puts "we must get the associated preset if the shape is not define"
#        else
#          self.send(property.keys[0], property.values[0])
#
#        end
#
#
#      end
#    end
#  end
#
#  def self.id val = nil, &bloc
#    if bloc
#      puts instance_exec(&bloc)
#    else
#      puts "the user send to the objectthe method  #{__method__} it's value is #{val}"
#    end
#  end
#
#  def self.atome_id val = nil, &bloc
#    if bloc
#      puts instance_exec(&bloc)
#    else
#      puts "object #{__method__} is #{val}"
#    end
#  end
#
#  def self.box val = nil, &bloc
#    if bloc
#      puts instance_exec(&bloc)
#    else
#      `$('body').append('<div style="position:absolute;color:red;background-color:white;z-index:5000">hello</div>');`
#    end
#  end
#
#  def self.preset val = nil, &bloc
#    if bloc
#      puts instance_exec(&bloc)
#    else
#      puts "object #{__method__} is #{val}"
#    end
#  end
#
#  def self.type val = nil, &bloc
#    if bloc
#      puts instance_exec(&bloc)
#    else
#      puts "object #{__method__} is #{val}"
#    end
#  end
#
#
#  def self.color val = nil, &bloc
#    if bloc
#      puts instance_exec(&bloc)
#    else
#      puts "object #{__method__} is #{val}"
#    end
#  end
#
#  def self.touch
#
#  end
#
#end
####### eDen render engine #############
module Eden


end
####### Headless render engine #############

module Headless


  def initialize (*val)

  end

  def self.init(properties, atome_ìd)
    properties.each do |property|
      #puts properties
      if property.class == Hash
        self.send(property.keys[0], property.values[0], atome_ìd)
      elsif property.class == Array
        parent_id = atome_ìd
        property.each do |sub_property|
          if sub_property.class == Hash
            self.send(sub_property.keys[0], sub_property.values[0], parent_id)
          end
        end
      end
    end
  end

  def self.preset param, id


    `
	ssu = new SpeechSynthesisUtterance()
	ssu.lang = "fr-FR"
	ssu.text = "une "+#{param}+" vient d'être créée avec l'identité :"+#{id}
	speechSynthesis.speak(ssu)
`

  end

  def self.type param, id

  end

  def self.color param, id
    `
      ssu = new SpeechSynthesisUtterance()
      ssu.lang = "fr-FR"
      ssu.text = "L'objet  "+#{id}+" a été colorié en "+ #{param}
      speechSynthesis.speak(ssu)
`
  end

  def self.draggable param=:true, id
    `
      ssu = new SpeechSynthesisUtterance()
      ssu.lang = "fr-FR"
      ssu.text = #{id}+" est maintenant déplaçable"
      speechSynthesis.speak(ssu)
`
  end


  def self.x param, id
    `
      ssu = new SpeechSynthesisUtterance()
      ssu.lang = "fr-FR"
      ssu.text = #{id}+" a été déplacé horizontalement à la position "+ #{param}
      speechSynthesis.speak(ssu)
`
  end

  def self.y param, id
    `
      ssu = new SpeechSynthesisUtterance()
      ssu.lang = "fr-FR"
      ssu.text = #{id}+" a été déplacé verticalement à la position "+ #{param}
      speechSynthesis.speak(ssu)
`
  end

end

####### Threejs render engine #############
module Three_renderer

end
####### Konva render engine #############
module Konva_renderer

end
####### Vocal render engine #############
module Vocal


    def initialize (*val)

    end

    def self.init(properties, atome_ìd)
      properties.each do |property|
        #puts properties
        if property.class == Hash
          self.send(property.keys[0], property.values[0], atome_ìd)
        elsif property.class == Array
          parent_id = atome_ìd
          property.each do |sub_property|
            if sub_property.class == Hash
              self.send(sub_property.keys[0], sub_property.values[0], parent_id)
            end
          end
        end
      end
    end

    def self.preset param, id


      `
	ssu = new SpeechSynthesisUtterance()
	ssu.lang = "fr-FR"
	ssu.text = "une "+#{param}+" vient d'être créée avec l'identité :"+#{id}
	speechSynthesis.speak(ssu)
`

    end

    def self.type param, id

    end

    def self.color param, id
      `
      ssu = new SpeechSynthesisUtterance()
      ssu.lang = "fr-FR"
      ssu.text = "L'objet  "+#{id}+" a été colorié en "+ #{param}
      speechSynthesis.speak(ssu)
`
    end

    def self.draggable param=:true, id
      `
      ssu = new SpeechSynthesisUtterance()
      ssu.lang = "fr-FR"
      ssu.text = #{id}+" est maintenant déplaçable"
      speechSynthesis.speak(ssu)
`
    end


    def self.x param, id
      `
      ssu = new SpeechSynthesisUtterance()
      ssu.lang = "fr-FR"
      ssu.text = #{id}+" a été déplacé horizontalement à la position "+ #{param}
      speechSynthesis.speak(ssu)
`
    end

    def self.y param, id
      `
      ssu = new SpeechSynthesisUtterance()
      ssu.lang = "fr-FR"
      ssu.text = #{id}+" a été déplacé verticalement à la position "+ #{param}
      speechSynthesis.speak(ssu)
`
    end

  end
require "opal-parser"
#if prop.class == Array
#  puts "check if there's an id , we may even add parent id to know where to render this"
#  inception prop, atome
#else
#  if prop.keys[0] == :atome_id
#    atome_id = prop.values[0]
#    atome.delete_at(index)
#  end
#  if prop.keys[0] == :renderer
#    atome.delete_at(index)
#  end
#end


class Array
  def swap!(a, b)
    self[a], self[b] = self[b], self[a]
    return self
  end

  def pick prop, mode = :value
    prop_found = []
    self.each_with_index do |props, h_index|
      #  props.each_with_index do |prop, a_index|
      #		 p prop
      #	  	  end
      if props.keys[0] == prop.delete_suffix('s')
        if mode == :value
          prop_found << props.values[0]
        elsif mode == :electron
          prop_found << self[h_index]
        end
      end
    end
    if prop.end_with? "s"
      return prop_found
    else
      return prop_found[0]
    end
  end

end


def constantize(camel_cased_word)
  names = camel_cased_word.to_s.split('::')
  # Trigger a built-in NameError exception including the ill-formed constant in the message.
  Object.const_get(camel_cased_word) if names.empty?
  # Remove the first blank element in case of '::ClassName' notation.
  names.shift if names.size > 1 && names.first.empty?
  names.inject(Object) do |constant, name|
    if constant == Object
      constant.const_get(name)
    else
      candidate = constant.const_get(name)
      next candidate if constant.const_defined?(name, false)
      next candidate unless Object.const_defined?(name)
      # Go down the ancestors to check it it's owned
      # directly before we reach Object or the end of ancestors.
      constant = constant.ancestors.inject do |const, ancestor|
        break const if ancestor == Object
        break ancestor if ancestor.const_defined?(name, false)
        const
      end
      # owner is in Object, so raise
      constant.const_get(name, false)
    end
  end
end


################### Renderer ##############
#
#def atome_properties
#  atome_methods = []
#  properties = {atome_id: object_id, id: :my_object, preset: :default, touch: :hello, content: :lorem, color: :gray, x: 0, y: 0, z: 0, width: 100, height: 100, child: :none, name: :eVe_object, shadow: 20, border: 3, label: :eVe_label, type: :text, language: :english, display: true, run: true, renderer: :html, selected: false, editable: false, draggable: :false}
#
#  return properties
#end
#
#def atome_methods
#  atome_methods = []
#  atome_properties.each do |object, default_value|
#    atome_methods << object
#    atome_methods << (object.to_s + "s").to_sym
#    atome_methods << (object.to_s + "=").to_sym
#  end
#  return atome_methods
#end
#
#
###################
#
#class Render_engine
#  #this method parse the atome to search for render engines and once found dispatch to the corresponding render engine.
#  # Please notte that the same part could be send simulteanoulsy to multiples render engine
#  @@render_engines = [:Fabric, :Headless, :Html, :Konva, :Three, :Zim, :Vocal]
#
#  def initialize (*val)
#  end
#
#  def self.inception props, atome
#    atome_to_render = []
#    atome_ìd = @last_atome_id
#    properties_to_delete = []
#    if props.class == Array
#      props.each do |prop|
#        inception prop, props
#      end
#    else
#      if props.keys[0] == :renderer
#        render_engine = props.values[0].capitalize
#        # the line below call the render engine, first it turn the value passed (render_engine) into a constant, then caal the init function of the render engine callles
#        atome.each_with_index do |prop, index|
#          if prop.class == Hash
#            prop.each do |key, value|
#              if key == :atome_id
#                atome_ìd = value
#                properties_to_delete << index
#              elsif key == :id
#                properties_to_delete << index
#              elsif key == :renderer
#                properties_to_delete << index
#              else
#                atome_to_render << {key => value}
#              end
#            end
#          elsif prop.class == Array
#            atome_to_render << prop
#          end
#        end
#        # here we send the atome and its id to the renderer
#        constantize(render_engine).init(atome_to_render, atome_ìd)
#      end
#    end
#  end
#
#  def self.render(object_id)
#    #after a bit of analysis we send the result to the different render engines
#    atome = Atome.atomes[object_id.to_s]
#     atome=atome.to_array
#    atome.each do |props|
#      if props.class == Array
#        props.each do |prop|
#          inception prop, props
#        end
#      else
#        inception props, atome
#      end
#    end
#  end
#end

################## old renderer ##############
#class Renderer
#  def self.engine
#    "zim_"
#  end
#end
################## Js 'pass-plat' ##############
class Js
  def self.method_missing(m, *args, &block)
    opts = []
    args.each do |arg|
      opts << "'" + arg + "'"
    end
    opts = opts.join(",")
    send_msg = m + "(" + opts + ")"
    `eval(#{send_msg})`
  end
end

def to_js(fct, val)
  val = val.to_s
  val = val.gsub('"', '\"')
  js = fct + '("' + val + '")'
  `eval(#{js})`
end

################# new file operation #################
def saver *val
  send_this = {name: :project_0, file_content: "#project_0", call: false, call_params: false, type: :project, force: false}
  file_exist = false
  if val.length > 1
    val[1] = val[1].gsub('"', "'")
    send_this[:name] = val[0]
    send_this[:file_content] = val[1]
  elsif val[0].class == Hash
    val[0].each do |key, value|
      send_this[key] = value
    end
  elsif val[0].class == String
    send_this[:name] = val[0]
    send_this[:file_content] = '#' + val[0]
  end
  #we test if project exist before save
  #attention!! the test below seems to invert condition and test if a project exist before testing if a project is requested!! +add comment to explain

  ################# new algorythm here ###################
  if send_this[:type].to_sym == :project
    if Atome.projects.include? send_this[:name]
      file_exist = true
    else
      #we add user to eDen's user list
      Atome.projects << send_this[:name]
      saver({name: Atome.user, file_content: Atome.projects.join("\n"), type: :user, force: true})
    end

  elsif send_this[:type].to_sym == :user
    if Atome.humans.include? send_this[:name]
      file_exist = true
    else
      Atome.humans << send_this[:name]
      saver({name: :eDen, file_content: Atome.humans.join("\n"), type: :machine, force: true})
    end

  elsif send_this[:type].to_sym == :machine
    p "machine created"
    p send_this
    file_exist = true
    #if Atome.users.include? send_this[:name]
    #  #file_exist = true
    #else
    #  #p users
    #  #p "check if user exist, if not add it to eDen !!"def
    #  #save({name: :eDen, file_content: Atome.users.join("\n"), type: :machine})
    #end
  end
  ################# end ####################
  if file_exist && send_this[:force] == false
    puts "######"
    puts send_this
    alert "file exist"
    puts "######"
  else
    to_js :store, send_this
  end

  ################# end ####################

  #puts projects
end


def loader *val
  send_this = {name: :project_0, call: :add_to_screen, call_params: false, type: :project, error_call: false, error_call_params: false, force: false}

  if val.length > 1
    #it's an array it means that's a pair name:type
    val[1] = val[1].gsub('"', "'")
    send_this[:name] = val[0]
    send_this[:type] = val[1]
  elsif val[0].class == Hash
    val[0].each do |key, value|
      send_this[key] = value
    end
  elsif val[0].class == String
    #it's a string (a uniq value) so default object type is a project
    send_this[:name] = val[0]
    send_this[:type] = :project
  end
  #we test if project exist before save
  if send_this[:type] == :project && !(projects.include? send_this[:name]) && send_this[:force] == false
    alert "file not found"
  elsif send_this[:type] == :human && !(humans.include? send_this[:name]) && send_this[:force] == false
    alert "person not found"
  else
    to_js :load, send_this
  end

end


################## file operation ##############

def store filename, content = "", system_file = false, fct_to_call = false, fct_params = false, error_catch_fct = false
  if filename.class == Hash
    content = filename[filename.keys[0]]
    filename = filename.keys[0]
  end
  if system_file == false
    filename = Atome.human + "." + filename
  end
  filename = filename.to_s
  content = content.to_s
  `write_file(#{filename}, #{content}, #{fct_to_call}, #{fct_params}, #{error_catch_fct})`
end

def load filename, fct_to_call = "add_to_screen", fct_params = false, error_catch_fct = false, system_file = false
  if fct_to_call.to_sym == :human
    Atome.human = filename
    load :eDen, :set_last_user
  end
  filename = filename.to_s
  if fct_to_call == "add_to_screen" || fct_to_call == "bufferize" || fct_to_call == "renamer" || fct_to_call == "puts" || fct_to_call == "alert" || fct_to_call == "text" || fct_to_call == "dynamic_code"

    if system_file == false

      filename = Atome.human + "." + filename
      # If the file is add to ide then we update the value of current project else it may be a media so we don't want to change the current project value

    end
  end
  `
   read_file(#{filename},#{fct_to_call}, #{fct_params}, #{error_catch_fct});
   `
end


def system_load filename, fct_to_call = "puts", fct_params = false, error_catch_fct = false, system_file = false
  `
   read_file(#{filename},#{fct_to_call}, #{fct_params}, #{error_catch_fct});
   `
end

def create name, value = "", type = :project, system_file = false
  if name.class == Hash
    value = name[name.keys[0]]
    name = name.keys[0]
  end
  name = name.to_sym
  if type == :project
    if !Atome.projects.include? name
      if value == ""
        value = "#" + name
      end
      store(name, value, false)
      user_project = Atome.projects << name
      user_project = user_project.join("\n")
      store(Atome.human, user_project, true)

    else
      alert("file already exist!")
    end
  elsif type == :human
    store(name, value, true)
    password = value
    Atome.human = name
    store(Atome.human, "project_0\nproject_0\n", true)
    store(:project_0, "#default code : project_0", false, :load, :project_0)
    load :eDen, :add_last_user
  end
end


def delete filename
  user_projects = Atome.projects
  if user_projects.include? filename
    if user_projects.length == 2
      alert("can't delete : only one project!")
    else
      if user_projects[0] == user_projects[1]
        user_projects[0] = user_projects[2]
        Atome.projects.delete(filename)
        new_project = user_projects[0]
        load new_project
      elsif user_projects[0] == filename
        user_projects[0] = user_projects[1]
        Atome.projects.delete(filename)
        new_project = user_projects[0]
        load new_project
      else
        Atome.projects.delete(filename)
      end
      `
     remove_file(#{filename});
     `
      Atome.projects(Atome.projects.join("\n"))

      store Atome.human, user_projects

    end
  else
    alert "no file project found"
  end
end

def renamer content, files_name
  files_name = files_name.split(",")

  new_project_list = []
  user_projects = Atome.projects
  p "########"
  p user_projects[0]
  p files_name[1]
  p "########"
  if user_projects[0] == files_name[0]
    Atome.project(files_name[1])
  end
  user_projects.each do |project|
    #p "#{project} :: #{files_name[0]}"
    if project == files_name[0]
      #p "beefcake : #{project} :: #{files_name[0]}"
      project = files_name[1]
    end
    new_project_list << project
  end
  new_project_list = new_project_list.join("\n")
  store files_name[1], content
  `
     remove_file(#{files_name[0]});
     `
  Atome.projects(new_project_list)
  store Atome.human, new_project_list
end

def rename file_name, new_filename
  #p file_name
  files_name = [file_name, new_filename]
  load file_name, "renamer", files_name

end


def set_last_project projects_list
  projects_list = projects_list.split("\n")
  if !projects_list.include? Atome.project_on_screen
    p "file alredy exist"
    projects_list << Atome.project_on_screen
  end
  projects_list[0] = Atome.project_on_screen.to_s
  projects_list = projects_list.join("\n")
  store(Atome.human, projects_list, true)
  Atome.projects(projects_list)

end

def project_list_send_to_set_last_project
  load Atome.human, "set_last_project"
end

#def add_last_project projects_list
#  projects_list = projects_list.split("\n")
#  projects_list[0] = Atome.project_on_screen
#  projects_list << Atome.project_on_screen
#  projects_list = projects_list.join("\n")
#  store(Atome.user, projects_list, true)
#end

def set_last_user eDen_content
  eDen_content = eDen_content.split("\n")
  eDen_content[1] = Atome.user
  eDen_content = eDen_content.join("\n")
  store(:eDen, eDen_content, true)
end

def add_last_user eDen_content
  eDen_content = eDen_content.split("\n")
  eDen_content[1] = Atome.human
  eDen_content << Atome.human
  eDen_content = eDen_content.join("\n")
  store(:eDen, eDen_content, true)
end

###################### exec user script ####################

def add_to_screen content
  `add_to_ide(#{content})`
end

def ide content
  `add_to_ide(#{content})`
end

def write content
  `add_to_ide(#{content})`
end


def dynamic_code code, last = false
  if !last
    Atome.code(code)
  else
    Atome.code(code)
    codes = Atome.code()
    originale_code = codes[0]
    codes.shift()
    codes.each do |code|
      originale_code = originale_code.sub("require", "\n" + code + "\n#")
    end
    `
    run_script(#{originale_code})
  `
  end
end

def deep_analysis code
  Atome.delete(:code)
  #we store the whole code in Atome.code
  # we parse code to remove in case of commented require
  code = code.gsub("#require", "#")
  if code.include? "require"
    Atome.code(code)
    lines = code.split("\n")
    require_list = []
    lines.each_with_index do |line, index|
      if line.start_with? "require"
        require_list << line.strip()
      end
    end
    require_list.each_with_index do |get_this, index|
      get_this = get_this.sub("require", "").gsub("'", "").gsub('"', "").gsub(":", "").strip()
      if index == require_list.length - 1
        load get_this, "dynamic_code", true
      else
        load get_this, "dynamic_code", false
      end
    end
  else
    `
    run_script(#{code})
  `
  end
end

def run_code()
  ## allow eVe to remove all object expet the two first :  the human (the user) and eDen ( the machine)
  Atome.purge
  code = `code=editor.getDoc().getValue("\n")`
  clear(:view)
  if code.include? "require"
    deep_analysis code
  else
    `
    run_script(#{code})
  `
  end

  return
end

def code code = nil
  if code
    $$.editor.getDoc().setValue(code);
  else
    code = $$.editor.getDoc().getValue("\n")
  end
end

def timeout time
  `setTimeout(function(){ #{yield} }, #{time})`
end


def wait(time)
  `setTimeout(function(){ #{yield} }, #{time})`
end


def nuke
  Atome.new.nuke
end

#######  CodeMirror methods #############

def refresh_codemirror
  `
  $('.CodeMirror').each(function(i, el){
      el.CodeMirror.refresh();
  });
  `
end

def open_ide(opt = false)
  if !opt
    `

                       $("#ide_drag_bar").css("display", "block");
                       $("#ide_container").css("display", "block");
                       #{refresh_codemirror}
    `

  elsif opt.to_sym == :toggle
    `
              if ($("#ide_container").length == 0 || $("#ide_container").css("display") == "none") {
                     $("#ide_drag_bar").css("display", "block");
                     $("#ide_container").css("display", "block");
                     #{refresh_codemirror}

                 } else {
                     $("#ide_drag_bar").css("display", "none");
                     $("#ide_container").css("display", "none");
                 }
    `
  elsif opt.to_sym == :open || opt == :true
    `
                       $("#ide_drag_bar").css("display", "block");
                       $("#ide_container").css("display", "block");
                       #{refresh_codemirror}
    `

  elsif opt.to_sym == :close
    `
                         $("#ide_drag_bar").css("display", "none");
                         $("#ide_container").css("display", "none");
    `
  end
end

def open_console(opt = false)
  if !opt
    `
    $("#ruby_console_back").css("display", "block");
    $("#ruby_console").css("display", "block");
    $("#console_drag_bar").css("display", "block");
    `

  elsif opt.to_sym == :toggle
    `
             if ($("#ruby_console_back").length == 0 || $("#ruby_console_back").css("display") == "none") {
                     $("#ruby_console_back").css("display", "block");
                     $("#ruby_console").css("display", "block");
                     $("#console_drag_bar").css("display", "block");
                             var console_drag_bar_bottom_pos=(window.innerHeight -parseInt($("#console_drag_bar").css("top")));
                     $("#ide_container").css("bottom", console_drag_bar_bottom_pos);
                     $("#ruby_console_back").css("top",parseInt($("#console_drag_bar").css("top"))+drag_bar_height/2);
                 } else {
                     $("#ruby_console_back").css("display", "none");
                     $("#ruby_console").css("display", "none");
                     $("#console_drag_bar").css("display", "none");
             $("#ide_container").css("bottom", 0);
                 }
    `
  elsif opt.to_sym == :open || opt == :true
    `
  $("#ruby_console_back").css("display", "block");
  $("#ruby_console").css("display", "block");
  $("#console_drag_bar").css("display", "block");

    `
  elsif opt.to_sym == :close
    `
    $("#ruby_console_back").css("display", "none");
    $("#ruby_console").css("display", "none");
    $("#console_drag_bar").css("display", "none");

    `
  end
end

def select_all()
  `
	CodeMirror.commands["selectAll"](editor)
  `
end


def reformat_selection()
  `
        var range = getSelectedRange();
        editor.autoFormatRange(range.from, range.to);
  `
end

def reformat_all()
  select_all()
  `
        var range = getSelectedRange();
        editor.autoFormatRange(range.from, range.to);
  `
end

def replace_selection(modified_selection)
  `editor.replaceSelection(#{modified_selection})`
end

def comment_selection()
  selection = `editor.getSelection()`
  if selection == ""
  end
  selection = selection.split("\n")
  modified_selection = []
  selection.each do |line|
    if line.start_with?("#")
      modified_selection << line[1..-1]
    else
      modified_selection << "#" + line
    end
  end
  modified_selection = modified_selection.join("\n")
  replace_selection(modified_selection)
end


def auto_save
  puts "autosave called!!"
  #code_content = code
  #if Object.const_defined?(:Atome)
  #  store(Atome.project_on_screen, code_content)
  #else
  #  `console.log('create an project_on_screen global variable')`
  #end

end


def auto_run()
  `
		if(!auto_run_active){
				function start_auto_run_countdown(){
	if (typeof(auto_run_countdown) != "undefined"){
			clearTimeout(auto_run_countdown);
	}
		auto_run_countdown = setTimeout(function(){ #{clear(:console)};#{run_code()}}, 500);
}
editor.on('keyup', function auto_run_binding(event) {
	if(auto_run_active==true){
start_auto_run_countdown();
}
});
		auto_run_active=true;
		}
		else{
			auto_run_active=false;
			}
  `
end

def shortcut()
  `
  function auto_save() {
setTimeout(function(){#{auto_save()}}, 300);
    }
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'r') {
#{run_code()}
  }
   else if (event.ctrlKey && event.key === 'i') {
#{open_ide(:toggle)}
  }
 else if (event.ctrlKey && event.key === 'j') {
#{reformat_selection()}
  }
   else if (event.ctrlKey && event.key === 'e') {
#{reformat_all()}
  }
  else if (event.ctrlKey && event.key === 'c') {
#{comment_selection()}
  }
        else if (event.ctrlKey && event.key === 't') {
#{open_console(:toggle)}
  }
        else if (event.ctrlKey && event.key === 'x') {
#{clear(:console)}
  }
      else  if (event.ctrlKey && event.key === 'a') {

#{auto_run()}
  }
      else   if (event.ctrlKey && event.key === 'y') {
#{reboot()}
  }
else{
auto_save();
}
});
	`
end

shortcut()


def alert msg
  msg = msg.to_s
  msg = msg.gsub("\n", "\\n")
  t = text msg
  t.color = :red
end

#def init_console
#`           console.clear();
#            console.log = function(message) {
#              Opal.Object.$log(message);
#            };
#            console.info = function(message) {
#                Opal.Object.$log("info : "+message);
#            };
#            console.warn = function(message) {
#                Opal.Object.$log("warn : "+message);
#            };
#            console.error = function(message) {
#                Opal.Object.$log("error : "+message);
#            };`
#end
#init_console()
def p string
  string = string.to_s
#  string = string.gsub("\n", "<br>")
  `
	var prev_content=$("#ruby_console").html();
  if(#{string}!=""){
  	var content = prev_content+#{string}+"<br>";
  	$("#ruby_console").html(content);
}
	`
end

def puts string
  p string
end

def log string
  p string
end

def clear(option = :console)
  option = option.to_sym
  if option == :view || option == :screen
    # cmd = "#{Renderer.engine}clear(:view)"
    puts "temporary patch to erase the screen works only with HTML rendering"
    `
    $("#html_view").html("")
`
    #  `alert("msg from apis line 809"+#{Renderer.engine})`
    # eval(cmd)
  elsif option == :ide
  elsif option == :console
    `
	$("#ruby_console").html("")
	  `
  end
end

def sanitizer string
  string = string.gsub("'", "\\\\'")
  return string
end

def play
  Object.send(Renderer.engine + "play", "snare")
end

def bin_to_hex(s)
  s.unpack('H*').first
  #s.each_byte.map { |b| b.to_s(16).rjust(2, '0') }.join
end

def hex_to_bin(s)
  s.scan(/../).map { |x| x.hex.chr }.join
end

def autorun()
  #method added here just to prevent method not found error
end

def run
  #method added here just to prevent method not found error
end

def render()

end

#def require rb_file
#  alert rb_file
#end

def language
  @language = "french"
end

def time
  time = Time.now.strftime("%Y.%m.%d.%H.%M.%S.%L")
  return time
end

def location
  # todo : get real location for both cordoava and (web mode) !!
  location = "45.76988489999991_3.060128150002545"
  return location
end


def project
  return Atome.project
end

def projects
  user_projects = []
  Atome.projects.each_with_index do |projets, index|
    if index != 0
      user_projects << projets
    end
  end
  return user_projects
end

def machine
  return Atome.eDen

end

def user
  return Atome.human
end

def humans
  return Atome.humans
end

def find script, string
  script = script.split("\n")
  line_nb = nil
  script.each_with_index do |line, index|
    line = line.gsub("'", '"')
    if line.include? string
      line_nb = index
    end
  end
  if line_nb.nil?
    line_nb = script.length + 1
  end
  return line_nb
end

def replace content, line
  `editor.replaceRange(#{content}+"\n", CodeMirror.Pos(#{line},0) , CodeMirror.Pos(#{line + 1},0))`
end

def reboot
  `window.location.reload(true)`
end

def reload
  reboot
end

def lorem
  srt = <<STRdelim
b=box()
b.drag()
b.color=:red
b.id="toto"

get("toto").x(77)
get("toto").y(10)

STRdelim
end

def lorem2
  srt = <<STRdelim
b=box()
b.id="toto"
b.drag()
b.color=:red
get("toto").y(10)

get('toto').x(77)

STRdelim
end

def lorem3
  srt = <<STRdelim
b=box()
b.id="toto"
b.drag()
b.color=:red


get('toto').x=77

STRdelim
end

def lorem4
  srt = <<STRdelim
b=box()
b.id="toto"
b.drag()
b.color=:red


STRdelim
end

`
function verfions(){
  alert('verfied!!')
}
`
#todo : set and other methods proxy
#todo : color.get[1]
#todo check that  user can't  change atome_id
#todo : bug after dargging object if the line that conatin the x is erased, when dragging a bug create two lines defining the x position
#todo : autorun doesn't work
#def  atome_properties
#  atome_methods = []
#  properties = {atome_id: object_id, id: :my_object, preset: :default, content: :lorem, color: :gray, x: 0, y: 0, z: 0, width: 100, height: 100, child: :none, name: :eVe_object, shadow: 20, border: 3, label: :eVe_label, type: :text, language: :english, display: true, run: true, renderer: :html, selected: false, editable: false, draggable: :false}
#
#  return properties
#end
#
#def atome_methods
#  atome_methods = []
#  atome_properties.each do |object, default_value|
#    atome_methods << object
#    atome_methods << (object.to_s + "s").to_sym
#    atome_methods << (object.to_s + "=").to_sym
#  end
#  return atome_methods
#end
#todo :puts a.color[0]

# ------- utils below for opal version --------
#if Object.respond_to? :clear
#  clear
#end
# ------- Array class new methods to alloweasy multi delete --------
class Array
  def delete_at_multi(arr)
    arr = arr.sort.reverse # delete highest indexes first.
    arr.each do |i|
      self.delete_at i
    end
    self
  end
end

#below patch to use the class Number instead of the class Integer that is not supported by Opal
if defined?(Number) == 'constant'
else
  Number = Integer
end

################## Renderer ##############

def atome_properties
  atome_methods = []
  properties = {atome_id: object_id, id: :my_object, preset: :default, touch: :hello, content: :lorem, color: :gray, x: 0, y: 0, z: 0, width: 100, height: 100, child: :none, name: :eVe_object, shadow: 20, border: 3, label: :eVe_label, type: :text, language: :english, display: true, run: true, renderer: :html, selected: false, editable: false, draggable: :false}

  return properties
end

def atome_methods
  atome_methods = []
  atome_properties.each do |object, default_value|
    atome_methods << object
    atome_methods << (object.to_s + "s").to_sym
    atome_methods << (object.to_s + "=").to_sym
  end
  return atome_methods
end


##################

class Render_engine
  #this method parse the atome to search for render engines and once found dispatch to the corresponding render engine.
  # Please notte that the same part could be send simulteanoulsy to multiples render engine
  @@render_engines = [:Fabric, :Headless, :Html, :Konva, :Three, :Zim, :Vocal]

  def initialize (*val)
  end

  def self.inception props, atome
    atome_to_render = []
    atome_ìd = @last_atome_id
    properties_to_delete = []
    if props.class == Array
      props.each do |prop|
        inception prop, props
      end
    else
      if props.keys[0] == :renderer
        render_engine = props.values[0].capitalize
        # the line below call the render engine, first it turn the value passed (render_engine) into a constant, then caal the init function of the render engine callles
        atome.each_with_index do |prop, index|
          if prop.class == Hash
            prop.each do |key, value|
              if key == :atome_id
                atome_ìd = value
                properties_to_delete << index
              elsif key == :id
                properties_to_delete << index
              elsif key == :renderer
                properties_to_delete << index
              else
                atome_to_render << {key => value}
              end
            end
          elsif prop.class == Array
            atome_to_render << prop
          end
        end
        # here we send the atome and its id to the renderer
        constantize(render_engine).init(atome_to_render, atome_ìd)
      end
    end
  end

  def self.render(object_id)
    #after a bit of analysis we send the result to the different render engines
    atome = Atome.atomes[object_id.to_s]
    atome=atome.to_array
    atome.each do |props|
      if props.class == Array
        props.each do |prop|
          inception prop, props
        end
      else
        inception props, atome
      end
    end
  end
end

# ------- atome object and apis below --------
class Atome
  #@@default_components = {display: :local, language: :english, renderer: :zim}
  @@atomes_to_display = []
  #@@visual_types's key is the name of type, the value is the associated preset for the type
  @@visual_types = {shape: :box, image: :logo, text: :lorem}
  @@types = {effect: :distort, sound: :jingle, human: :user, machine: :computer, tool: :text, group: :empty, code: :hello, atome: :foo}.merge(@@visual_types)
  #@@presets's key is the preset name, the value is the content of the presets
  @@presets = {circle: "circle desc", box: "box desc", star: "star desc", triangle: "triangle desc", polygon: "polygon desc", squiggle: "squiggle desc", bloob: "bloob desc", text: "lorem ipsum dolore", user: "anonymous", computer: "riscPC", code: "print 'hello world'", foo: "this object has no body"}
  @@default_visuals = {x: [0], y: [0], width: [100], height: [300], color: [:black]}
  @@definition_order = [:type, :preset, :content]
  @@atomes = {}

  @@black_hole = [] #deleted atomes
  @@project_displayed = "project_0"
  @@buffer = []

  #def initialize(options = nil, create_atome_id = true, get = false)
  def initialize(*options)
    #puts "here !! options : #{options} : :#{options.class}"
    create_atome_id = true
    create_id = true
    get = false
    item_to_delete = []
    options.each_with_index do |option, index|
      if option.class == Hash
        #puts "option : : : #{option}"
        # below we remove the hash containing the info to create an atome_id or not and also remove the atome_id, in case a user try to force the value of the atome_id
        if option.keys[0] == :create_atome_id || option.keys[0] == :atome_id
          create_atome_id = option.values[0]
          item_to_delete << index
          #options.delete_at(index)
        end
        if option.keys[0] == :get_mode
          get = option.values[0]
          item_to_delete << index
          #puts self
          #puts option
          #puts "---"
          #options.delete_at(index)
        end
      elsif option.class == Symbol || option.class == String
        #if it's a symbol or a string whe try to find if the user send a preset otr a type
        if @@presets.include?(option)
          #so it's a preset we seach for its type
          preset = {}
          type = {}
          preset[:preset] = option
          type[:type] = @@types.key(option)
          options = [preset, type]
        elsif @@types.include?(option)
          #so it's a type we seach for its preset
          preset = {}
          type = {:type => option}
          preset[:preset] = @@types[option]
          options = [type, preset]
        end
      end

    end
    item_to_delete.each do |item|
      options.delete_at(item)
    end

    #the initialize methods is used to parse the params sends
    @atome = []
    @atome_initial_state = []
    if get
      # the get options allows to return only the wanted prop
      @atome = options
      return self
    end
    #we uniformise the data received into an array in order to treat it later
    if !options
      options = []
    end
    #if the user submit only a string or symbol instaed of he hash we have to create a simple object and find either the associated preset from type or the type from its preset
    if (options.class == Symbol || options.class == String)
      @@types.each do |type|
        if type[0].to_sym == options.to_sym
          @atome_initial_state << {:type => options}
        elsif type[1].to_sym == options.to_sym
          type = @@types.key(options)
          @atome_initial_state << {:type => type}
          @atome_initial_state << {:preset => options}
        end
      end
    else

      @atome_initial_state = options
    end
    @atome_initial_state = sanitize_prop(nil, @atome_initial_state)
    #below we search if the render engine has been defined
    renderer_define = false
    @atome_initial_state.each do |option|
      #here we check only have to check first level for the renderer
      if option.class == Hash
        if option.keys[0] == :renderer
          renderer_define = true
        end
      end
    end
    # we create an automaticaly generated id
    if create_id
      id = "unknown_"
      @atome_initial_state.each do |property_key_pair|
        #puts "property_key_pair : #{property_key_pair}"
        #puts "----- #{property_key_pair.keys[0].class} is #{property_key_pair.values[0]} -----"
        if property_key_pair.keys[0].to_sym == :preset
          #puts "-----preset-------"
          id = property_key_pair.values[0].to_s + "_"
        elsif property_key_pair.keys[0].to_sym == :type
          #puts "-----type-------"
          id = property_key_pair.values[0].to_s + "_"
        end
      end
      id = (id + @@atomes.length.to_s).to_sym
      @atome_initial_state.unshift(:id => id)
    end
    if create_atome_id
      @atome_initial_state.unshift(:atome_id => atome_properties[:atome_id])
    end
    if !renderer_define
      @atome_initial_state << {:renderer => atome_properties[:renderer]}
    end
    @atome_initial_state.each do |atomes|
      self.set(atomes)
    end
  end


  # we define all Atome's methods below with a bit of metaprogramming, methods ending with a s will be treated as batch for set, add, enhance and delete methods  or return an array for the getter method
  # All methods exept the getter mehod end up using the set method to add a modify a prop. ex : if the add method call the set methnod just changing the @add variable, so the set method accumulate prop instead of replacing it
  atome_methods.each do |property_fct|

    #@@presets.each do |key, value|
    #  # for each property_fct, we create a function accessible from outside Atome at top level, to allow direct creation of objects using : box(), circle({color: :red}), ...
    #  # this is used to simplify object creation using simple methods instead of using Atome.new
    #  Object.define_method(key) do |*opts|
    #    puts key
    #    #atome = Atome.new(:box)
    #    #atome.send(key, opts)
    #  end
    #end


    define_method(property_fct) do |*options, &proc|
      if proc
        # @temp_prop is used to send proper context to set the new properties
        @temp_prop = property_fct
        @temp_atome = []
        instance_exec(&proc)
        #once the proc is executed we delete the @temp_prop
        #first we delete the previous corresponding prop
        self.delete(property_fct)
        add_type = true
        add_type = check_if_type_exist(@temp_atome, property_fct)
        if add_type
          @temp_atome.unshift(:type => property_fct)
        end
        insert_properties_in_atome(@temp_atome)
        @temp_atome = nil
        @temp_prop = nil
      else
        if options[0].nil?
          # here the method call is a  getter
          self.get(property_fct)
        else
          # here the method call is a setter
          property_fct = property_fct.to_s.chomp("=").to_sym
          self.set({property_fct => options})
        end
      end
    end
  end

  # SAGED methods (Set Add Get Enhance Delete) the four main atome methods

  def set *properties, &proc
    if proc
      instance_exec(&proc)
    else
      properties.each do |props|
        if props.class == Array
          #todo maybe we have analyse a bit before sending this to erase previous stored, even better factorise and externalise the whole analysis for the set method
          props = sanitize_prop(nil, props)
          insert_properties_in_atome(props)
          return self
        end
        #puts propsg
        master_prop = props.keys[0]
        new_values = props.values[0]
        if new_values.class != Array
          new_values = [new_values]
        end
        if master_prop.to_s.end_with?("s")
          master_prop = master_prop.to_s.chomp("s").to_sym
          new_values.each do |new_value|
            self.set({master_prop => [new_value]})
            @add = true
          end
          @add = false
          return false
        else
          # we get the props and values
          new_values = sanitize_prop(master_prop, new_values)
          cleanup_prop = []
          # we analyse the prop according to their type and cleanup the whole things
          if new_values.length > 1 # multiple values found, we send them after a type check analysis
            # we check if current type is in the array else we add it
            add_type = true
            new_values.each do |prop|
              add_type = check_if_type_exist(new_values, master_prop)
              cleanup_prop << prop
            end
            if add_type
              cleanup_prop.unshift({:type => master_prop})
            end
          elsif new_values[0].class == Symbol || new_values[0].class == String || new_values[0].class == Integer || new_values[0].class == Float || new_values[0].class == TrueClass || new_values[0].class == FalseClass || new_values[0].class == Number
            # if it's a uniq value we have to add the prop (master_prop)
            cleanup_prop = {master_prop => new_values[0]}
          elsif new_values[0].class == Hash
            # as the length of the hash should always be only 1,  we just have to check if the prop is the current of else we have to add typenew_values_array
            if new_values[0].keys[0] != master_prop
              cleanup_prop << {:type => master_prop}
              cleanup_prop << new_values[0]
            else
              cleanup_prop = new_values[0]
            end
          elsif new_values[0].class == Array
            new_values_array = new_values[0]
            if new_values_array.length == 1 # if the array contains only one item we check it's content add the missing prop if needed
              if new_values_array[0].class == Symbol || new_values_array[0].class == String || new_values_array[0].class == Integer || new_values_array[0].class == Float || new_values_array[0].class == TrueClass || new_values_array[0].class == FalseClass || new_values_array[0].class == Number
                new_values_array[0] = {master_prop => new_values_array[0]}
              end
            end
            ## we check if current type is in the array else we add it
            add_type = check_if_type_exist(new_values, master_prop)
            if add_type
              new_values[0].unshift({:type => master_prop})
            end
            cleanup_prop = new_values[0]
          end
          # now we clean the current @atome before updating it
          if !@add
            master_prop = (master_prop.to_s + "s").to_sym
            if @temp_prop
              self.delete(@temp_prop)
            else
              self.delete(master_prop)
            end
          end
          # we add the whole new prop to the atome
          # puts "+-+-+-+"
          #puts cleanup_prop
          if @temp_prop # in this case prop is generated using using a proc (in @@atome_methods.each)
            ##we remove whe  get_mode prop that doesn't have to be stored
            @temp_atome << cleanup_prop
            return self
          else
            insert_properties_in_atome(cleanup_prop)
            return self
          end
        end
      end
    end
  end

  def add *properties, &proc
    if proc
      @add = true
      instance_exec(&proc)
      @add = false
    else
      @add = true
      properties.each do |property|
        self.set property
      end
      @add = false
    end
    return self
  end

  def get property
    pluralize = false
    if property.to_s.end_with?("s")
      pluralize = true
      property = property.to_s.chomp("s").to_sym
    end
    found_prop = []
    @atome.each do |props|
      if props.class == Hash
        if props.keys[0] == property
          found_prop << props.values[0]
        end
      elsif props.class == Array
        #Attention here we have to find if the type of the atome correspond to the property requested !!
        props.each do |atome|
          if atome.class == Hash
            if atome.keys[0] == :type && atome.values[0] == property
              found_prop << props
            end
          end
        end
      end
    end
    if pluralize
      #  puts "pluralize or an exeption :  #{property} =>  #{found_prop}"
      return found_prop
    elsif property == :atome_id || property == :id || property == :label
      #we made an exeption and return a string when the prop is an id, an atome_id or a label
      #:todo make an expetion list of type that shouldn't return an atome
      return found_prop[0].to_s
    else
      #Here we create an atome to allow getter properties to respond to methods then return the correponding value ex: - puts a.color => :black
      return Atome.new(found_prop[found_prop.length - 1], {create_atome_id: :false}, {get_mode: :true})
    end
  end

  def enhance *properties
# todo exchange or enhance targeted prop
  end

  def delete *properties
    if properties.length > 0
      list_of_matching_prop = []
      index_to_delete = []
      pluralize = false
      properties.each do |prop|
        if prop.class == Hash
          index_to_delete = prop.values[0]
          prop = prop.keys[0]
          if index_to_delete.class == Integer || index_to_delete.class == Float || index_to_delete.class == TrueClass || index_to_delete.class == FalseClass || index_to_delete.class == Number
            index_to_delete = [index_to_delete]
          end
          pluralize = true
        end
        if prop.to_s.end_with?("s")
          pluralize = true
          prop = prop.to_s.chomp("s").to_sym
        end
        @atome.each_with_index do |atome, index|
          if atome.class == Hash
            atome.keys.each do |key|
              if key == prop
                list_of_matching_prop << index
              end
            end
          elsif atome.class == Array
            atome.each do |prop_found|
              if prop_found.class == Hash && prop_found.keys[0] == :type && prop_found.values[0] == prop
                list_of_matching_prop << index
              end
            end
          end
        end
      end
      if pluralize
        user_list_of_prop_to_delete = []
        index_to_delete.each_with_index do |add_to_list, index|
          if index_to_delete[index].class == Integer || index_to_delete[index].class == Float || index_to_delete[index].class == TrueClass || index_to_delete[index].class == FalseClass || index_to_delete[index].class == Number
            user_list_of_prop_to_delete << list_of_matching_prop[index_to_delete[index]]
          else
            #todo : search for prop with id and delete
            puts "todo : search for prop with id   #{index_to_delete[index]}"
          end
        end
        if user_list_of_prop_to_delete.length > 0
          if user_list_of_prop_to_delete && (!user_list_of_prop_to_delete[0].nil?)
            @atome.delete_at_multi(user_list_of_prop_to_delete)
          end
        else
          if list_of_matching_prop
            @atome.delete_at_multi(list_of_matching_prop)
          end
        end
      else
        last_item = list_of_matching_prop[list_of_matching_prop.length - 1]
        if last_item
          @atome.delete_at(last_item)
        end
      end
    else
      @atome = []
    end
  end

  # ------- Various utils methods below -------
  # Analysis of prop below
  def sanitize_prop (property_fct, options)
    sanitized_opt = []
    options.each do |properties|
      if properties.class == Hash
        properties.each do |key, index|
          if index.class == Hash
            new_props = [{type: key}]
            index.each do |prop, value|
              new_props << {prop => value}
            end
            sanitized_opt << new_props
            #todo : attention recursive analysis not done if a hash is in a hash it wont be processed and restrutured!!
            #todo  some treatment must be added : get the content for #{sanitized_opt}
          elsif index.class == Array
            index.unshift(type: key)
            #todo some treatment may be added : get the content for #{index}
            sanitized_opt << [index]
          else
            sanitized_opt << {key => index}
          end
        end
      elsif properties.class == Array
        sanitized_opt = sanitize_prop(property_fct, properties)
      else
        sanitized_opt << properties
      end
    end

    return sanitized_opt
  end

  def check_if_type_exist (new_values, master_prop)
    #todo : make it works at the first level
    # we check if current type is in the array else we add it
    add_type = true
    new_values.each do |prop|
      if prop.class == Hash
        if prop.keys[0] == :type && prop.values[0] == master_prop
          add_type = false
        end
      elsif prop.class == Array
        prop.each do |item|
          if item.class == Hash
            if item.keys[0] == :type && item.values[0] == master_prop
              add_type = false
            end
          end
        end
      end
    end
    if add_type
      return true
    else
      return false
    end
  end

  def insert_properties_in_atome properties
    #this method is called when a property is added or modified , the insert_properties_in_atome method is call by the set method.
    # The insert_properties_in_atome add the the prop in the @atome hash and also add the current atome in he @atomes hash(this hash contain all current atoms)
    # finaly the  insert_properties_in_atome send the current atome to the Render engine.
    @atome << properties
    #now we store the current @atome id in the current @atomes array
    # puts self
    @@atomes[atome_id.to_s] = self
    # we send the id of the atome to be renderered to the main render engine for analysys
    Render_engine.render(self.atome_id)
  end

  def length
    return @atome.length
  end

  def each(&block)
    @atome.each(&block)
  end

  def to_hash
    self.to_enum(self)
  end

  def to_array
    atome = []
    self.each do |property|
      atome << property
    end
    return atome
  end

  def check
    atome = @atome.to_s
    return atome
  end

  def to_s
    @atome.each_with_index do |atome, index|
      if atome.class == Hash && atome.keys[0] == :get_mode
        @atome.delete_at(index)
        @atome = @atome[0]
      end
    end
    #below it's just to  cleanup the result for the user
    if @tome.class == Array && @atome.length == 1 && !@@atome[0].nil?
      return @@atome[0]
    else
      return @atome.to_s
    end
  end

  def [] val = nil
    return @atome
  end

  def self.atomes
    return @@atomes
  end

  def atome
    return @atome
  end

  def nuke
    @@atomes = {}
  end

  def self.nuke
    @@atomes = {}
  end

  def self.purge
    # allow eVe to remove all object exept the two first :  the human (the user) and eDen ( the machine)
    # @@atomes = @@atomes.take(2)
    @@atomes = {}
  end

  def self.properties
    return @@properties
  end
end


#------- Test and verifictaions below -------
# done(bugs) below the code crash because the preset doesn't create an standard atome
# a = Atome.new({color: :blue})
# a = Atome.new({type: :shape, preset: :box})
#a = Atome.new({ preset: :box,type: :shape,color: :blue})

#end of bugs
#a = Atome.new()
#a.set({color: :blue})
#a.add({color: :pink})
#a.set do
#  type :shape
#  preset :box
#  x 200
#  y 100
#  width 50
#  height 170
#end
#
#puts a
#a.delete(:colors)
# puts "-----"
#puts a
#puts a.colors
## todo(bugs) below bug the circle shape is ignored
#a.set([{type: :shape},{preset: :circle},{color: :blue},{x: 20},{y: 20},{width: 120},{height: 80},[{type: :shape}, {preset: :border},{height: 7},{color: :green}]])
#c=Atome.new()

#c.set do
#  type :text
#  name :mon_text
#  y 100
#  width 50
#  height 170
#end

#a = Atome.new({:border => {:color => {color: :red, x: 200}}})
#
##a = Atome.new([{atome_id: :tuty}, {:border => {:color => {color: :red, x: 200}}}, {color: :pink}, {name: 547}, {type: :shape}, {renderer: :fabric}, {display: true}, {x: 50}])
#a = Atome.new()
##a = Atome.new(:box)
#a = Atome.new([{:border => {:color => {color: :pinky, x: :birp}}}, {color: :pink}, {name: 547}])
#
###############
#a.color(:red) #validated
##a.color({:border => {color: :blue, width: 500}}, {width: 900})
##a.color({:border => [{color: :brune}]}, {width: 5900})
##a.renderer(:zim)
##puts a
##puts "----- color prop getter -----"
##puts "colors found : #{a.colors()}"
#a.add({color: :blue})
#a.add({color: :pink})
#a.color("orange")
#puts "-----"
#puts a.color
#a.color.x=200
#a.add({color: :violet})
#a.add({color: :prune})
#a.add({color: :brown})
#a.add({color: :purple})
#a.add({color: :cherry})
#a.add({color: :lemon})
##puts a
##a.color({x: 200}, [type: :text], {width: 500})
##a.color({x: 200}, [{type: :text}, {x: 75}], {width: 500})
##a.color = "magenta"
##a.color = 511
##a.color = [:yellow]
##a.color = [851]
##a.color = 851
##a.color({y: 300})
##a.color(:violet)
##a.color({color: :cyan})
#a.color([x: 100])
##a.color([type: :color, color: :gray, renderer: :zim])
##a.renderer(:zim)
##a.color([{color: :gray, x: 200}, [z: 200]])
##a.color([{y: 700}, [{type: :color}, {color: :purple}], {width: 2330}])
#a.color({y: 800}, [{type: :color}, {color: :violet}], {width: 852})
##a.color({y: 800}, [{color: :violet}], {width: 852})
##a.color(:chatain)
##a.color([{y: 4500}, {color: :prune}, {width: 250}])
##a.color({y: 600}, [{type: :color}, {content: 'okok'}, [{type: :width}, [{type: :height}, {height: 520}]], [{color: :violet}, {type: :color, z: 250}]], {width: 852})
##a.color({y: 600, type: :text}, [{type: :color}, {content: 'okok'}, [{type: :width}, [{type: :height}, {height: 520}]], [{color: :violet}, {type: :color, z: 250}]], {width: 852})

#######################################################################################################################
#a.color do
#  color :strawbery
#  x 900
#  z 800
#  width 495
#  renderer :three
#  #color(:red)
#  #x(200)
#end
##a.color(:red)
#a.add do
#  color :parm
#  x 200
#  z 300
#  width 777
#  renderer :three
#  #color(:red)
#  #x(200)
#end
#######################################################################################################################
##
##a.delete(:color)
##a.delete(:colors)
##a.delete({:colors => 0})
##a.delete({:colors => [1 ,5]})
##a.delete({:colors => [1 ,"tot"]})
##a.delete({:colors => [0, 2,7]})
##a.delete({:colors => "2"})
#a.add({color: :cherry})
#a.add({color: :camel})
#puts  "--------------"
#puts "#{a}"
#
##puts "#{a.color}"
##a.colors("maroon5", "yallow", "marine", :cyan, :green, :black, {color: :violet, x: 500})
###a.color("orange")
###a.width(800)
##
##a.color([x: 100]).x(55)
##a.color().x(5570)
##a.color :blue
##a.color("red").x(200)
##a.width = 20000
##a.color({type: :color, color: :barbouille})
##a.set(color: :orange)
##a.set({color: :pink})
##a.set([{color: :orange}])
##a.set([{type: :color, color: :maroon}])
##a.set([{width: 200}, {color: :violet}])
##a.add(color: :citrus)
##a.add(color: :opal)
######################################################################
##todo : debug this below
## a.color({x: :cyan},{z: :blue})
## a.color({x: :citron,width: :cherry})
##a.add([{color: :ultraviolet}])
## a.delete({:colors => 0})
## bug 1 :
##a.color({y: 800}, [{type: :color}, {color: :violet}], {width: 852}) # type is missing at first level
## Bug :
## puts a.colors
######################################################################
## puts "######"
##puts a
##a.add({width: 6000, height: 2000}, [{color: :grayblue, y: 500}, {x: 200}])
##a.add("red")
#
##a.delete({color: {width: :height}})
##puts a.color()
##puts a
##a.delete(:color)
##a.delete({:colors => [0, 2,7]})
##a.delete({:colors => 2})
##a.delete({:colors => "2"})
## puts a.colors
##
############# tests here##############
##puts "-----"
##puts "#{a.colors[1..2]}"
#
##a.color = "orange"
##a.border(50).shadow(:black).color().x(440)
##a.border().shadow(:red)
##a.color(:orange)
##a.border(50)
#
## a tester
##a.color(x: 777)
#
##[{:atome_id => 70243276217300}, {:border => 50}, [{:border => 50}, {:color => :orange}, [{:color => :orange}, {:x => 440}]]]
#
#
## test with var and function
##def my_fct()
##  :blue
##end
#
##a=[{type: :shape},{preset: :box},[{type: :color},{content: my_fct()},{x: 30},{y:70}],[{type: :color}, {content: :orange}],[{type: :border},{content: 20}, {color: :red}]]
##
##puts "a : #{a}"
##a.color(:violet)
##a.color({color: :blue, x: 200})
##a.color(:pink)
#
##a.color  (:blue).x(200)
###a.color(:red).x(200)
##b.color(a.color())
##puts a.color()
#
## a.each do |atome|
##   puts atome.class
##end

#`
#
#	ssu = new SpeechSynthesisUtterance()
#	ssu.lang = "fr-FR"
#	ssu.text = "Bonjour, atome et éve, vous souhaite la bienvenue."
#	speechSynthesis.speak(ssu)
#
#
#
#`



def grab atome_id
  atomes = Atome.atomes
  atomes.each do |atome|
    if atome.atome_id == atome_id
      return atome
    end
  end
end

# todo important to debug get meth in a touch event
def get_for_debug_in_touch_meth prop, get_by = :id
  get_by = get_by.to_sym
  atomes = Atome.atomes
  molecule = []
  atomes.each do |atome|
    if atome.send(get_by) == prop
      molecule << atome
    end
  end
  if molecule.length == 1
    return molecule[0]
  else
    # we are on a hash so we have all methods for array in module Properties
    return molecule
  end
end

def get prop, get_by = :id
  get_by = get_by.to_sym
  #puts "prop : #{prop}, get_by #{get_by}"
  atomes = Atome.atomes
  molecule = []
  #atomes.each do |atome|
  #  puts atome
  #end
  atomes=Atome.atomes
  atomes.each do |id, atome|
    if  atome.id == prop
      return atome
    end
  end


  #atomes.each do |atome|
  #  if atome.send(get_by) == prop
  #    molecule << atome
  #  end
  #end
  #if molecule.length == 1
  #  return molecule[0]
  #else
  #  # we are on a hash so we have all methods for array in module Properties
  #  puts "---------"
  #  puts molecule
  #  return molecule
  #  puts molecule
  #end
end

def decode atome_id
  Atome.atomes.each do |atome|
    if atome.atome_id == atome_id
      return atome.id
    else
    end
  end
end

def file_separator
  return "."
end

def get_last_project projects
  projects = projects.split("\n")
  last_project = projects[0]
  load(last_project)
end

def bufferize content
  Atome.buffer(content)
end

def read filename
  bufferize = "bufferize"
  filename = Atome.human + "." + filename
  `
   read_file(#{filename},#{bufferize},"()","");
   `
end


#class Array
#  def id val
#    props=[]
#    self.each do |atome|
#      props<< atome.send("id")
#    end
#    return props
#  end
#end

###################### eDen kickstart ####################


def eDen_genesis

  h = Atome.new
  ############# tests ###########
  #h.human
  #e=Atome.new
  #e.eDen
  #h.id="theman"
  #e.id="themachine"
  #b=box()
  #b.x= 200
  #p "-------------"
  #p Atome.atomes
  #p "------------"
  # p Atome.atomes.to_s
  ############# tests ###########
  #p "genesys Atome.user"

  machine = Atome.new
  machine.eDen
  machine.name = :my_device
  user = Atome.new
  user.human
  user.name = :anonymous
  project = Atome.new
  project.creation
  project.name = :project &&


      machine.add(child: user.atome_id)


  user.add(child: project.atome_id)
  #project.add(child: :test)
  #p machine
  #p user
  #p project
  ##todo change using new Atome.eDen
  #eden_content = "eDen_#{time}.#{location}_0\n" + Atome.user + "\n" + Atome.user
  ##todo add user using new Atome.user
  ##we store the default project of user user anonymous, all anonyous prpject wiil be stored here
  #store(Atome.user, "project_0\nproject_0\n" , true)
  ##we store the eDen file that  all anonymous user and will contains all futur user on this machine
  #store(:eDen, eden_content, true)
  #store(:project_0,"#default code : project_0",false,:load , :project_0)
  #Atome.users([Atome.user])
end

def eDen_opening (eDen_content)
  ##puts "eden content is :"+eDen_content+"####"
  # todo : important the machine is Atome.atomes[0] so to set the hash from file we just have to Atome.atomes[0]= "file callbck content"...
  eDen = Atome.eDen
  #eDen_content = eDen_content.split("\n")
  ##we get current eden Id  found in the first line of eden file content and set it in eDen object (getting and suppressing the first element of array with shift )
  #eDen.eDen_id(eDen_content.shift)
  ##we get current the last connected user find in line 2 of eDen file (getting and suppressing the first element of array with shift )
  #Atome.user = eDen_content.shift
  #Atome.users(eDen_content)
  ## we want to load ast project so we the file that has the name of the user then get the first line of this file that contain the last open project
  #load(Atome.user, "get_last_project", false, false, true)
  #  puts Atome.atomes
end

######################## init ##################
#def genesys
#  Atome.setup
#end

#todo ensure all libs are initialized ( zim, konva, apis.rb, etc...)
def init
  load(:eDen, :eDen_opening, "", :eDen_genesis, true)
  #load(:eDen, :eDen_opening, "", :genesys, true)
end

#init()

def dummy
  #a={type: :shape,color: :red, x: {x: 200, x: 300 }, child: :titi, "child" => :tutu}
  a = {type: :shape}, {color: :red}, {x: 200}, {x: 300}, {child: :titi}, {"child" => :tutu}
end


content = <<EOT
clear
run
#p dummy.class
b=box(color: :red, width: 200, content: :boxy)
#b.add(x: 400)
#b.add(x: 300)
p b
EOT

#content= <<EOT
#clear
#class Atome
#  def initialize content=:atome
#	if content == :box || content == :circle
#	  type = :shape
#	else
#	  type = content
#	end
#	@atome={id: [:my_obj] , type: [type], x: [0], y: [0], width: [100], height: [300], color: [:black], content: [content]}
#	@sub=nil
#	@@objects=[:x, :y, :color]
#	return self
#  end
#  def add electron, val
#	@atome[electron]<< val
#	return self
#  end
#
#  puts @@objects
#
#
#end
#a=Atome.new(:box)
##a.add(:x, 300)
##a.color(:green)
##p a.color
## a.color.x(200)
#p a
#
#
#
#
#EOT


content = <<EOT
clear
#run
#attention if vocal renderer is placed before html render the next lines will only be renderered in html
#attention if inside array
#attention if no type or preset are send at creation time it crash
a=Atome.new({atome_id: :la_boite},{preset: :box},{color: :cyan},{x: 50},{y: 70},{draggable: :true},{renderer: :html})
b=Atome.new({atome_id: :autre_polygone},{preset: :box},{color: :orange},{x: 150},{y: 70},{draggable: :true})
#a=Atome.new(:box)
#b = Atome.new({color: :blue},{atome_id: :poipoip})
#a.color([type: :color, color: :gray])
#a.color([{color: :blue}])
#a.color([{color: :blue},{x: 50},{y: 70},{draggable: :true}])
#a.color(:pink)
EOT
write content
#timeout 5000 do
#  p "###########"
#  p Atome.atomes
#  p "###########"
#
#end

open_ide(:true)
open_console(:true)
#a=`code=editor.getDoc().getValue("\n");`
#puts a
