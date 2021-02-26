# Creation tests
circle(200,200,150,120)
circle ({color: :red, x: 100, y: 150})

# open test
run
open_ide
open_console(:toggle)


# Param test
b=box()
b.color="red"
b.color=:pink
b.color(:blue)
b.color("green")

# infos test
b=box()
p b
p b.id
p b.atome_id
p b.atome
p b


# grab test
b=box()
#grab wait for an atome_id
grab(b.atome_id).color(:blue)
c=circle()
#get wait for an id
get(c.id).x(200).y(120).color(:green)


# chain test
b=box
b.color(:yellow).x(200).y(100)

# methods test
run
b=box()
box({color: :red, x: 150})
box(200,200)

b.color="green"
b.touch do
  alert "good"
end

# file tests
create(:project ,:myscript) # create a new sript
store(:myfile , "file content")
store({newfile:  "content to store"})
load :myscript #load the script and replace conetnt of the ide

puts Atome.current_project # print the name of the project on screen


# event test
b=box()
b.touch do
  b.color(:yellow)
end

#drag test
b=box()
b.drag()

#sleep test
b=circle()
render
sleep 1
b.color(:orange).x(70).y(200)
render
sleep 2
b.color(:red).x(170).y(90)
render
sleep 0.1
b.color(:blue).x(70).y(90)
render
sleep 0.1
b.color(:pink).x(70).y(90)
i=0


#list atomes
b=box()
c=cirle()
puts Atome.atomes

#print atome_id
b=box()
puts b.atome_id

#event with self
b=box()
c=circle
b.touch do
  self.color="red"
  c.x=200
end

#not loaded as code
clear
create(:project, :file)
load :file, `flash`
puts Atome.current_project
# should puts the id of the current project not the one of the loaded one

#timeout
timeout(2000) do
  alert('ok!!')
end

#nonymous-user test
puts Atome.user # after and before login

#user basic
Atome.set(:user,  :my_new_user)
p Atome.user

#triangle
triangle()

#bloob
bloob()

#squiggle
squiggle()

# test set
Atome.set(:user,  :JohnDoe)
puts Atome.user
Atome.set({user:  :joahnna})
puts Atome.user
b=box()
b.set({id: :my_identity})
p b.id
b.set(:color , :green)
p b.color

#read_bufferize_find
b=box()
p find "b.drag"
read "project_0"
b.drag
wait 2000 do
  index= Atome.buffer.length-1
  p  Atome.buffer[index]
end

#delete
delete :project_0

#rename
rename :project_0, :my_script



# clear
# run
# attention if vocal renderer is placed before html render the next lines will only be renderered in html
# attention if inside array
# attention if no type or preset are send at creation time it crash
a=Atome.new({atome_id: :la_boite},{preset: :box},{color: :cyan},{x: 50},{y: 70},{draggable: :true},{renderer: :html})
b=Atome.new({atome_id: :autre_polygone},{preset: :box},{color: :orange},{x: 150},{y: 70},{draggable: :true})
a=Atome.new(:box)
b = Atome.new({color: :blue},{atome_id: :poipoip})
a.color([type: :color, color: :gray])
a.color([{color: :blue}])
a.color([{color: :blue},{x: 50},{y: 70},{draggable: :true}])
a.color(:pink)




# ------- Test and verifictaions below -------
# done(bugs) below the code crash because the preset doesn't create an standard atome
a = Atome.new({color: :blue})
a = Atome.new({type: :shape, preset: :box})
a = Atome.new({ preset: :box,type: :shape,color: :blue})

end of bugs
a = Atome.new()
a.set({color: :blue})
a.add({color: :pink})
a.set do
 type :shape
 preset :box
 x 200
 y 100
 width 50
 height 170
end

puts a
a.delete(:colors)
puts "-----"
puts a
puts a.colors
# todo(bugs) below bug the circle shape is ignored
a.set([{type: :shape},{preset: :circle},{color: :blue},{x: 20},{y: 20},{width: 120},{height: 80},[{type: :shape}, {preset: :border},{height: 7},{color: :green}]])
c=Atome.new()

c.set do
 type :text
 name :mon_text
 y 100
 width 50
 height 170
end

a = Atome.new({:border => {:color => {color: :red, x: 200}}})

#a = Atome.new([{atome_id: :tuty}, {:border => {:color => {color: :red, x: 200}}}, {color: :pink}, {name: 547}, {type: :shape}, {renderer: :fabric}, {display: true}, {x: 50}])
a = Atome.new()
#a = Atome.new(:box)
a = Atome.new([{:border => {:color => {color: :pinky, x: :birp}}}, {color: :pink}, {name: 547}])

