#todo : set and other methods proxy
#todo : color.get[1]
#todo :puts a.color[0]

# ------- utils below for opal version --------
if Object.respond_to? :clear
  clear
end
# ------- Array class new methods to alloweasy multi delete --------
class Array
  def delete_at_multi(arr)
    arr = arr.sort.reverse # delete highest indexes first.
    arr.each do |i|
      self.delete_at i
    end
    self
  end
end

if defined?(Number) == 'constant' && MyClassName.class == Class
else
  Number = Integer
end

require "./render_engines.rb"

# ------- atome object and apis below --------
class Atome
  @@default_components = {display: :local, language: :english, renderer: :zim}
  @@atomes_to_display = []
  @@visual_types = {shape: :box, image: :logo, text: :lorem}
  @@types = {effect: :distort, sound: :jingle, human: :user, machine: :computer, tool: :text, group: :empty, code: :hello, atome: :foo}.merge(@@visual_types)
  @@presets = {circle: "circle desc", box: "box desc", star: "star desc", triangle: "triangle desc", polygon: "polygon desc", squiggle: "squiggle desc", bloob: "bloob desc", lorem: "lorem ipsum dolore", user: "anonymous", computer: "riscPC", hello: "print 'hello world'", foo: "this object has no body"}
  @@default_visuals = {x: [0], y: [0], width: [100], height: [300], color: [:black]}
  @@definition_order = [:type, :preset, :content]
  @@atomes = {}

  #def initialize(options = nil, create_atome_id = true, get = false)
  def initialize(*options)
    create_atome_id = true
    get = false
    item_to_delete = []
    options.each_with_index do |option, index|
      if option.class == Hash
        if option.keys[0] == :create_atome_id
          create_atome_id = option.values[0]
          item_to_delete << index
          #options.delete_at(index)
        end
        if option.keys[0] == :get_mode
          get = option.values[0]
          item_to_delete << index
          #options.delete_at(index)
        end
      elsif option.class == Symbol || option.class == String
        #if it's a symbol or a string whe try to find if the user send a preset otr a type
        if @@presets.include?(option)
          #so it's a preset we seach for its type
          preset = {}
          type = {}
          preset[:preset] = option
          type[:type] = @@types.key(option)
          options = [preset, type]
        elsif @@types.include?(option)
          #so it's a type we seach for its preset
          preset = {}
          type = {:type => option}
          preset[:preset] = @@types[option]
          options = [type, preset]
        end
      end
    end
    item_to_delete.each do |item|
      options.delete_at(item)
    end

    #the initialize methods is used to parse the params sends
    @atome = []
    @atome_initial_state = []
    if get
      # the get options allows to return only the wanted prop
      @atome = options
      return self
    end
    #we uniformise the data received into an array in order to treat it later
    if !options
      options = []
    end
    #if a preset or a type is passed here we apply the corresponding properties and remove the symbol
    if (options.class == Symbol || options.class == String)
      @@types.each do |type|
        if type[0].to_sym == options.to_sym
          @atome_initial_state << {:type => options}
        elsif type[1].to_sym == options.to_sym
          type = @@types.key(options)
          @atome_initial_state << {:type => type}
          @atome_initial_state << {:preset => options}
        end
      end
    else
      @atome_initial_state = options
    end
    @atome_initial_state = sanitize_prop(nil, @atome_initial_state)
    #below we search if the render engine has been defined
    renderer_define = false
    @atome_initial_state.each do |option|
      #here we check only have to check first level for the renderer
      if option.class == Hash
        if option.keys[0] == :renderer
          renderer_define = true
        end
      end
    end
    if create_atome_id
      @atome_initial_state.unshift(:atome_id => atome_properties[:atome_id])
    end
    if !renderer_define
      @atome_initial_state << {:renderer => atome_properties[:renderer]}
    end
    @atome_initial_state.each do |atomes|
      self.set(atomes)
    end
  end

  # we define all Atome's methods below with a bit of metaprogramming, methods ending with a s will be treated as batch for set, add, enhance and delete methods  or return an array for the getter method
  # All methods exept the getter mehiod end up using the set method to add a modify a prop. ex : if the add method call the set methnod just changing the @add variable, so the set method accumulate prop instead of replacing it
  atome_methods.each do |property_fct|
    define_method(property_fct) do |*options, &proc|
      if proc
        # @temp_prop is used to send proper context to set the new properties
        @temp_prop = property_fct
        @temp_atome = []
        instance_exec(&proc)
        #once the proc is executed we delete the @temp_prop
        #first we delete the previous corresponding prop
        self.delete(property_fct)
        add_type = true
        add_type = check_if_type_exist(@temp_atome, property_fct)
        if add_type
          @temp_atome.unshift(:type => property_fct)
        end
        insert_properties_in_atome(@temp_atome)
        @temp_atome = nil
        @temp_prop = nil
      else
        if options[0].nil?
          # here the method call is a  getter
          self.get(property_fct)
        else
          # here the method call is a setter
          property_fct = property_fct.to_s.chomp("=").to_sym
          self.set({property_fct => options})
        end
      end
    end
  end

  # SAGED methods (Set Add Get Enhance Delete) the four main atome methods

  def set *properties, &proc
    if proc
      instance_exec(&proc)
    else
      properties.each do |props|
        if props.class == Array
          #todo maybe we have analyse a bit before sending this to erase previous stored, even better factorise and externalise the whole analysis for the set method
          props = sanitize_prop(nil, props)
          insert_properties_in_atome(props)
          return self
        end
        puts props
        puts "#####"
        master_prop = props.keys[0]
        new_values = props.values[0]
        if new_values.class != Array
          new_values = [new_values]
        end
        if master_prop.to_s.end_with?("s")
          master_prop = master_prop.to_s.chomp("s").to_sym
          new_values.each do |new_value|
            self.set({master_prop => [new_value]})
            @add = true
          end
          @add = false
          return false
        else
          # we get the props and values
          new_values = sanitize_prop(master_prop, new_values)
          cleanup_prop = []
          # we analyse the prop according to their type and cleanup the whole things
          if new_values.length > 1 # multiple values found, we send them after a type check analysis
            # we check if current type is in the array else we add it
            add_type = true
            new_values.each do |prop|
              add_type = check_if_type_exist(new_values, master_prop)
              cleanup_prop << prop
            end
            if add_type
              cleanup_prop.unshift({:type => master_prop})
            end
          elsif new_values[0].class == Symbol || new_values[0].class == String || new_values[0].class == Integer || new_values[0].class == Float || new_values[0].class == TrueClass || new_values[0].class == FalseClass || new_values[0].class == Number
            # if it's a uniq value we have to add the prop (master_prop)
            cleanup_prop = {master_prop => new_values[0]}
          elsif new_values[0].class == Hash
            # as the length of the hash should always be only 1,  we just have to check if the prop is the current of else we have to add typenew_values_array
            if new_values[0].keys[0] != master_prop
              cleanup_prop << {:type => master_prop}
              cleanup_prop << new_values[0]
            else
              cleanup_prop = new_values[0]
            end
          elsif new_values[0].class == Array
            new_values_array = new_values[0]
            if new_values_array.length == 1 # if the array contains only one item we check it's content add the missing prop if needed
              if new_values_array[0].class == Symbol || new_values_array[0].class == String || new_values_array[0].class == Integer || new_values_array[0].class == Float || new_values_array[0].class == TrueClass || new_values_array[0].class == FalseClass || new_values_array[0].class == Number
                new_values_array[0] = {master_prop => new_values_array[0]}
              end
            end
            ## we check if current type is in the array else we add it
            add_type = check_if_type_exist(new_values, master_prop)
            if add_type
              new_values[0].unshift({:type => master_prop})
            end
            cleanup_prop = new_values[0]
          end
          # now we clean the current @atome before updating it
          if !@add
            master_prop = (master_prop.to_s + "s").to_sym
            if @temp_prop
              self.delete(@temp_prop)
            else
              self.delete(master_prop)
            end
          end
          # we add the whole new prop to the atome
          if @temp_prop # in this case prop is generated using using a proc (in @@atome_methods.each)
            @temp_atome << cleanup_prop
            return self
          else
            insert_properties_in_atome(cleanup_prop)
            return self
          end
        end
      end
    end
  end

  def add *properties, &proc
    if proc
      @add = true
      instance_exec(&proc)
      @add = false
    else
      @add = true
      properties.each do |property|
        self.set property
      end
      @add = false
    end
    return self
  end

  def get property
    pluralize = false
    if property.to_s.end_with?("s")
      pluralize = true
      property = property.to_s.chomp("s").to_sym
    end
    found_prop = []
    @atome.each do |props|
      if props.class == Hash
        if props.keys[0] == property
          found_prop << props.values[0]
        end
      elsif props.class == Array
        #Attention here we have to find if the type of the atome correspond to the property requested !!
        props.each do |atome|
          if atome.class == Hash
            if atome.keys[0] == :type && atome.values[0] == property
              found_prop << props
            end
          end
        end
      end
    end
    if pluralize
      return found_prop
    else
      #Here we create an atome to allow getter properties to respond to methods then return the correponding value ex: - puts a.color => :black
      return Atome.new(found_prop[found_prop.length - 1], {create_atome_id: :false}, {get_mode: :true})
    end
  end

  def enhance *properties
