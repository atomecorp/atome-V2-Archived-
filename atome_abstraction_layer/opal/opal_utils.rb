# encoding: UTF-8
# frozen_string_literal: true

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


def load(filename, fct_to_call = 'add_to_screen', fct_params = false, error_catch_fct = false)

  if fct_to_call=="run"
    fct_to_call = 'add_to_screen'
  elsif fct_to_call=="console"
    fct_to_call = 'add_to_console'
  else
    fct_to_call = 'ide'
  end
  filename = filename.to_s
  #if fct_to_call == 'add_to_screen' || fct_to_call == 'bufferize' || fct_to_call == 'renamer' || fct_to_call == 'puts' || fct_to_call == 'alert' || fct_to_call == 'text' || fct_to_call == 'dynamic_code'
  #end
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

def htmlize data
  data=data.gsub("\n","<br>")
  return data
end

def reader filename , view_on="console"

  `
$.ajax({
    url: #{filename},
    dataType: 'text',
    success: function (data) {
if (#{view_on}=="console"){
data=Opal.Object.$htmlize(data)
Opal.Object.$puts(data);
}
else{
alert(data)
}

    }
});

`
end

def help

  reader("documentations/userdoc.rb","console")
end
###################### exec user script ####################
#@code_to_exec=[]
def add_to_screen(content, run=false)
  #$PROCESS_ID.add_to_ide(content)
  JS.add_to_ide(content, run)
  #`add_to_ide(#{content})`
end

def add_to_console(content)
  puts content.gsub("\n","<br>")
end



def ide(content = nil, run=false)
  if content
    JS.add_to_ide(content, run)
  else
    code = `code=editor.getDoc().getValue("\n")`
    return code
  end
end

def write(content)
  `add_to_ide(#{content})`
end

def dynamic_code *code
  puts "msg from opal_utils line 148 code : #{code.length}"
  puts "msg from opal_utils line 149 code  1:#{code[0]} "
  puts "msg from opal_utils line 149 code 2:#{code[1]} "
end


def deep_analysis(code)
  #for Atome mode only
  #if class_exists?(:Atome)
  #  Atome.delete(:code)
  #end
  # we store the whole code in Atome.code
  # we parse code to remove in case of commented require
  code = code.gsub('#require', '#')
  if code.include? 'require'
    lines = code.split("\n")
    puts puts "msg from opal_utils line 164 code 2:#{lines} "
    #@code_to_exec << code
    #require_list = []
    #lines.each_with_index do |line, _index|
    #  require_list << line.strip if line.start_with? 'require'
    #end
    #require_list.each_with_index do |get_this, index|
    #  get_this = get_this.sub('require', '').gsub("'", '').gsub('"', '').gsub(':', '').strip
    #  if index == require_list.length - 1
    #    load get_this, 'dynamic_code', true
    #  else
    #    load get_this, 'dynamic_code', false
    #  end
    #end
  else
    `
    run_script(#{code})
  `
  end
end

def run_code (clear = false)
  #@code_to_exec=[]
  code = `code=editor.getDoc().getValue("\n")`
  ## allow eVe to remove all object expet the two first :  the human (the user) and eDen ( the machine)
  if clear
    if class_exists?(:Atome)
      Atome.purge
    end
    clear(:view)
  end
  `
    run_script(#{code})
  `
  #if code.include? 'require'
  #  deep_analysis code
  #else
  #  `
  #  run_script(#{code})
  #`
  #end
  nil
end

def code(code = nil)
  if code
    $PROCESS_ID.editor.getDoc.setValue(code)
  else
    code = $PROCESS_ID.editor.getDoc.getValue("\n")
  end
end

def timeout(time)
  time=time.to_f
  `setTimeout(function(){ #{yield} }, #{time})`
end

def wait(time)
  time=time.to_f
  `setTimeout(function(){ #{yield} }, #{time*1000})`
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
  #puts "msg from opal_utils line 480 : atome id is #{atome_id}, property #{property}, value is #{value}"
  atomes = Atome.atomes
  atomes.each do |_id, atome|
    if atome.atome_id == atome_id
      atome.send(property, value)
    end
  end
end