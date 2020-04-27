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

######################## events ########################
# touch
b=text("my text")
b.touch do
  b.x(300)
  b.content("hello")
end
# drag
#not implemented for now!!