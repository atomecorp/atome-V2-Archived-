todo =<<StrDelim
todo- maybe add a third item (option) to all properties to allow link with ratio and also touch with option 
- add event callback when drag
- create and better edit mode ( ediatble so dragged item and text modification only  generated code when in edit mode)
- link size by default ratio  link(text.x, text.y, ratio) 
-  bug when box param is a hash : ex box({color: :red, x: 200})
- drag only generate code if editable is on
-  text param to_s in case of integer
- font)size exemple : (problem of confusion betwwen lines and letters)
  t=text("hello")
  t.width=50
  t.childrens({scale: :50})
- puts opal utils in a module
- create a series of default scripts install at first launch of eVe, with optional "run at boot time" for some of them
- create a developer mode to allow "eVe made by eVe" : the add  source code and install it in client ressources at first launch of the app
- save files to icloud ion iOS
- check multi prop api ( shadows, border, etc..)
- debug touch position not persistent beacause set in atome Hash: create two behviors one that store (edit mode) one not store consult mode 
- add missing  splashscrens (iPad)
- create a fast compile mode for fastest test 
- write install dev poste on FreeBSD
- externalise js methods from ruby
- debug renderer to make renderer engine choice persistent
- save to db
- create user and account
- debug drag : touch is triggered everytime
- create on drag events
- create events options : down, up 
- create over events
- add the following methods : repeat, until, times, ...
- validate the a.get(colors[1], colors[3]) syntax
- finished final implementation of atome object
- validate effect node object within atome object
- validate analog/digital input capture node object within atome object
- Validate and create a strategy for multiple rendering with new atome object structure
- execute a saved atome, run from its has definition
- add default prop to atome object (x y color width, height) 
- allow b=Atome.new(:box) syntax
- ad  id to user to user before saving
- by default save pair should be file_name:type instead of filename:content
- Atome.eDen should contains user list and store should verify if user exist before saving
- verify if file exist before using store
- when loading  project file the screen , an option should exist to  be refresh or not the screen
- remove reload menu on right click on canvas and console
- save to db in web server mode 
- add invisible "require atome" to allow user init script
- create def to get all obj id on screen
- create nuke db 
- create Atome.users function 
- change param order in create (name type params instead of name params type)
- allow users to create a new script wihout loading on screen
- allow users to load a script in ide without running it even if code cotain the run instruction
- when create if script already exist dont create it!!
- rework atome object as describe : to allow multiples colors in the body the shadows and the border, and also groups with children having different properties propagation ( ex move group move certains childrens, color affect som childrens not others , etc...)
- web / canvas auto-balancing ( setup a strategy where if simple etxt and shape is used saty in web else migrate rendering to canvas, do the same for switching rendering lib ex  if the text is editable get text content and create an fabric object then map it to zim container)
- closure for atome objects
- import store and retrieve ressources
- eDen total integration (urho3D where cordova is the webview)
- script as atome object + object type code / text as closure
- verify open source still work after remodelling init sequence 
- create atome hash object, apply the logic found in atome object document, so shapes are prop not object and object are created when creating any prop 
- mix many renderer in one context (ex ZimJS render shapes fabricJS render text)
        - create  add method
- make all methods (set and get) consistent with the following code def my_method(value=nil); if value ;"set value":else;"get value";end
- Home automation mode (domotique): imagine how to send shell command (roda server , or opal server or mruby server), how to automatise installation on client machine?- import store and retrieve ressources- revert to last user when launch atome
- Arduino layer (cordova roda)
- Verify website creation with atome
        - add new user
- create an object for renderer (Zim, konva) to ensure a good namespace
- delete object test with the alert function ( create a trash make a difference between remove and delete!!)
- atome Object implementation with basic methods(move, scale, color, history, help, infos, examples, tuto)
        - add tag(class) to objets
- create last project modify var : create a function that test if eden exist, else create eden and set the promise to trig the load of (last or default project) 
- Create a method to get all object oor by class /tags /types
- add on change event
- create a git like with compare file , sync and also get todo test help etc..
- passe events (x, pointer, etc...) when using on drag, etc..
- Create a single method for both group and container, add properties propagation strategy
- Background task/script : start stop, list of background script, exclude audio, exlude visuals
- color mode ( red, green blue with 0 to value)
- create background object
- file operation for server mode (Roda)
- user account sync
- text editing
          - internationalisation
- user accounts management
- collaboration
- history
        - migrate to Opal 1.0
