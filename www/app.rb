# frozen_string_literal: true

# instructions :
# gem install bundler roda sqlite3 sequel rack-unreloader faye-websocket websocket-extensions websocket-driver puma -N
# important if crash the gem install rack-unreloader -v 1.7.0 gem install roda -v 2.26.0
# bundle update
# bundle install
# to run: rackup --server falcon --port 4567  or without falcon : rackup -p 4567
require 'sequel'
require 'faye/websocket'
class App < Roda
  Eden = Sequel.connect('sqlite://eden_doors.sqlite3')

  Eden.create_table :objects do
    primary_key :atome_id
    String :id
    String :tyoe
    String :name
    String :content
  end
  index_content = File.read('public/index.html')
  index_content = index_content.gsub("<meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'self' data: gap: cdvfile: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *\">", '')
  index_content = index_content.gsub('<!-- cordova -->', '<!-- roda -->')
  index_content = index_content.gsub("<script type='text/javascript' src='../cordova.js' type='text/javascript'></script>", '')
  index_content = index_content.gsub('atome/file/file_cordova.js', 'atome/file/db_roda.js')
  index_content = index_content.gsub('init_cordova.js', 'init_roda.js')
  plugin :static, ['/app', '/assets', '/atome', '/third_parties', '/utils']
  plugin 'faye/websocket', adapter: :thin, ping: 45
  route do |r|
    if Faye::WebSocket.websocket?(env)
      ws = Faye::WebSocket.new(env)
      ws.on :message do |event|
        datas = event.data.split(',')
        db_mode = datas[0]
        filename = datas[1]
        content = datas[2]
        puts content
        ws.send(event.data)
      end
      ws.on :close do |event|
        p [:close, event.code, event.reason]
        ws = nil
      end
      # Return async Rack response
      ws.rack_response
    else
      # Normal HTTP request
      [200, { 'Content-Type' => 'text/plain' }, ['Hello']]
    end
    r.root do
      r.redirect '/index'
    end
    r.on 'index' do
      r.is do
        r.get do
          index_content
        end
      end
    end
  end
end
