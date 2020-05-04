# frozen_string_literal: true
puts "rename opal-parser to opal-utils and move opal parser"
puts " default to headless for rspec compatibility"
puts " create an an environement variable that define the environment : web(opal); native(urho3D), this variable will be used to condition files and Apis to load cf : opal-utils "
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

opal_requirement  = Dir['atome_abstraction_layer/opal/opal_requirement.rb']
opal_utils  = Dir['atome_abstraction_layer/opal/opal_utils.rb']
core_ext = Dir['atome/lib/core_ext.rb']
photon = Dir['atome/lib/kernel/photon.rb']
render_engines = Dir['atome_abstraction_layer/render_engines/*.rb']
proton = Dir['atome/lib/kernel/proton.rb']
atome = Dir['atome/lib/kernel/atome.rb']
electron = Dir['atome/lib/kernel/electron.rb']
neutron = Dir['atome/lib/kernel/neutron.rb']
init = Dir['atome/lib/kickstart.rb']
kernel = opal_requirement.concat(opal_utils).concat(core_ext).concat(proton).concat(neutron).concat(photon).concat(render_engines).concat(atome).concat(electron).concat(init)

atome_source = File.open('www/public/atome/atome.rb', 'w')
atome_source.puts "#code source erased"
atome_source.close

join_files kernel, 'kernel.rb'

# then we compile the new generated file to js in the app.js file
`opal --compile kernel.rb > ./www/public/atome/app.js`

# now we compress uglify and Obfuscate the js file and rewrite it
uglified = Uglifier.new(harmony: true).compile(File.read('./www/public/atome/app.js'))

open('./www/public/atome/atome.js', 'w') do |f|
  f.puts uglified
end

`rm -r ./www/public/atome/app.js`

#if !ARGV.empty?
#  if ARGV[0] == 'server' || ARGV[0] == 'puma'
#    `rm -r ./platforms/server`
#    `cp -r ./www ./platforms/server`
#    `bash -c ' open http://0.0.0.0:9292 ' &`
#    `cd ./platforms/server/ && bundle exec puma`
#  else
#    if ARGV[0]="osx"
#      `rm -r ./platforms/osx/build/atome.app`
#    end
#    `cordova run #{ARGV[0]}`
#  end
#else
#  `cordova run browser`
#end
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


`mv ./platforms/browser/www  ../../Dropbox/Partage/atome/deliverable/web`
`mv ./platforms/ios/build/device/atome.ipa  ../../Dropbox/Partage/atome/deliverable/atome.ipa`
`mv ./platforms/osx/build/atome.app ../../Dropbox/Partage/atome/deliverable/atome.app`