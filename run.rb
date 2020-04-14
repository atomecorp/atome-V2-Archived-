# frozen_string_literal: true
puts "rename opal-parser to opal-utils and move opal parser"
puts " default to headless for rspec compatibility"
puts " create an an environement variable that define the environment : web(opal); native(urho3D), this variable will be used to condition files and Apis to load cf : opal-utils  "
require 'uglifier'


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
