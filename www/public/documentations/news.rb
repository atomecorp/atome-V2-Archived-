# added a news document to list the new functionality available
# added version to show curtent eVe version
# added delete apis ex:
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