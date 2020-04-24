# frozen_string_literal: true
####### Html render engine #############

module Html

  def self.init(properties, atome_id)
    properties.each do |property|
      #puts "msg from transpile_html line 7 : property.keys[0]  #{property.keys[0]} property.values[0] #{property.values[0]} atome_id #{atome_id}"
      send(property.keys[0], property.values[0], atome_id)
    end
  end

  Proton.atome_methods.each do |property_fct|
    self.define_singleton_method(property_fct) do |param, atome_id, &proc|
      #puts("msg from transpile_html line 15 : html  property_fct : #{property_fct} param #{param} atome_id #{atome_id}")
      #JS.opalizer("html." + property_fct, param, atome_id)
      JS.opalizer("html", property_fct, param, atome_id)
    end
  end


end