# todo exchange or enhance targeted prop
  end

  def delete *properties
    if properties.length > 0
      list_of_matching_prop = []
      index_to_delete = []
      pluralize = false
      properties.each do |prop|
        if prop.class == Hash
          index_to_delete = prop.values[0]
          prop = prop.keys[0]
          if index_to_delete.class == Integer || index_to_delete.class == Float || index_to_delete.class == TrueClass || index_to_delete.class == FalseClass || index_to_delete.class == Number
            index_to_delete = [index_to_delete]
          end
          pluralize = true
        end
        if prop.to_s.end_with?("s")
          pluralize = true
          prop = prop.to_s.chomp("s").to_sym
        end
        @atome.each_with_index do |atome, index|
          if atome.class == Hash
            atome.keys.each do |key|
              if key == prop
                list_of_matching_prop << index
              end
            end
          elsif atome.class == Array
            atome.each do |prop_found|
              if prop_found.class == Hash && prop_found.keys[0] == :type && prop_found.values[0] == prop
                list_of_matching_prop << index
              end
            end
          end
        end
      end
      if pluralize
        user_list_of_prop_to_delete = []
        index_to_delete.each_with_index do |add_to_list, index|
          if index_to_delete[index].class == Integer || index_to_delete[index].class == Float || index_to_delete[index].class == TrueClass || index_to_delete[index].class == FalseClass || index_to_delete[index].class == Number
            user_list_of_prop_to_delete << list_of_matching_prop[index_to_delete[index]]
          else
            #todo : search for prop with id and delete
            puts "todo : search for prop with id   #{index_to_delete[index]}"
          end
        end
        if user_list_of_prop_to_delete.length > 0
          if user_list_of_prop_to_delete && (!user_list_of_prop_to_delete[0].nil?)
            @atome.delete_at_multi(user_list_of_prop_to_delete)
          end
        else
          if list_of_matching_prop
            @atome.delete_at_multi(list_of_matching_prop)
          end
        end
      else
        last_item = list_of_matching_prop[list_of_matching_prop.length - 1]
        if last_item
          @atome.delete_at(last_item)
        end
      end
    else
      @atome = []
    end
  end

  # ------- Various utils methods below -------
  # Analysis of prop below
  def sanitize_prop (property_fct, options)
    sanitized_opt = []
    options.each do |properties|
      if properties.class == Hash
        properties.each do |key, index|
          if index.class == Hash
            new_props = [{type: key}]
            index.each do |prop, value|
              new_props << {prop => value}
            end
            sanitized_opt << new_props
            #todo : attention recursive analysis not done if a hash is in a hash it wont be processed and restrutured!!
            #todo  some treatment must be added : get the content for #{sanitized_opt}
          elsif index.class == Array
            index.unshift(type: key)
            #todo some treatment may be added : get the content for #{index}
            sanitized_opt << [index]
          else
            sanitized_opt << {key => index}
          end
        end
      elsif properties.class == Array
        sanitized_opt = sanitize_prop(property_fct, properties)
      else
        sanitized_opt << properties
      end
    end

    return sanitized_opt
  end

  def check_if_type_exist (new_values, master_prop)
    #todo : make it works at the first level
    # we check if current type is in the array else we add it
    add_type = true
    new_values.each do |prop|
      if prop.class == Hash
        if prop.keys[0] == :type && prop.values[0] == master_prop
          add_type = false
        end
      elsif prop.class == Array
        prop.each do |item|
          if item.class == Hash
            if item.keys[0] == :type && item.values[0] == master_prop
              add_type = false
            end
          end
        end
      end
    end
    if add_type
      return true
    else
      return false
    end
  end


  def insert_properties_in_atome properties
    #this method is called when a property is added or modified , the insert_properties_in_atome method is call by the set method.
    # The insert_properties_in_atome add the the prop in the @atome hash and also add the current atome in he @atomes hash(this hash contain all current atoms)
    # finnaly the  insert_properties_in_atome send the current atome to the Render engine.
    @atome << properties
    @@atomes[atome_id.to_s] = @atome
    Render_engine.render(self.atome_id)
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

  def atome
    return @atome
  end


  def self.properties
    return @@properties
  end
