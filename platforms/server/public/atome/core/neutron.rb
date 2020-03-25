def grab atome_id
  atomes = Atome.atomes
  atomes.each do |atome|
    if atome.atome_id == atome_id
      return atome
    end
  end
end

def get id
  atomes = Atome.atomes
  atomes.each do |atome|
    if atome.id == id
      return atome
    end
  end
end

def decode atome_id
  Atome.atomes.each do |atome|
    if  atome.atome_id== atome_id
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
  last_project =  projects[0]
  load(last_project)
end

def bufferize content
  Atome.buffer(content)
end

def read filename
  bufferize="bufferize"
  filename=Atome.user+"."+filename
  `
   read_file(#{filename},#{bufferize},"()","");
   `
end

###################### eDen kickstart ####################

def eDen_genesis
  eden_content = "eDen_#{time}.#{location}_0\n" + Atome.user + "\n" + Atome.user
  #we store the default project of user user anonymous, all anonyous prpject wiil be stored here
  store(Atome.user, "project_0\nproject_0\n" , true)
  #we store the eDen file that  all anonymous user and will contains all futur user on this machine
  store(:eDen, eden_content, true)
  store(:project_0,"#default code : project_0",false,:load , :project_0)

end

def eDen_opening (eDen_content)
  eDen = Atome.eDen
  eDen_content = eDen_content.split("\n")
  #we get current eden Id  found in the first line of eden file content and set it in eDen object
  eDen.eDen_id(eDen_content[0])
  #we get current the last connected user find in line 2 of eDen file
  Atome.user = eDen_content[1]
  # we want to load ast project so we the file that has the name of the user then get the first line of this file that contain the last open project
  load(Atome.user, "get_last_project", false, false, true)
end

######################## init ##################

#todo ensure all libs are initialized ( zim, konva, apis.rb, etc...)
def init
  load(:eDen, :eDen_opening, "", :eDen_genesis, true)
end

init()