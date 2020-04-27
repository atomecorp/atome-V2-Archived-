# frozen_string_literal: true

####### Urho3D render engine #############
module Urho3D
  def self.init(properties, atome_id)

  end

  Proton.atome_methods.each do |property_fct|
    self.define_singleton_method(property_fct) do |param, atome_id,add, &proc|
      JS.opalizer("html", property_fct, param, atome_id, add)
    end
  end

end