##############
a.color(:red) #validated
#a.color({:border => {color: :blue, width: 500}}, {width: 900})
#a.color({:border => [{color: :brune}]}, {width: 5900})
#a.renderer(:zim)
#puts a
#puts "----- color prop getter -----"
#puts "colors found : #{a.colors()}"
a.add({color: :blue})
a.add({color: :pink})
a.color("orange")
puts "-----"
puts a.color
a.color.x=200
a.add({color: :violet})
a.add({color: :prune})
a.add({color: :brown})
a.add({color: :purple})
a.add({color: :cherry})
a.add({color: :lemon})
#puts a
#a.color({x: 200}, [type: :text], {width: 500})
#a.color({x: 200}, [{type: :text}, {x: 75}], {width: 500})
#a.color = "magenta"
#a.color = 511
#a.color = [:yellow]
#a.color = [851]
#a.color = 851
#a.color({y: 300})
#a.color(:violet)
#a.color({color: :cyan})
a.color([x: 100])
#a.color([type: :color, color: :gray, renderer: :zim])
#a.renderer(:zim)
#a.color([{color: :gray, x: 200}, [z: 200]])
#a.color([{y: 700}, [{type: :color}, {color: :purple}], {width: 2330}])
a.color({y: 800}, [{type: :color}, {color: :violet}], {width: 852})
#a.color({y: 800}, [{color: :violet}], {width: 852})
#a.color(:chatain)
#a.color([{y: 4500}, {color: :prune}, {width: 250}])
#a.color({y: 600}, [{type: :color}, {content: 'okok'}, [{type: :width}, [{type: :height}, {height: 520}]], [{color: :violet}, {type: :color, z: 250}]], {width: 852})
#a.color({y: 600, type: :text}, [{type: :color}, {content: 'okok'}, [{type: :width}, [{type: :height}, {height: 520}]], [{color: :violet}, {type: :color, z: 250}]], {width: 852})

######################################################################################################################
a.color do
 color :strawbery
 x 900
 z 800
 width 495
 renderer :three
 #color(:red)
 #x(200)
end
#a.color(:red)
a.add do
 color :parm
 x 200
 z 300
 width 777
 renderer :three
 #color(:red)
 #x(200)
end
######################################################################################################################
#
a.delete(:color)
a.delete(:colors)
a.delete({:colors => 0})
a.delete({:colors => [1 ,5]})
a.delete({:colors => [1 ,"tot"]})
a.delete({:colors => [0, 2,7]})
a.delete({:colors => "2"})
a.add({color: :cherry})
a.add({color: :camel})
puts  "--------------"
puts "#{a}"

puts "#{a.color}"
a.colors("maroon5", "yallow", "marine", :cyan, :green, :black, {color: :violet, x: 500})
#a.color("orange")
#a.width(800)

a.color([x: 100]).x(55)
a.color().x(5570)
a.color :blue
a.color("red").x(200)
a.width = 20000
a.color({type: :color, color: :barbouille})
a.set(color: :orange)
a.set({color: :pink})
a.set([{color: :orange}])
a.set([{type: :color, color: :maroon}])
a.set([{width: 200}, {color: :violet}])
a.add(color: :citrus)
a.add(color: :opal)
####################################################################
todo : debug this below
a.color({x: :cyan},{z: :blue})
a.color({x: :citron,width: :cherry})
a.add([{color: :ultraviolet}])
a.delete({:colors => 0})
bug 1 :
a.color({y: 800}, [{type: :color}, {color: :violet}], {width: 852}) # type is missing at first level
Bug :
puts a.colors
####################################################################
puts "######"
puts a
a.add({width: 6000, height: 2000}, [{color: :grayblue, y: 500}, {x: 200}])
a.add("red")

a.delete({color: {width: :height}})
puts a.color()
puts a
a.delete(:color)
a.delete({:colors => [0, 2,7]})
a.delete({:colors => 2})
a.delete({:colors => "2"})
puts a.colors

########### tests here##############
puts "-----"
puts "#{a.colors[1..2]}"

a.color = "orange"
a.border(50).shadow(:black).color().x(440)
a.border().shadow(:red)
a.color(:orange)
a.border(50)

a tester
a.color(x: 777)

[{:atome_id => 70243276217300}, {:border => 50}, [{:border => 50}, {:color => :orange}, [{:color => :orange}, {:x => 440}]]]


test with var and function
def my_fct()
 :blue
end

a=[{type: :shape},{preset: :box},[{type: :color},{content: my_fct()},{x: 30},{y:70}],[{type: :color}, {content: :orange}],[{type: :border},{content: 20}, {color: :red}]]

puts "a : #{a}"
a.color(:violet)
a.color({color: :blue, x: 200})
a.color(:pink)

a.color  (:blue).x(200)
#a.color(:red).x(200)
b.color(a.color())
puts a.color()

a.each do |atome|
  puts atome.class
end
