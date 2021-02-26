
m

#Box creation
b=Atome.new(:box)
b=Atome.new(type: shape)
b=Atome.new(type: shape, preset: :box)

#colored box creation
b=Atome.new(type: shape, color: :red)
b.color=:red
b.color("red")
b.set(color: :red)

#Add multiple prop
b.set(color: :red, x: 200, y: 100)

#stacking prop
b.add(color: :red, color: :blue)
b.add.color=:red

#add sub prop
a.color.x(300)
a.color(value:red)
b.add(color: :red, color:[value: :blue, x: 200])
a.color(:red).x=200
a.color do
  value :red
  x 200
  y 100
end
a.color.add(x: 200, y: 100)

#get prop
a.get.color
#=> :blue
a.color
#=> :blue
a.colors
#=>[:red, :blue]
get[a[color[x]]]
#=> 200

#delete
a.delete[color[1]]
#=>blue
a.delete[color[0]]
#=>red
a.color.delete[0]
#=> red
a.colors.delete
#=> [:red, :blue]
a.color.delete(x)
#=> 200
a.contents[1]="poil" #todo make it work
a.contents.language(:english) #todo make it work

b.get(colors)
b.get(color)
b.get(colors[1], colors[3])

b.add(color: :red, x: 300)
b.add.color="red"
b.add(color: :red, x: 200)
b.set(color: {value: :violet, x: 77}, x: 200)
b.set(color: :red, x: 200)
b.color(:red).x(33)
b.color do
  x 200
end
b.add do
end
d.add(color: :pink)
puts colors
