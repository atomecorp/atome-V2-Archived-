# atome 

 ![](ressources/icons/100.png)
 
Cross platform development
-

To install application and run: 
	
    ./scripts/bootstrap  
    npm install  
    cordova platform add browser
    bundle exec rake run::browser  

 
I - The framework
- 

- atome is a cross platform development environment.
all apis work across all platform, to ensure the exact same rendering on Android, Freebsd, linux, MacOs, Web, Windows.

- atome can create build web site, mobile or desktop applications, games, presentations...

- atome is entirely open source as well as all the included libraries.you can do what you want want with it, the whole framework offer a permissive open source licence. 

- atome comes with a powerful multi-rendering engine (it can render any atome object across several different render engine simultaneously )

- atome's solutions can be deploy as a client, a server or both

- the framework is totally hybrid, it means it can be executed in a web browser, a web view or as a full native application

- ***(eVe only) when deploy as a server, any machine can host the server even without running, PHP , ruby, ...

- any application created with it can be used as a data holder, in this case it behave like an universal multimedia document ( think pdf with sound , videos,  animations, interactivity, entirely scriptable, ....)

- the powerful scripting engine can script any atome object on the fly at runtime.


II Guideline and philosophy
-

The idea behind the atome concept is to have a kind of "universal portable intelligent document", this means : 

- no filetype but instead unique objet called an atome (that could a text, an image, a group of object , a video, an efect, ..). This atome can then  be mnanipulated by any availlable api.

The object uniq architecture bring us lot of new features:
 
