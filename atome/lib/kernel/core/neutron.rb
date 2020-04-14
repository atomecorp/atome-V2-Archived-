#here is all general mthods helper for atomes
# frozen_string_literal: true

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

# TODO: important to debug get meth in a touch event
def get_for_debug_in_touch_meth(prop, get_by = :id)
  get_by = get_by.to_sym
  atomes = Atome.atomes
  molecule = []
  atomes.each do |atome|
    molecule << atome if atome.send(get_by) == prop
  end
  if molecule.length == 1
    molecule[0]
  else
    # we are on a hash so we have all methods for array in module Properties
    molecule
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

def get_last_project(projects)
  projects = projects.split("\n")
  last_project = projects[0]
  load(last_project)
end

def bufferize(content)
  Atome.buffer(content)
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


