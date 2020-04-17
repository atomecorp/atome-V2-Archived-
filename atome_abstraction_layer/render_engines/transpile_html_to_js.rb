# frozen_string_literal: true

####### Html render engine #############

module Html
  #atome_methods=[:color,:width]
  atome_methods.each do |property_fct|
    self.define_singleton_method(property_fct) do |param, atome_id, &proc|
      #if property_fct==:preset
      #  param = :div if param.to_sym == :box
      #  param = :div if param.to_sym == :box
      #end
      if  property_fct==:draggable
        atome_id = atome_id.to_s
        id = Atome.atomes[atome_id].id
        JS.opalizer("html."+property_fct,param,atome_id, id)

      else
        JS.opalizer("html."+property_fct,param,atome_id, id="")
      end
    end
  end

  def initialize(*val)
    ;
  end

  def self.init(properties, atome_id)
    properties.each do |property|
      if property.class == Hash
        send(property.keys[0], property.values[0], atome_id)
      elsif property.class == Array
        parent_id = atome_id
        property.each do |sub_property|
          if sub_property.class == Hash
            send(sub_property.keys[0], sub_property.values[0], parent_id)
          end
        end
      end
    end
  end
end

