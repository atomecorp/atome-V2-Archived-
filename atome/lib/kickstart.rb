def version
  return "v:0.16a"
end

def news
  t = <<Str
    # 23 added a news document to list the new functionality available znf version to show current eVe version
  # 24 04 2020 added shadows api, type help.shadows
  # 25 04 2020 added border api, type help.border
  # 27 04 2020 added delete api, type help.delete
  # 29 04 2020 Added anmation api, type help.animation
  # 30 04 2020 Added image object + api
  # 04 05 2020 add new object type particle
  # 04 05 2020add new property : property
Str
end

module Help

  def self.api
    t = <<Str
  ######################## shortcut ########################
# get help
help
# get version
version
# get help
puts version
# get new functionality list
news


######################## shortcut ########################
# run code :
ctrl-r #or click on the bar above the code editor
# comment code :
ctrl-c
# reformat code (selection only):
ctrl-j
# reformat code (all ide code) :
ctrl-e
# open/close the code editor :
ctrl-i
# open/close the console :
ctrl-t
# clear the console :
ctrl-x #or type clear in the code editor then run :
# activate/desactivate auto run code :
ctrl-a
# reboot :
ctrl-y

######################## general methods ########################

# clear console:
clear
# clear ide :
clear ide
# save file :
save :my_script
# load file :
load :my_script
# get help :
help
#close the code editor # attention will be replace soon with a new close /open api
open_ide(:false)
#open the code editor # attention will be replace soon with a new close /open api
open_ide(:true)
# toggle the code editor # attention will be replace soon with a new close /open api
open_ide(:toggle)
# close the the console # attention will be replace soon with a new close /open api
open_console(:false)
# open the the console # attention will be replace soon with a new close /open api
open_console(:true)
# toggle the the console # attention will be replace soon with a new close /open api
open_console(:toggle)
# wait
b=box()
wait 2 do
  b.color(:red)
end
# write code to ide
write("box()")
# alert send an alert text to the renderer
alert("hello")
# log send text to console
log("hello")
# grab get an atome from it's atome_id
grab(6548798)
# grab get an atome from it's id
get("shape_0")
# obtain demo text
lorem
# to render to the screen
text(lorem)
# other dummy text lorem2, lorem3

######################## system settings ########################
# Ide font size
Ide.text(20)
# console font size
Console.text(20)

######################## eVe object type ########################
# create text:
text("my text")
# create box:
box()
#or
square()
# create circle
circle()
#or
ellipse()

######################## Methods ########################
# color
a=box()
a.color(:red)
# size ( homothetic)
b=text("my text")
b.size(20)
# width
a=box()
a.width(200)
# height
a=box()
a.height(250)
# x
a=box()
a.x(50)
# y
a=box()
a.y(250)
# z (object order when in 2D)
a=box()
a.z(2)
# move
a=box()
a.draggable(:true)
# stop move
a.draggable(:false)
# edit content (texte)
b=text("my text")
b.editable(:true)
# stop edit
b.editable(:false)
# transparency (range 0 to 1)
a=box()
a.transparency(0.5)
# rotation  (degre)
a=box()
a.rotate(20)
# blur (set in pixels)
a=box()
a.blur(7)
# shadow offset x , offset y, thickness, color, invert(shadow inside object)
a.shadow({x: 5}, {y: 5}, {thickness: 3}, {color: :black}, {invert: :true})
# border thikness color pattern
a.border({thickness: 7}, {color: :red}, {invert: :true}, {pattern: :dashed})
# Smooth make curve angles
a.smooth(15)
# set id
a.id(:my_object)
# set a property (it reset the property; ex for color it erase all colors and replace with current)
a.set({color: :red})# identical to a.color(:red)
#add a property (it add the propery to property already present ; ex for color add aonther color and so create a gradient)
a.add({color: :orange, x: 200})
# to get a prop ex color
a.color
# to print color value in the console
puts a.color()
#to get x position
puts a.x
#to delete
a.delete()
#to delete a property
a.delete(:x)

######################## events ########################
# touch
b=text("my text")
b.touch do
  b.x(300)
  b.content("hello")
end
# drag
#not implemented for now!!
Str
  end

  def self.property
    t=<<Str
   property can be used to store and retrieve attributes from an objet to another
note that the particule atome can be used to store attributes / property within an invisile object. the particle is a special objet that have no visibilly by default.
usage b.property(a.id)
type Example.property for a full use example.
Str
  end

  def self.border
    t = <<Str
