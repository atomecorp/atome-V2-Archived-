# here is alll methods that facilitate the atome creation
# frozen_string_literal: true

def atome_properties
  properties = {atome_id: object_id, id: :my_object, preset: :default, touch: :hello, content: :lorem, color: :gray, x: 0, y: 0, z: 0, width: 100, height: 100, child: :none, name: :eVe_object, shadow: 20, border: 3, label: :eVe_label, type: :text, language: :english, display: :true, run: :true, renderer: :html, selected: :false, editable: :false, draggable: :false}
  return properties
end

def atome_methods
  atome_methods = []
  atome_properties.each do |object, _default_value|
    atome_methods << object
    atome_methods << (object.to_s + 's').to_sym
    atome_methods << (object.to_s + '=').to_sym
  end
  atome_methods
end