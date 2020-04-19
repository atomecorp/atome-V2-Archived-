content = <<EOT
run
read "atome/atome.rb"
clear(:ide)
EOT



write content
open_ide(:true)
open_console(:true)
auto_run
