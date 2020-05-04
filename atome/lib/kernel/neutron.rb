#here is all general methods helper for atomes
# frozen_string_literal: true
#neutron provide public methods used both by end users and needed by the atome object
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