end

#------- Test and verifictaions below -------
# done(bugs) below the code crash because the preset doesn't create an standard atome
# a = Atome.new({color: :blue})
# a = Atome.new({type: :shape, preset: :box})
#a = Atome.new({ preset: :box,type: :shape,color: :blue})

#end of bugs
a = Atome.new(:shape)
#a.set({color: :blue})
#a.add({color: :pink})
##a.set do
##  type :shape
##  preset :box
##  x 200
##  y 10 0
##  width 50
##  height 170
##end
## todo(bugs) below bug the circle shape is ignored
##a.set([{type: :shape},{preset: :circle},{color: :blue},{x: 20},{y: 20},{width: 120},{height: 80},[{type: :shape}, {preset: :border},{height: 7},{color: :green}]])
##c=Atome.new()
#
#a.set do
#  type :text
#  name :mon_text
#  y 100
#  width 50
#  height 170
#end
#
#a.color do
#
#  color :red
#  width 200
#  x 50
#
#
#
#end

#a = Atome.new({:border => {:color => {color: :red, x: 200}}})
#
##a = Atome.new([{atome_id: :tuty}, {:border => {:color => {color: :red, x: 200}}}, {color: :pink}, {name: 547}, {type: :shape}, {renderer: :fabric}, {display: true}, {x: 50}])
#a = Atome.new()
##a = Atome.new(:box)
#a = Atome.new([{:border => {:color => {color: :pinky, x: :birp}}}, {color: :pink}, {name: 547}])
#
###############
#a.color(:red) #validated
##a.color({:border => {color: :blue, width: 500}}, {width: 900})
##a.color({:border => [{color: :brune}]}, {width: 5900})
##a.renderer(:zim)
##puts a
##puts "----- color prop getter -----"
##puts "colors found : #{a.colors()}"
#a.add({color: :blue})
#a.add({color: :pink})
#a.color("orange")
#puts "-----"
#puts a.color
#a.color.x=200
#a.add({color: :violet})
#a.add({color: :prune})
#a.add({color: :brown})
#a.add({color: :purple})
#a.add({color: :cherry})
#a.add({color: :lemon})
##puts a
##a.color({x: 200}, [type: :text], {width: 500})
##a.color({x: 200}, [{type: :text}, {x: 75}], {width: 500})
##a.color = "magenta"
##a.color = 511
##a.color = [:yellow]
##a.color = [851]
##a.color = 851
##a.color({y: 300})
##a.color(:violet)
##a.color({color: :cyan})
#a.color([x: 100])
##a.color([type: :color, color: :gray, renderer: :zim])
##a.renderer(:zim)
##a.color([{color: :gray, x: 200}, [z: 200]])
##a.color([{y: 700}, [{type: :color}, {color: :purple}], {width: 2330}])
#a.color({y: 800}, [{type: :color}, {color: :violet}], {width: 852})
##a.color({y: 800}, [{color: :violet}], {width: 852})
##a.color(:chatain)
##a.color([{y: 4500}, {color: :prune}, {width: 250}])
##a.color({y: 600}, [{type: :color}, {content: 'okok'}, [{type: :width}, [{type: :height}, {height: 520}]], [{color: :violet}, {type: :color, z: 250}]], {width: 852})
##a.color({y: 600, type: :text}, [{type: :color}, {content: 'okok'}, [{type: :width}, [{type: :height}, {height: 520}]], [{color: :violet}, {type: :color, z: 250}]], {width: 852})

