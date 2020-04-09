# frozen_string_literal: true
require 'uglifier'

def join_files(files, target = 'join.text')
  f = File.new(target, 'a+')
  File.open(target, 'w') {}
  files.each do |f_name|
    f_in = File.open(f_name, 'r')
    f_in.each { |f_str| f.puts(f_str) }
    f_in.close
  end
  f.close
end

# first we get all works file and join them in a new file called all_files.rb

opal_parser  = Dir['atome/lib/opal_parser.rb']
core_ext = Dir['atome/lib/core_ext.rb']
api = Dir['atome/lib/atome/apis/*.rb']
render_engine = Dir['atome/lib/atome/apis/render_engine.rb']
render_engines = Dir['atome/lib/atome/apis/render_engines/*.rb']
proton = Dir['atome/lib/atome/core/proton.rb']
atome = Dir['atome/lib/atome/core/atome.rb']
electron = Dir['atome/lib/atome/core/electron.rb']
neutron = Dir['atome/lib/atome/core/neutron.rb']
kernel = opal_parser.concat(core_ext).concat(api).concat(render_engine).concat(render_engines).concat(proton).concat(neutron).concat(atome).concat(electron)

join_files kernel, 'kernel.rb'

# then we compile the new generated file to js in the app.js file
`opal --compile kernel.rb > ./www/public/atome/app.js`

# now we compress uglify and Obfuscate the js file and rewrite it
uglified = Uglifier.new(harmony: true).compile(File.read('./www/public/atome/app.js'))

open('./www/public/atome/atome.js', 'w') do |f|
  f.puts uglified
end
`rm -r ./www/public/atome/app.js`

if !ARGV.empty?
  if ARGV[0] == 'server' || ARGV[0] == 'puma'
    `rm -r ./platforms/server`
    `cp -r ./www ./platforms/server`
    `bash -c ' open http://0.0.0.0:9292 ' &`
    `cd ./platforms/server/ && bundle exec puma`
  else
    `cordova run #{ARGV[0]}`
  end
else
  `cordova run browser`
end
