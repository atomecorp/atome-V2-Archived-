clear(:view)
#save :carine3
class Atome
  def position val
    `html.position(#{val}, #{self.atome_id})`
  end

  def display val
    `html.display(#{val}, #{self.atome_id})`
  end
end
`
html.position = function(value, atome_id){
//$("#"+atome_id).css("height","auto")
$("#"+atome_id).css("position",value);
}
`
######## styles ########
ccc = {shadow: {blur: 5, color: "rgba(0,0,0,0.5)"}}
cccol = {color: "rgb(43,23,43)"}
cccol2 = {color: "rgb(163,143,163)"}
cccol3 = {color: "rgb(63,43,63)"}
header_height = 50
######## header ########
header = box()
header.set(cccol)
header.width("100%").height(header_height)
header.x = header.y = 0
header.position(:fixed)
header.z(20)
header.set(ccc)
######## page ########
page = box()
get(header.id).width
page.right(0).left(0).top(header_height).bottom(0)
page.z = 0
page.set(cccol3)
######## titre ########
titre = text("Mes tarifs:")
titre.size(30)
titre.x(130)
titre.y(60)
titre.width(290)
######## logo ########
logo = image("ccc")
logo.width = logo.height = 80
logo.x = logo.y = 10
######## menu items #########
menu1 = text("Coaching")
menu1.set(cccol2)
menu1.x(130).y(10)
menu1.width = 120

menu2 = text("Formation").set(cccol)
menu2.set(cccol2)
menu2.x(260).y(10)
menu2.width = 160

menu3 = text("tarifs").set(cccol)
menu3.set(cccol2)
menu3.x(390).y(10)
menu3.color(:white)

menu4 = text("contact").set(cccol)
menu4.set(cccol2)
menu4.x(470).y(10)

menu1.touch do
  read "app/carine.rb"
end
menu2.touch do
  read "app/carine2.rb"
end
menu3.touch do
  read "app/carine3.rb"
end
menu4.touch do
  read "app/carine4.rb"
end

######## add to header ########
header.group(menu1.id)
header.add(group: menu2.id).add(group: menu3.id).add(group: menu4.id).add(group: logo.id)

######## image ########
pix = image("coach")
pix.y(150)
pix.width = 400
pix.height = 200
pix.align(:center)
pix.set(ccc)

######## Text ########
t = text("À titre indicatif : le coût du coaching : selon les sources ICF, le coaching en entreprise se situe entre :  250 €/h et 700 €/h;et le coaching individuel entre 150 €/h et 300€/h.Voir mes tarifs dans l’onglet \"Tarifs\".")
t.y(400)

t.right(20)
t.height = 1200
t.z(1)
t.set(cccol2)




