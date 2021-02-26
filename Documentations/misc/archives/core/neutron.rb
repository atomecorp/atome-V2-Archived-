
def  atome_properties
  atome_methods = []
  properties = {atome_id: object_id, id: :my_object, preset: :default, content: :lorem, color: :gray, x: 0, y: 0, z: 0, width: 100, height: 100, child: :none, name: :eVe_object, shadow: 20, border: 3, label: :eVe_label, type: :text, language: :english, display: true, run: true, renderer: :html, selected: false, editable: false, draggable: :false}

  return properties
end

def atome_methods
  atome_methods = []
  atome_properties.each do |object, default_value|
    atome_methods << object
    atome_methods << (object.to_s + "s").to_sym
    atome_methods << (object.to_s + "=").to_sym
  end
  return atome_methods
end


##################


def grab atome_id
  atomes = Atome.atomes
  atomes.each do |atome|
    if atome.atome_id == atome_id
      return atome
    end
  end
end

# todo important to debug get meth in a touch event
def get_for_debug_in_touch_meth prop, get_by = :id
  get_by=get_by.to_sym
  atomes = Atome.atomes
  molecule = []
  atomes.each do |atome|
    if atome.send(get_by) == prop
      molecule << atome
    end
  end
  if molecule.length == 1
    return molecule[0]
  else
    # we are on a hash so we have all methods for array in module Properties
    return molecule
  end
end

def get prop, get_by = :id
  get_by=get_by.to_sym
  atomes = Atome.atomes
  molecule = []
  atomes.each do |atome|
    if atome.send(get_by) == prop
      molecule << atome
    end
  end
  if molecule.length == 1
    return molecule[0]
  else
    # we are on a hash so we have all methods for array in module Properties
    return molecule
  end
end

def decode atome_id
  Atome.atomes.each do |atome|
    if atome.atome_id == atome_id
      return atome.id
    else
    end
  end
end

def file_separator
  return "."
end

def get_last_project projects
  projects = projects.split("\n")
  last_project = projects[0]
  load(last_project)
end

def bufferize content
  Atome.buffer(content)
end

def read filename
  bufferize = "bufferize"
  filename = Atome.human + "." + filename
  `
   read_file(#{filename},#{bufferize},"()","");
   `
end


#class Array
#  def id val
#    props=[]
#    self.each do |atome|
#      props<< atome.send("id")
#    end
#    return props
#  end
#end

###################### eDen kickstart ####################


def eDen_genesis

  h = Atome.new
  ############# tests ###########
  #h.human
  #e=Atome.new
  #e.eDen
  #h.id="theman"
  #e.id="themachine"
  #b=box()
  #b.x= 200
  #p "-------------"
  #p Atome.atomes
  #p "------------"
  # p Atome.atomes.to_s
  ############# tests ###########
  #p "genesys Atome.user"

  machine = Atome.new
  machine.eDen
  machine.name = :my_device
  user = Atome.new
  user.human
  user.name = :anonymous
  project = Atome.new
  project.creation
  project.name = :project&&



  machine.add(child: user.atome_id)


  user.add(child: project.atome_id)
  #project.add(child: :test)
  #p machine
  #p user
  #p project
  ##todo change using new Atome.eDen
  #eden_content = "eDen_#{time}.#{location}_0\n" + Atome.user + "\n" + Atome.user
  ##todo add user using new Atome.user
  ##we store the default project of user user anonymous, all anonyous prpject wiil be stored here
  #store(Atome.user, "project_0\nproject_0\n" , true)
  ##we store the eDen file that  all anonymous user and will contains all futur user on this machine
  #store(:eDen, eden_content, true)
  #store(:project_0,"#default code : project_0",false,:load , :project_0)
  #Atome.users([Atome.user])
end

def eDen_opening (eDen_content)
  ##puts "eden content is :"+eDen_content+"####"
  # todo : important the machine is Atome.atomes[0] so to set the hash from file we just have to Atome.atomes[0]= "file callbck content"...
  eDen = Atome.eDen
  #eDen_content = eDen_content.split("\n")
  ##we get current eden Id  found in the first line of eden file content and set it in eDen object (getting and suppressing the first element of array with shift )
  #eDen.eDen_id(eDen_content.shift)
  ##we get current the last connected user find in line 2 of eDen file (getting and suppressing the first element of array with shift )
  #Atome.user = eDen_content.shift
  #Atome.users(eDen_content)
  ## we want to load ast project so we the file that has the name of the user then get the first line of this file that contain the last open project
  #load(Atome.user, "get_last_project", false, false, true)
  #  puts Atome.atomes
end

######################## init ##################
#def genesys
#  Atome.setup
#end

#todo ensure all libs are initialized ( zim, konva, apis.rb, etc...)
def init
  load(:eDen, :eDen_opening, "", :eDen_genesis, true)
  #load(:eDen, :eDen_opening, "", :genesys, true)
end

init()

def dummy
  #a={type: :shape,color: :red, x: {x: 200, x: 300 }, child: :titi, "child" => :tutu}
  a={type: :shape},{color: :red},  {x: 200}, {x: 300 }, {child: :titi}, {"child" => :tutu}
end


content= <<EOT
clear
run
#p dummy.class
b=box(color: :red, width: 200, content: :boxy)
#b.add(x: 400)
#b.add(x: 300)
p b
EOT

content= <<EOT
clear
class Atome
  def initialize content=:atome
	if content == :box || content == :circle
	  type = :shape
	else
	  type = content
	end
	@atome={id: [:my_obj] , type: [type], x: [0], y: [0], width: [100], height: [300], color: [:black], content: [content]}
	@sub=nil
	@@objects=[:x, :y, :color]
	return self
  end
  def add electron, val
	@atome[electron]<< val
	return self 
  end

  puts @@objects
  
  
end
a=Atome.new(:box)
#a.add(:x, 300)
#a.color(:green)
#p a.color
# a.color.x(200)
p a




EOT





write content
#timeout 5000 do
#  p "###########"
#  p Atome.atomes
#  p "###########"
#
#end

