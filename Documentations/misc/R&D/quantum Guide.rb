if Object.respond_to? :clear
  clear
end
require "./render_engines.rb"
class Atome
  #@@default_components={display: :}
  @@atomes_to_display = []
  @@rendering_methods = [:headless, :zim, :treejs, :vocals]
  properties = [:atome_id, :id, :content, :color, :x, :y, :z, :width, :height, :child, :name, :shadow, :border, :name, :label, :type, :language, :display, :render]
  @@visual_types = {shape: :box, image: :logo, text: :lorem}
  @@types = {effect: :distort, sound: :jingle, human: :user, machine: :computer, tool: :text, group: :empty, code: :hello, atome: :foo}.merge(@@visual_types)
  @@presets = {circle: "circle desc", box: "box desc", star: "star desc", triangle: "triangle desc", polygon: "polygon desc", squiggle: "squiggle desc", bloob: "bloob desc", lorem: "lorem ipsum dolore", user: "anonymous", computer: "riscPC", hello: "puts 'hello world'", foo: "this object has no body"}
  @@default_visuals = {x: [0], y: [0], width: [100], height: [300], color: [:black]}
  @@definition_order = [:type, :preset, :content]
  @@atome_methods = []
  properties.each do |object|
    @@atome_methods << object
    @@atome_methods << (object.to_s + "s").to_sym
    @@atome_methods << (object.to_s + "=").to_sym
  end

  def initialize(param = nil, add_atome_id = true)
    if param != nil
      @atome = param
    else
      @atome = {}
    end
    if add_atome_id == true
      #new_prop = {:atome_id => object_id}
      # we create a new atome and send the add_atome_id to false to prevent recursive creation atome
      @atome[:atome_id ]=object_id
      # @atome[:atome_id] =Atome.new(new_prop, false)
    end
      ######################### ----------- #####################
      # puts @atome.class
    ##puts @atome[:type]
    @atome.each do |type|
      puts "type: #{type}"
      #puts type.class
    end
    #puts "-------"
    # self.concretise
      ######################### ----------- #####################
  end

  props = [:id, :x, :y, :width, :height, :color, :border, :shadow]
  #We props are not only props for the Atome but they are used created methods form this list
  prop_list = []
  # for more convenience we add pluralisation to all props and methods as well as assignation for all methods adding "=" to all props methods
  props.each do |object|
    prop_list << object
    prop_list << (object.to_s + "s").to_sym
    prop_list << (object.to_s + "=").to_sym
  end

  # we define all Atome's methods below
  @@atome_methods.each do |function|
    define_method(function) do |*values, &proc|
      @current_prop = function
      if proc
        #proc.call
        #instance_exec(proc.call)
        instance_exec("mon param_here!!!", &proc)
        #instance_exec(function) {|x| puts x }
        #puts  yield.length
      else
        #puts function
      end
      if values.length == 0
        value = nil
      elsif values.length == 1
        value = values[0]
      else
        values.each_with_index do |value, index|
          singular_function = function.to_s.chomp("s").to_sym
          if index == 0
            self.set(singular_function => value)
          else
            self.add(singular_function => value)
          end
        end
      end
      #we remove the "=" sign to create the method
      function = function.to_s.chomp("=").to_sym
      if value
        # a parameter is passed we set up a setter
        if value.class == Hash
          method = value.keys[0]
          property = function
          value = value[method]
          self.send(method, {property => value})
        else
          new_prop = {function => value}
          # we create a new atome and send the add_atome_id to false to prevent recursive creation atome
          #@atome[function] = Atome.new(new_prop, false)

           @atome[function] = Atome.new(new_prop, false)
        end
        return self
      else
        get function
      end
    end
  end

  # SAGED methods here (Set Add Get Exchange Delete)

  def value data = nil
    if data.class == Symbol
      prop = @current_prop
      self.send(:set, {prop => data})
    elsif data.class == Hash
      prop = data.keys[0]
      value = data[prop]
      self.send(:set, {prop => value})
    end
  end

  def set prop = nil
    prop_to_set = prop.keys[0]
    value = prop[prop_to_set]
    @atome.each do |key, value|
      if key.to_s.start_with?(prop_to_set.to_s)
        @atome.delete(key)
      end
    end
    # now we feed the @atome
    if value.class == Hash
      new_prop = value
    else
      new_prop = {prop_to_set => value}
    end
    # new_prop[:parent]=@atome[:atome_id][:value][:value]
    # we create a new atome and send the add_atome_id to false to prevent recursive creation atome
    @atome[prop_to_set] = Atome.new(new_prop, false)
    return self
  end

  def add prop = nil
    if prop
      nb_of_prop_found = 0
      requested_prop = prop.keys[0].to_s
      value = prop[prop.keys[0]]
      @atome.keys.each do |prop_found|
        prop_found = prop_found.to_s
        if prop_found.start_with?(requested_prop)
          nb_of_prop_found = nb_of_prop_found + 1
        end
      end
      requested_prop = (requested_prop + "_#{nb_of_prop_found}").to_sym
      # now we feed the @atome
      if value.class == Hash
        new_prop = value
      else
        prop = requested_prop.to_s.split("_")[0].to_sym
        new_prop = {prop => value}
      end
      # we create a new atome and send the add_atome_id to false to prevent recursive creation atome
      # new_prop[:parent]=@atome[:atome_id][:value][:value]
      @atome[requested_prop] = Atome.new(new_prop, false)
    end
    return self
  end

  def get function = nil
    collected_prop = []
    @atome.each do |prop, value|
      if prop.to_s.start_with?(function.to_s.chomp("s"))
        collected_prop << value
      end
    end
    if function.to_s.end_with?("s")
      @atome[function] = Atome.new(collected_prop, false)
      return Atome.new(collected_prop, false)
      #return collected_prop
    else
      return collected_prop[collected_prop.length - 1]
    end

  end

  def erase prop = nil

  end

  # rendering
  def concretise val = nil
    puts "display_me_now #{@atome}"
  end

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

  def [] val = nil , add_atome_id=false
    return @atome
  end

  def []= val = nil, add_atome_id=false

    return @atome
  end

  def to_s

    #if @atome.length == 1
    #  #hack to display only the value of the request prop,  seems to work  with multiple values too
    #  if @atome.keys[0] == :value
    #    key = @atome.keys[0]
    #    return @atome[key].to_s
    #  end
    #end
    #return @atome.to_s
    return @atome.to_s
  end

