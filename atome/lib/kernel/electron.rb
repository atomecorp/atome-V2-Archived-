# here is alll methods that fazcilitate the atome creation

def box(options)
  obj_prop= Proton.default_visuals
  obj_prop[:type]=:shape
  # we add the box preset to the default visual
  obj_prop = Hash[:preset,:box].merge!(obj_prop)
  if options
    atome = Atome.new(obj_prop,options)
  else
    atome = Atome.new(obj_prop)
  end
  return atome
end

def text(options)
  obj_prop= Proton.default_visuals
  obj_prop[:type]=:text
  # we add the box preset to the default visual
  obj_prop = Hash[:preset,:text].merge!(obj_prop)
  if options
    if options.class == String || options.class == Symbol
      options={:content => options}
    end
      atome = Atome.new(obj_prop,options)
  else
    atome = Atome.new(obj_prop)
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
