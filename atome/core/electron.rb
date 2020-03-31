# here is alll methods that fazcilitate the atome creation
def box(options="")
  atome=Atome.new(:box)
  return atome
end
#
#tests
#open_console(:true)

 content = <<EOT
clear
class Atome
def class_exec proc
  @temp=[]
  @temp << proc
	a= @temp[0]
 instance_eval(&a)
end

end
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
write content


open_ide(:true)
open_console(:true)

def color(opt)

  puts  " good times here : #{opt}"
end