 # test with var and function
def my_fct()
  :blue
end

# la solution est la bonne c'est la seule qui permet l'ajout de multiple propriétés identiques (plusieurs couleurs par exemple) et le stack de celle-ci ainsi que l'inclusion de sous-propriétés
# Les hash representent les atomes,  les Array sont des molecules pouvant contenir de multiple atomes, les molecule sont typés (via l'atome type) et permettent ainsi l'ajout de sous propriétés complexes et l'inclusion de molecule dans un molecule 
a=[{type: :shape},{content: "0,10,50,100"},{type: :preset},{content: :box},[{type: :color},{content: my_fct()},{x: 30},{y:70}],[{type: :color},{content: :orange}],[{type: :border},{content: 20}, {color: :red}]]

puts "a : #{a}"
puts "-------"

#inconvenient ci-dessous impose une clef valeur si on ajoute une sous propriété 
b=[{type: :shape,content: "0,10,50,100"},{type: :preset,content: :box},{type: :color,content: my_fct(),x: 30,y:70},{type: :color, content: :orange},{type: :border,content: 20, color: [{type: :color, value: :prune, x: 23}]}]
puts "b : #{b}"
puts "-------"

#x=[{type: :shape,preset: :box},{type: :color,content: my_fct(){,{x: 30,y:70},{type: :color, content: :orange},{type: :border,content: 20, color: [{type: :color, value: :prune, x: 23}]}]
z=[{type: :shape,content: "0,10,50,100"},{type: :preset,content: :box},{type: :color,content: my_fct()},{type: :x, content: 30},{type: :y, content: 70},{type: :color, content: :orange}, [{type: :border,content: 20}, [{type: :color,content: :prune},{type: :x,content: 32}]]]
puts "z : #{z}"
puts "-------"

#probleme dans un array on ne connait pas le type la machine est incapable de connaitre le type de la molecule : solution typer la molecule 
x=[{type: :shape},{shape: "0,10,50,100"},{preset: :box},{color: my_fct()},{x: 30},{y: 70},{color: :orange},[{type: :border},{border: 20},[{type: :color},{color: :prune},{x: 32}]]]


puts "x : #{x}"
puts "-------"


# ex 1 syntax (x) ne marche pas 6 eme ligne color(:orange).x ou c.color(:orange)
x=Atome.new(:box)
x=[{type: :shape},{shape: "0,10,50,100"},{preset: :box}]

x.color("red")
x=[{type: :shape},{shape: "0,10,50,100"},{preset: :box},{color: :red}]

x.add.color("blue")
x=[{type: :shape},{shape: "0,10,50,100"},{preset: :box},{color: :red},{color: :blue}]

x.color({color: :orange, x: 200})
x=[{type: :shape},{shape: "0,10,50,100"},{preset: :box},{color: :orange, x: 200}]


# ex 2 syntax (x)
x=Atome.new(:box)
x=[{type: :shape},{shape: "0,10,50,100"},{preset: :box}]

x.color("red")
x=[{type: :shape,shape: "0,10,50,100",preset: :box},{type: :color, color: :red}]

x.add.color("blue")
x=[{type: :shape,shape: "0,10,50,100",preset: :box},{type: :color, color: :red},{type: :color, color: :blue}]

x.color({color: :orange, x: 200})
x=[{type: :shape,shape: "0,10,50,100",preset: :box},{type: :color, color: :orange, x: 200}]


# ex 3 syntax (x)
x=Atome.new(:box)
x=[{type: :shape},{shape: "0,10,50,100"},{preset: :box}]

x.color("red")
x=[{type: :shape,shape: "0,10,50,100",preset: :box},[{type: :color},{color: :red}]]

x.add.color("blue")
x=[{type: :shape,shape: "0,10,50,100",preset: :box},[{type: :color},{color: :red},{color: :blue}]]

x.color({color: :orange, x: 200})
x=[{type: :shape,shape: "0,10,50,100",preset: :box},[{type: :color},{color: :orange},{x: 200}]]

x.add({childs: [:id1, :id1, :id2]})
x=[{type: :shape,shape: "0,10,50,100",preset: :box},[{type: :color},{color: :orange},{x: 200}]]

x.color(width:[x: 200])
x=[{type: :shape,shape: "0,10,50,100",preset: :box},[{type: :color},{color: :orange},{x: 200}]]



