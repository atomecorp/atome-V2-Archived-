todo =<<StrDelim
todo:

- add require 
- create nuke db and delete projects
- create Atome.users def
- change param order in create (name type params instead of name params type)
- allow users to create a new script wihout loading on screen
- allow users to load a script in ide without running it even if code cotain the run instruction
- when create if script already exist dont create it!!
- add invisible "require atome" to allow user init script
- rework atome object as describe : to allow multiples colors in the body the shadows and the border, and also groups with children having different properties propagation ( ex move group move certains childrens, color affect som childrens not others , etc...)
- web / canvas auto-balancing ( setup a strategy where if simple etxt and shape is used saty in web else migrate rendering to canvas, do the same for switching rendering lib ex  if the text is editable get text content and create an fabric object then map it to zim container)
- closure for atome objects
- import store and retrieve ressources
- eDen total integration (urho3D where cordova is the webview)
- script as atome object + object type code / text as closure
- verify open source still work after remodelling init sequence 
- Apply the logic found in atome object document, so shapes are prop not object and object are created when creating any prop 
- split project in two for open source solution
- mix many renderer in one context (ex ZimJS render shapes fabricJS render text)
- save to db in web server mode 
- create delete method
- create  add method
- make all methods (set and get) consistent with the following code def my_method(value=nil); if value ;"set value":else;"get value";end
- Home automation mode (domotique): imagine how to send shell command (roda server , or opal server or mruby server), how to automatise installation on client machine?- import store and retrieve ressources- revert to last user when launch atome
- Arduino layer (cordova roda)
- Verify website creation with atome
- add new user
- create an object for renderer (Zim, konva) to ensure a good namespace
- delete object test with the alert function ( crete a trash make a difference between remove and delete!!)
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
- make test on each palteform to verify atome still works at each new release
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
- create atome hash object
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
- better resolve of ZimJs conflit with Cordova file plugin (Blob)
- save current state of IDE and console
- better handling of autorun code at code loading
- make eVe with atome
- at startup open te console and put it behind or offscreen to allow shortcut on iOS
- todo and bugs as function
- node view
- maternal coding description
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

Task done =<<Strdelim

