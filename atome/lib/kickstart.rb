content = <<EOT
run
read "atome/atome.rb"
clear(:ide)
EOT


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

write(content_test)
open_ide(:true)
open_console(:true)
perpetual_run
