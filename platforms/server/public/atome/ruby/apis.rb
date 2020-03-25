class Renderer
  def self.engine
    "zim_"
  end
end
################## file operation ##############

def store filename, content = "", system_file = false, fct_to_call = false, fct_params = false, error_catch_fct = false
  if filename.class == Hash
    content = filename[filename.keys[0]]
    filename = filename.keys[0]
  end
  if system_file == false
    filename = Atome.user + "." + filename
  end
  filename = filename.to_s
  content = content.to_s
  `write_file(#{filename}, #{content}, #{fct_to_call}, #{fct_params}, #{error_catch_fct});`
end

def load filename, fct_to_call = "add_to_screen", fct_params = false, error_catch_fct = false, system_file = false
  if fct_to_call.to_sym == :user
    Atome.user = filename
    load :eDen, :set_last_user
  end
  filename = filename.to_s
  if fct_to_call == "add_to_screen" || fct_to_call == "bufferize"
    if system_file == false
      filename = Atome.user + "." + filename
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
    if value == ""
      value = "#" + name
    end
    store(name, value, false)
    user_project = Atome.projects << name
    user_project = user_project.join("\n")
    store(Atome.user, user_project, true)
  elsif type == :user
    store(name, value, true)
    password = value
    Atome.user = name
    store(Atome.user, "project_0\nproject_0\n", true)
    store(:project_0, "#default code : project_0", false, :load, :project_0)
    load :eDen, :add_last_user
  end
end


def set_last_project projects_list
  projects_list = projects_list.split("\n")
  if !projects_list.include? Atome.project_on_screen
    projects_list << Atome.project_on_screen
  end
  projects_list[0] = Atome.project_on_screen.to_s
  projects_list = projects_list.join("\n")
  store(Atome.user, projects_list, true)
  Atome.projects(projects_list)

end

def project_list_send_to_set_last_project
  load Atome.user, "set_last_project"
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
  eDen_content[1] = Atome.user
  eDen_content << Atome.user
  eDen_content = eDen_content.join("\n")
  store(:eDen, eDen_content, true)
end

###################### exec user script ####################

def add_to_screen content
  `add_to_ide(#{content});`
end

def verifions content
  `add_to_ide(#{content});`
end

def parse_code
  if Object.const_defined?(:Atome)
    Atome.new.nuke
  end
  code = $$.editor.getDoc().getValue("\n")
  if code.include? "#autorun"
  elsif code.include? "autorun"
    #the code is executed at load time
    run_code()
  end
end

def run_code()
  if Object.const_defined?(:Atome)
    Atome.new.nuke
  end
  code = $$.editor.getDoc().getValue("\n")
  clear(:view)
  lines = code.split("\n")
  #lines.each do |line|
  #  if line.include? "require"
  #    line
  #  end
  #end
  `
    run_script(#{code})
  `
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
  `setTimeout(function(){ #{yield} }, #{time});`
end


def wait(time)
  `setTimeout(function(){ #{yield} }, #{time});`
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
  elsif opt.to_sym == :open
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
  elsif opt.to_sym == :open
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
	CodeMirror.commands["selectAll"](editor);
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
  `editor.replaceSelection(#{modified_selection});`
end

def comment_selection()
  selection = `editor.getSelection();`
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
  code_content = code
  if Object.const_defined?(:Atome)
    store(Atome.project_on_screen, code_content)
  else
    `console.log('create an project_on_screen global variable')`
  end

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
  }
else{
auto_save();
}
});
	`
end

shortcut()

def p string
  string = string.to_s
  string = string.gsub("\n", "<br>")
  `
	var prev_content=$("#ruby_console").html();
  if(#{string}!=""){
  	var content = prev_content+#{string}+"<br>";
  	$("#ruby_console").html(content);
}
	`
end

def alert msg
  t = text msg
  t.color = :red
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
    cmd = "#{Renderer.engine}clear(:view)"
    # zim_clear(:view)
    eval(cmd)
  elsif option == :ide
  elsif option == :console
    `
	$("#ruby_console").html("");
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
  return Atome.projects
end

def user
  return Atome.user
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
  `editor.replaceRange(#{content}+"\n", CodeMirror.Pos(#{line},0) , CodeMirror.Pos(#{line + 1},0));`
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