# here is alll methods that fazcilitate the atome creation
#electron  provide public methods for end users that simplify atome creation
def box(options)
  obj_prop = Proton.default_visuals
  obj_prop[:type] = :shape
  # we add the box preset to the default visual
  obj_prop = Hash[:preset, :box].merge!(obj_prop)
  if options
    atome = Atome.new(obj_prop, options)
  else
    atome = Atome.new(obj_prop)
  end
  return atome
end

def square(options)
  box(options)
end

def circle(options)
  obj_prop = Proton.default_visuals
  obj_prop[:type] = :shape
  # we add the box preset to the default visual
  obj_prop = Hash[:preset, :circle].merge!(obj_prop)
  if options
    atome = Atome.new(obj_prop, options)
  else
    atome = Atome.new(obj_prop)
  end
  return atome
end

def ellipse(options)
  circle(options)
end

def text(options)
  obj_prop = Proton.default_visuals
  obj_prop[:type] = :text
  # we add the box preset to the default visual
  obj_prop = Hash[:preset, :text].merge!(obj_prop)
  if options
    if options.class == String || options.class == Symbol
      options = {:content => options}
    end
    atome = Atome.new(obj_prop, options)
  else
    atome = Atome.new(obj_prop)
  end
  return atome
end

def help
  help = <<StrDelim
######################## shortcut ########################
#run code :
ctrl-R #or click on the bar above the code editor
#comment code :
ctrl-c
#reformat code (selection only):
ctrl-j
#reformat code (all ide code) :
ctrl-e
#open/close the code editor :
ctrl-i
#open/close the console :
ctrl-t
#clear the console :
ctrl-x #or type clear in the code editor then run :
#activate/desactivate auto run code :
ctrl-a
#reboot :
ctrl-y

######################## Miscellaneous ########################
#1 clear console:
clear
#2 clear ide :
clear ide
#3 save file :
save :my_script
#4 load file :
load :my_script
#5 get help :
help
#6 close the code editor
open_ide(:false)
#7 open the code editor
open_ide(:true)
#8 toggle the code editor
open_ide(:toggle)
#9 close the the console
open_console(:false)
#10 open the the console
open_console(:true)
#11 toggle the the console
open_console(:toggle)

######################## system settings ########################
# Ide font size
Ide.text(20)
# console font size
Console.text(20)

######################## eVe object type ########################
#1 create text:
text("my text")
#2 create box:
box()
#or
square()
#3 create circle
circle()
#or
ellipse()

######################## Methods ########################
#1 color
a=box()
a.color(:red)
#2 size ( homothetic)
b=text("my text")
b.size(20)
#3 width
a=box()
a.width(200)
#4 height
a=box()
a.height(250)
#5 x
a=box()
a.x(50)
#6 y
a=box()
a.y(250)
#7 z (object order when in 2D)
a=box()
a.z(2)
#8 move
a=box()
a.draggable(:true)
#8b stop move
a.draggable(:false)
#9 edit content (texte)
b=text("my text")
b.editable(:true)
#9b stop edit
b.editable(:false)
#10 transparency (range 0 to 1)
a=box()
a.transparency(0.5)
#11 rotation  (degre)
a=box()
a.rotate(20)
#12 blur (set in pixels)
a=box()
a.blur(7)
#13 shadow offset x , offset y, thickness, color, invert(shadow inside object)
a.border({x: 5}, {y: 5}, {thickness: 3}, {color: :green}, {invert: :true})
#14 shadow thikness color pattern
a.shadow({thikness: 5}, {color: :green}, {pattern: :dashed})
#15 Smooth make curve angles
a.smooth(15)

######################## events ########################
#1 touch
b=text("my text")
b.touch do
  b.x(300)
  b.content("hello")
end
#2 drag
#not implemented for now!!
StrDelim
  puts help

end
