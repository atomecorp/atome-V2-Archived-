require 'opal-parser'
require 'js'
require 'native'
# encoding: UTF-8
# frozen_string_literal: true

module Devicer
  def self.width
    `window.innerWidth`
  end
  def self.Height
    `window.innerHeight`
  end
end

################### temp methods ##############

#todo puts opal utils in a module
module Opal_library

end

def require

end

################### get proc content with methods below ##############

def get_hash_value prop_array, property
  prop_found = ""
  prop_array.each do |value|
    if value.keys[0] == property
      prop_found = value[property]
    end
  end
  return prop_found
end

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


################## code execution ##############

$require_list = {}
$split_on = []
$counter = 1
$codes_call = []
$total_pass = 0

def require_parser code
  $codes_call << code
  $total_pass += 1
  analysed_code = code.split("\n")
  analysed_code.each do |line|
    line = line.strip
    if line.start_with?("require")
      $counter += 1
      $split_on << line
      new_line = line.sub('require', '').sub(':', '').gsub('"', '').strip
      $require_list[new_line] = ""
    end
  end
  #we send the required file to loader function
  $require_list.keys.each do |code_to_load|
    $require_list.delete(code_to_load)
    loader(code_to_load, :require_parser)
  end
  $counter -= 1
  if $counter == 0
    base_code = $codes_call[0]
    $split_on.each_with_index do |spliter, index|
      base_code = base_code.sub(spliter, $codes_call[index + 1])
    end
    #we reinit all datas
    $require_list = {}
    $split_on = []
    $counter = 1
    $codes_call = []
    $total_pass = 0
    base_code = base_code + "\nrender()"
    #puts "msg from opal_utils line 124 ad render at the file of the code : #{base_code}"
    `
    run_script(#{base_code})
  `
  end
end

def run_code (clear = false)
  code = `code=editor.getDoc().getValue("\n")`
  if clear
    if class_exists?(:Atome)
      Atome.purge
    end
    clear(:view)
  end
  require_parser(code)
  nil
end


################## file operation ##############
def saver(filename, content = '', system_file = false, fct_to_call = false, fct_params = false, error_catch_fct = false)
  if filename.class == Hash
    content = filename[filename.keys[0]]
    filename = filename.keys[0]
  end
  #filename = Atome.human + '.' + filename if system_file == false
  filename = filename.to_s
  content = content.to_s
  `write_file(#{filename}, #{content}, #{fct_to_call}, #{fct_params}, #{error_catch_fct})`
end

def loader(filename, fct_to_call = 'add_to_ide', fct_params = false, error_catch_fct = false)
  if fct_to_call == "console"
    fct_to_call = 'add_to_console'
  elsif fct_to_call == "add_to_screen"
    fct_to_call = 'add_to_ide'
  end
  filename = filename.to_s
  `
   read_file(#{filename},#{fct_to_call}, #{fct_params}, #{error_catch_fct});
   `
end

# below read local file and send the result to console or exec it
def reader filename, action = "run"
  #to send to console action="console"
  `
  read_from_disk(#{filename}, #{action})


`
end

def add_to_console(content)
  puts content
end

def add_to_ide(content = nil, run = false)
  if content
    JS.send_to_ide(content, run)
  else
    code = `code=editor.getDoc().getValue("\n")`
    return code
  end
end


################## sound DSP operation ##############

def player params
  `
  var audio = new Audio('./medias/sounds/'+#{params}+'.wav');
  //var audio = new Audio('./medias/sounds/guitar.wav');
  audio.play();
 `
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

def perpetual_run
  `
    if(!auto_run_active){
        function start_auto_run_countdown(){
  if (typeof(auto_run_countdown) != "undefined"){
      clearTimeout(auto_run_countdown);
  }
    auto_run_countdown = setTimeout(function(){ #{clear(:console)};#{run_code(true)}}, 500);
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
#{run_code(true)}
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
#{perpetual_run}
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

################## misc #################

def p(string)
  string = string.to_s
  `
  var prev_content=$("#ruby_console").html();
  new_puts =#{string}
  const regex = /</gi;
new_puts=new_puts.replace(regex, '\<');
  const regex2 = /\n/gi;
