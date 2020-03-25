class Renderer
  def self.engine
    "zim_"
  end
end

module Genesis
  attr_accessor :renderer, :language, :location, :machine
  include Zim_renderer, Konva_renderer

  def renderer
    @renderer = Renderer.engine
  end

  def language
    @language = "french"
  end

  def time
    time = Time.now
    time = time.strftime "%Y-%m-%d %H:%M:%S".gsub(" ", "").gsub("-", "").gsub(":", "")
  end

  def location
    location = "clermont_fd-france-earth-the_universe"
    return location
  end

  def machine
    return :my_device
  end
end

module Properties
  properties = [:content, :color, :x, :y, :z, :width, :height]
  #line below add  an  ""="" to all prop founds in the property array, ex my_ob.x=200
  properties.each do |property|
    properties << property + "="
  end
  # for each entries in properties array we create the corresponding method
  properties.each do |prop|
    define_method(prop) do |value|
      electron_builder(prop, value)
    end
  end

  def default_props object_type, props
    #only used when anonymous params are passed at object creation time ex : box(200,200,150,20,:red)
    if object_type != :text
      props_list = [:x, :y, :width, :height, :color]
    else
      props_list = [:content, :x, :y, :width, :height, :color]
    end
    props_to_send = {}
    # we construct the hash with corresponding property and value from the array above
    props.each_with_index do |prop, index|
      props_to_send[props_list[index]] = prop
    end
    # we send the properly formated hash to the electron_builder function
    props_to_send.each do |prop, value|
      electron_builder(prop, value)
    end
  end

end

module Objects
  include Genesis
  objects = [:text, :circle, :ellipse, :rectangle, :box, :star, :triangle, :squiggle, :bloob]
  objects.each do |object|
    # for each atome object class, we create a function accessible at top level, to allow direct creation of objects using : box(), circle({color: :red}), ...
    Object.define_method(object) do |*opts|
      atome = Atome.new
      atome.send(object, opts)
    end
    # we send object to the builder
    define_method(object) do |*opts|
      #todo : bugs I have to test if its an array, if not i put the data into an array , but why do we have diiferent kind of data here,
      # the following code show the problem: c=circle(200,100,289,23,:violet) ;c.touch do;a=box(120, 200,20, 157,:red);end
      # if not catch by the patch below the box properties set cause an error !!
      if opts[0].class != Array
        temp_cont = []
        temp_cont << opts
        opts = temp_cont
      end
      atome_builder(object, opts)
    end
  end
end

