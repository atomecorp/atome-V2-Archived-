if Object.respond_to? :clear
  clear
end
require "./render_engines.rb"
class Atome
  @@default_components = {display: :local, language: :english, renderer: :zim}
  @@atomes_to_display = []
  @@rendering_methods = [:headless, :zim, :treejs, :vocals]
  properties = [:atome_id, :id, :content, :color, :x, :y, :z, :width, :height, :child, :name, :shadow, :border, :name, :label, :type, :language, :display, :render]
  @@visual_types = {shape: :box, image: :logo, text: :lorem}
  @@types = {effect: :distort, sound: :jingle, human: :user, machine: :computer, tool: :text, group: :empty, code: :hello, atome: :foo}.merge(@@visual_types)
  @@presets = {circle: "circle desc", box: "box desc", star: "star desc", triangle: "triangle desc", polygon: "polygon desc", squiggle: "squiggle desc", bloob: "bloob desc", lorem: "lorem ipsum dolore", user: "anonymous", computer: "riscPC", hello: "print 'hello world'", foo: "this object has no body"}
  @@default_visuals = {x: [0], y: [0], width: [100], height: [300], color: [:black]}
  @@definition_order = [:type, :preset, :content]
  @@atome_methods = []
  properties.each do |object|
    @@atome_methods << object
    @@atome_methods << (object.to_s + "s").to_sym
    @@atome_methods << (object.to_s + "=").to_sym
  end

  def initialize(options = nil, create_atome_id = true)
    @atome = []
    #we uniformise the data received into an array in order to treat it later
    params_to_send = []
    if !options
    elsif options.class == Array
      # we inspect the array then separate each key pair to create an array of key value pair
      options.each do |option|
        if option.class == Atome
          params_to_send << option
        elsif option.length > 1
          # we test if option.length> 1 we separate each key pair to create an array of key value pair
          option.each do |prop|
            params_to_send << {prop[0] => prop[1]}
          end
        else
          params_to_send << option
        end
      end
    elsif options.class == Hash
      if options.length > 1
        # we test if option.length> 1 we separate each key pair to create an array of key value pair
        options.each do |option|
          params_to_send << {option[0] => option[1]}
        end
      else
        params_to_send << options
      end
    elsif (options.class == Symbol || options.class == String)
      @@types.each do |type|
        if type[0].to_sym == options.to_sym
          params_to_send << {:type => options}
        elsif type[1].to_sym == options.to_sym
          type = @@types.key(options)
          params_to_send << {:type => type}
          params_to_send << {:preset => options}
        end
      end
    end
    if create_atome_id
      params_to_send << {:atome_id => object_id}
    end
    params_to_send.each do |property_set|
      @atome << property_set
    end
  end

  # we define all Atome's methods below
  @@atome_methods.each do |property_fct|
    define_method(property_fct) do |*options, &proc|
      if proc
        #proc.call
        #instance_exec(proc.call)
        instance_exec(&proc)
        #instance_exec(property_fct) {|x| puts x }
      end
      property_fct = property_fct.to_s.chomp("=").to_sym
      if options.length == 0
        # no params :  calling the getter
        get property_fct
      elsif options.length == 1 && (options[0].class == String || options[0].class == Symbol)
        # get the array content
        property = options[0]
        prop_to_create = {property_fct => property.to_sym}
        self.set property_fct => property.to_sym
      elsif options[0].class == Integer
        property = options[0]
        self.set property_fct => property
      else
        options.each do |property|
          property.each do |prop_to_add|
            prop_to_create = {property_fct => {prop_to_add[0] => prop_to_add[1]}}
            self.set(property_fct => {prop_to_add[0] => prop_to_add[1]})
          end
        end
      end
    end
  end

  def value data = nil
    if data.class == Symbol
      self.send(:set, {prop => data})
    elsif data.class == Hash
      prop = data.keys[0]
      value = data[prop]
      self.send(:set, {prop => value})
    end
  end

  # SAGED methods here (Set Add Get Exchange Delete)

  def set prop
    new_prop_to_add= prop
    puts "new_prop_to_add : #{new_prop_to_add}"
    puts "@atome : #{@atome}"
    puts "----- end -----"
    #@atome << Atome.new(prop, false)
    @atome << prop
    self.atome.each do |prop_find|
      puts "prop_find class is : #{prop_find.class}"
      if prop_find.class != Array

        if prop_find.keys[0] == :parent
          get_parent = ObjectSpace._id2ref(prop_find.values[0])
          get_parent.atome << @atome
        end
      end
    end
    prop[:parent] = object_id
    return Atome.new(prop, false)

   end

  def add prop
    if prop
      # now we feed the @atome
      if prop.class == Hash
        new_prop = prop
      else
        puts "prop : #{prop} is not a hash so it's certainly an atome "
      end
    end
    @atome << prop
    return self
  end

  def get property
    property = property.to_sym
    collected_prop = {}
    value = ""
    #we check if we should get te last prop or all props
    @atome.each do |atome|
      if atome.class != Array
        if atome.keys[0] == property
          value = atome.values[0]
        end
      else
        puts "atome : #{atome[0].class}"
      end
    end
    collected_prop[property.to_sym] = value
    new_atome = Atome.new(collected_prop, false)
    self.set(collected_prop)
  end

  def erase prop

  end

  # rendering methods here

  # Various utils methods here

  def atome
    return @atome
  end

  def length
    return @atome.length
  end

  def each(&block)
    @atome.each(&block)
  end

  def to_hash
    self.to_enum(self)
  end


  def check
    atome = @atome.to_s
    return atome
  end

  def to_s
    @atome.to_s

  end

  def [] val = nil
    return @atome
  end

  def self.atomes
    return @@atomes
  end

  def verif
    @atome.each do |atome|
      puts "atome : #{atome}  #{atome.class}"
    end
  end
end
#a = Atome.new([{:border => {:color => {color: :red, x: 200}}}, {color: :pink}, {name: 547}])
a = Atome.new(color: :red)

a.border(50).shadow(:black).color().x(440)

# a tester
#a.color(x: 777)
puts a
#[{:atome_id => 70243276217300}, {:border => 50}, [{:border => 50}, {:color => :orange}, [{:color => :orange}, {:x => 440}]]]