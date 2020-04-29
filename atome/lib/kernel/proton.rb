# here is alll methods that facilitate the atome creation
# frozen_string_literal: true
# proton provide namespaced methods used mainly by the atome obejct but also by abastraction layer and end users
module Proton

  def self.events
    events = {touch_me: :false, touch: :false, drag: :true, over: :false}
    events
  end

  def self.properties
    properties = {atome_id: :xxxxxxx, key: :false,animate: :false, delete: :false,id: :my_object, preset: :default, content: :lorem, color: :lightgray, x: 70, y: 70, z: 0, width: 100, height: 100, size: 16, rotate: 0, blur: 0, transparency: 0, smooth: 7, child: :none, name: :eVe_object, shadow: 20, border: {thickness: 7,color: :red}, label: :eVe_label, type: :text, language: :english, display: :true, run: :true, renderer: :html, selected: :false, editable: :false, draggable: :true}.merge(events)
    properties
  end

  def self.atome_methods
    atome_methods = []
    properties.each do |object, _default_value|
      atome_methods << object
      atome_methods << (object.to_s + 's').to_sym
      atome_methods << (object.to_s + '=').to_sym
    end
    atome_methods
  end

  def self.visual_types
    #visual_types's key is the name of type, the value is the associated preset for the type
    visual_types = {shape: :box, image: :logo, text: :lorem}
    visual_types
  end

  def self.types
    types = {effect: :distort, sound: :jingle, human: :user, machine: :computer, tool: :text, group: :empty, code: :hello, atome: :foo}.merge(visual_types)
    types
  end

  def self.presets
    #presets's key is the preset name, the value is the content of the presets
    presets = {circle: 'circle desc', box: 'box desc', star: 'star desc', triangle: 'triangle desc', polygon: 'polygon desc', squiggle: 'squiggle desc', bloob: 'bloob desc', text: 'lorem ipsum dolore', user: 'anonymous', computer: 'riscPC', code: "print 'hello world'", foo: 'this object has no body'}
    presets
  end

  def self.default_visuals
    default_visuals = {}
    visuals_presets = [:x, :y, :width, :height, :color]
    visuals_presets.each do |visual_property|
      default_visuals[visual_property] = properties[visual_property]
    end
    return default_visuals
  end

end