- autosave when code is generated using graphic coding
          corrected :01 01 2020 
          save on preesup in in transpil_zim_to_js in:  container.on("pressup", function(evt) {...
- finished bidirectional code 
          done : finished the hardest part (when dragging)
          finished : 01 01 2020 
- when using simple quote it crash ex : 
          corrected :01 01 2020 
          bug corrected at : function read_file in file_cordova.js
          solution : file_content=  file_content.replace(/'/g, "\\'");
- added method read
          added :30 12 2019  
          to test : test/read_bufferize_find
- added method bufferize
          added :30 12 2019  
- added method find
          added :30 12 2019  
- last char is not save on iOs 
          correction : add timeout in "def shortcut() autosave function" in atome/ruby/api.rb  to wait until text paper on screen 
          added :30 12 2019          
- rework atome init sequence
          correction : rework  whole code from scratch
          added :30 12 2019
- load last user and it's content when relaunching the app
          correction : rework  whole code from scratch
          added :30 12 2019
- opal 1.0 migration 
          correction : add Opal.loaded(['opal']) at the end of the opal.min.js file
          added :10 12 2019
- kimsufi atome server setup 5.135.157.198
- automation script for launching and testing plateform (sh run ios)
- automation script for dev poste creation (sh install)
- unify get, set, set_att, add, delete, delete_at and method with no params (no params =  get) -  ATTENTION :  replace get_id , set_id set_user,clear(:view),clear(:code),  etc.. all those kind of methods in atome.rb
          corrected : 08 12 2019 
          test : tests / set tests
- when there's a quote (') in a text in crash ex text("that's life !!")
          corrected : 08 12 2019 
          problem solved in : atome.rb electron_builder added sanitizer function
          test : text("that's life !!")
- when an Atome is created when touching an object it's property are incorretly setted an array is not passed but a single parameter 
          corrected : 08 12 2019 
          problem solved in : atome.rb module Objects define_method
          test : c=circle(200,100,289,23,:violet) ;c.touch do;a=box(120, 200,20, 157,:red);end
- better autosave
          created : 08 12 2019 
          test : save anytime a new keystroke occur in ide
          added method autosave in transpile_global_lib.rb, callof the autosave is done in  shortcut method :          
- add squiggle shapa
          created : 07 12 2019 
          to test : test/bloob
- add bloob shapa
          created : 07 12 2019 
          to test : test/bloob
- add triangle shapa
          created : 07 12 2019 
          to test : test/triangle
- remove iOS's StatusBar
          created : 07 12 2019 
          to test : at ios top verify that the date and clock is hidden
          correcion :    add the following test to the file : platform/ios/atome/atome-Info.plist     	
<key>UISupportedInterfaceOrientations~ipad</key>
	<array>
		<string>UIInterfaceOrientationPortrait</string>
		<string>UIInterfaceOrientationLandscapeLeft</string>
		<string>UIInterfaceOrientationPortraitUpsideDown</string>
		<string>UIInterfaceOrientationLandscapeRight</string>
	</array>
	<key>UIStatusBarHidden</key>
- at first launch if eDen is not created user data are lost
          corrected : 06 12 2019 
          test : clear local db launch eVe, type and run any code relaunch eve and verify that code is still in the ide
- Basic user accounts
          created : 05 12 2019 
          code to test : test/user basic
- imagine strategie for bidirectional code ( when object is in a function , an event, etc... )
        found : 03 12 2019 
        solution : the modification is added at the end of the doc to ensire it'll be taken in account, if there's a selection then the modficiation occurs within the selection
- if no user revert to anonymous
        created : 03 12 2019 
        code to test : test/anonymous-user test
- at first launch object.id is define but not accessible
        corrected : 03 12 2019 
        correction : I have replace return @id with @atome[:id] in get_id method and id method
        code to test : test/not loaded as code
- timeout function
        created : 03 12 2019 
        code to test : test/timeout
- if we load an image  the current project become the ID of the image , then we run the image in placed with the body of the ide
        corrected : 03 12 2019 
        code to test : test/not loaded as code
- self inside a bloc leads to variable mix probably because of my metaprog!!
        corrected : 03 12 2019 
        code to test : test/event with self
- id is missing in atome_id of object
        corrected : 02 12 2019 
        code to test : test/print atome_id
- ID is mssing int the Atome.atomes list and atome inspection
        corrected : 02 12 2019 
        code to test : test/list atomes
- save load multiple projects
        created : 12 12 2019 
        code to test : test/file tests
- anonymous param set at object creation doesn't work for size and color
        corrected : 02 12 2019 
        code to test : test/methods test
- create default script loaded at startup and editable from internal IDE
- drag and drop to import new ressources
- when creating data and loading if project name is a symbol it crash
- save datas (Mobile)
- Bad resize on mobile when opening keyboard
- ide resize is bad (especially on device chage orientation and remove safari debug window) :  bad bottom calculation of different elements
- console invisible at startup until using dragbar
- Widh height ratio can't be change
- properties not assigned when creating an objet using Atome class instead of simplified creation methods
- when getting object infos the id is lost
- id not in atome hash
- id not set at startup
- multiple sleep
- python compiler
- add run at startup in code
- add open_ide at startup in code
- add open_console at startup in code 
- opening codemirror conent is blank until clicked
- verified method chaining
- alter base ruby class with Opal  (String, Int)
- console in canvas with text selection
- when passing multiple items in hash a objet creation time only first item is compute other are ignored
- canvas not responsive anymore: it doesn't resize when resizing main window (occurs when change zim canvas ID)
- add correlation table between id and atome_id
- objects events handling
- add grab method to ruby's APIs
- get id from ruby
- reset Atome.atomes.length at each run of the script corected in : abstraction_lib  / run_code() / Atome.new.nuke
- create getter
- object ID :user_machine_location_date_nb
- sleep function for JS
- clear view
- ide is empty at launch (no line numbering or else)
- at first launch there's no file created so file reader launch an exeption
- Si ide ouvert au demarrage on perd la sauvegarde
- Si une seule ligne dans l'ide le contenu n'est pas sauvegardé
- better code loading and saving with promises instead of setTimeOut
- ZimJs change canvas ID
- automatisation of new methods creation in both JS and ruby
- add methods to objects (color, x, width, ...)
- create default params send at object construction time
- get objet by ID
- add iD to object
- load code
- save code
- copy text from console
- change Ruby base class
- comment code
- sleep
- Autorun
- debugger (try and catch)
- Allow select all in ide(iOS)
- View cursor in ide (iOS)
- On mousedown drags are accumulated
- replace line or content in line in IDE
- Save load projects
- Set base canvas ID
-  Allow spacebar in ide 
      solution 1 : zim can be handled in a few ways.  Its purpose is to stop the ZIM canvas from being moved by    arrows, spacebar, scrollwheel, etc.  But you can override it with allowDefault in the Frame call - so check that out in the docs.  It also says how you can individually choose things in the zil docs
      soloution 2 : just comment this line in Zim.Js at function zil() comment : // (e = e || event).keyCode && 32 <= e.keyCode && e.keyCode <= 40 && e.preventDefault()
Strdelim

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
