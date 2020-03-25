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



  def initialize(options = nil, create_atome = true, create_atome_id = true)
    #we uniformise the data received into an array in order to treat it later
    if !options
      params = []
    elsif options.class == Array
      # we inspect the array then separate each key pair to create an array of key value pair
      params = []
      options.each do |option|
        if option.class == Atome
          params << option
        elsif option.length > 1
          # if option.length> 1 we separate each key pair to create an array of key value pair
          option.each do |prop|
            params << {prop[0] => prop[1]}
          end
        else
          params << option
        end
      end
      #params = options
    elsif options.class == Hash
      params = []
      if options.length > 1
        # if option.length> 1 we separate each key pair to create an array of key value pair
        options.each do |option|
          params << {option[0] => option[1]}
        end
      else
        params << options
      end
    elsif (options.class == Symbol || options.class == String)
      params = [options.to_sym]
      if @@types.include?(params)
        params << {:type => params}
        #below were searching for preset using type value
      elsif @@types.has_value?(params)
        type = @@types.key(params)
        params << {:type => type, :preset => params}
      end
    end
    if create_atome_id
      params << {:atome_id => object_id}
    end
    @atome = []
    if create_atome
      params.each do |prop|
        set prop
        #@atome << Atome.new(prop, false, false)
      end
    #else
      # we simply add the prop to the hash
      #params.each do |prop|
      #  @atome << prop
      #end
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
        #elsif options[0].class == Array
      elsif options.length == 1 && (options[0].class == String || options[0].class == Symbol)
        # get the array content
        property = options[0]
        self.set property_fct => property.to_sym
      elsif options[0].class == Integer
        property = options[0]
        self.set property_fct => property
      else
        options.each do |property|
          property.each do |prop_to_add|
            self.set(property_fct => {prop_to_add[0] => prop_to_add[1]})
          end
        end
      end
    end
  end

  def value data = nil
    if data.class == Symbol
      #prop =  t_prop
      self.send(:set, {prop => data})
    elsif data.class == Hash
      prop = data.keys[0]
      value = data[prop]
      self.send(:set, {prop => value})
    end
  end

  # SAGED methods here (Set Add Get Exchange Delete)

  def set prop = nil
    puts "set #{prop}"
    #prop_to_set = prop.keys[0]
    #value = prop[prop_to_set]
    #prop_to_set = prop_to_set.to_s.chomp("s").to_sym
    #prop_already_defined = false
    ##puts "we set : #{prop}, prop_to_set: #{prop_to_set}, value : #{value}"
    #@atome.each_with_index do |prop_hash, index|
    #  if prop_hash.structure[0].class == Atome
    #
    #    puts @atome.to_s
    #    puts prop_hash
    #    #new_prop = prop_hash
    #  elsif prop_hash.structure[0].keys[0] == prop_to_set
    #    prop_already_defined = index
    #  end
    #end
    ### now we feed the @atome
    #if value.class == Hash
    #  new_prop = value
    #else
    #  new_prop = {prop_to_set => value}
    #end
    ##puts prop
    #if prop_already_defined
    #  #puts "analysis here"
    #  #puts "#######"
    #
    #  old_prop_val = @atome[prop_already_defined]
    #  if old_prop_val.structure[0].values[0].class == Hash
    #  elsif old_prop_val.structure[0].values[0].class == Symbol && new_prop.keys[0] != :color
    #    # in this case the old prop is a single value and the new prop is not the main ex : on a color object we tempt to add an x property
    #    #puts old_prop_val
    #    # we create a new atome fro the prop
    #    new_prop = Atome.new(new_prop, false, false)
    #    #puts new_prop
    #    @atome[prop_already_defined] = Atome.new([old_prop_val, new_prop], false, false)
    #  end
    #  #puts new_prop.keys[0]
    #
    #
    #else
    #  #puts "########"
    #
    #  #puts prop.keys[0]
    #
    #end
    ##@atome << prop
    #return self
  end

  def add prop = nil
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

  def get property = nil
    puts "we get #{property}"
    #puts property
    #puts self.atome[0].class
    #collected_prop = []
    ##we check if we should get te last prop or all props
    #if property.to_s.end_with?("s")
    #  puts "property is #{property}"
    #  pluralize = true
    #else
    #  pluralize = false
    #end
    #property = property.to_s.chomp("s").to_sym
    #prop_nb = nil
    #@atome.each_with_index do |prop_found, index|
    #  if prop_found.class == Atome
    #    prop_found = prop_found.atome
    #    #puts "prop_found: #{prop_found.class}"
    #  end
    #  if prop_found.class == Array
    #    puts "prop_found is : #{prop_found}"
    #    return prop_found
    #  else
    #    if property == prop_found.keys[0]
    #      collected_prop << prop_found
    #      prop_nb = index
    #    end
    #  end
    #end
    #if pluralize
    #  return collected_prop
    #else
    #  prop_to_add = collected_prop[collected_prop.length - 1]
    #  type = {:type => property}
    #  new_prop = [type, prop_to_add]
    #  return @atome[prop_nb] = Atome.new(new_prop, false)
    #end
  end

  def erase prop = nil

  end

  # rendering
  def concretise val = nil
  end

  # Various utils methods here
  #
  #
  def structure
    return @atome
  end

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

  def [] val = nil
    return @atome
  end

  def to_s

    return @atome.to_s
  end

  def [] val = nil
    #puts @atome
  end

  #def self.atomes
  #  return @@atomes
  #end
end

#a = Atome.new()
#a = Atome.new(:box)
#a = Atome.new("shape")
#a = Atome.new({type: :circle})
#a = Atome.new({id: :the_box})
#a = Atome.new({id: :the_human, type: :human})
#a = Atome.new([{id: :the_machine}, {type: :machine}])
#tester les deux cas ci-dessous
#a = Atome.new([id: :the_sound, type: :text, color: {color: :red, x: 220, }, content: :good])
#a = Atome.new([id: :the_sound, type: :text, color: :cyan, content: :good])
#tester les deux cas ci-dessous
#a = Atome.new([ type: :text, color: {color: :red, x: 220, }])
a = Atome.new( {type: :text, color: {color: :red, x: 220, }})
##a.color(:purple)
#a.color = :yellow
#a.colors("mauve")
#a.color({color: :violet})
#a.color({x: 333})
#a.color({color: :pink, x: 50})
#a.colors({color: :red, x: 200}, {color: :blue, x: 600})
#a.width(220)
##a.color.x=500
#a.color
puts "atome: #{a}"
#puts a.structure.to_s


#puts a.id
#puts a

#puts e
#puts e.class
#puts e.id

#e.color(:red)
##e.type = :text
##e.content = "hello"
##e.set(color: :orange)
##e.add(color: :blue)
#e.add(color: :pink)
##e.color
##e.add(color: :purple)
##e.color.x = 400
#puts"class: #{e.color.class}, e.color: #{e.color}"
#puts"class: #{e.color.class}, e.color: #{e.color}"

#puts e.color[1]
#puts e
#e.color(add: :pink)
##e.color = "red"
#e.x = 28
##puts e.colors
#e.color.x = 400
#puts e.color
#puts e
#puts Atome.atomes
#e.color = "red"
#e.set(color: :blue)
#e.add(color: :pink)
#e.color(add: :yellow) #puts e.x
#puts e.color.class

#toto= {effect: :distort, sound: :jingle, human: :user, machine: :computer, tool: :text, group: :empty, code: :hello, atome: :foo}
#puts toto.has_value?(:jingle)
#puts toto.key(:jingle)
#puts toto.include?(:human)