end

e = Atome.new
#e.color="red"
puts e.id.class
#e.color(:red)
#e.add(color: :blue)
#e.id="poi"
#puts e
#e.color(:red)
#e.add(color: :blue)
#e.color.x=440
#puts e
#e.type=(:shape)
#e.render(:zim)
#e.color(:blue)
#e.color.x=200
#e.add(color: :pink)
#e.add(render: :headless)
#puts e
#e.add(color: :yellow)
#e.color(add: :prune)
#e.color(add: :green)
#e.color(add: :pink)
#e.color=:red
#e.color.x=20
#e.color = :red
#e.color.x(333)
#e.color = :mauve
#e.width(400)
#e.color do
#  value :orange
#  x 200
#  y 100
#end
#
#e.add.content("salut")
#e.add.content("hello")
#e.add.content("hola")
#e.add(color: "salut")
#e.add(content: "hello")
#e.add(content: "hola")
#e.add(content: "hi")
#e.concretise(:konva)
#puts e

#e.contents[1]="poil" #todo make it work
#e.contents.language(:english) #todo make it work
#e.contents.each do |contents|
#  puts contents.language(:french)
#end
#e.contents[1].language(:french)
#e.add({content: :english})
#e.content.language="french"
#e.content.add(language: :english)
#puts "contents : #{e.contents}"
#puts "content[0] : #{e.contents[0]}"
#puts "content: #{e.content}"
#puts e
#e.color({value: :blue})
#puts e.colors

#
#e.set(color: :red)
#e.set(color: {value: :pink, x: 200, y: 100})
#e.colors({value: :pink, x: 200, y: 100}, "red", "blue")
##puts e
#puts e.colors[0]
#e.add(color: :yellow)
#e.add(color: :purple)
#e.add(color: {value: :gray, x: 200, y: 100})
#
##e.colors[0] = :prune todo :  make this work
#puts e
#########################
#
#
#puts e
#e.add(color: :blue)
#e.add(color: :mauve)
#puts e
#
#
#puts e.class
#puts e
#puts e.colors.class
#e.colors[1] = "cyan"
#puts e.colors[1]
#puts e.class
#
#e.add(color: :magenta)
#e.add(color: :rose)
#e.color(add: :yellow_green)
#
#
#e.x = 333
#e.y(555)
#e.color(:blue)
#e.color
#e.color.x(22)
#e.border(39)
#e.border.color(67)
#e.border.height(98)
#e.border.width(98)
#e.border.shadow(7)
#e.border.color.x(66)
#e.set(color: :violet)
#e.color(set: :mauve)
##puts "--------"
##puts e.color.x
#puts e
#puts e.atome_id()

#a = Atome.new
#a.id = "poil"
#a.color = :pink
#a.add(color: :purple)
##puts a.id
##puts a.color
#puts a.colors
##puts a