- anonymous user strategy
- rename autorun fct
- make test on each plateform to verify atome still works at each new release
- add securise when creating project if a project of the same name already exist
- add passed to test series (unit test)
- check if architecture allow id creation when using Atome.new only, think about saving script as object 
- hide and prevent user to use create_indentity method 
- filter methods  (zim methods , etc..)when using .defs methods
- in event allow to use self instead of a var (maybe we have to rework meta prog)
- interoperabilty between Zimjs, Konva and ThreeJs
- when clearing console in autorun mode erase only the last message keep the history
- ensure scratch compatibility
- create documentation of architecture Apis and tutos, first launch
      - add multiple & stackable events and properties (multiples touchs drags with their respectives name etc..)
- basic tools
- minimalist U.I. integration (left side actions)
- cleanup whole code only using Opal and app ready
- comment code if no selection comment line only
- change comment strategy (comment twice line already commented when commenting multiple lines)
- mecanism for activation desactivation of visual code creation
- change splash screen ( animated if possible)
- automatisation of updated dependencies (opal, zims, etc.) create two versions of of atome dev one based on latest framework and keep another based on a known work dev environement
- automatisation the install of client poste and code deployement
- automatisation of unit tests and functional tests
          - create automated test for each new functionality ( unit test and U.I. tests)
- debug ruby with line number anf file name (when using require)
        - better resolve of ZimJs conflict with Cordova file plugin (Blob)
- save current state of IDE and console
- better handling of autorun code at code loading
          - make eVe with atome
- at startup open te console and put it behind or offscreen to allow shortcut on iOS
- todo and bugs as function
- node view
- maternal language coding description
- object authorisation
- projects repository
- continuous save of actions on local db and the cloud
- object animation (on path, tweening, ...)
- shape alteration
- set IDE font size
StrDelim

regression =<<Strdelim

Strdelim

bugs =<<Strdelim
Bugs:

- when dragging multiple files geneated code is fucked printing atome_id instead of id 

    example: 
    b=circle({color: :violet,x: 120,y: 90})
    b.x=b.y=122
    b.drag
    b.touch do
      c=shape()
      c.x=333
      c.y=150
      play
      c.touch do
    	text("et c'est que le début !!!")
      end
    end
    c=circle(200,100,289,23,:violet) 
    c.touch do
      a=box(120, 200,20, 157,:red)
      a.touch do	
    	text ("lkjlk")
      end
    end
    b=box(color: :green)
    b.drag()
    
- code mirror overflow scroll is fucked
- remove annoying console jump and lock when draging it (bug accur after a windo resize)
- object position is not updated in an event ex :
b=box()
b.drag()
b.touch do 
  p b.x
- get(:id) doesn't work in an event ex :
b=box()
b.id=:my_box
b.drag()
b.touch do 
 p get(:my_box).x
end 
- when renaming project_0 and if project_0 is the only project when reload it try to load project_0 but it's renamed!
- when renaming a file called anonymous.anonymous is created
- when creating a new script current script content is written in the new created script
- the following code show that there's a variables confusion clicking twice on the yellow box should clear the scene but this is the bloob that trig not the box ex : b=box({color: :red});b.drag();b.touch do ;  self.color=:yellow;  bb= bloob(500,100,100,100,:red); ; b.touch do;	clear(:view);	c=circle({x: 100, y:100, color: :violet});  end;end
- open_ide and open_console are not respected at startup time!
- no new eDen is created when creating a new user then projects are interleaved
- replace methods set_id and set_user with method set(id: :id), set(user: :id), set(prop: value)
- Ruby "private method" doesn't work also probably because of my metaprog!!
- drag method must appear in the hash of the object 
- add method drag like this box({drag: true})
- at first run sleep doesn't work correctly
- sleep in a loop to find a solution (in a loop the word sleep appear once and is executed many)
- prevent user from removing atome binding (drag, mousedown, etc...)
- open console only without IDE launch an exeption because it can't find default position
- opal problem : define_method(:verif) do |opts|;puts 'ok';end => define_method: undefined method `define_method' for main undefined
StrDelim



irrelevant =<<Strdelim
- protection to prevent add_electron  , etc..
Strdelim

helpers =<<Strdelim
clear
    def analysis_of_proc params
      the_proc_conent_is=`the_proc_conent_is = #{params}.toString();`     
      puts the_proc_conent_is  
    end
    def my_proc(&proc)
     	analysis_of_proc proc
    	proc.call
    end
    my_proc do 
    	a="hello"
    	b="world"
    	  def add_word fist, second
    		return fist+" "+second
    	  end
    	add_word a,b
    end
Strdelim
