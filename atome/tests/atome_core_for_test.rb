
# encoding: UTF-8
# frozen_string_literal: true
class Array
  def swap!(idx1, idx2)
    value1 = fetch(idx1)
    value2 = fetch(idx2)

    self[idx1] = value2
    self[idx2] = value1

    self
  end

  def pick(prop, mode = :value)
    prop_found = []
    each_with_index do |props, h_index|
      if props.keys[0] == prop.delete_suffix('s')
        if mode == :value
          prop_found << props.values[0]
        elsif mode == :electron
          prop_found << self[h_index]
        end
      end
    end
    if prop.end_with? 's'
      prop_found
    else
      prop_found[0]
    end
  end

  def delete_at_multi(arr)
    res = arr.map { |i| self[i] }
    arr = arr.sort.reverse.uniq # delete highest indexes first.
    arr.each do |i|
      delete_at i
    end
    res
  end
end

def constantize(camel_cased_word)
  # this method is used to call a class from it's String or symbole name
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

# below patch to use the class Number instead of the class Integer that is not supported by Opal
if defined?(Number) == 'constant'
else
  Number = Integer
end

def class_exists?(class_name)
  klass = Module.const_get(class_name)
  return true

rescue NameError
  return false
end
#here is all general methods helper for atomes



def trig atome_id, event
  atomes = Atome.atomes
  atomes.each do |_id, atome|
    if atome.atome_id == atome_id.to_s
      atome.trig(atome.touch, event)
    end
  end
end

def drag atome_id, event


  #atomes = Atome.atomes
  #atomes.each do |_id, atome|
  #  if atome.atome_id == atome_id.to_s
  #    atome.trig(atome.drag, event)
  #  end
  #end
end

def find_key hash, key

  return hash[key]

end

def grab(atome_id)
  atomes = Atome.atomes
  atomes.each do |_id, atome|
    return atome if atome.atome_id == atome_id
  end
end


def get(id)
  atomes = Atome.atomes
  atomes.each do |_id, atome|
    return atome if atome.id == id
  end
end

def read filename
  opal_read filename
end

# TODO: important to debug get meth in a touch event
#def get_for_debug_in_touch_meth(prop, get_by = :id)
#  get_by = get_by.to_sym
#  atomes = Atome.atomes
#  molecule = []
#  atomes.each do |atome|
#    molecule << atome if atome.send(get_by) == prop
#  end
#  if molecule.length == 1
#    molecule[0]
#  else
#    # we are on a hash so we have all methods for array in module Properties
#    molecule
#  end
#end



def decode(atome_id)
  Atome.atomes.each do |atome|
    return atome.id if atome.atome_id == atome_id
  end
end

def file_separator
  '.'
end

def get_last_project(projects)
  projects = projects.split("\n")
  last_project = projects[0]
  load(last_project)
end

def bufferize(content)
  Atome.buffer(content)
end





################## file operation ##############

def save filename =:default , content=nil
  if !content
    content=ide()
  end

  store filename, content
end



def auto_save
  save :autosave
end
################## system object  ##############


module Ide
  def self.text (size)
    ide_text_size size
  end
end

module Console
  def self.text (size)
    console_text_size size
  end
end

def alert(msg)
  msg = msg.to_s
  msg = msg.gsub("\n", '\\n')
  t = text msg
  t.color = :red
end



def puts(string)
  p string
end

def log(string)
  p string
end



def sanitizer(string)
  string = string.gsub("'", "\\\\'")
  string
end

def play
  Object.send(Renderer.engine + 'play', 'snare')
end

def bin_to_hex(s)
  s.unpack('H*').first
  # s.each_byte.map { |b| b.to_s(16).rjust(2, '0') }.join
end

def hex_to_bin(s)
  s.scan(/../).map { |x| x.hex.chr }.join
end

def autorun
  # method added here just to prevent method not found error
end

def run
  # method added here just to prevent method not found error
end

def render;
end

def language
  @language = 'french'
end

def time
  time = Time.now.strftime('%Y.%m.%d.%H.%M.%S.%L')
  time
end

def location
  # TODO: get real location for both cordoava and (web mode) !!
  location = '45.76988489999991_3.060128150002545'
  location
