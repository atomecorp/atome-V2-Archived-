# frozen_string_literal: true
####### Html render engine #############

module Html
  def self.init(properties, atome_id)
    properties_already_send=[]

    properties.each do |property|
      add=false
      if properties_already_send.include? (property.keys[0])
        #puts "msg from transpile_html line 10, proprerty: #{property}"
        add=true
      end
      #puts "msg from transpile_html line 13 : property : #{property.keys[0]}, values: #{property.values[0]} atome_id #{atome_id} add : #{add}"
      send(property.keys[0], property.values[0], atome_id, add)
      properties_already_send << property.keys[0]
    end
    #puts "msg from transpile_html line 17 : -----------------------------"
  end

  Proton.atome_methods.each do |property_fct|
    self.define_singleton_method(property_fct) do |param, atome_id,add, &proc|
      JS.opalizer("html", property_fct, param, atome_id, add)
    end
  end


end