border has 3 parameters : thickness, color, value type  must be string or symbol
thickness value goes from 0 to infinity , value type  must be integer
color value can be set in rgb, rgba, hex or color name, value type  must be string or symbol (when using color name ex : :red)
pattern values are : dashed, solid , double, dotted, value type must be string or symbol
type Example.border for examples
Str
  end

  def self.shadow
    t = <<Str
shadows has 6 parameters : x, y, blur, thickness color and invert 
all params are integer exept color that can be set in rgb, rgba, hex or color name and invert that is :true or :false
type Example.shadow for examples
Str
  end

  def self.delete
    t = <<Str
delete can delete a current object or any of speficied prop
type Example.delete for examples
Str
  end

  def self.animate
    t = <<Str
anim is a function it has 6 main parameters :
start
end 
duration
loop
curve 
target
anim can take any prop as a param 
type Example.anim for examples
Str
  end

  def self.image
    t = <<Str
simple api to view an image : image()
type Example.image for examples
Str
  end

end


module Example
  def self.border
    t = <<Str
    b=box()
    b.border({thickness: 5, pattern: :dotted, color: :black})
Str
  end

  def self.property
    t=<<Str
    p=particle()
p.color(:red)
p.rotate(50)
p.x=450
p.blur(5)
p.border({thickness: 4, color: :yellow})
p.shadow({blur: 10, x: 5, y:5})
b=box()
b.touch do
b.property(p.id)
end
Str
  end

  def self.shadow
    t = <<Str
 b=circle({color: :orange})
b.shadow({x: 5}, {y: 5}, {thickness: 3},{blur: 12}, {color: :black}, {invert: :true})
b.add(shadow:[{x: 2}, {y: 2}, {thickness: 3},{blur: 12}, {color: :yellow},  ])
Str
  end

  def self.delete
    t = <<Str
a=box()
a.border({pattern: :dashed, color: :orangered})
a.shadow({x: 5}, {y: 5}, {thickness: 3}, {color: :black}, {invert: :true})
a.add(:shadow => {color: :orange, blur: 20})
a.add(:shadow => {color: :blue, blur: 5, x: -3, y: -3})
a.smooth(20)
a.add(color: :orange)
a.add(color: :green)
a.delete(:color)
#a.delete(:colors)
#a.delete(:border)
#a.delete(:shadow)
#a.delete(:shadows)
Str
  end

  def self.anim
    t = <<Str
run
a=circle()
a.shadow({x: 5}, {y: 5}, {thickness: 3},{blur: 20}, {color: :black}, {invert: :true})
a.border({pattern: :dotted, color: :black, thickness: 5})
a.color(:violet)
b=text("click me!")
b.size(70)
b.shadow({blur: 20})
b.x=300

b.touch do 
  anim({
	start: {x: 0, y: 0, blur: 0,rotate: 0,height: 100,  smooth: 100, color: 'rgb(0,255,0)'},
	end: {x: 900, y: 170,blur: 10,rotate: 180,height: 50, smooth: 0,color: 'rgb(255,0,255)'},
	duration: 2000,
	loop: 8,
	curve: :easing,
	target: a
	})
end
Str
  end

  def self.image
    t = <<Str
run
i=image({content: :boat})
i.x=500
i.rotate(20)
i.shadow({blur: 10})
i.blur(5)
i.draggable(:true)
Str
  end


end


#content = <<EOT
#run
#read "atome/atome.rb"
#clear(:ide)
#EOT

module Demo

  def  self.demo_1
    content_test = <<EOT
run
a=circle()
a.blur(20)
a.draggable(:true)
a.add(:color => :cyan)
a.add(:shadow => {color: :yellow, x: 5, y: 5})
b=box()
b.blur(1)
b.draggable(:true)
b.color('cyan')
b.add(:color => :olive)
b.shadow({color: :black,blur: 7, thickness: 0})
i=0
b.touch do 
  if i==0
	i=1
	a.color=:olive
	self.color(:cyan)
  else
	self.color(:olive)
	a.color=:cyan
	i=0
  end
end
bb=box()
bb.shadow({color: :black,blur: 5,x: 0, y: 0,  invert: :true})
bb.add(:shadow => {color: :red, blur: 20})
bb.draggable(:true)
bb.color("rgba(100,100,100,0.5)")
t=text("hello folks !!")
t.color(:yellow)
t.shadow({color: :black, x: 7, blur: 9})
t.x=200
t2=text("edit me!!")
t2.y(200)
t2.size(70)
t2.color("orange")
t2.editable=:true
wait 3 do
  t2.content("modify the content?")
  wait 3 do
	t2.content("yes, you can modify the content...")
	t2.size(50)
	t2.color=:white
  end
