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
  @@temporary_atome = []

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
    #puts "end init : #{@atome}"
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
        #puts "case 1 #{prop_to_create}"
        self.set property_fct => property.to_sym
      elsif options[0].class == Integer
        property = options[0]
        #prop_to_create = {property_fct => property.to_sym}
        #puts "case 2 #{prop_to_create}"
        self.set property_fct => property
      else
        options.each do |property|
          property.each do |prop_to_add|
            prop_to_create = {property_fct => {prop_to_add[0] => prop_to_add[1]}}
            #puts "case 3 #{prop_to_create}"
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
    #puts @temporary_atome
    prop_to_set = prop.keys[0]
    value_to_set = prop[prop_to_set]
    prop_to_set = prop_to_set.to_s.chomp("s").to_sym
    # puts "we set : #{prop} with #{@@temporary_atome}"

    #puts "set  : #{@atome}  #{prop}"
    #prop_already_defined = false
    @atome.each_with_index do |prop_hash, index|
      prop_hash.keys.each do |key|
        if key == prop_to_set
          @atome[index] = prop
          #puts prop
          #puts prop_hash
        end
      end
      #puts prop_hash
      #prop_hash do |nucleus|
      #  #puts " nucleus :#{nucleus.class} :  #{nucleus}"
      #  #nucleus.atome.each do |prop_getted|
      #  #  if prop_getted.keys[0] == prop_to_set
      #  #    puts prop_getted
      #  #  end
      #  #end
      #end
      ##puts "prop_hash: #{prop_hash.atome.class}"
      #if prop_hash.structure[0].class == Atome
      #  #new_prop = prop_hash
      #elsif prop_hash.structure[0].keys[0] == prop_to_set
      #  # prop_already_defined = index
      #end
    end
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
    #else
    #  #puts "########"
    #  #puts prop.keys[0]
    #end
    ##@atome << prop
    #puts  "prev@@temporary_atome = #{@@temporary_atome}"
    @@temporary_atome = [prop_to_set]
    @@temporary_atome = []
    return Atome.new(prop, false)

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
    puts "we get : #{property}"
    collected_prop = []
    #we check if we should get te last prop or all props
    @atome.each do |atome|
      if atome.keys[0] == property
        collected_prop << atome
      end

    end
    #puts collected_prop[collected_prop.length - 1].values[0]
    # @@temporary_atome=[]
    @@temporary_atome << property
    return Atome.new(collected_prop[collected_prop.length - 1], false)
    #return "poil"
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

  # Various utils methods here

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

  def check
    atome = @atome.to_s
    return atome
  end

  def to_s
    atome = @atome.to_s
    #atome = atome.split("#")
    #items = []
    #atome.each do |item|
    #  items << item.split("@atome=")[1]
    #end
    #return items.join("").gsub("=>", "**").gsub(">", "").gsub(" ", "").gsub("[[", "").gsub("],[", ",").gsub("]]", "").gsub("}]", "}").gsub("**", "=>")

  end

  def [] val = nil
    #puts @atome
  end

  #def self.atomes
  #  return @@atomes
  #end
  def verif
    @atome.each do |atome|
      puts "atome : #{atome}  #{atome.class}"
    end
  end
end
a = Atome.new([{:border => {:color => {color: :red, x: 200}}}, {color: :pink}, {name: 547}])
#a=Atome.new([{color: :pink},{color: :blue},{height: :orange},{type: :text, width: 200, :border => {:color => {color: :red, x: 200}}}] )
#b =Atome.new([{color: :blue}, {color: {color: :yellow}}])
#a = Atome.new([{color: {color: :yellow}}, {color: :blue}])
#a = Atome.new()
#a = Atome.new(:box)
#a = Atome.new("shape")
#a = Atome.new({type: :circle})
#a = Atome.new({id: :the_box})
#a = Atome.new({atome_id: :the_box})
#a = Atome.new({id: :the_human, type: :human})
#a = Atome.new([{id: :the_machine}, {type: :machine}])
##tester les deux cas ci-dessous
#a = Atome.new([id: :the_sound, type: :text, color: {color: :red, x: 220, }, content: :good])
#a = Atome.new([id: :the_sound, type: :text, color: :cyan, content: :good])
#tester les deux cas ci-dessous
#a = Atome.new([ type: :text, color: {color: :red, x: 220, }])
#a = Atome.new( {type: :text, color: {color: :red, x: 220, }})


#a.color(:purple)
puts a.name
a.border.color.x(440)
a.border.x(440)
a.z = 20
puts "----"
a.height(20).x = 500
a.border(20).color(:orange).x(440)
#a.color = :yellow
#a.colors("mauve")
#a.color({color: :violet})
#a.color({x: 333})
#a.color({color: :pink, x: 50})
#a.colors({color: :red, x: 200}, {color: :blue, x: 600})
#a.width(220)
##a.color.x=500
#a.color

#puts "-----------------"
#puts "atome: #{a.to_s}"
#puts a.structure.to_s


#puts a.id
#puts a
#puts "#{b.color} - #{b.color.class}"
#puts "#{a.color} - #{a.color.class}"
#puts b.color
#puts "---"
#b.color.x=200
#puts b.color
#puts a.check

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