#######################################################################################################################
#a.color do
#  color :strawbery
#  x 900
#  z 800
#  width 495
#  renderer :three
#  #color(:red)
#  #x(200)
#end
##a.color(:red)
#a.add do
#  color :parm
#  x 200
#  z 300
#  width 777
#  renderer :three
#  #color(:red)
#  #x(200)
#end
#######################################################################################################################
##
##a.delete(:color)
##a.delete(:colors)
##a.delete({:colors => 0})
##a.delete({:colors => [1 ,5]})
##a.delete({:colors => [1 ,"tot"]})
##a.delete({:colors => [0, 2,7]})
##a.delete({:colors => "2"})
#a.add({color: :cherry})
#a.add({color: :camel})
#puts  "--------------"
#puts "#{a}"
#
##puts "#{a.color}"
##a.colors("maroon5", "yallow", "marine", :cyan, :green, :black, {color: :violet, x: 500})
###a.color("orange")
###a.width(800)
##
##a.color([x: 100]).x(55)
##a.color().x(5570)
##a.color :blue
##a.color("red").x(200)
##a.width = 20000
##a.color({type: :color, color: :barbouille})
##a.set(color: :orange)
##a.set({color: :pink})
##a.set([{color: :orange}])
##a.set([{type: :color, color: :maroon}])
##a.set([{width: 200}, {color: :violet}])
##a.add(color: :citrus)
##a.add(color: :opal)
######################################################################
##todo : debug this below
## a.color({x: :cyan},{z: :blue})
## a.color({x: :citron,width: :cherry})
##a.add([{color: :ultraviolet}])
## a.delete({:colors => 0})
## bug 1 :
##a.color({y: 800}, [{type: :color}, {color: :violet}], {width: 852}) # type is missing at first level
## Bug :
## puts a.colors
######################################################################
## puts "######"
##puts a
##a.add({width: 6000, height: 2000}, [{color: :grayblue, y: 500}, {x: 200}])
##a.add("red")
#
##a.delete({color: {width: :height}})
##puts a.color()
##puts a
##a.delete(:color)
##a.delete({:colors => [0, 2,7]})
##a.delete({:colors => 2})
##a.delete({:colors => "2"})
## puts a.colors
##
############# tests here##############
##puts "-----"
##puts "#{a.colors[1..2]}"
#
##a.color = "orange"
##a.border(50).shadow(:black).color().x(440)
##a.border().shadow(:red)
##a.color(:orange)
##a.border(50)
#
## a tester
##a.color(x: 777)
#
##[{:atome_id => 70243276217300}, {:border => 50}, [{:border => 50}, {:color => :orange}, [{:color => :orange}, {:x => 440}]]]
#
#
## test with var and function
##def my_fct()
##  :blue
##end
#
##a=[{type: :shape},{preset: :box},[{type: :color},{content: my_fct()},{x: 30},{y:70}],[{type: :color}, {content: :orange}],[{type: :border},{content: 20}, {color: :red}]]
##
##puts "a : #{a}"
##a.color(:violet)
##a.color({color: :blue, x: 200})
##a.color(:pink)
#
##a.color  (:blue).x(200)
###a.color(:red).x(200)
##b.color(a.color())
##puts a.color()
#
## a.each do |atome|
##   puts atome.class
##end
