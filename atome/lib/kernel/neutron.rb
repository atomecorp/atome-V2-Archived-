#here is all general methods helper for atomes
# frozen_string_literal: true
#neutron provide public methods used both by end users and needed by the atome object




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

def save filename =:default , content=nil
  if !content
    content=add_to_ide()
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


def write(content = nil, run=false)
  add_to_ide(content,run)
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
################ media manipulation ############

def anim(params)
  obj= params[:target]
  if obj.nil?
    obj= self.atome_id
    puts obj
  elsif obj.class==Atome
    obj =obj.atome_id
  else
    obj =Object.get(obj).atome_id
  end
  params.delete(:target)
  animator(params, obj)
  #`
  #motion.animate(#{params}, #{obj})
  #`
end


def play (params)
  Object.send(Renderer.engine + 'play', 'snare')
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
    get('toto').x=77
STRdelim
end

def lorem3
  srt = <<STRdelim
    b=box()
    b.id="toto"
    b.drag()
    b.color=:red
STRdelim
end

def help(subject="")
  if subject==""
    reader("documentations/userdoc.rb", "console")
  else
    return Help.send(subject)
  end
end
def example(subject="")
  return Example.send(subject)
end

def news
  reader("documentations/news.rb", "console")
end

def version
  return "v:0.13"
end