end
x1=box()
x2=box()
[x1,x2].each do |boxes|
  boxes.width(30)
  boxes.height(30)
  boxes.shadow({color: :black,blur: 3,x: 0, y: 0,  invert: :true})
end
x1.x=x1.y=0
x2.x=500
x2.y=0
x1.color(:gray)
x2.color(:orangered)
x1.touch do
  self.color(:white)
  wait 0.3 do
	self.color(:gray)
  end
  load :test
end
x2.touch do
  self.color(:white)
  wait 0.3 do
	self.color(:orangered)
  end
  save :demo
end
first_script=<<Strdelim
a=circle
a.touch do 
  load :demo
end
Strdelim
wait 0.5 do
  save(:test,first_script)
end
get("box_2").x("341")
get("box_2").y("47")
get("box_1").x("443")
get("box_1").y("84")
get("circle_0").x("254")
get("circle_0").y("85")
EOT

  end
  def  self.demo_2

  end
  def  self.demo_3
    content_test = <<EOT
run
a=box()
a.border({pattern: :dashed, color: :orangered})
a.add(color: :orange)
a.add(color: :green)
a.shadow({x: 5}, {y: 5}, {thickness: 3}, {color: :black}, {invert: :true})
a.smooth(20)
clear
a.delete(:colors)
#puts a
EOT
  end
  def  self.demo_4
    content_test = <<EOT
run
a=box()
a.border({pattern: :dashed, color: :orangered})
a.shadow({x: 5}, {y: 5}, {thickness: 3}, {color: :black}, {invert: :true})
a.add(:shadow => {color: :orange, blur: 20})
a.add(:shadow => {color: :blue, blur: 5, x: -3, y: -3})
a.smooth(20)
a.add(color: :orange)
a.add(color: :green)
#a.delete(:color)
#a.delete(:colors)
#a.delete(:border)
a.delete(:shadow)
#a.delete(:shadows)
#puts a
EOT
  end
  def  self.demo_5
    content_test = <<EOT
run
clear
i=image({content: :boat})
i.rotate(20)
i.shadow({blur: 10, x: 7, x: 7})
puts i.width
i.draggable(:true)
  anim({
	start: {x: -100, blur: 10,rotate: 20,width: 99},
	end: {x: 100,blur: 10,rotate: 20,width: 100},
	duration: 2000,
	loop: 1,
	curve: :easing,
	target: i
	})
i.touch do 
  anim({
	start: {x: 0, y: 0, blur: 10,rotate: 20,width: i.width},
	end: {x: 400, y: 70,blur: 0,rotate: 180,width: i.width*6},
	duration: 2000,
	loop: 1,
	curve: :easing,
	target: self
	})
end
EOT
  end

  def  self.demo_6
    content_test = <<EOT
run
v=video()
v.x=50
v.y=0
v.width(700)
v.height(394)
v.shadow({blur: 20})
v.color(:white)
v.draggable(:true)
get("video_0").x("124")
get("video_0").y("63")
v.touch do
  anim({
           start: {x: 0, y: 0, blur: 0,rotate: 20},
           end: {x: 400, y: 70,blur: 10,rotate: 180},
           duration: 2000,
           loop: 3,
           curve: :easing,
           target: self
       })
end
t=text("click to play guitar")
t.size=35
t.x=20
  t.y=-390
t.touch do
 play(:guitar) 
end
EOT
  end

  def  self.demo_7
    content_test = <<EOT
run
b=box()
b.x(0)
b.y(0)
b.shadow(blur: 10)
b.width("100%")
i=image(:boat)
i.align(:left)

EOT
  end

  def  self.demo_8

  end
  def  self.demo_9

  end

  def self.carine
    content_test = <<EOT
run
logo=image("carine")
logo.x=200
#logo.transparency(0)
#animate
anim({
         start: {x: 0, y: 0, blur: 0, rotate: -300},
         end: {x: 0, y: 0,blur: 10, rotate: 0, },
         duration: 3000,
         curve: :easing,
         target: logo
     })

logo.touch do
  load :carine
end
EOT

  end
end





content_test = <<EOT
run
image("killer")
EOT




write(content_test)
open_ide(:true)
open_console(:true)
#perpetual_run
