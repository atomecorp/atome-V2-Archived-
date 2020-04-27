# frozen_string_literal: true
####### Headless render engine #############

module Headless


  def self.init(properties, atome_id)
    properties.each do |property|
      # puts properties
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
  Proton.atome_methods.each do |property_fct|
    self.define_singleton_method(property_fct) do |param, atome_id,add, &proc|
      JS.opalizer("headless", property_fct, param, atome_id, add)
    end
  end


  def self.preset(param, id)

  end

  def self.type(param, id); end

  def self.color(param, id)

  end

  def self.draggable(_param = :true, id)

  end

  def self.x(param, id)

  end

  def self.y(param, id)

  end
end
