content = <<EOT
run
read "atome/atome.rb"
clear(:ide)
EOT


content = <<EOT
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
bb.shadow({color: :black,blur: 5,x: 1, y: 1,  invert: :true})
bb.draggable(:true)
bb.color("rgba(30,30,30,1)")
t=text("hello folks !!")
t.color(:yellow)
t.shadow({color: :black, x: 7, blur: 9})
t.editable(:true)
t.x=200
get("shape_0").x("168")
get("shape_0").y("84")
get("shape_1").x("577")
get("shape_1").y("92")
get("shape_2").x("370")
get("shape_2").y("60")
EOT

write content
open_ide(:true)
open_console(:true)
auto_run