end


def find(script, string)
  script = script.split("\n")
  line_nb = nil
  script.each_with_index do |line, index|
    line = line.gsub("'", '"')
    line_nb = index if line.include? string
  end
  line_nb = script.length + 1 if line_nb.nil?
  line_nb
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




###################### eDen kickstart ####################

def eDen_genesis
  h = Atome.new

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
  # #todo change using new Atome.eDen
  # eden_content = "eDen_#{time}.#{location}_0\n" + Atome.user + "\n" + Atome.user
  # #todo add user using new Atome.user
  # #we store the default project of user user anonymous, all anonyous prpject wiil be stored here
  # store(Atome.user, "project_0\nproject_0\n" , true)
  # #we store the eDen file that  all anonymous user and will contains all futur user on this machine
  # store(:eDen, eden_content, true)
  # store(:project_0,"#default code : project_0",false,:load , :project_0)
  # Atome.users([Atome.user])
end

def eDen_opening(_eDen_content)
  # todo : important the machine is Atome.atomes[0] so to set the hash from file we just have to Atome.atomes[0]= "file callbck content"...
  eDen = Atome.eDen
  # eDen_content = eDen_content.split("\n")
  # #we get current eden Id  found in the first line of eden file content and set it in eDen object (getting and suppressing the first element of array with shift )
  # eDen.eDen_id(eDen_content.shift)
  # #we get current the last connected user find in line 2 of eDen file (getting and suppressing the first element of array with shift )
  # Atome.user = eDen_content.shift
  # Atome.users(eDen_content)
  ## we want to load ast project so we the file that has the name of the user then get the first line of this file that contain the last open project
  # load(Atome.user, "get_last_project", false, false, true)
end

######################## init ##################

# TODO: ensure all libs are initialized ( zim, konva, apis.rb, etc...)
def init
  load(:eDen, :eDen_opening, '', :eDen_genesis, true)
  # load(:eDen, :eDen_opening, "", :genesys, true)
end

# init()



################### temp methods ##############

#todo puts opal utils in a module
#
#class Opal_apis
#
#  def get_hash_val value, property
#    return value[property]
#  end
#
#end



def send_to_get_proc_content(proc)
  #puts proc
  lines = JS.get_proc_content(proc)
  value_found = ""
  proc_content = []
  lines = lines.split("\n")
  lines.shift
  lines.each_with_index do |line|
    line = line.gsub(".$", ".").gsub(";", "")
    if !line.include?('$writer[$rb_minus($writer["length"], 1)]')
      if line.include?("$writer = [")
        value_found = line.sub('$writer = [', "").sub(/]/i, '')
      elsif line.include?("$send(")
        content = line.sub("$send(", "").sub("Opal.to_a($writer))", "")
        content = content.split(",")
        variable = content[0].gsub(" ", "")
        property = content[1].gsub("'", "").gsub(" ", "")
        line = variable + "." + property + value_found
        proc_content << line
      else
        proc_content << line
      end
    end
  end

  return proc_content.join("\n")
end

################## Js 'pass-plat' ##############
class Js
  def self.method_missing(m, *args)
    opts = []
    args.each do |arg|
      opts << "'" + arg + "'"
    end
    opts = opts.join(',')
    send_msg = m + '(' + opts + ')'
    `eval(#{send_msg})`
  end
end

def to_js(fct, val)
  val = val.to_s
  val = val.gsub('"', '\"')
  js = fct + '("' + val + '")'
  `eval(#{js})`
end

def ide_text_size size
  `$(".CodeMirror ").css("font-size",#{size}+"px")`
end

def console_text_size size
  `$("#ruby_console ").css("font-size",#{size}+"px")`
end


################## file operation ##############

def store(filename, content = '', system_file = false, fct_to_call = false, fct_params = false, error_catch_fct = false)
  if filename.class == Hash
    content = filename[filename.keys[0]]
    filename = filename.keys[0]
  end
  #filename = Atome.human + '.' + filename if system_file == false
  filename = filename.to_s
  content = content.to_s
  `write_file(#{filename}, #{content}, #{fct_to_call}, #{fct_params}, #{error_catch_fct})`
