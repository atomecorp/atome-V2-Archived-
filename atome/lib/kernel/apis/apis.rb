# frozen_string_literal: true

################# new file operation #################
def saver(*val)
  send_this = {name: :project_0, file_content: '#project_0', call: false, call_params: false, type: :project, force: false}
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

  ################# end ####################
  if file_exist && send_this[:force] == false
  else
    to_js :store, send_this
  end
  ################# end ####################

end

def loader(*val)
  send_this = {name: :project_0, call: :add_to_screen, call_params: false, type: :project, error_call: false, error_call_params: false, force: false}

  if val.length > 1
    # it's an array it means that's a pair name:type
    val[1] = val[1].gsub('"', "'")
    send_this[:name] = val[0]
    send_this[:type] = val[1]
  elsif val[0].class == Hash
    val[0].each do |key, value|
      send_this[key] = value
    end
  elsif val[0].class == String
    # it's a string (a uniq value) so default object type is a project
    send_this[:name] = val[0]
    send_this[:type] = :project
  end
  # we test if project exist before save
  if send_this[:type] == :project && !(projects.include? send_this[:name]) && send_this[:force] == false
    alert 'file not found'
  elsif send_this[:type] == :human && !(humans.include? send_this[:name]) && send_this[:force] == false
    alert 'person not found'
  else
    to_js :load, send_this
  end
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

