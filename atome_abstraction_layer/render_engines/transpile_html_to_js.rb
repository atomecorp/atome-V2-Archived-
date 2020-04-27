# frozen_string_literal: true
####### Html render engine #############

module Html
  def self.init(properties, atome_id)
    properties_already_send=[]
    properties.each do |property|
      add=false
      if properties_already_send.include? (property.keys[0])
        add=true
      end
      send(property.keys[0], property.values[0], atome_id, add)
      properties_already_send << property.keys[0]
    end
  end

  Proton.atome_methods.each do |property_fct|
    self.define_singleton_method(property_fct) do |param, atome_id,add, &proc|
      JS.opalizer("html", property_fct, param, atome_id, add)
    end
  end

end