class Atome
  include Genesis, Objects, Properties
  @@atomes = []
  @@black_hole = [] #deleted atomes
  @@project_on_screen = ""
  @@eDen_content = []
  @@user = :anonymous
  attr_accessor :user, :atome_id, :atome, :id

  def initialize
    @atome = {}
  end

  def self.user user = nil
    if user
      @@user = user
    else
      @@user
    end
  end

  def nuke
    @@atomes = []
  end

  def atome
    return self
  end

  def add_electron electron, value
    @atome[electron] = value
  end

  def atome_builder(object, properties)
    create_identity object
    #`alert(#{self.renderer})`
    fct_to_call = (renderer + "gen_obj").to_sym
    send(fct_to_call, object, @atome[:atome_id], content)
    #here we check if paramas are send using a hassh  with prop: :value  or if the param are send  anonymously ( ex: box (200,10,50,60, :red))
    #`alert(#{object} + " class : "+#{object.class})`
    if properties[0][0].class == Hash
      properties[0][0].each do |prop, value|
        electron_builder(prop, value)
      end
    else
      #here we parse anomynous values passed to the object at creation time
      properties.each do |property|
        default_props(object, property)
      end
    end
    @@atomes << self
    return self
  end

  def electron_builder(property, value)
    if (property == "content" || property == "content=")
      if !value.nil?
        value = sanitizer(value)
      end
    end
    # here we add prop to the object
    # if no value then the function is a getter that return current value of the prop
    if value.class == NilClass
      # the method is a getter : value = send(renderer + "get_propt_value")
      return @atome[property.to_sym]
    else
      # we assign the value to the prop
      add_electron property.gsub("=", "").to_sym, value
      fct_to_call = (renderer + "gen_prop").to_sym
      send(fct_to_call, property, @atome[:atome_id], value)
    end
    return self
  end

  def self.atomes
    return @@atomes
  end

  def self.eDen_content project_list = ""
    if project_list == ""
      @@eDen_content
    else
      project_list_array = project_list.split("\n")
      project_list_array.each do |project|
        @@eDen_content << project
      end
    end
  end

  def self.project_on_screen project = ""
    #this method  allow to keep trace of the current open project this var is store in edDen  (it allow allow to reopen last edited project)
    if project == ""
      return @@project_on_screen
    else
      @@project_on_screen = project
      return @@project_on_screen
    end
  end

  def self.current_project project = ""
    project_on_screen project
  end

  def atome_id
    return @atome[:atome_id]
  end

  def id value = nil
    if value
      @atome[:id] = value
    else
      return @atome[:id]
    end
  end

  def id= (id)
    id(id)
  end

  #the get method allow to retrieve any prop such as :id , atome_id, color, widt, ...
  def get prop
    prop = prop.to_sym
    return @atome[prop]
  end
  # allow to set user id without creating a new Atome object
  def self.set prop, value = nil
    if prop.class == Hash
      value = prop[prop.keys[0]]
      prop = prop.keys[0]
    end
    prop = prop.to_sym
    if prop == :user
      @@user = value
      #`alert(#{value})`
      #todo : create user's eden
      # get_user_eDen()
    else
    end
  end

  # allow to set user id from an Atome object
  def set prop, value = nil
    if prop.class == Hash
      value = prop[prop.keys[0]]
      prop = prop.keys[0]
    end
    prop = prop.to_sym
    @atome[prop] = value
    self.send(prop, value)
  end

  def add what

  end

  def remove what

  end


  def delete what

  end

  def type type
    return "object type if possible"
  end

  def to_s
    atome = @atome.to_s
    return atome
  end

  def defs
    # this methods allow to list all atome's available methods
    all_instance_methods = (self.methods - Object.methods)
    methods_to_remove = []
    all_instance_methods.each do |method|
      if method.start_with?(renderer) || method.end_with?("=")
        methods_to_remove << method
      end
    end
    methods = all_instance_methods - methods_to_remove
    return methods
  end

  def info
    return "infos of the object "
  end

  def help
    return "create help strategy according  object type, if user settable and permissions"
  end

  def example
    return "example of creation usage and manipulation"
  end
# def touch
#
#   `alert('touché')`
#
# end
  events = [:touch, :drag, :change]
  events.each do |evt|
    define_method(evt) do |*opts, &proc|
      fct_to_call = (renderer + evt).to_sym
      send(fct_to_call, *opts, &proc)
    end
  end
  #todo : private doesn't seem to work
  private def create_identity object = :empty
    @atome[:atome_id] = "[#{Atome.user}][#{machine}][#{time}][#{location}][#{Atome.atomes.length.to_s}]"
    @atome[:id] = "#{object}_#{Atome.atomes.length}"
  end
  private :create_identity
end

atome = Atome.new

atome.info

def grab atome_id
  atomes = Atome.atomes
  atomes.each do |atome|
    if atome.atome_id == atome_id
      return atome
    end
  end
end

def get atome_id
  atomes = Atome.atomes
  atomes.each do |atome|
    if atome.id == atome_id
      return atome
    end
  end
end

def autorun()
  #method added here just to prevent method not found error
end

def run
  #method added here just to prevent method not found error
end

def render()

end

def require rb_file
  alert rb_file
end

# ######################## init ##################
# eDen_init()
puts "super kool!!"
open_ide()
open_console()
#
