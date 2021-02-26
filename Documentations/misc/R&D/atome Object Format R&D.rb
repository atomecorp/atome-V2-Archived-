class Atome
  def initialize (param = nil)
    if param != nil
      @atome = param
    else
      @atome = {}
    end
  end

  list = [:x, :y, :width, :height, :color, :border, :shadow]

  list.each do |function|
    define_method(function) do |value = nil|
      if value
        new_prop = {:value => value}
        @atome[function] = Atome.new(new_prop)
        # a param is passed it's a setter
        return self
      else
        return @atome[function]
        #no params are passed: it's getter!!
      end
    end
  end

  def add prop
    nb_of_prop_found=0
    requested_prop=prop.keys[0].to_s
    value=prop[prop.keys[0]]
    @atome.keys.each do |prop_found|
      if requested_prop.start_with?(prop_found.to_s)
        nb_of_prop_found = nb_of_prop_found + 1
      end
    end
    requested_prop=(requested_prop+"_#{nb_of_prop_found}").to_sym
    new_prop = {:value => value}
    @atome[requested_prop] = Atome.new(new_prop)
  end

  def atome
    @atome
  end

  def to_s
    return @atome.to_s
  end
end

e = Atome.new
e.color(:pink)
e.x(44)
e.add(color: :yellow)
e.add(color: :orange)
e.x(333)
e.y(555)
e.color(:blue)
e.color
e.color.x(22)
e.border(39)
e.border.color(67)
e.border.height(98)
e.border.width(98)
e.border.shadow(7)
e.border.color.x(66)
puts "--------"
puts e.color
puts e


wanted_syntax = <<Strdelim

#Box creation
b=Atome.new(:box)
b=Atome.new(type: shape)
b=Atome.new(type: shape, preset: :box)

#colored box creation
b=Atome.new(type: shape, color: :red)
b.color=:red
b.color("red")
b.set(:color : red)

#Add multiple prop
b.set(:color :red, x: 200, y: 100)

#stacking prop
b.add(:color :red, color:blue)
b.add.color=:red

#add sub prop
a.color.x(300)
a.color(value:red)
b.add(:color :red, color:[value: :blue, x: 200])
a.color(:red).x=200
a.color do
  value :red
  x 200
  y 100
end
a.color.add(x: 200, y: 100)

#get prop
a.get.color
=> :blue
a.color
=> :blue
a.colors
=>[:red, :blue]
get[a[color[x]]]
=> 200

#delete
a.delete[color[1]]
=>blue
a.delete[color[0]]
=>red
a.color.delete[0]
=> red
a.colors.delete
=> [:red, :blue]
a.color.delete(x)
=> 200


b.add(color: :red, x: 3OO)
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
d.add(coleor: :pink)
puts colors
Strdelim

example_syntax = <<Strdelim
e.color(:red) # or e.color=:red
e.add(color: :yellow)  # or e.add.color(:yellow)  # or e.add.color=:yellow
e.colors(:green, :blue)
e.add(color: :pink) #or e.color(add: :red)
#e.add.colors(:cyan, :purple) # or e.add(colors: [:cyan, :purple])
e.color(:gray) # or e.color=:gray
e.color[3]= :magenta #or e.color[3](:magenta)  # a verifier si possible
puts e.color # => :gray
puts e.color[2] # :=> blue
puts e.colors # => [:red, :green, :blue, :magenta, :cyan, :gray]
e.set(color: :orange) # or e.set.color= :orange # or e.set.color(:orange)
puts e.color # => :orange
puts e.colors # => [:orange]
Strdelim

