# atome
Multi purposes cross platform solution

	To install application: 
	
	- Install ruby
	- install node
	- install cordova
	- install the following ruby gems :  
	gem install bundler roda sqlite3 sequel rack-unreloader faye-websocket websocket-extensions websocket-driver puma opal uglifier net-ssh -N
    if compatibility problem reinstal roda version 2.26
            gem install roda -v 2.26 -N
	- got www folder and install ruby bundle :
	%cd atome/www
	%bundle update
	%bundle install

	
	To run  application :   
	
	- go to the atome folder in atome within atome root  
	%cd atome  
	- to run web browser version of atome  
	%ruby compile.rb   
	- to run osx version of atome  
	%ruby compile.rb osx  
	- to run iOS version of atome  
	%ruby compile.rb ios  
	- to run Windows version of atome  
	%ruby compile.rb windows  
	- to run electron version of atome  
	%ruby compile.rb electron  
	- to run web server version of atome  
	%ruby compile.rb server
	



