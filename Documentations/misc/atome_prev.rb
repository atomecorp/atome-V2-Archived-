module Genesis
  attr_accessor :renderer, :language, :machine
  include Zim_renderer, Konva_renderer, Fabric_renderer, Urho3D_renderer, Three_renderer

  def renderer
    @renderer = Renderer.engine
  end

end

module Properties
  properties = [:content, :color, :x, :y, :z, :width, :height, :child, :add, :name, :id, :shadow]
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
  #for each prop when create method in Array class (mainly use by the get method found in neutron.rb)
  properties.each do |prop|
    Array.define_method prop do |val|
      if val.nil?
        props = []
        self.each do |atome|
          props << atome.send(prop.to_sym)
        end
        return props
      else
        self.each do |atome|
          atome.send(prop, val)
        end
      end
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
  objects = [:text, :circle, :ellipse, :rectangle, :box, :star, :triangle, :squiggle, :bloob, :shape, :eDen, :human, :creation, :foo]
  objects.each do |object|
    # for each atome object class, we create a function accessible from outside Atome at top level, to allow direct creation of objects using : box(), circle({color: :red}), ...
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
  #include Genesis, Objects, Properties
  include Objects, Properties, Genesis
  @@atomes = []
  @@black_hole = [] #deleted atomes
  @@project_on_screen = "project_0"
  @@buffer = []
  @@projects = []
  @@code = []
  @@invisible_type = [:eDen, :creation, :human, :foo]
  attr_accessor :atome_id, :atome, :id

  def initialize
    @atome = {}

  end

  def self.buffer data = nil
    if data
      @@buffer << data
    else
      @@buffer
    end
  end

  def self.code data = nil
    if data
      @@code << datasam
    else
      @@code
    end
  end

  def self.purge
    # allow eVe to remove all object exept the two first :  the human (the user) and eDen ( the machine)
    @@atomes = @@atomes.take(2)
  end

  def nuke
    @@atomes = []
  end

  def self.nuke
    @@atomes = []
  end

  def atome
    return self
  end

  def self.humans value = nil
    if value
      @@humans = value
    else
      @@humans
    end
  end

  def atome_builder(object, properties)
    #type creation
    @atome[:type] = object.to_sym

    #Identity creation
    id_counter = 0
    Atome.atomes.each do |atome|
      if self.type == atome.to_sym[:type]
        id_counter = id_counter + 1
      end
    end
    @atome[:id] = "#{object}_#{id_counter}"
    @atome[:atome_id] = "#{@atome[:id]}_#{time}.#{location}"

    #todo :  create an exception list of objects that will only be treated by the ruby not the renderer
    if @@invisible_type.include? object
      @atome[:visible] = :false
    else
      @atome[:visible] = :true
    end
    # below object that not be treat only by ruby not the renderer
    fct_to_call = (renderer + "gen_obj").to_sym
    #p "#######"
    #p fct_to_call
    #p object
    #p atome
    #p "#######"

    send(fct_to_call, object, atome)
    #here we check if params are send using a hash  with prop: :value  or if the param are send  anonymously ( ex: box (200,10,50,60, :red))
    if properties[0][0].class == Hash
      properties[0][0].each do |prop, value|
        electron_builder(prop, value)
      end
    else
      #here we parse anomynous values passed to the object at creation time
      properties.each do |electron|
        default_props(object, electron)
      end
    end

    @@atomes << self
    return self
  end

  def electron_builder(electron, value)
    if (electron == "content" || electron == "content=")
      if !value.nil?
        value = sanitizer(value)
      end
    end
    # here we add prop to the object
    # if no value then the function is a getter that return current value of the prop
    if value.class == NilClass
      # the method is a getter : value = send(renderer + "get_propt_value")
      puts #######__########
      #  puts electron
      #puts @atome[electron.to_sym]
      puts ########__#######
      return @atome[electron.to_sym]
    else
      # we assign the value to the prop
      set electron, value
    end
  end

  def self.atomes
    return @@atomes
  end

  def self.projects project_list = ""
    if project_list == ""
      @@projects
    else
      @@projects = []
      project_list_array = project_list.split("\n")
      project_list_array.each do |project|
        @@projects << project
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

  def self.project project = ""
    project_on_screen project
  end

  def atome_id
    return @atome[:atome_id]
  end

  def self.eDen

    @@atomes[0]
  end

  def self.human
    @@atomes[1]
  end

  #  #todo :  find a strategy to secure this,  because anymone can change the atome_id of eDen
  #  # todo put this in atome_id

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

  def alter electron, value
    #the method is used internally only
    # we send the objet to the renderer
    fct_to_call = (renderer + "gen_prop").to_sym
    #send(fct_to_call, electron, @atome[:atome_id], value)
    send(fct_to_call, electron, atome, value)

    # we add the prop the new prop to the hash of the object
    @atome[electron.gsub("=", "").to_sym] = value
  end

  def set electron, value
    #the abstract the alter method to stay dry and not repeat code in each condition
    if electron.class == Hash
      electron.each do |key, value|
        alter key, value
      end
    else
      alter electron, value
    end
  end

  def add electron, value = ""
    # if electron is not a hash  the electrons are send using two params ex box.x(:x, 200), so we reformat electron as a hash
    if electron.class != Hash
      electron={electron => value}
    end
      electron.each do |key, value|
        # now we test if the electron is already define in the atome
        if @atome[key].nil?
          set key, value
        else
          # the electron is already define in the atome so we add it in the array
          puts "prop already exist"
        end
      end
  end

  def remove what

  end

  def self.delete what, opt = false
    what = what.to_s
    if what == "code"
      @@code = []
    end

  end

  def delete what = :self, opt = false
    what = what.to_s
  end

  def type value = nil
    if value
      @atome[:type] = value
    else
      return @atome[:type]
    end
  end

  def type= (type)
    type(type)
  end

  def visible value = nil
    if value
      @atome[:visible] = value
    else
      return @atome[:visible]
    end
  end

  def visible= (visible)
    visible(visible)
  end

  def to_s
    atome = @atome.to_s
    return atome
  end

  def to_sym

    return @atome
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

  events = [:touch, :drag, :change]
  events.each do |evt|
    define_method(evt) do |*opts, &proc|
      fct_to_call = (renderer + evt).to_sym
      send(fct_to_call, *opts, &proc)
    end
  end
end

`

	ssu = new SpeechSynthesisUtterance()
	ssu.lang = "fr-FR"
	ssu.text = "Bonjour, atome et éve, vous souhaite la bienvenue."
	speechSynthesis.speak(ssu)

`