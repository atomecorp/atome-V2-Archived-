# frozen_string_literal: true



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