class Headless_renderer
  attr_accessor

  def initialize

  end

  def color val

  end

end
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
  @@atome_public_methods = []
  properties.each do |object|
    @@atome_methods << object
    @@atome_public_methods << object
    @@atome_methods << (object.to_s + "s").to_sym
    @@atome_public_methods << (object.to_s + "s").to_sym
    @@atome_methods << (object.to_s + "=").to_sym
  end

  def self.atome_methods
    return @@atome_public_methods
  end

  def initialize(options = nil, create_atome_id = true, temp_prop = nil)
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
          #params_to_send[:type] = options
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
      return self
    end
  end

  # SAGED methods here (Set Add Get Exchange Delete)

  def set prop = nil
    puts "prop :  #{prop}"
    puts self.object_id
    #prop_to_set = prop.keys[0]
    #value_to_set = prop[prop_to_set]
    #prop_to_set = prop_to_set.to_s.chomp("s").to_sym
    #@atome.each_with_index do |prop_hash, index|
    #  prop_hash.keys.each do |key|
    #    if key == prop_to_set
    #      @atome[index] = prop
    #      #puts prop
    #      #puts prop_hash
    #    end
    #  end
    #end
    return Atome.new(prop, false, prop)

  end

  def get property = nil
    #   puts "we get : #{property}"

    collected_prop = []
    #we check if we should get te last prop or all props
    @atome.each do |atome|
      if atome.keys[0] == property
        collected_prop << atome
      end
    end
    return Atome.new(collected_prop[collected_prop.length - 1], false, property)
  end

  # rendering
  def to_s
    atome = @atome.to_s
  end

end

a = Atome.new


a.color("hh").x(300)
a.x("hh")