end

module Opal_library

end


def load(filename, fct_to_call = 'add_to_screen', fct_params = false, error_catch_fct = false, system_file = false)
  if fct_to_call.to_sym == :human
    #Atome.human = filename
    load :eDen, :set_last_user
  end
  filename = filename.to_s
  if fct_to_call == 'add_to_screen' || fct_to_call == 'bufferize' || fct_to_call == 'renamer' || fct_to_call == 'puts' || fct_to_call == 'alert' || fct_to_call == 'text' || fct_to_call == 'dynamic_code'
  end
  `
   read_file(#{filename},#{fct_to_call}, #{fct_params}, #{error_catch_fct});
   `
end


def opal_read filename

  `
$.ajax({
    url: #{filename},
    dataType: 'text',
    success: function (data) {
       Opal.eval(data);
    }
});
//$( "#html_view" ).load( "atome/file/db_roda.js" );
`
end

###################### exec user script ####################

def add_to_screen(content)
  #$PROCESS_ID.add_to_ide(content)
  JS.add_to_ide(content)
  #`add_to_ide(#{content})`
end

def ide(content = nil)
  if content
    `add_to_ide(#{content})`
  else
    code = `code=editor.getDoc().getValue("\n")`
    return code
  end
end

def write(content)
  `add_to_ide(#{content})`
end


def deep_analysis(code)
  #for Atome mode only
  if class_exists?(:Atome)
    Atome.delete(:code)
  end
  # we store the whole code in Atome.code
  # we parse code to remove in case of commented require
  code = code.gsub('#require', '#')
  if code.include? 'require'
    lines = code.split("\n")
    require_list = []
    lines.each_with_index do |line, _index|
      require_list << line.strip if line.start_with? 'require'
    end
    require_list.each_with_index do |get_this, index|
      get_this = get_this.sub('require', '').gsub("'", '').gsub('"', '').gsub(':', '').strip
      if index == require_list.length - 1
        load get_this, 'dynamic_code', true
      else
        load get_this, 'dynamic_code', false
      end
    end
  else
    `
    run_script(#{code})
  `
  end
end

#def run_code
#  ## allow eVe to remove all object expet the two first :  the human (the user) and eDen ( the machine)
#  if class_exists?(:Atome)
#    Atome.purge
#  end
#  code = `code=editor.getDoc().getValue("\n")`
#  clear(:view)
#  if code.include? 'require'
#    deep_analysis code
#  else
#    `
#    run_script(#{code})
#  `
#  end
#
#  nil
#end

def code(code = nil)
  if code
    $PROCESS_ID.editor.getDoc.setValue(code)
  else
    code = $PROCESS_ID.editor.getDoc.getValue("\n")
  end
end

def timeout(time)
  `setTimeout(function(){ #{yield} }, #{time})`
end

def wait(time)
  `setTimeout(function(){ #{yield} }, #{time})`
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

def select_all
  `
  CodeMirror.commands["selectAll"](editor)
  `
end

def reformat_selection
  `
        var range = getSelectedRange();
        editor.autoFormatRange(range.from, range.to);
  `
end

def reformat_all
  select_all
  `
        var range = getSelectedRange();
        editor.autoFormatRange(range.from, range.to);
  `
end

def replace_selection(modified_selection)
  `editor.replaceSelection(#{modified_selection})`
end

def comment_selection
  selection = `editor.getSelection()`
  if selection == ''
  end
  selection = selection.split("\n")
  modified_selection = []
  selection.each do |line|
    modified_selection << if line.start_with?('#')
                            line[1..-1]
                          else
                            '#' + line
                          end
  end
  modified_selection = modified_selection.join("\n")
  replace_selection(modified_selection)
end

#def auto_save
#  save :autosave
#  # code_content = code
#  # if Object.const_defined?(:Atome)
#  #  store(Atome.project_on_screen, code_content)
#  # else
#  #  `console.log('create an project_on_screen global variable')`
#  # end
#end

