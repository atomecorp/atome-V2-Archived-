require 'opal-parser'
require 'js'
require 'native'

# frozen_string_literal: true

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

def load(filename, fct_to_call = 'add_to_screen', fct_params = false, error_catch_fct = false, system_file = false)
  if fct_to_call.to_sym == :human
    #Atome.human = filename
    load :eDen, :set_last_user
  end
  filename = filename.to_s
  if fct_to_call == 'add_to_screen' || fct_to_call == 'bufferize' || fct_to_call == 'renamer' || fct_to_call == 'puts' || fct_to_call == 'alert' || fct_to_call == 'text' || fct_to_call == 'dynamic_code'

    #if system_file == false
    #
    #  filename = Atome.human + '.' + filename
    #  # If the file is add to ide then we update the value of current project else it may be a media so we don't want to change the current project value
    #
    #end
  end
  `
   read_file(#{filename},#{fct_to_call}, #{fct_params}, #{error_catch_fct});
   `
end

#def system_load(filename, fct_to_call = 'puts', fct_params = false, error_catch_fct = false, _system_file = false)
#  `
#   read_file(#{filename},#{fct_to_call}, #{fct_params}, #{error_catch_fct});
#   `
#end
#
#def create(name, value = '', type = :project, _system_file = false)
#  if name.class == Hash
#    value = name[name.keys[0]]
#    name = name.keys[0]
#  end
#  name = name.to_sym
#  if type == :project
#    if !Atome.projects.include? name
#      value = '#' + name if value == ''
#      store(name, value, false)
#      user_project = Atome.projects << name
#      user_project = user_project.join("\n")
#      store(Atome.human, user_project, true)
#
#    else
#      alert('file already exist!')
#    end
#  elsif type == :human
#    store(name, value, true)
#    password = value
#    Atome.human = name
#    store(Atome.human, "project_0\nproject_0\n", true)
#    store(:project_0, '#default code : project_0', false, :load, :project_0)
#    load :eDen, :add_last_user
#  end
#end
#
#def delete(filename)
#  user_projects = Atome.projects
#  if user_projects.include? filename
#    if user_projects.length == 2
#      alert("can't delete : only one project!")
#    else
#      if user_projects[0] == user_projects[1]
#        user_projects[0] = user_projects[2]
#        Atome.projects.delete(filename)
#        new_project = user_projects[0]
#        load new_project
#      elsif user_projects[0] == filename
#        user_projects[0] = user_projects[1]
#        Atome.projects.delete(filename)
#        new_project = user_projects[0]
#        load new_project
#      else
#        Atome.projects.delete(filename)
#      end
#      `
#     remove_file(#{filename});
#     `
#      # Atome.projects(Atome.projects.join("\n"))
#
#      store Atome.human, user_projects
#
#    end
#  else
#    alert 'no file project found'
#  end
#end
#
#def renamer(content, files_name)
#  files_name = files_name.split(',')
#
#  new_project_list = []
#  user_projects = Atome.projects
#  p '########'
#  p user_projects[0]
#  p files_name[1]
#  p '########'
#  # Atome.project(files_name[1]) if user_projects[0] == files_name[0]
#  user_projects.each do |project|
#    # p "#{project} :: #{files_name[0]}"
#    if project == files_name[0]
#      # p "beefcake : #{project} :: #{files_name[0]}"
#      project = files_name[1]
#    end
#    new_project_list << project
#  end
#  new_project_list = new_project_list.join("\n")
#  store files_name[1], content
#  `
#     remove_file(#{files_name[0]});
#     `
#  #Atome.projects(new_project_list)
#  store Atome.human, new_project_list
#end
#
#def rename(file_name, new_filename)
#  # p file_name
#  files_name = [file_name, new_filename]
#  load file_name, 'renamer', files_name
#end

#def set_last_project(projects_list)
#  projects_list = projects_list.split("\n")
#  unless projects_list.include? Atome.project_on_screen
#    p 'file alredy exist'
#    projects_list << Atome.project_on_screen
#  end
#  projects_list[0] = Atome.project_on_screen.to_s
#  projects_list = projects_list.join("\n")
#  store(Atome.human, projects_list, true)
#  Atome.projects(projects_list)
#end
#
#def project_list_send_to_set_last_project
#  load Atome.human, 'set_last_project'
#end
#
#def set_last_user(eDen_content)
#  eDen_content = eDen_content.split("\n")
#  eDen_content[1] = Atome.user
#  eDen_content = eDen_content.join("\n")
#  store(:eDen, eDen_content, true)
#end
#
#def add_last_user(eDen_content)
#  eDen_content = eDen_content.split("\n")
#  eDen_content[1] = Atome.human
#  eDen_content << Atome.human
#  eDen_content = eDen_content.join("\n")
#  store(:eDen, eDen_content, true)
#end

###################### exec user script ####################

def add_to_screen(content)
  #$PROCESS_ID.add_to_ide(content)
  `add_to_ide(#{content})`
end

def ide(content=nil)
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
    #for Atome mode only
    #if class_exists? Atome
    #  Atome.code(code)
    #end
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

def run_code
  ## allow eVe to remove all object expet the two first :  the human (the user) and eDen ( the machine)
  if class_exists?(:Atome)
    Atome.purge
  end
  code = `code=editor.getDoc().getValue("\n")`
  clear(:view)
  if code.include? 'require'
    deep_analysis code
  else
    `
    run_script(#{code})
  `
  end

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
    puts 'temporary patch to erase the screen works only with HTML rendering'
    `
    $("#html_view").html("")
`

  elsif option == :ide
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

def replace(content, line)
  `editor.replaceRange(#{content}+"\n", CodeMirror.Pos(#{line},0) , CodeMirror.Pos(#{line + 1},0))`
end

def reboot
  `window.location.reload(true)`
end
