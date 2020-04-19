#here is all general mthods helper for atomes

# frozen_string_literal: true
#neutron provide public methods used both by end users and needed by the atome object
def trig atome_id
  atomes = Atome.atomes
  atomes.each do |_id, atome|
    if atome.atome_id == atome_id.to_s
      atome.trig(atome.touch)
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


