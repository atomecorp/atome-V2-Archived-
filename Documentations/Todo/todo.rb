todo =<<StrDelim
######## MVP #######
- audio image video play back
- reorganise files for auto publish to share folder and move files to avoid searchin in, Automatise publish with auto increnent Atome version number
- minimalist U.I. integration (left side actions) with basic tools
- repair a new U.I. for console and IDE 
- delete api is not enough add a delete method : delete(ob_id, obj_2_id)
- multiple audio renderer 
- effect node 
- create background object ?
- group : create a single method for both group and container, add properties propagation strategy
- debug renderer to make renderer engine choice persistent
- save to db
- add select tag (edit mode activation ?)
- gradient
- unbind touch and don't forget to set pointer-events to  none;
- object on scene listing
- create and better edit mode (editable so dragged item and text modification only  generated code when in edit mode) drag only and text editable only generate code if editable is on
- script listing
- get info on touch object 
- add drag events callback pass events (x, pointer, etc...)
- on drag kill touch
- create events options : down, up 
- create over events
- if possible extend array core with atome fct  ex : a=[box_1, box_2] ; a.x=30
- create complexe objet ( text + box) (circle+ text) etc....
- add atome Object implementation with basic methods(tags , history, help, infos, examples, tuto)
- verify we can get all object by class /tags /types
- find to way to get color of an object and compare it with another color (problem with atome object returned)
- new project with default name and save
- add missing splashscrens (iPad)
- import medias
- Background task/script : start stop, list of background script, exclude audio, exlude visuals
- Arduino layer (cordova roda)
- Domotique
- unify numeric value for prop such as color rotation, etc for better exchange,  (0 to 1)?
- verify internationalisation
- ensure scratch compatibility
- create documentation of architecture Apis and tutos, first launch
- debug ruby with line number anf file name (when using require)
- maternal language coding description
- node view
- create button to quit

- create dir inside atome that contain:  atome atome_abstraction_layer www for easier search and debug
- drag vs click
- replace true instead of :true
- check the possiblity to add opal-jquery
- maybe add a third item (option) to all properties to allow link with ratio and also touch with option 
- link size by default ratio  link(text.x, text.y, ratio) 
-  bug when box param is a hash : ex box({color: :red, x: 200})
-  text param to_s in case of integer
- font-size example : (problem of confusion betwween lines and letters)
  t=text("hello")
  t.width=50
  t.childrens({scale: :50})
- puts opal utils in a module
- create a series of default scripts install at first launch of eVe, with optional "run at boot time" for some of them
- create a developer mode to allow "eVe made by eVe" : the add  source code and install it in client ressources at first launch of the app
- externalise js methods from ruby
- create user and account
- add the following methods : repeat, until, times, ...
- verify if file exist before using store
- when loading  project file the screen , an option should exist to  be refresh or not the screen
- remove reload menu on right click on canvas and console
- add on change event
- web / canvas auto-balancing ( setup a strategy where if simple text and shape is used keep basic html rendering,  else migrate rendering to canvas, do the same for switching rendering lib ex  if the text is editable get text content and create an fabric object then map it to zim container)
- eDen total integration (urho3D where cordova is the webview)
- script as atome object + object type code / text as closure
- create a git like with compare file , sync and also get todo test help etc..
- user accounts management
- collaboration
- history
- anonymous user strategy
- automatise test on each platform to verify atome still works at each new release
- add securise when creating project if a project of the same name already exist
- add passed to test series (unit test)
- comment code if no selection comment line only
- change comment strategy (comment twice line already commented when commenting multiple lines)
- change splash screen ( animated if possible)
- automatisation of updated dependencies (opal, zims, etc.) create two versions of of atome dev one based on latest framework and keep another based on a known work dev environement
- automatisation the install of client poste and code deployement
- automatisation of unit tests and functional tests
- create automated test for each new functionality ( unit test and U.I. tests)
- save current state of IDE and console
- make eVe with atome
- at startup open te console and put it behind or offscreen to allow shortcut on iOS
- todo and bugs as function
- object authorisation
- projects repository
- continuous save of actions on local db and the cloud
- object animation (on path, tweening, ...)
- shape alteration
StrDelim
