module Help
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

  def self.anim
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
sipmle api to view an image : image()
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
write(content_test)
open_ide(:true)
open_console(:true)
perpetual_run
