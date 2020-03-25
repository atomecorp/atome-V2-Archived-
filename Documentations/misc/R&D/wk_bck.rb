if Object.respond_to? :clear
  clear
end

class Atome
  #below atome prop with associated default value
  @@properties = {id: object_id, content: :lorem, color: :black, x: 100, y: 100, z: 100, width: 100, height: 100, depth: 100, child: :none, name: :anonymous, shadow: 20, border: 5, label: :tag}
  #below atome type that are aim to be display by default
  @@visual_types = {shape: :box, image: :logo, text: :lorem}
  @@types = {sound: :jingle, human: :user, machine: :computer, tool: :text, group: :empty, code: :hello, atome: :foo}.merge(@@visual_types)
  @@presets = {circle: "circle desc", box: "box desc", star: "star desc", triangle: "triangle desc", polygon: "polygon desc", squiggle: "squiggle desc", bloob: "bloob desc", lorem: "lorem ipsum dolore", user: "anonymous", computer: "riscPC", hello: "puts 'hello world'", foo: "this object has no body"}
  @@default_visuals = [:x, :y, :width, :height, :color]
  @@definition_order = [:type, :preset, :content]
  @@atome_methods = []
  @@properties.each do |object, value|
    @@atome_methods << object
    @@atome_methods << (object.to_s + "s").to_sym
    @@atome_methods << (object.to_s + "=").to_sym
  end

  def initialize val = nil, create_atome = true
    @atome = []
    atome_to_create = []
    if create_atome
      if val.nil?
        atome_to_create << {:id => object_id}
        atome_to_create << {:visible => false}
      elsif (val.class == String && val != "") || val.class == Symbol
        #in this case it mean we are in the creation of the root atome process, so we add a few default atomes
        atome_to_create << {:id => object_id}
        atome_to_create << {:visible => false}
        val = val.to_sym
        # below we add preset if a type is passed we manage to find the according preset , if a preset is passed we manage to find the according type!
        if !@@types[val].nil?
          #a type is passed  as default param, we get the preset out of it!!
          atome_to_create << {:type => val}
          atome_to_create << {:preset => @@types[val]}
        elsif !@@presets[val].nil?
          #a preset  is passed  as default param we get the type of it!!
          atome_to_create << {:preset => val}
          atome_to_create << {:type => @@types.key(val)}
        end
        atome_to_create.each do |props|
          if props.keys[0] == :type
            if @@visual_types.include?(props[:type])
              #in this case we are building a graphical object we set visible prop to true , and add a few default value so the atome can be display
              atome_to_create << {:visible => true}
              @@default_visuals.each do |prop|
                value = @@properties[prop]
                new_atome = {prop => value}
                atome_to_create << new_atome
              end
            end
          end
        end

      elsif val.class == Hash
        #in this case a hash is passed so no default atome will be added user has to manage the whole atome manually
        val.each do |prop, value|
          atome_to_create << {prop => value}
        end
      end
      atome_to_create.each do |new_atome|
        set(new_atome)
      end
    else
      @atome << val
    end
    # @sub_property = nil
    return self
  end

  #methods generator
  @@atome_methods.each do |object|
    define_method(object) do |*value|
      @sub_property = object.to_s.gsub("=", "").to_sym

      if value.length > 0
        #params are passed: it's setter!!
        set({object => value[0]})
        return self
      else
        #no params are passed: it's getter!!
        self.get(object)
      end
      #return self
    end
  end

  # methods SAGED :  Set Add  Get Exchange Delete
  def set val, add_mode=false
    # puts @sub_property
    #@atome[@sub_property] = value
    prop_to_add=val.keys[0]
    value_to_add=val[prop_to_add]
    prop_to_add=prop_to_add.to_s.chomp("=").to_sym
    if !add_mode
      #here the add_mode is not active so we remove all atome correspoding to the  requested property
      filtered_atomes=[]
      @atome.each_with_index do |atome, atome_nb|
        prop_found=atome.atome[0].keys[0].to_s.chomp("=")
        if prop_to_add.to_s != prop_found.to_s
          filtered_atomes <<@atome[atome_nb]
        end
      end
      @atome=filtered_atomes
    end

    new_prop={prop_to_add => value_to_add}
    @atome << Atome.new(new_prop, false)
  end

  def add val
    set val, true
  end

  def get val
    prop_collected = []
    if val.to_s.end_with?("s")
      # we get all atomes containing the requested prop
      @atome.each do |atome|
        if !atome.atome[0].nil? && val.to_s == atome.atome[0].keys[0].to_s + "s"
          prop_collected << atome
        end
      end
      return prop_collected
    else
      # we get only the last atome taht conatain the requested prop
      @atome.each do |atome|
        if  val.to_s == atome.atome[0].keys[0].to_s
          prop_collected << atome
        end
      end
      return prop_collected.last
    end
    #return "atome"
  end

  def exchange atome_1, atome_2
    @atome[atome_1], @atome[atome_2] = @atome[atome_2], @atome[atome_1]
  end

  def delete val = :all

  end

  # generic methods
  def property
    return self.atome[0].keys[0]
  end


  def value
    props_and_val = self.atome[0]
    prop = props_and_val.keys[0]
    value = props_and_val[prop]
    return value
  end

  def length
    return @atome.length
  end

  def each(&block)
    @atome.each(&block)
  end

  def atome val = nil
    return @atome
  end

  def to_s
    atome = @atome.inspect
    return atome
  end

  def toto(val = nil, &proc)
    if proc
      # proc.call
      instance_exec(proc.call)
      #instance_exec(&proc)
      #puts  yield.length
    else
      puts val
    end
  end

