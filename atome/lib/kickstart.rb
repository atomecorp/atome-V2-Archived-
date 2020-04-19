content = <<EOT
run
read "atome/atome.rb"
clear(:ide)
EOT

content = <<EOT
run
b=box()
b.draggable=:true
b.touch do
  b.color= :red
end
EOT

write content
open_ide(:true)
open_console(:true)
auto_run
