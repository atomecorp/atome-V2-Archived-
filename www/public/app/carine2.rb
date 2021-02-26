clear(:view)
#save :carine2
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
titre = text("Les formations:")
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
menu2.color(:white)

menu3 = text("tarifs").set(cccol)
menu3.set(cccol2)
menu3.x(390).y(10)


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
pix = image("ciel")
pix.y(150)
pix.width = 400
pix.height = 200
pix.align(:center)
pix.set(ccc)

######## Text ########
t = text("Qui sont les coaches et comment sont-ils formés ?

Le coaching n’étant pas encore un métier très bien réglementé, n'importe qui peut s’autoproclamer coach et exercer ce métier sans avoir à justifier d’une formation. Il est donc fondamental de vérifier les éléments clés du CV du coach.

Le parcours du coach: le niveau de maturité du coach est bien plus important que son âge.

Une ou plusieurs expériences professionnelles s’avèrent indispensables. Pour accompagner le changement de ses clients, il est important que le coach ait lui même vécu l’expérience du changement dans diverses sphères de sa vie (personnel ou professionnel).
L’exercice du coaching nécessite des compétences techniques et relationnelles qui ne s’inventent pas.
Une formation au coaching est donc indispensable. Des universités et des organismes de formation accrédités proposent de solides connaissances théoriques aux futurs coaches.
De plus les coachs doivent rentrer dans une dynamique de formation continue et se former chaque année sur de nouveaux outils ou l’acquisition de nouvelles compétences.

Les outils du coachs: le premier outil du coach est le coach lui-même, car ce sont les qualités de présence et de relation du coach qui vont faire le plus souvent la différence.
Les outils (PNL, systémie, analyse transactionnelle, Gestalt…) vont surtout servir au coach à construire cette qualité de présence.
Les technologies du coaching contribuent à construire la posture du coach et apporteront également au coach des grilles de lecture de la complexité du fonctionnement humain, ou des cartes pour guider l’action vers le changement souhaité.
La professionnalisation du coach: il passe par un processus cohérent de certification ou de titularisation qui comprend en général un certain nombre d'heures de formation, un travail sur soi (développement personnel, psychothérapie, coaching), une supervision de ses pratiques de coach, et une appartenance à une association professionnelle de coach.
")
t.y(400)
t.right(20)
t.height = 1200
t.z(1)
t.set(cccol2)



