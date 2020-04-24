
content = <<EOT
clear
b=box
a=box()
a.color(:pink)
a.x=600
b.touch do
  self.color(:green)
  b.y(150)
  self.draggable(:true)
  puts "good"
end
a.draggable(:true)
c=box()
c.draggable(:true)
EOT
#write content

content = <<EOT
clear
run
a=box()
a.touch do
  self.color(:yellowGreen)
end
puts a.touch.class
#uncomment below to verif event
#a.class_exec(a.touch)
EOT

content = <<EOT
run
clear
a=box()
a.draggable(:true)
b=box()
b.draggable(:true)
b.x(440)
a.touch do
  self.color(:yellowGreen)
  a.x(100)
  b.y(150)
  a.color="yellow"
  a.color(:violet)
    b.z=500
  self.color="rgba(0.125,255,0.2)"
  a.height(55)
  a.width=71
end
#puts a.touch.class
#a.class_exec(a.touch)
#puts a.id
#get(a.id).trig(a.touch)
t=text("salut !!")
t.x=250
EOT

content = <<EOT
b=box()
#b.x=300

#b.x=40
b.draggable=:true
i=0
b.touch do 
  clear
  b.color= :red

  puts i=i+1
  puts b
puts "x : "+(b.x).to_s
get("shape_0").x(102)
get("shape_0").y(49)
end
clear


EOT

content = <<EOT
run
clear
b=box()
b.x=250
b.drag do |e|
puts e
  b.x=200
end
puts b.color(:red)
clear
EOT

content = <<EOT
run
require :shade
EOT

write content
open_ide(:true)
open_console(:true)
auto_run