end


def color val
  puts self.class
  puts "iji"
end

#a=Atome.new #empty
#a=Atome.new() #empty
#a=Atome.new('') #empty
a = Atome.new(:shape) #preset
a.color=:red
a.add(color: :green)
puts a.colors
puts a.color

#puts a.id
#puts a
#a.color(:red)
#a.color(:violet)
#a.add(color: :blue)
#a.width(200)
#puts a
#puts a.colors
#
#
#e=Atome.new({id: :toto, type: :box})  #multiple
#f=Atome.new({id: :toto, color: :blue}) #multiple
#g=Atome.new(:shape) #type
#
#a.id("poi")
#
#puts a.width
#puts a.id

#c = Atome.new(:no_id)
#puts a
#puts b
#a.color(:prune)
#a.color(:violet)
#a.add(color: :pink)
#a.id(:totu)

##puts a
#a.color({value: :red, x: 200})
#a.color(:violet)
#p a
#p a
#puts a.color
#puts a


#a.each do |a|
#  p a.property
#  p a.value
#  p a
#end
#puts a.length
# a.exchange(0,3)
#puts a
# SAGED


#a.add(color: :red, x: 200)

#a.set(color: {value: :violet, x: 77}, x: 200) #possibly wrong syntax block it if possible
#a.set(color: :red, x: 200) #wrong syntax block it if possible


#b.color(:red).x(33) #correct it and make it work
#a.x=55
#a.x=77
##a.add(x: 560)
##a.color.x(500)
#a.x=22
##a.y=200
#a.x(55)
#a.add(x: 560)
#a.add(x: 564)
#a.add(x: 66)
#a.add(x: 88)
#a.add(x: 54)
#a.x=33
#a.add(x: 222)

#puts a
#a.toto("okok")
#a.toto do
#
#  color(200)
#   #puts "kool"
#   #puts "jj"
#  #{x: 200}
#  #{color: :pink}
#  #{color: :orange}
#end

#b.color do
#  x: 200
#end

#puts a
#b.add do
#end
#d.add(color: :pink)
# a.add.color="red"
#puts colors
wanted_syntax = <<Strdelim

methods SAGED :  set add  get exchange delete
b.add.color="red"
b.add(color: :red, x: 200)
b.set(color: {value: :violet, x: 77}, x: 200)
b.set(color: :red, x: 200)
b.color(:red).x(33)
b.color do
  x: 200
end
b.add do
end
d.add(color: :pink)
puts colors
Strdelim
