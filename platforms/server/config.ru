# cat config.ru
#gem install roda
#gem install sqlite3
#gem install sequel
#gem install rack-unreloader
#gem install faye-websocket
#gem install puma
#to run avec rackup :
# rackup -p 4567
#to run avec Puma :
# puma
require 'rack/unreloader'
Unreloader = Rack::Unreloader.new(:subclasses => %w'Roda') { App }
require "roda"


Unreloader.require './app.rb'

run Unreloader
#uncomment below for prod or comment to allow code reloading
#run App.freeze.app