def auto_run
  `
    if(!auto_run_active){
        function start_auto_run_countdown(){
  if (typeof(auto_run_countdown) != "undefined"){
      clearTimeout(auto_run_countdown);
  }
    auto_run_countdown = setTimeout(function(){ #{clear(:console)};#{run_code}}, 500);
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

def shortcut
  `
  function auto_save() {
setTimeout(function(){#{auto_save}}, 300);
    }
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'r') {
#{run_code}
  }
   else if (event.ctrlKey && event.key === 'i') {
#{open_ide(:toggle)}
  }
 else if (event.ctrlKey && event.key === 'j') {
#{reformat_selection}
  }
   else if (event.ctrlKey && event.key === 'e') {
#{reformat_all}
  }
  else if (event.ctrlKey && event.key === 'c') {
#{comment_selection}
  }
        else if (event.ctrlKey && event.key === 't') {
#{open_console(:toggle)}
  }
        else if (event.ctrlKey && event.key === 'x') {
#{clear(:console)}
  }
      else  if (event.ctrlKey && event.key === 'a') {
#{auto_run}
  }
      else   if (event.ctrlKey && event.key === 'y') {
#{reboot}
  }
else{
auto_save();
}
});
  `
end

shortcut

def p(string)
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


def clear(option = :console)
  option = option.to_sym
  if option == :view || option == :screen
    #todo: 'temporary patch to erase the screen works only with HTML rendering'
    `
    $("#html_view").html("")
    `
  elsif option == :ide
    ide ""
  elsif option == :console
    `
  $("#ruby_console").html("")
    `
  end
end

def sanitizer(string)
  string = string.gsub("'", "\\\\'")
  string
end


#def find(script, string)
#  script = script.split("\n")
#  line_nb = nil
#  script.each_with_index do |line, index|
#    line = line.gsub("'", '"')
#    line_nb = index if line.include? string
#  end
#  line_nb = script.length + 1 if line_nb.nil?
#  line_nb
#end

def replace(content, line)
  `editor.replaceRange(#{content}+"\n", CodeMirror.Pos(#{line},0) , CodeMirror.Pos(#{line + 1},0))`
end

def reboot
  `window.location.reload(true)`
end

class Context
  def self.name
    return Ruby_Opal
  end
end


def opal_setter(atome_id, property, value)
  puts "atome id is #{atome_id}, property #{property}, value is #{value}"
  atomes = Atome.atomes
  atomes.each do |_id, atome|
    if atome.atome_id == atome_id
      atome.send( property, value)
    end
  end
end






class Render_engine
  # this method parse the atome to search for render engines and once found dispatch to the corresponding render engine.
  # Please notte that the same part could be send simulteanoulsy to multiples render engine
  @@render_engines = %i[Fabric Headless Html Konva Three Zim Vocal]


  def self.atomize atome
    new_structure={}
    prop_found=[]
    atome.each_with_index do |particle, index|
      # we put all particle found in this array to check if this particle is present many times
      if new_structure.key?(particle.keys[0])
        new_structure[particle.keys[0]]=new_structure[particle.keys[0]] << particle.values[0]
      else
        if particle.values[0].class==Array
          if particle.values[0].length >1
            new_structure[particle.keys[0]]=[particle.values[0]]
          else
            new_structure[particle.keys[0]]=particle.values[0]
          end

        else
          new_structure[particle.keys[0]]=particle.values[0]
        end
      end
    end
    return new_structure
  end

  def self.inception(props, atome)
    atome_to_render = []
    atome_id = @last_atome_id
    properties_to_delete = []
    if props.class == Array
      props.each do |prop|
        inception prop, props
      end
    else
      if props.keys[0] == :renderer
        render_engine = props.values[0].capitalize
        # the line below call the render engine, first it turn the value passed (render_engine) into a constant, then call the init function of the render engine callles
        atome.each_with_index do |prop, index|
          if prop.class == Hash
            prop.each do |key, value|
              # we delete all key pair the renderer doesn't need to render (id renderer atome_id)
              if key == :atome_id
                atome_id = value
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
            #in this case multiple value are send to the renderer so it's a sub prop such as shadow(color, blur, x , y) or a gradient, ...
            #todo : "msg from photon line 38 : we must recursively get array to find type to send it to the render"
            property_found_from_type = ""
            value_found_in_array = []
            prop.each do |property|
              if property.keys[0].to_sym == :type
                #here we get the sub property name
                property_found_from_type = property.values[0]
              else
                #here we get the sub property values and put it in array formmated like this [sub_prop_name, value,sub_prop_name, value] so Javascript can re constituate the hash
                #value_found_in_array << property.keys[0]
                #value_found_in_array << property.values[0]
                value_found_in_array << {property.keys[0] => property.values[0]}
              end
            end
            atome_to_render << {property_found_from_type => value_found_in_array}
          end
        end
        #puts "msg from photon line 80 :atome_to_render: :#{atome_to_render}"
        #atome_to_render2=atomize(atome_to_render) #we restructure the atome (we group properties define more than on time) to facilitate rendering
        #puts "msg from photon line 82 :atome_to_render: :#{atome_to_render2}"
        # here we send the atome and its id to the transpile render engine ex send to module HTML module fould in transpile_html_to_js  file
        #puts "msg from photon line 84 : <br>#{atome_to_render},id #{atome_id}"
        constantize(render_engine).init(atome_to_render, atome_id)
      end
    end
  end

  def self.render(atome_id)
    # after a bit of analysis we send the result to the differents render engines
    if class_exists?(:Atome)
      atome = Atome.atomes[atome_id.to_s]
      atome = atome.to_array
      #puts "msg from photon line 66 props "
      #puts "-----------------------"
      #puts atome
      #puts atome.class
      #puts "-----------------------"
      atome.each do |props|
        #puts "msg from photon line 52 props : #{props}"
        if props.class == Array
          #puts "msg from photon line 69 props : #{props} "
          props.each do |prop|
            inception prop, props
          end
        else
          #puts "msg from photon line 78 hash props "
          #puts props
          inception props, atome
        end
      end
    end
  end
end


module Proton

  def self.events
    events={touch_me: :false, touch: :false, drag: :false, over: :false}
  end

  def self.properties
    properties = {atome_id: :xxxxxxx,key: :false, id: :my_object, preset: :default, content: :lorem, color: :lightgray, x: 0, y: 0, z: 0, width: 100, height: 100,size: 16, rotate: 0,blur: 0,transparency: 0, child: :none, name: :eVe_object, shadow: 20, border: 3, label: :eVe_label, type: :text, language: :english, display: :true, run: :true, renderer: :html, selected: :false, editable: :false, draggable: :false}.merge(events)
  end

  def self.atome_methods
    atome_methods = []
    properties.each do |object, _default_value|
      atome_methods << object
      atome_methods << (object.to_s + 's').to_sym
      atome_methods << (object.to_s + '=').to_sym
    end
    atome_methods
  end

  def self.visual_types
    ##visual_types's key is the name of type, the value is the associated preset for the type
    visual_types={shape: :box, image: :logo, text: :lorem}
  end

  def self.types
    types = {effect: :distort, sound: :jingle, human: :user, machine: :computer, tool: :text, group: :empty, code: :hello, atome: :foo}.merge(visual_types)
  end

  def self.presets
    #presets's key is the preset name, the value is the content of the presets
    presets = {circle: 'circle desc', box: 'box desc', star: 'star desc', triangle: 'triangle desc', polygon: 'polygon desc', squiggle: 'squiggle desc', bloob: 'bloob desc', text: 'lorem ipsum dolore', user: 'anonymous', computer: 'riscPC', code: "print 'hello world'", foo: 'this object has no body'}
  end

  def self.default_visuals
    default_visuals={}
    visuals_presets=[:x,:y,:width,:height,:color]
    visuals_presets.each do |visual_property|
      default_visuals[visual_property] =  properties[visual_property]
    end
    return default_visuals
  end

end



class Atome
  #@@definition_order = %i[type preset content]
  @@atomes = {}
  @@black_hole = [] # deleted atomes
  @@buffer = []
  attr_reader :atome

  def initialize(*options)
    create_atome_id = true
    create_id = true
    get = false
    item_to_delete = []
    options.each_with_index do |option, index|
      if option.class == Hash
        # below we remove the hash containing the info to create an atome_id or not and also remove the atome_id, in case a user try to force the value of the atome_id
        if option.keys[0] == :create_atome_id || option.keys[0] == :atome_id
          create_atome_id = option.values[0]
          item_to_delete << index
          # options.delete_at(index)
        end
        if option.keys[0] == :get_mode
          get = option.values[0]
          item_to_delete << index
        end
      elsif option.class == Symbol || option.class == String
        # if it's a symbol or a string whe try to find if the user send a preset otr a type
        #:todo buggy code below must be re work
        #if Proton.presets.include?(option)
        #  # so it's a preset we seach for its type
        #  preset = {}
        #  type = {}
        #  preset[:preset] = option
        #  type[:type] = Proton.types.key(option)
        #  options = [preset, type]
        #elsif Proton.types.include?(option)
        #  # so it's a type we seach for its preset
        #  preset = {}
        #  type = {type: option}
        #  preset[:preset] = Proton.types[option]
        #  options = [type, preset]
        #end
      end
    end
    item_to_delete.each do |item|
      options.delete_at(item)
    end

    # the initialize methods is used to parse the params sends
    @atome = []
    @atome_initial_state = []
    if get
      # the get options allows to return only the wanted prop
      @atome = options
      return self
    end
    # we uniformise the data received into an array in order to treat it later
    options ||= []
    # if the user submit only a string or symbol instaed of he hash we have to create a simple object and find either the associated preset from type or the type from its preset
    if options.class == Symbol || options.class == String
      Proton.types.each do |type|
        if type[0].to_sym == options.to_sym
          @atome_initial_state << {type: options}
        elsif type[1].to_sym == options.to_sym
          type = Proton.types.key(options)
          @atome_initial_state << {type: type}
          @atome_initial_state << {preset: options}
        end
      end
    else

      @atome_initial_state = options
    end
    @atome_initial_state = sanitize_prop(nil, @atome_initial_state)
    # below we search if the render engine has been defined
    renderer_define = false
    @atome_initial_state.each do |option|
      # here we check only have to check first level for the renderer
      next unless option.class == Hash

      renderer_define = true if option.keys[0] == :renderer
    end
    # we create an automaticaly generated id
    if create_id
      id = 'unknown_'
      @atome_initial_state.each do |property_key_pair|
        if property_key_pair.keys[0].to_sym == :preset
          id = property_key_pair.values[0].to_s + '_'
        elsif property_key_pair.keys[0].to_sym == :type
          id = property_key_pair.values[0].to_s + '_'
        end
      end
      id = (id + @@atomes.length.to_s).to_sym
      @atome_initial_state.unshift(id: id)
    end
    if create_atome_id
      #atome_id generation here
      atome_id = object_id
      @atome_initial_state.unshift(atome_id: atome_id)
    end
    unless renderer_define
      @atome_initial_state << {renderer: Proton.properties[:renderer]}
    end
    @atome_initial_state.each do |atomes|
      set(atomes)
    end
  end

  def class_exec proc, event
    puts "--------------------------- msg from class_exec in atome line 111 : #{event} ---------------------------"
    # solution self.current meth event
    instance_eval(&proc)
  end

  # we define all Atome's methods below with a bit of metaprogramming, methods ending with a s will be treated as batch for set, add, enhance and delete methods  or return an array for the getter method
  # All methods exept the getter mehod end up using the set method to add a modify a prop. ex : if the add method call the set methnod just changing the @add variable, so the set method accumulate prop instead of replacing it
  Proton.atome_methods.each do |property_fct|
    define_method(property_fct) do |*options, &proc|
      if proc
        #todo : important keep old code below and maybe add a condition if the property_fct is an event
        set({property_fct => proc})
      else
        if options[0].nil?
          # here the method call is a  getter
          get(property_fct)
        else
          # here the method call is a setter
          property_fct = property_fct.to_s.chomp('=').to_sym
          set({property_fct => options})
        end
      end
    end
  end

  # SAGED methods (Set Add Get Enhance Delete) the four main atome methods

  def set(*properties, &proc)
    if proc
      instance_exec(&proc)
    else
      properties.each do |props|
        #if props.class == Array
        #  # TODO: buggy code below maybe never used,anyway we have to analyse a bit before sending this to erase previous stored, even better factorise and externalise the whole analysis for the set method
        #  puts "atome line 148 #{props}"
        #  props = sanitize_prop(nil, props)
        #  insert_properties_in_atome(props)
        #  return self
        #elsif props.class == Hash
        #  insert_properties_in_atome(props)
        #  puts "okokokokoko goody"
        #end
        master_prop = props.keys[0]
        new_values = props.values[0]
        new_values = [new_values] if new_values.class != Array
        if master_prop.to_s.end_with?('s')
          master_prop = master_prop.to_s.chomp('s').to_sym
          new_values.each do |new_value|
            set({master_prop => [new_value]})
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
            cleanup_prop.unshift({type: master_prop}) if add_type
          elsif new_values[0].class == Symbol || new_values[0].class == String || new_values[0].class == Integer || new_values[0].class == Float || new_values[0].class == TrueClass || new_values[0].class == FalseClass || new_values[0].class == Number
            # if it's a uniq value we have to add the prop (master_prop)
            cleanup_prop = {master_prop => new_values[0]}
          elsif new_values[0].class == Hash
            # as the length of the hash should always be only 1,  we just have to check if the prop is the current of else we have to add typenew_values_array
            if new_values[0].keys[0] != master_prop
              cleanup_prop << {type: master_prop}
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
            new_values[0].unshift({type: master_prop}) if add_type
            cleanup_prop = new_values[0]
          elsif new_values[0].class == Proc
            #cleanup_prop = new_values[0]
            cleanup_prop = {master_prop => new_values[0]}
          end
          # now we clean the current @atome before updating it
          unless @add
            master_prop = (master_prop.to_s + 's').to_sym
            if @temp_prop
              delete(@temp_prop)
            else
              delete(master_prop)
            end
          end
          # we add the whole new prop to the atome
          if @temp_prop # in this case prop is generated using using a proc (in @@atome_methods.each)
            # we remove whe  get_mode prop that doesn't have to be stored
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

  def add(*properties, &proc)
    if proc
      @add = true
      instance_exec(&proc)
      @add = false
    else
      @add = true
      properties.each do |property|
        set property
      end
      @add = false
    end
    self
  end

  def get(property)
    pluralize = false
    if property.to_s.end_with?('s')
      pluralize = true
      property = property.to_s.chomp('s').to_sym
    end
    found_prop = []
    @atome.each do |props|
      if props.class == Hash
        found_prop << props.values[0] if props.keys[0] == property
      elsif props.class == Array
        # Attention here we have to find if the type of the atome correspond to the property requested !!
        props.each do |atome|
          next unless atome.class == Hash
          if atome.keys[0] == :type && atome.values[0] == property
            found_prop << props
          end
        end
      end
    end
    events= Proton.events.keys
    if pluralize
      found_prop
    elsif property == :atome_id || property == :id || property == :label
      # we made an exeption and return a string when the prop is an id, an atome_id or a label
      #:todo make an exeption list of type that shouldn't return an atome
      found_prop[0].to_s
      # if its an event, todo : create a list of prop of all events,   todo : get content using parser or Opal
    elsif events.include? property ##if the val is an event then we return the prop instead of a an atome object
      return found_prop[found_prop.length - 1]
    else
      # Here we create an atome to allow getter properties to respond to methods then return the corresponding value ex: - puts a.color => :black

      Atome.new(found_prop[found_prop.length - 1], {create_atome_id: :false}, {get_mode: :true})
    end
  end

  def self.trig proc
    class_exec(proc)
  end

  def trig proc , event
    class_exec(proc, event)
  end

  def enhance(*properties)
    # TODO: exchange or enhance targeted prop
  end

  def delete(*properties)
    if !properties.empty?
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
        if prop.to_s.end_with?('s')
          pluralize = true
          prop = prop.to_s.chomp('s').to_sym
        end
        @atome.each_with_index do |atome, index|
          if atome.class == Hash
            atome.keys.each do |key|
              list_of_matching_prop << index if key == prop
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
        index_to_delete.each_with_index do |_add_to_list, index|
          if index_to_delete[index].class == Integer || index_to_delete[index].class == Float || index_to_delete[index].class == TrueClass || index_to_delete[index].class == FalseClass || index_to_delete[index].class == Number
            user_list_of_prop_to_delete << list_of_matching_prop[index_to_delete[index]]
          else
            # TODO: search for prop with id and delete
            puts "todo : search for prop with id   #{index_to_delete[index]}"
          end
        end
        if !user_list_of_prop_to_delete.empty?
          if user_list_of_prop_to_delete && !user_list_of_prop_to_delete[0].nil?
            @atome.delete_at_multi(user_list_of_prop_to_delete)
          end
        else
          @atome.delete_at_multi(list_of_matching_prop) if list_of_matching_prop
        end
      else
        last_item = list_of_matching_prop[list_of_matching_prop.length - 1]
        @atome.delete_at(last_item) if last_item
      end
    else
      @atome = []
    end
  end

  # ------- Various utils methods below -------
  # Analysis of prop below
  def sanitize_prop(property_fct, options)
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
            # TODO: attention recursive analysis not done if a hash is in a hash it wont be processed and restrutured!!
            # todo  some treatment must be added : get the content for #{sanitized_opt}
          elsif index.class == Array
            index.unshift(type: key)
            # TODO: some treatment may be added : get the content for #{index}
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

    sanitized_opt
  end

  def check_if_type_exist(new_values, master_prop)
    # TODO: make it works at the first level
    # we check if current type is in the array else we add it
    add_type = true
    new_values.each do |prop|
      if prop.class == Hash
        if prop.keys[0] == :type && prop.values[0] == master_prop
          add_type = false
        end
      elsif prop.class == Array
        prop.each do |item|
          next unless item.class == Hash

          if item.keys[0] == :type && item.values[0] == master_prop
            add_type = false
          end
        end
      end
    end
    if add_type
      true
    else
      false
    end
  end

  def insert_properties_in_atome(properties)
    # this method is called when a property is added or modified , the insert_properties_in_atome method is call by the set method.
    # The insert_properties_in_atome add the the prop in the @atome hash and also add the current atome in he @atomes hash(this hash contain all current atoms)
    # finaly the  insert_properties_in_atome send the current atome to the Render engine.
    if properties.class==Hash && properties.values[0].class == Proc
      proc = properties.values[0]
      proc = send_to_get_proc_content(proc)
      puts "msg from atome line 416 ------ the proc can now be store we now have to eval the code instead of instance eval the proc ------"
      puts proc
      puts "----------"
    end

    @atome << properties
    # now we store the current @atome id in the current @atomes array
    @@atomes[atome_id.to_s] = self
    # we send the id of the atome to be renderered to the main render engine for analysys
    Render_engine.render(atome_id)
  end

  def length
    @atome.length
  end

  def each(&block)
    @atome.each(&block)
  end

  def to_hash
    to_enum(self)
  end

  def to_array
    atome = []
    each do |property|
      atome << property
    end
    atome
  end

  def check
    atome = @atome.to_s
    atome
  end

  def to_s
    @atome.each_with_index do |atome, index|
      if atome.class == Hash && atome.keys[0] == :get_mode
        @atome.delete_at(index)
        @atome = @atome[0]
      end
    end
    # below it's just to  cleanup the result for the user
    if @tome.class == Array && @atome.length == 1 && !@@atome[0].nil?
      @@atome[0]
    else
      @atome.to_s
    end
  end

  def [](_val = nil)
    @atome
  end

  def self.atomes
    @@atomes
  end

  def nuke
    @@atomes = {}
  end

  def self.nuke
    @@atomes = {}
  end

  def self.purge
    # allow eVe to remove all object exept the two first :  the human (the user) and eDen ( the machine)
    @@atomes = {}
  end

  def self.properties
    @@properties
  end

  def methods
    Proton.atome_methods
  end

  def self.methods
    Proton.atome_methods
  end
  def self.presets
    return Proton.presets
  end

  def self.version
    return "v:0.03"
  end
end

puts "Good goody!!!"
b=Atome.new()
puts b.id
puts "--------"
#		puts b