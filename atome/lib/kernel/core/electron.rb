# here is alll methods that fazcilitate the atome creation

def box(options)
  if options
    atome = Atome.new({preset: :box},options)
  else
    atome = Atome.new({preset: :box})
  end
  return atome
end

def text(options)
  if options
    if options.class == String || options.class == Symbol
      options={:content => options}
    end
      atome = Atome.new({preset: :text},options)
  else
    atome = Atome.new({preset: :text})
  end
  return atome
end

def help

  puts "
to run code :  ctrl-R or click on the bar above the code editor<br>
to save code :  type \"load :filename\" in the code editor, then run the code, then it'll load the file named \"filaname\" <br>
to load code : type \"load :filename\" in the code editor, then run the code, then it'll load the file named \"filaname\"<br>
to comment code ctrl-c, to comment selection<br>
to reformat code ctrl-j to reformat selection<br>
to reformat code ctrl-e to reformat all code<br
to open/close the console ctrl-t<br>
to open/close the code editor ctrl-i<br>
to clear the console ctrl-x or type clear in the code editor then run<br>
to activate/desactivate auto run code ctrl-a<br>
to reboot ctrl-y<br>
"

end
#content = <<EOT
#clear
##run
#read "atome/atome.rb"
#clear(:ide)
#EOT
#
#puts "ready!!!!!!!"
#write content
#open_ide(:true)
#open_console(:true)
#auto_run