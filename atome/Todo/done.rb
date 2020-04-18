
task_done =<<Strdelim
- temporary methods to change font size of sytem object :
  exemple:
        Console.text(25)
        Ide.text(25)
- creating Automatic unit-test
        location : wwww/utils/tests/unit_test.rb
        added 28/01/2020
- still working on definitive implementation of atome object
        completed 28/01/2020
- add init_console in api.rb to redirect console.log to atome console
        added 17 01 2020         
- add pick method for Array (for futur use with new atome format)
        must create array and modiffy the whole code!!!added 15 01 2020
        exemple: a=[{type: :shape},{color: :red, x: 200}, {x: 300}, {child: :toto}, {"child" => :tutu}]
        p a.pick :color , :electron
        added 15 01 2020
- added batch with get methods 
          exemples :b=box(x: 500)
          b2=box(x: 500)
          get(500, :x).y(150)
          p get(500, :x).id()
          added 14 01 2020
- Add Array swap
          added 14 01 2020
          exemple : cc=[1,2,3,4]
                    cc.swap!(0,2)
                    p cc
- the get method is enhanced when can now get object according to any prop ex get par it's position  
          exemple: get(b.id).x(500);get(500,:x).x=1300
          created 14 01 2020
- overhall rework of whole architetcure  (almost everything is an atome object)leading in better faster more reliable and more flexible than ever
          created 14 01 2020
- add child method
          created 14 01 2020
- in the id tool number is now increment according to object type only 
          ex if created incerementaly box, circle , box , shape . each.id => box_0, circle_0 , box_1 , shape_0
          created 13 01 2020
           code modified in atome.rb at ; #Identity creation id_counter=0
- add reboot method tat reload all code
          created :06 01 2020
- add Atome.users and users methods tht return all users in local eDen
          created :06 01 2020
- add require 
          created :03 01 2020
- create rename method for projects
          corrected :03 01 2020
          test : #rename 
- create delete method for project
          corrected :03 01 2020
          test : #delete 
- debug whole init sequence ( load create store)
          corrected :02 01 2020 
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
          put loaded file into stacked buufer instead of puting the file into the ide 
          ex :  
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
- split project in two for open source solution
          added :22 12 2019
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
- add squiggle shape
          created : 07 12 2019 
          to test : test/bloob
- add bloob shape
          created : 07 12 2019 
          to test : test/bloob
- add triangle shape
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


