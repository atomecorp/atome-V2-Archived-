require 'uglifier'
#https://github.com/lautis/uglifier

def join_files files, target = "join.text"
  f = File.new(target, "a+")
  File.open(target, 'w') {}
  files.each do |f_name|
    f_in = File.open(f_name, "r")
    f_in.each { |f_str| f.puts(f_str) }
    f_in.close
  end
  f.close
end

#first we get all works file and join them in a new file called all_files.rb
render = Dir["apis/render_engines/*.rb"]
api = Dir["apis/*.rb"]
core = Dir["core/*.rb"]
apis = render.concat(api).concat(core)

#apis = Dir["tests/*.rb"]
join_files apis, "all_files.rb"

#then we compile the new generated file to js in the app.js file
%x(opal --compile all_files.rb > ../www/public/atome/atome.js)


#now we compress uglify and Obfuscate the js file and rewrite it
uglified = Uglifier.new(:harmony => true).compile(File.read("../www/public/atome/atome.js"))

open("../www/public/atome/app.js", 'w') { |f|
  f.puts uglified
}


#now we can run the appp
#%x(cordova run browser)

if ARGV.length > 0
  if ARGV[0] == "server" || ARGV[0] == "puma"
    %x(rm -r ../platforms/server)
    %x(cp -r ../www ../platforms/server)
    %x(bash -c 'sleep 2; open http://0.0.0.0:9292 ' &)
    %x(cd ../platforms/server/ && bundle exec puma)
  else
    %x(cordova run #{ARGV[0]})
  end
else
  %x(cordova run browser)
end

