content = <<EOT
clear
run
read "atome/atome.rb"
clear(:ide)
EOT

puts "ready!!!!!!!"
write content
open_ide(:true)
open_console(:true)
auto_run