new_puts=new_puts.replace(regex2, '<br>');
  if(new_puts!=""){
    var content = prev_content+new_puts+"<br>";
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
    add_to_ide("")
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
  #puts "msg from opal_utils line 480 : atome id is #{atome_id}, property #{property}, value is #{value}"
  atomes = Atome.atomes
  atomes.each do |_id, atome|
    if atome.atome_id == atome_id
      puts "msg from opal_utils line 484 atome_id #{atome_id} property #{property} value #{value}"
      #i.set(direct_atome: :true, x: 777)
      #value[:direct_atome]=:true
      #puts "msg from opal_utils line 471 property #{property} value #{value}"

      atome.send(property, value)
    end
  end
end

def timeout(time)
  time = time.to_f
  `setTimeout(function(){ #{yield} }, #{time})`
end

def waiter(time)
  time = time.to_f
  `setTimeout(function(){ #{yield} }, #{time * 1000})`
end


def everyer(option, times, &proc)
  if option.class==Hash
    every=option[:every]
    times=option[:times]
  else
    time=option
  end
  `  var timesRun = 0;
var interval = setInterval(function(){
    timesRun += 1;
    if(timesRun === #{times}){
        clearInterval(interval);
    }
 #{yield}
}, #{every}*1000);
`
end

def refresher
  `html.refresh()`
end

def httper(url)
  `window.open("https://"+#{url})`
end
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

def find_key hash, key
  return hash[key]
end

def bin_to_hex(s)
  s.unpack('H*').first
  # s.each_byte.map { |b| b.to_s(16).rjust(2, '0') }.join
end

def hex_to_bin(s)
  s.scan(/../).map { |x| x.hex.chr }.join
end

def time
  time = Time.now.strftime('%Y.%m.%d.%H.%M.%S.%L')
  time
end


# here is alll methods that facilitate the atome creation
# frozen_string_literal: true
# proton provide namespaced methods used mainly by the atome obejct but also by abastraction layer and end users
module Proton

  def self.events
    events = {touch_me: :false, touch: :false, drag: :true, over: :false}
    events
  end

  def self.properties
    properties = {atome_id: :xxxxxxx, key: :false,animate: :false, delete: :false,id: :my_object, preset: :default, content: :lorem, float: :false,color: :lightgray, x: 70, y: 70, z: 0, width: 100, height: 100, size: 16, rotate: 0,align: :center, blur: 0, opacity: 1, smooth: 7, child: :none, name: :eVe_object, shadow: 20, border: {thickness: 7,color: :red}, label: :eVe_label, type: :text, language: :english, display: :true, run: :true, renderer: :html, selected: :false, editable: :false, draggable: :true, property: :all,select: :none, group: :none, lock: :false, overflow: :hidden, left: :unset, right: :unset, top: :unset, bottom: :unset}.merge(events)
    properties
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
    #visual_types's key is the name of type, the value is the associated preset for the type
    visual_types = {shape: :box, image: :logo, text: :lorem, video: :logo}
    visual_types
  end

  def self.types
    types = {particle: :particle, effect: :distort, sound: :jingle, human: :user, machine: :computer, tool: :text, group: :empty, code: :hello}.merge(visual_types)
    types
  end

  def self.presets
    #presets's key is the preset name, the value is the content of the presets
    presets = {particle: :particle,circle: 'circle desc', box: 'box desc', star: 'star desc', triangle: 'triangle desc', polygon: 'polygon desc', squiggle: 'squiggle desc', bloob: 'bloob desc', text: 'lorem ipsum dolore', user: 'anonymous', computer: 'riscPC', code: "print 'hello world'", foo: 'this object has no body'}
    presets
  end

  def self.default_visuals
    default_visuals = {}
    visuals_presets = [:x, :y, :width, :height, :color, :overflow]
    visuals_presets.each do |visual_property|
      default_visuals[visual_property] = properties[visual_property]
    end
    return default_visuals
  end

end

#here is all general methods helper for atomes
# frozen_string_literal: true
#neutron provide public methods used both by end users and needed by the atome object

module Device

  def self.width
    Devicer.width
  end

  def self.height
    Devicer.height
  end

end

$render = false

def render *option
  #puts "msg form neutron line 7 : render go"
  $render = true
end

def refresh
  refresher
end

def trig atome_id, event
  atomes = Atome.atomes
  atomes.each do |_id, atome|
    if atome.atome_id == atome_id.to_s
      atome.trig(atome.touch, event)
    end
  end
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


def decode(atome_id)
  Atome.atomes.each do |atome|
    return atome.id if atome.atome_id == atome_id
  end
end

def file_separator
  '.'
end


def bufferize(content)
  Atome.buffer(content)
end

################## file operation ##############

def save filename = :default, content = nil
  if !content
    content = add_to_ide()
  end
  saver(filename, content)
end

def auto_save
  save :autosave
end

def load(filename, fct_to_call = 'add_to_screen', fct_params = false, error_catch_fct = false)
  loader(filename, fct_to_call = 'add_to_screen', fct_params = false, error_catch_fct = false)
end

def read filename #  read local file
  reader filename
end

################## utils  ##############
def wait(time, &proc)
  waiter(time) do
    yield
  end
end

def every(option = 1, times = 5, &proc)
  everyer(option, times,&proc)
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
  t.size = 25
  t.touch do
    t.delete()
  end
end


def write(content = nil, run = false)
  add_to_ide(content, run)
end

def puts(string)
  p string
end

def log(string)
  p string
end

def sanitizer(string)
  string = string.gsub("'", "\\\\'")
end


def play(params)
  player(params)
  # Object.send(Renderer.engine + 'play', 'snare')
end


def autorun
  # method added here just to prevent method not found error
end

def run
  # method added here just to prevent method not found error
end

def language
  @language = 'french'
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

def http url
  httper(url)
end


def lorem
  srt = <<STRdelim
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

STRdelim
end

def lorem2
  srt = <<STRdelim
  Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
STRdelim
end

def lorem3
  srt = <<STRdelim
Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
STRdelim
end

def help(subject = "")
  if subject == ""
    return Help.send(:api)
  else
    return Help.send(subject)
  end
end

def example(subject = "")
  return Example.send(subject)
end


def demo demo
  write(Demo.send(demo))
end



# frozen_string_literal: true

# Render engine

class Photon
  # this method parse the atome to search for render engines and once found dispatch to the corresponding render engine.
  # Please notte that the same part could be send simulteanoulsy to multiples render engine
  @@photons = %i[Fabric Headless Html Konva Three Zim Vocal]

  def self.atomize atome
    new_structure = {}
    prop_found = []
    atome.each_with_index do |particle, index|
      # we put all particle found in this array to check if this particle is present many times
      if new_structure.key?(particle.keys[0])
        new_structure[particle.keys[0]] = new_structure[particle.keys[0]] << particle.values[0]
      else
        if particle.values[0].class == Array
          if particle.values[0].length > 1
            new_structure[particle.keys[0]] = [particle.values[0]]
          else
            new_structure[particle.keys[0]] = particle.values[0]
          end
        else
          new_structure[particle.keys[0]] = particle.values[0]
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
        photon = props.values[0].capitalize
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
                #here we get the sub property values and put it in array formmated like this [sub_prop_name, value,sub_prop_name, value] so Javascript can re constitute the hash
                #value_found_in_array << property.keys[0]
                #value_found_in_array << property.values[0]
                # uncomment below to send a hash and comment above
                value_found_in_array << {property.keys[0] => property.values[0]}
              end
            end
            atome_to_render << {property_found_from_type => value_found_in_array}
          end
        end
        #atome_to_render2=atomize(atome_to_render) #we restructure the atome (we group properties define more than on time) to facilitate rendering
        # here we send the atome and it's id to the transpile render engine ex send to module HTML module fould in transpile_html_to_js  file

        constantize(photon).init(atome_to_render, atome_id)
      end
    end
  end

  def self.render(atome_id)
    # after a bit of analysis we send the result to the different render engines
    #  puts "msg from photon line 89 : render! #{atome_id} "
    #if $render
      if class_exists?(:Atome)
        atome = Atome.atomes[atome_id.to_s]
        atome = atome.to_array

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
      $render=false
    #end

  end

  def self.delete(property, atome_id)
    grab(atome_id).each do |properties|
      if properties.class==Hash && properties.keys[0] == :renderer
       renderer = properties.values[0].capitalize()
         constantize(renderer).init([delete: :true], atome_id)
      end
    end
  end
end


################ media manipulation ############

def anim(params)
  obj= params[:target]
  if obj.nil?
    obj= self.atome_id
  elsif obj.class==Atome
    obj =obj.atome_id
  else
    obj =Object.get(obj).atome_id
  end
  params.delete(:target)
  animator(params, obj)

end
# frozen_string_literal: true

####################################### view generator ##########################

####### zim render engine #############

def zim_clear(option = :view)
  option = option.to_sym
  `
   zim_lib.app.stage.removeAllChildren();
   zim_lib.app.stage.clear();
   zim_lib.app.stage.update();`
end

module Zim
  @visual_obj_list = []
  @code_footer = ''
  @code_header = ''


  def self.init(properties, atome_id)

  end
# code constructor for zim display
  def zim_formated_code
    code = ''
    code = @code_header + "\n" + @visual_obj_list.join("\n") + "\n" + @code_footer
  end

  #######  Zim objects #############
  def zim_constructor(atome_object, atome)
    atome_id = atome.atome_id
    `
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
     `
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
    zim_constructor(type, atome) if atome.visible.to_sym == :true
  end

  #######  Zim events #############
  def zim_touch(*_opts, &bloc)
    # opts to pass alt touch double touch long , etc...
    if bloc
      `
    zim_lib.grab(#{atome_id}).on("click", function (evt) {#{instance_exec(&bloc)};});
  //zim_lib.grab(#{atome_id}).on("click", function (evt) {#{yield};});
    `
    end
  end

  def zim_drag(*_opts)
    `
   zim_lib.grab(#{atome_id}).drag({currentTarget:true});
   `
  end

  def zim_change(*_opts)
    `
   zim_lib.grab(#{atome_id}).change({currentTarget:true});
   `
  end

  #######  zim properties #############

  def zim_gen_prop(properties, atome, opt)
    atome_id = atome.atome_id
    # below patch to allow user to use method with = or without
    exeptions_list = %i[color= x y z width height content=]
    if exeptions_list.include? properties.to_sym
      properties = if properties.end_with? '='
                     properties.sub('=', '')
                   else
                     properties + '='
                   end
    end

    if properties == 'content' || properties == 'child'
      properties = :text
      opt = opt.gsub("\n", '\\n') if properties == 'content'
    end
    # below patch to replace width and height with wdithOnly and heightOnly to allow lose ratio
    if properties.to_sym == :width= || properties.to_sym == :height=
      properties = properties.sub('=', '') + 'Only='
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

def zim_play(_media)
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
# class Zim
#  include Zim_renderer, Konva_renderer
#
#  def toto
#    box
#  end
#
# end
# frozen_string_literal: true

####### Urho3D render engine #############
module Urho3D
  def self.init(properties, atome_id)

  end

  Proton.atome_methods.each do |property_fct|
    self.define_singleton_method(property_fct) do |param, atome_id,add, &proc|
      JS.opalizer("html", property_fct, param, atome_id, add)
    end
  end

end
# frozen_string_literal: true

####### Fabric render engine #############
module Fabric
  def self.init(properties, atome_id)

  end
  Proton.atome_methods.each do |property_fct|
    self.define_singleton_method(property_fct) do |param, atome_id,add, &proc|
      JS.opalizer("html", property_fct, param, atome_id, add)
    end
  end
end
# frozen_string_literal: true
####### Html render engine #############

module Html
  def self.init(properties, atome_id)
    properties_already_send=[]
    properties.each do |property|
      add=false
      if properties_already_send.include? (property.keys[0])
        add=true
      end
      #here the we send the if tha prop and the option to add or set the prop plus the rendering pass nb to the html renderer in www/public/atome/render/engines/html.js
      send(property.keys[0], property.values[0], atome_id, add)
      properties_already_send << property.keys[0]
    end
  end

  Proton.atome_methods.each do |property_fct|
    self.define_singleton_method(property_fct) do |param, atome_id,add, &proc|
      JS.opalizer("html", property_fct, param, atome_id, add)
    end
  end

end

############### animatione

def animator(params,obj)

  if params[:start][:blur]
    value_found= params[:start][:blur]
    params[:start][:filter]="blur(#{value_found}px)"
    params[:start].delete(:blur)
  end
  if params[:end][:blur]
    value_found= params[:end][:blur]
    params[:end][:filter]="blur(#{value_found}px)"
    params[:end].delete(:blur)
  end
  if params[:start][:smooth]
    value_found= params[:start][:smooth]
    params[:start][:borderRadius]=value_found
    params[:start].delete(:smooth)
  end
  if params[:end][:smooth]
    value_found= params[:end][:smooth]
    params[:end][:borderRadius]=value_found
    params[:end].delete(:smooth)
  end

  if params[:start][:color]
    value_found= params[:start][:color]
    params[:start][:background]=value_found
    params[:start].delete(:color)
  end
  if params[:end][:color]
    value_found= params[:end][:color]
    params[:end][:background]=value_found
    params[:end].delete(:color)
  end

  `
  motion.animate(#{params}, #{obj})
  `

end
# frozen_string_literal: true

####### eDen render engine #############
module Eden
  def self.init(properties, atome_id)

  end

  Proton.atome_methods.each do |property_fct|
    self.define_singleton_method(property_fct) do |param, atome_id, add, &proc|
      JS.opalizer("html", property_fct, param, atome_id, add)
    end
  end

end

# frozen_string_literal: true
####### Headless render engine #############

module Headless


  def self.init(properties, atome_id)
    properties.each do |property|
      # puts properties
      if property.class == Hash
        send(property.keys[0], property.values[0], atome_id)
      elsif property.class == Array
        parent_id = atome_id
        property.each do |sub_property|
          if sub_property.class == Hash
            send(sub_property.keys[0], sub_property.values[0], parent_id)
          end
        end
      end
    end
  end
  Proton.atome_methods.each do |property_fct|
    self.define_singleton_method(property_fct) do |param, atome_id,add, &proc|
      JS.opalizer("headless", property_fct, param, atome_id, add)
    end
  end


  def self.preset(param, id)

  end

  def self.type(param, id); end

  def self.color(param, id)

  end

  def self.draggable(_param = :true, id)

  end

  def self.x(param, id)

  end

  def self.y(param, id)

  end
end
# frozen_string_literal: true

####### Threejs render engine #############
module Three
  def self.init(properties, atome_id)

  end

  Proton.atome_methods.each do |property_fct|
    self.define_singleton_method(property_fct) do |param, atome_id,add, &proc|
      JS.opalizer("html", property_fct, param, atome_id, add)
    end
  end

end
# frozen_string_literal: true

####### Konva render engine #############
module Konva
  def self.init(properties, atome_id)

  end

  Proton.atome_methods.each do |property_fct|
    self.define_singleton_method(property_fct) do |param, atome_id, add, &proc|
      JS.opalizer("html", property_fct, param, atome_id, add)
    end
  end

end
# frozen_string_literal: true
####### Vocal render engine #############
module Vocal



  def self.init(properties, atome_id)
    properties.each do |property|
      # puts properties
      if property.class == Hash
        send(property.keys[0], property.values[0], atome_id)
      elsif property.class == Array
        parent_id = atome_id
        property.each do |sub_property|
          if sub_property.class == Hash
            send(sub_property.keys[0], sub_property.values[0], parent_id)
          end
        end
      end
    end
  end

  Proton.atome_methods.each do |property_fct|
    self.define_singleton_method(property_fct) do |param, atome_id,add, &proc|
      JS.opalizer("vocal", property_fct, param, atome_id, add)
    end
  end

  def self.preset(param, id)
    `
  ssu = new SpeechSynthesisUtterance()
  ssu.lang = "fr-FR"
  ssu.text = "une "+#{param}+" vient d'etre crre avec l'identite :"+#{id}
  speechSynthesis.speak(ssu)
`
  end

  def self.type(param, id); end

  def self.color(param, id)
    `
      ssu = new SpeechSynthesisUtterance()
      ssu.lang = "fr-FR"
      ssu.text = "probleme avec les accents et le mode test de eVe,L'objet  "+#{id}+" a ete colorie en "+ #{param}
      speechSynthesis.speak(ssu)
`
  end

  def self.draggable(_param = :true, id)
    `
      ssu = new SpeechSynthesisUtterance()
      ssu.lang = "fr-FR"
      ssu.text = #{id}+" est maintenant deplacable, attention probleme avec les accents et le mode test de eVe"
      speechSynthesis.speak(ssu)
`
  end

  def self.x(param, id)
    `
      ssu = new SpeechSynthesisUtterance()
      ssu.lang = "fr-FR"
      ssu.text = #{id}+" a ete deplace horizontalement a la position "+ #{param}+"attention probleme avec les accents et le mode test de eVe"
      speechSynthesis.speak(ssu)
`
  end

  def self.y(param, id)
    `
      ssu = new SpeechSynthesisUtterance()
      ssu.lang = "fr-FR"
      ssu.text = #{id}+" a ete deplace verticalement a la position "+ #{param}+"attention probleme avec les accents et le mode test de eVe"
      speechSynthesis.speak(ssu)
`
  end
  end
# frozen_string_literal: true
# atome object and apis below
class Atome
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
      id = :unknown
      @atome_initial_state.each do |property_key_pair|
        @atome_initial_state.each do |property_key_pair|
          if property_key_pair.keys[0].to_sym == :preset
            id = property_key_pair.values[0].to_s + '_'
          elsif property_key_pair.keys[0].to_sym == :type && id == :unknown_
            id = property_key_pair.values[0].to_s + '_'
          end
        end
      end
      id = (id + @@atomes.length.to_s).to_sym
      @atome_initial_state.unshift(id: id)
    end
    if create_atome_id
      #atome_id generation here
      atome_id = "a_"+object_id.to_s
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
        #  props = sanitize_prop(nil, props)
        #  insert_properties_in_atome(props)
        #  return self
        #elsif props.class == Hash
        #  insert_properties_in_atome(props)
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
    events = Proton.events.keys
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
      #Atome.new(found_prop[found_prop.length - 1], {create_atome_id: :false}, {get_mode: :true})
      #todo tempotary test below to always return the prop intead of an atome
      return found_prop[found_prop.length - 1]
    end
  end

  #def self.trig proc
  #  class_exec(proc)
  #end

  def trig proc, event
    class_exec(proc, event)
    #proc = properties.values[0]
    #proc = send_to_get_proc_content(proc)
  end

  def enhance(*properties)
    # TODO: exchange or enhance targeted prop
  end

  def delete(*properties) #attention delete is call often because each time a prop is set it delete the correponding pluralize props
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
            puts "msg from atome line 333 delete something in atome ?: #{@atome}"
          end
        else
          #here we delete all found  instances of the atome prop pass here
          property = @atome.delete_at_multi(list_of_matching_prop) if list_of_matching_prop
          # we get the last to find the prop type wr must delete
          property = property.last
          if property
            if property.class == Array # the its a complex property we have to find its name in the type
              property.each do |sub_property|
                if sub_property.keys[0] == :type
                  property_name = (sub_property.values[0].to_s + "s").to_sym
                  #now we set the new property (to trif the rendered) and delete the dummy value from the atome array
                  set(property_name => 0)
                  @atome.pop()
                end
              end
            else
              #  the its a simple property
              property = property.keys[0]
              #now we set the new property (to trif the rendered) and delete the dummy value from the atome array
              set(property => 0)
              @atome.pop()
            end
          end
        end
      else
        #here we delete single instance of the atome prop
        last_item = list_of_matching_prop[list_of_matching_prop.length - 1]
        before_last_item = list_of_matching_prop[list_of_matching_prop.length - 2]
        property = @atome.delete_at(last_item) if last_item
        if last_item != before_last_item
          before_last_property = @atome[before_last_item]
          if before_last_property.class == Array # we found a complexe property such as shadow or border so must add a bit of analysis
            #Todo : we have to store all instance of current prop and set it to the renderer expet the last that is deleted
            prop_array = []
            prop_type = {}
            before_last_property.each do |property_array|
              if property_array.keys[0] == :type
                prop_type = property_array.values[0]
              else
                prop_array << property_array
              end
            end
            before_last_property = {prop_type => prop_array}
          end
        else
          if property.class == Array # we found a complexe property such as shadow or border
            property.each do |sub_property|
              if sub_property.keys[0] == :type
                before_last_property = {sub_property.values[0] => 0}
              end
            end
          else
            before_last_property = {property.keys[0] => 0}
          end
        end
        if property
          #  now we set the new property
          set(before_last_property)
        end
      end
    else
      #we delete the whole atome
      Photon.delete({atome: :curent}, self.atome_id)
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

  def insert_properties_in_atome(properties = nil)
    # this method is called when a property is added or modified , the insert_properties_in_atome method is call by the set method.
    # The insert_properties_in_atome add the the prop in the @atome hash and also add the current atome in he @atomes hash(this hash contain all current atoms)
    # finaly the  insert_properties_in_atome send the current atome to the Render engine.

    #if properties.class == Hash && properties.values[0].class == Proc
    #  proc = properties.values[0]
    #  proc = send_to_get_proc_content(proc)
    #  #----------- todo get proc content here -----------
    #  puts "msg from atome line 470 ------ the proc, #{proc} now be store we now have to eval the code instead of instance eval the proc ------"
    #  #puts proc
    #end

    @atome << properties
    # now we store the current @atome id in the current @atomes array
    @@atomes[atome_id.to_s] = self
    # we send the id of the atome to be rendered to the main render engine for analysis
    Photon.render(atome_id)
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

end
# here is alll methods that fazcilitate the atome creation
#electron  provide public methods for end users that simplify atome creation
def box(options)
  obj_prop = Proton.default_visuals
  obj_prop[:type] = :shape
  # we add the box preset to the default visual
  obj_prop = Hash[:preset, :box].merge!(obj_prop)
  if options
    atome = Atome.new(obj_prop, options)
  else
    atome = Atome.new(obj_prop)
  end
  return atome
end

def square(options)
  box(options)
end

def circle(options)
  obj_prop = Proton.default_visuals
  obj_prop[:type] = :shape
  # we add the circle preset to the default visual
  obj_prop = Hash[:preset, :circle].merge!(obj_prop)
  if options
    atome = Atome.new(obj_prop, options)
  else
    atome = Atome.new(obj_prop)
  end
  return atome
end

def ellipse(options)
  circle(options)
end

def text(options)
  obj_prop = Proton.default_visuals
  obj_prop[:type] = :text
  # we add the box preset to the default visual
  obj_prop = Hash[:preset, :text].merge!(obj_prop)
  if options
    if options.class == String || options.class == Symbol
      options = {:content => options}
    end
    atome = Atome.new(obj_prop, options)
  else
    atome = Atome.new(obj_prop)
  end
  return atome
end

def image(options)
  obj_prop = Proton.default_visuals
  obj_prop[:type] = :image
  # we add the box preset to the default visual
  obj_prop = Hash[:preset, :image].merge!(obj_prop)
  if options
    if options.class ==String ||options.class ==Symbol
      options={:content => options}
    end
        atome = Atome.new(obj_prop, options)
  else
    atome = Atome.new(obj_prop)
  end
  return atome
end


def video(options)
  obj_prop = Proton.default_visuals
  obj_prop[:type] = :video
  # we add the box preset to the default visual
  obj_prop = Hash[:preset, :video].merge!(obj_prop)
  if options
    atome = Atome.new(obj_prop, options)
  else
    atome = Atome.new(obj_prop)
  end
  return atome
end


def sound(options)
  # obj_prop = Proton.default_visuals
  obj_prop[:type] = :sound
  # we add the box preset to the default visual
  obj_prop = Hash[:preset, :sound].merge!(obj_prop)
  if options
    atome = Atome.new(obj_prop, options)
  else
    atome = Atome.new(obj_prop)
  end
  return atome
end



def particle(options)
  obj_prop = Proton.default_visuals
  obj_prop[:type] = :atome
  # we add the box preset to the default visual
  obj_prop = Hash[:preset, :particle].merge!(obj_prop)
  if options
    atome = Atome.new(obj_prop, options)
  else
    atome = Atome.new(obj_prop)
  end
  return atome
end
def version
  return "v:0.19b"
end

def news
  t = <<Str
  # 23 added a news document to list the new functionality available znf version to show current eVe version
  # 24 04 2020 added shadows api, type help.shadows
  # 25 04 2020 added border api, type help.border
  # 27 04 2020 added delete api, type help.delete
  # 29 04 2020 Added anmation api, type help.animation
  # 30 04 2020 Added image object + api
  # 04 05 2020 add new object type particle
  # 04 05 2020 add new property api
  # 04 05 2020 add new align api
  # 04 05 2020 add group api
  # 04 05 2020 add http api
  # 04 05 2020 partially add lock api for position
  # 05 05 2020 add overflow property
  # 05 05 2020 add every (timer) api
Str
end

module Help

  def self.right
    t = <<Str
case Temporay soltution aî will be updated later and document since then
  maybe use fit instead ex: a.fit(20) or a a.fit({left: 20, right: 50, target: b.id })
end
Str
  end

  def self.left
    t = <<Str
Temporay soltution aî will be updated later and document since then
Str
  end

  def self.top
    t = <<Str
Temporay soltution aî will be updated later and document since then
Str
  end

  def self.bottom
    t = <<Str
Temporay soltution aî will be updated later and document since then
Str
  end

  def self.http
    t = <<Str
 http api is used to open an url
usage http("www.freebsd.org")
type Example.http() for an example
Str
  end


  def self.every
    t = <<Str
 every api allow to trig action every x time 
params are "every" in sec and "times" number of times it should be excuted
usage :
      every 1,2 do
        i+=1
        t.content("good "+i.to_s)
      end
or
      every ({every: 1, times: 3}) do do
        i+=1
        t.content("good "+i.to_s)
      end
type Example.every() for an example
Str
  end

  def self.overflow
    t = <<Str
 overflow api The overflow property specifies whether to clip the content or to reveal when the content of an element is too big to fit in the specified area. 
The overflow property has the following values: hidden ,and visible.
by default overflow is visible
usage :b.overflow(:hidden)
type Example.overflow() for an example
Str
  end

  def self.lock
    t = <<Str
 lock api allow to lock property ( for now only left, right , top , bottom works)
usage b.lock(:top)#lock position or c.lock(top: 200)# also lock position but force top position
type Example.group() for an example
Str
  end

  def self.group
    t = <<Str
 group api allow to group objects
usage a.group(b.id)
type Example.group() for an example
Str
  end

  def self.align
    t = <<Str
   align is to align object inside it's parent 
syntax is : a.align(:right) or  a.align(right: -50) to align objet to the right with an offset of 50
params are :left, :right,:top, :bottom, :center
type Example.align() for an example
Str
  end

  def self.property
    t = <<Str
   property can be used to store and retrieve attributes from an objet to another
note that the particle atome can be used to store attributes / property within an invisile object. the particle is a special objet that have no visibilly by default.
usage b.property(a.id)
type Example.property for a full use example.
Str
  end

  def self.border
    t = <<Str
border has 3 parameters : thickness, color, value type  must be string or symbol
thickness value goes from 0 to infinity , value type  must be integer
color value can be set in rgb, rgba, hex or color name, value type  must be string or symbol (when using color name ex : :red)
pattern values are : dashed, solid , double, dotted, value type must be string or symbol
type Example.border for examples
Str
  end

  def self.shadow
    t = <<Str
shadows has 6 parameters : x, y, blur, thickness color and invert 
all params are integer exept color that can be set in rgb, rgba, hex or color name and invert that is :true or :false
type Example.shadow for examples
Str
  end

  def self.delete
    t = <<Str
delete can delete a current object or any of speficied prop
type Example.delete for examples
Str
  end

  def self.animate
    t = <<Str
anim is a function it has 6 main parameters :
start
end 
duration
loop
curve 
target
anim can take any prop as a param 
type Example.anim for examples
Str
  end

  def self.image
    t = <<Str
simple api to view an image : image()
type Example.image for examples
Str
  end

  def self.api
    t = <<Str
  ######################## shortcut ########################
# get help
help
# get version
version
# get help
puts version
# get new functionality list
news


######################## shortcut ########################
# run code :
ctrl-r #or click on the bar above the code editor
# comment code :
ctrl-c
# reformat code (selection only):
ctrl-j
# reformat code (all ide code) :
ctrl-e
# open/close the code editor :
ctrl-i
# open/close the console :
ctrl-t
# clear the console :
ctrl-x #or type clear in the code editor then run :
# activate/desactivate auto run code :
ctrl-a
# reboot :
ctrl-y

######################## general methods ########################

# clear console:
clear
# clear ide :
clear ide
# save file :
save :my_script
# load file :
load :my_script
# get help :
help
#close the code editor # attention will be replace soon with a new close /open api
open_ide(:false)
#open the code editor # attention will be replace soon with a new close /open api
open_ide(:true)
# toggle the code editor # attention will be replace soon with a new close /open api
open_ide(:toggle)
# close the the console # attention will be replace soon with a new close /open api
open_console(:false)
# open the the console # attention will be replace soon with a new close /open api
open_console(:true)
# toggle the the console # attention will be replace soon with a new close /open api
open_console(:toggle)
# wait
b=box()
wait 2 do
  b.color(:red)
end
# write code to ide
write("box()")
# alert send an alert text to the renderer
alert("hello")
# log send text to console
log("hello")
# grab gt an atome from it's atome_id
grab(6548798)
#  get an atome from it's id
get("shape_0")
# obtain demo text
lorem
# to render to the screen
text(lorem)
# other dummy text lorem2, lorem3

######################## system settings ########################
# Ide font size
Ide.text(20)
# console font size
Console.text(20)

######################## eVe object type ########################
# create text:
text("my text")
# create box:
box()
#or
square()
# create circle
circle()
#or
ellipse()

######################## Methods ########################
# color
a=box()
a.color(:red)
# size ( homothetic)
b=text("my text")
b.size(20)
# width
a=box()
a.width(200)
# height
a=box()
a.height(250)
# x
a=box()
a.x(50)
# y
a=box()
a.y(250)
# z (object order when in 2D)
a=box()
a.z(2)
# move
a=box()
a.draggable(:true)
# stop move
a.draggable(:false)
# edit content (texte)
b=text("my text")
b.editable(:true)
# stop edit
b.editable(:false)
# transparency (range 0 to 1)
a=box()
a.transparency(0.5)
# rotation  (degre)
a=box()
a.rotate(20)
# blur (set in pixels)
a=box()
a.blur(7)
# shadow offset x , offset y, thickness, color, invert(shadow inside object)
a.shadow({x: 5}, {y: 5}, {thickness: 3}, {color: :black}, {invert: :true})
# border thikness color pattern
a.border({thickness: 7}, {color: :red}, {invert: :true}, {pattern: :dashed})
# Smooth make curve angles
a.smooth(15)
# set id
a.id(:my_object)
# set a property (it reset the property; ex for color it erase all colors and replace with current)
a.set({color: :red})# identical to a.color(:red)
#add a property (it add the propery to property already present ; ex for color add aonther color and so create a gradient)
a.add({color: :orange, x: 200})
# to get a prop ex color
a.color
# to print color value in the console
puts a.color()
#to get x position
puts a.x
#to delete
a.delete()
#to delete a property
a.delete(:x)

######################## events ########################
# touch
b=text("my text")
b.touch do
  b.x(300)
  b.content("hello")
end
# drag
#not implemented for now!!
Str
  end

end


module Example


  def self.http
    t = <<Str
http("www.freebsd.org")
Str
  end

  def self.every
    t = <<Str
 t= text('kool')
      every ({every: 1, times: 3}) do do
        i+=1
        t.content("good "+i.to_s)
      end
Str
  end

  def self.overflow
    t = <<Str
b=box()
c=circle()
c.y=200
c.color :red
b.group(c.id)
b.drag(true)
b.overflow(y: :visible)
Str
  end

  def self.lock
    t = <<Str
b=box()
c=circle
c.y=250
b.lock(:top)#lock position
b.lock(:bottom)#lock position
c.lock(top: 200)# also lock position but force top position
c.lock(bottom: 100)#lock position but force bottom position
Str
  end


  def self.group
    t = <<Str
c=circle()
b=box()
b.x=200
  b.group(c.id)
Str
  end

  def self.border
    t = <<Str
    b=box()
    b.border({thickness: 5, pattern: :dotted, color: :black})
Str
  end

  def self.align
    t = <<Str
b=box()
b.align(right: -20)
b.align(bottom: -480)
Str
  end

  def self.property
    t = <<Str
    p=particle()
p.color(:red)
p.rotate(50)
p.x=450
p.blur(5)
p.border({thickness: 4, color: :yellow})
p.shadow({blur: 10, x: 5, y:5})
b=box()
b.touch do
b.property(p.id)
end
Str
  end

  def self.shadow
    t = <<Str
 b=circle({color: :orange})
b.shadow({x: 5}, {y: 5}, {thickness: 3},{blur: 12}, {color: :black}, {invert: :true})
b.add(shadow:[{x: 2}, {y: 2}, {thickness: 3},{blur: 12}, {color: :yellow},  ])
Str
  end

  def self.delete
    t = <<Str
a=box()
a.border({pattern: :dashed, color: :orangered})
a.shadow({x: 5}, {y: 5}, {thickness: 3}, {color: :black}, {invert: :true})
a.add(:shadow => {color: :orange, blur: 20})
a.add(:shadow => {color: :blue, blur: 5, x: -3, y: -3})
a.smooth(20)
a.add(color: :orange)
a.add(color: :green)
a.delete(:color)
#a.delete(:colors)
#a.delete(:border)
#a.delete(:shadow)
#a.delete(:shadows)
Str
  end

  def self.animate
    t = <<Str
run
a=circle()
a.shadow({x: 5}, {y: 5}, {thickness: 3},{blur: 20}, {color: :black}, {invert: :true})
a.border({pattern: :dotted, color: :black, thickness: 5})
a.color(:violet)
b=text("click me!")
b.size(70)
b.shadow({blur: 20})
b.x=300

b.touch do 
  anim({
	start: {x: 0, y: 0, blur: 0,rotate: 0,height: 100,  smooth: 100, color: 'rgb(0,255,0)',opacity: 1},
	end: {x: 900, y: 170,blur: 10,rotate: 180,height: 50, smooth: 0,color: 'rgb(255,0,255)',opacity: 0},
	duration: 2000,
	loop: 8,
	curve: :easing,
	target: a
	})
end
Str
  end

  def self.image
    t = <<Str
run
i=image({content: :boat})
i.x=500
i.rotate(20)
i.shadow({blur: 10})
i.blur(5)
i.draggable(:true)
Str
  end


end


#content = <<EOT
#run
#read "atome/atome.rb"
#clear(:ide)
#EOT

module Demo


  def self.http
    t = <<Str
b=box()
b.touch do
  http("www.freebsd.org")
end
Str
  end

    def self.every
      t = <<Str
run
save :time
def get_time
  date = Time.now
  h=date.hour.to_s
  m=date.min.to_s
  s=date.sec.to_s
  time=h+":"+m+":"+s
end
t= text(get_time)
every ({every: 1, times: 300}) do
  t.content(get_time) 
end
Str
    end


  def self.overflow
    t = <<Str
run
t=text("click on the box change overflow")
t.width=300
t.x=200
b=box()
c=circle()
c.y=200
c.color :red
b.group(c.id)
b.draggable(:true)
b.overflow(:visible)
b.touch do 
  if b.overflow == :visible
  b.overflow(:hidden)
  elsif b.overflow== :hidden
	  b.overflow(:visible)
  end
end
Str
  end

  def self.group
    t = <<Str
run
clear
c=circle()
c.color(:red)
b=box()
b.draggable(:true)
b.x=200
c.touch do
  b.group(c.id)
end
Str
  end

  def self.lock
    t = <<Str
run
clear
b=box()
c=circle
c.y=250
b.smooth(5)
b.lock(:left)#lock position
b.lock(:right)#lock position

c.lock(left: 200)#lock position
c.lock(right: 100)#lock position
b2=box()
b2.x=500
c2=circle
c.y=400
b2.lock(:top)#lock position
b2.lock(:bottom)#lock position
c2.lock(top: 200)# also lock position but force top position
c2.lock(bottom: 100)#lock position but force bottom position
Str
  end

  def self.demo_1
    content_test = <<EOT
run
a=circle()
a.blur(20)
a.draggable(:true)
a.add(:color => :cyan)
a.add(:shadow => {color: :yellow, x: 5, y: 5})
b=box()
b.blur(1)
b.draggable(:true)
b.color('cyan')
b.add(:color => :olive)
b.shadow({color: :black,blur: 7, thickness: 0})
i=0
b.touch do 
  if i==0
	i=1
	a.color=:olive
	self.color(:cyan)
  else
	self.color(:olive)
	a.color=:cyan
	i=0
  end
end
bb=box()
bb.shadow({color: :black,blur: 5,x: 0, y: 0,  invert: :true})
bb.add(:shadow => {color: :red, blur: 20})
bb.draggable(:true)
bb.color("rgba(100,100,100,0.5)")
t=text("hello folks !!")
t.color(:yellow)
t.shadow({color: :black, x: 7, blur: 9})
t.x=200
t2=text("edit me!!")
t2.y(200)
t2.size(70)
t2.width=900
t2.color("orange")
t2.editable=:true
wait 3 do
  t2.content("modify the content?")
  wait 3 do
	t2.content("yes, you can modify the content...")
	t2.size(50)
	t2.color=:white
  end
end
x1=box()
x2=box()
[x1,x2].each do |boxes|
  boxes.width(30)
  boxes.height(30)
  boxes.shadow({color: :black,blur: 3,x: 0, y: 0,  invert: :true})
end
x1.x=x1.y=0
x2.x=500
x2.y=0
x1.color(:gray)
x2.color(:orangered)
x1.touch do
  self.color(:white)
  wait 0.3 do
	self.color(:gray)
  end
  load :test
end
x2.touch do
  self.color(:white)
  wait 0.3 do
	self.color(:orangered)
  end
  save :demo
end
first_script=<<Strdelim
a=circle
a.touch do 
  load :demo
end
Strdelim
wait 0.5 do
  save(:test,first_script)
end
get("box_2").x("341")
get("box_2").y("47")
get("box_1").x("443")
get("box_1").y("84")
get("circle_0").x("254")
get("circle_0").y("85")
EOT
  end

  def self.demo_2
    content_test = <<EOT
run
a=box()
a.border({pattern: :dashed, color: :orangered})
a.add(color: :orange)
a.add(color: :green)
a.shadow({x: 5}, {y: 5}, {thickness: 3}, {color: :black}, {invert: :true})
a.smooth(20)
clear
a.delete(:colors)
EOT
  end

  def self.demo_3
    content_test = <<EOT
run
a=box()
a.border({pattern: :dashed, color: :orangered})
a.shadow({x: 5}, {y: 5}, {thickness: 3}, {color: :black}, {invert: :true})
a.add(:shadow => {color: :orange, blur: 20})
a.add(:shadow => {color: :blue, blur: 5, x: -3, y: -3})
a.smooth(20)
a.add(color: :orange)
a.delete(:shadow)
 anim({
	start: {x: 0, y: 0, blur: 10,rotate: 20,width: a.width},
	end: {x: 400, y: 70,blur: 0,rotate: 180,width: a.width*6},
	duration: 2000,
	loop: 1,
	curve: :easing,
	target: a
	})
EOT
  end

  def self.demo_4
    content_test = <<EOT
run
clear
i=image({content: :boat})
i.rotate(20)
i.shadow({blur: 10, x: 7, x: 7})
puts i.width
i.draggable(:true)
  anim({
	start: {x: -100, blur: 10,rotate: 20,width: 99},
	end: {x: 100,blur: 10,rotate: 20,width: 100},
	duration: 2000,
	loop: 1,
	curve: :easing,
	target: i
	})
i.touch do 
  anim({
	start: {x: 0, y: 0, blur: 10,rotate: 20,width: i.width},
	end: {x: 400, y: 70,blur: 0,rotate: 180,width: i.width*6},
	duration: 2000,
	loop: 1,
	curve: :easing,
	target: self
	})
end
EOT
  end

  def self.demo_5
    content_test = <<EOT
run
v=video()
v.x=50
v.y=0
v.width(700)
v.height(394)
v.shadow({blur: 20})
v.color(:white)
v.draggable(:true)
get("video_0").x("124")
get("video_0").y("63")
v.touch do
  anim({
           start: {x: 0, y: 0, blur: 0,rotate: 20},
           end: {x: 400, y: 70,blur: 10,rotate: 180},
           duration: 2000,
           loop: 3,
           curve: :easing,
           target: self
       })
end
t=text("click to play guitar")
t.size=35
t.x=20
  t.y=-390
t.touch do
 play(:guitar) 
end
EOT
  end

  def self.demo_6
    content_test = <<EOT
run
b=box()
b.x(0)
b.y(0)
b.shadow(blur: 10)
b.width("100%")
i=image(:boat)
i.align(:left)

EOT
  end


  def self.demo_7
    t = <<EOT
p=particle()
p.color(:red)
p.rotate(50)
p.x=450
p.blur(5)
p.border({thickness: 4, color: :yellow})
p.shadow({blur: 10, x: 5, y:5})
b=box()
b.touch do
  b.property(p.id)
end
EOT
  end

  def self.align
    t = <<EOT
run
d=box()
d.size(50)
d.align(:center)
d.shadow({blur: 5})
d.color(:white)
d.smooth(7)
e=box()
e.color(:orange)
e.size(50)
e.smooth(7)
e.align(:center)
e.align(bottom: -20)
i=image(:boat)
i.align({left: 200})
c=circle({size: 50})
c.shadow({blur: 5})
c.align({right: -50})
EOT

  end



  def self.carine
    content_test = <<EOT
run
logo=image("carine")
logo.x=200
#logo.transparency(0)
#animate
anim({
         start: {x: 0, y: 0, blur: 0, rotate: -300},
         end: {x: 0, y: 0,blur: 10, rotate: 0, },
         duration: 3000,
         curve: :easing,
         target: logo
     })

logo.touch do
  load :carine
end
EOT

  end
end




content_test = <<EOT
#run
#t=text(lorem2)
#t.size=20
#t.width=600
#t.height=800
#t.child({level: 0, from: 10,to: 50}, {align: :left})
#b=t.select(child: {level: 0, from: 10,to: 50})
#b.touch do 
# http("apple.com")
#end

#t=text(lorem2)
#t.size=20
#t.width=600
#t.height=800
#t.child({level: 0, from: 10,to: 50}, {align: :left})
#t.select(level: 1, from: 2, to: 5).color(:red)
#b.add(a)
#c=group (a, b)

run
clear
c=circle()
c.color(:red)
b=box()
b.draggable(:true)
b.x=200
b.touch do
  b.group(c.id)
end
EOT


content_test = <<EOT
run
clear
b=box()
c=circle
c.y=250
b.smooth(5)
b.lock(:left)#lock position
b.lock(:right)#lock position

c.lock(left: 200)#lock position
c.lock(right: 100)#lock position


EOT


read "app/app.rb"

#write(content_test)
#open_ide(:true)
#open_console(:true)
#perpetual_run