- Simplfly the automatisation of batch process as the object is always the same whatever it is (from a simple box thru a video montage to a complex page description) it's always an atome)
- Simplfy the devellopment and tests of new tools. Ruby language allow you to script anything on the fly 
- Reduce the number of tools needed for an application. (you dont ever have to wrote a specific tool for a specific medias anymore,  as the same tool now work on any atome.
- and many many other ...
to keep this idea working we have to follow the following rules during atome development :

- All Apis must  run of all targeted platform (their should be no diiference form one platform to another.
- any property or new api must always work on any type of atome, to keep the consistency of the  "atome uniq object" 

III - main Open source Software included
-
- Cordova : a cross platform framework to create applications with web view rendering (https://cordova.apache.org)

- Urho3D : is a cross platform 3D rendering and game engine used create native applications(or web rendering) using Webassembly (https://urho3d.github.io)

- FreeBSD : is a Unix environment with jails, allow to create and boot embedded applications on any compatible machine (standard PC, Raspberry, Beaglebone, etc..) (https://www.freebsd.org/fr/)

- Ruby : is the language used to script all atomes apis (https://www.ruby-lang.org)

- Opal : is a ruby gem used to compile the ruby language to JS (https://opalrb.com)

- Roda : is a ruby web framework that hold the server version of atome (https://roda.jeremyevans.net)

- Puma : is a ruby web server to start the server version of atome (https://puma.io)

- Jquery : is a js framework to simplify JS development (https://jquery.com)

- ZimJS : is a html canvas rendering 2D engine (https://zimjs.com)

- Konva : is a html canvas rendering 2D engine (https://konvajs.org)

- FabricJS : is a html canvas rendering 2D engine (http://fabricjs.com)

- ThreeJS :is a html canvas rendering 3D engine (https://threejs.org)

- QAudio : a cross-platform C++ library for Audio Digital Signal Processing (https://cycfi.github.io/q/)


IV - Architecture of the folders
-
The atome framework is mainly based on a Cordova project, but add the following additional features :

- a ruby interpreter

- a web server

- a native mode with 3D rendering (the 3D engine is currently based on Urho3D).
 
- a low latency audio system

 -a bootable option for embedded applications

The folders dedicated to the atome framework are : 

- The app folder : contain all end user scripts

- The atome folder : it contain the atome ruby's gem, this is basically the heart of the framework
    - atome : this is the object it self
        - atome class is found in the atome.rb files
        - this class contain 5 main methods named SAGED for Set - Add - Get - Enliven - Delete 
   
    - proton : contain all the default property's value when creating new object
   
    - photon : contain all properties that define the physical aspect of the object to be renderer on a device, (visuals, sound , haptic...) ex: color, width
   
    - neutron :  contain all properties that are conceptual and do not need to be rendered in the view.
     ex : selector, touch , child
  
    - electron : contain a collection of utilities (functions) to work easier with atomes's objects
   
    - big bang : initiate the atome environment 

- The documentations folder : it contains infos and documentations of the framework ( how to install it , enhance it or use it )

- The opal_compiler : contains two files:
   
    - opal_add_on.rb is a set of functions to enhance opal renderer, the parser
    
    - parser.rb is used to allow 'on the fly' atome scripting in the web view when using the opal compiler
    
- The renderers folder :contains any rendering engine such as :
    
    - html for pure js rendering
    
    - Headless for text only rendering of atome's objects
    
    - Vocals to render atomes as an audio description
    
    - Urho3D for native rendering 
    
    - FabricJS for 2D rendering in canvas's web view
    
    - ZIMJS for an alternative 2D rendering in canvas's web view
    
    - Konva for an alternative 2D rendering in canvas's web view
    
    - ThreeJS for 3D rendering in canvas's web view

- The scripts folder contains all the files to automatise the install of atome framework

- The rakefile file use to automatise the launch of atome framework

- The index.js in www/public/js contains js functions and utility for the web rendering of atome engine

- The index.html in www/public/ to initiate the web version of atome


V - Rendering engine
-

 - NativeJS (web)
 - ZimJS (web)
 - Konva (web)
 - FabricJS (web)
 - ThreeJS (web)
 - Urho3D (native or web with web assemebly)
 - futur use case ( Unity, Unreal, Juce, ....)
 
 
VI - running method
  -

- web (opal)
- server (roda)
- stand alone (Freebsd )
- native (urho 3D)



VII - what is an atome object
 -
 an atome is a collection of properties 
 
 
- Anything that define an atome is a property.
any atome can contain an other atome or a group of atomes as a property ex:
 
 
    b=box()
    i=image(:logo)
    c=circle()
    t=text("hello)
    c.atome(b)
    puts c.child #=> c (b is now a child of c
    b.group([i,t])
    puts b.child #=> [i,t] (i and t ares now a child of b
    
please note that child method is always singular, even when if it return many children! 
 
The atome properties are always define using a key-value pair (Hash type). those values can be a String, an Integer, a hash(key-value) or an array. 
The atome can receive a second optional parameters to refresh the view or not. 
in this case the atome is till rendered in the view but the newly added parameters does not refresh the objet.
(Please not the 'refresh option' behavior is not the same as the render property, the refresh option is used when a property is modify by the view it self we want to modification to be stored into the atome structure, but but want the view to be re-rendered)
    
- Any property can be define using an unique value (passed as a String , Symbole or a numeric  value) 


    a=box({color: :red})
    a.color(:red)
    a.set({color: :red})
    
- Any property define are store internally as a Hash or an array if the property is define many times


    a=box()
    a.color(:red)
    puts a.color #=> {color: :red}
    
 - to set a complex property such as shadow that needs more more than one parameters we have to send a hash to the atome
 
 please note that any property can potentially have multiples parameters even the simplest one
 
    a=box()
    a.set({x: {content: 200, unit: :meters}) 
   
 - Any property are stackable (even the simplest one), in this case we used the 'add' method to stack prop. alternatively it's possible to used an array to stack properties
 
 a simple gradient :
   
    b=box()
    b.color([{color: :red, top: 0}, {color: :blue, bottom: 0}])
     

- all properties are treated identically and can be swap at any time.Type mutation is also possible : ex change the type of object from an image to text type 

    x=image(:boat)
    x.type(:text) #now the objet is rendered as a text object
 
    
here some possible definition of an atome


    a=box({color: red}) # an red box is created
    a.set(smooth: 3) # the box has rounded corner the view is refreshed
    a.set({width: 250},true )# the box is now 250px wide the view is forced to refresh
    a.set({border: :orange, thickness: 3}, false) #the atome is still red the view is not refreshed (no border!)
    a.set([[color: :red, top: 20],[color: :blue, bottom: 0]], false) #the first parameters is an array that contain an array of color to allow a gradient , finally the view is not refreshed the atome remains 'red'.
    a.color([{color: :yellow, top: 0}, {color: :orange, bottom: 0}]) # another way to set the atome property using the property name instead of using the 'set' methods, this time the view is refreshed
    
VIII - Enhancing the atome framework  
   -    
  
how to create new type:
ex create a "web" type

- if a visuals are required for the new created, you have to add the following lines in the proton.rb file within 'module Proton':

    
    @@web = @@visual.merge(@@shape).merge(type: :web, preset: :web)
    
   
the presets method create a new hash that hold the basics properties of the new atome type(in this case web type), it is need if you want to define the visual default representation of the type 

- in proton.rb, the module Proton contains the  'presets' method you have to return the newly created ex:
 return {box: box, circle: circle, text: text, image: image, video: video, audio: audio, particle: particle, tool: tool, web: web}
 

- optionally you can define a new function that behave like a shortcut to create a preconfigured object. In this case a "web" function
will create the shortcut. 
ex add the following function in the bigbang.rb file:
	(To be consistent the function should have the name of the newly created type)
	
	
	 def web(options = nil)
       if options && (options[:render]==false || options[:render]==:false )
         refresh=false
       else
         refresh=true
       end
       atome = Atome.new(:web, refresh)
       if options && (options.class == Symbol || options.class == String)
         atome.send(:content, options)
       elsif options && options.class == Hash
         options.each_key do |param|
           value = options[param]
           atome.send(param, value)
         end
       end
       return atome
     end
	
	 
 - neutron.rb file add the following lines :
 
 
          def web params = nil, refresh = true, add = false
            tag = :web
            web = Atome.new(tag)
            if params.class == String || params.class == Symbol
              params = {content: params}
            elsif params.class == Hash
              self.child.each do |child|
                if child.type == tag
                  params.keys.each do |key|
                    value = params[key]
                    child.send(key, value)
                  end
                end
              end
            end
            web.set(params)
            self.group(web)
            web.x(0)
            web.y(0)
            return web
          end
    
          def web= params = nil, refresh = true, add = false
            web(params, refresh, add)
          end
          
          
There two possibles ways to build an atome object:

- using the Atome class     

    a=Atome.new(:box)
    

- or the lazy the way using preset   

    a=box()
   
   


IX -  working with atome framework  
-
 any atome properties can be set using a unique value using the syntax below :
 
    a=box()
    a.color(:red) 
    a.x=200
    
    
you can send also the properties to the atome using parenthesis ou the equal sign:

    a=box()
    a.x(300)
    a.y=500
    
    
X - logic and datas flows
-

 
