# frozen_string_literal: true
class Opalizer
  def self.html(function_call, param , id)
      js_call = "html.#{function_call}('#{param}','#{id}')"
      `eval(#{js_call})`
  end
  #def self.method_missing(function_call, param, id, *args, &block)
  #  js_call = "html.#{function_call}('#{param}','#{id}')"
  #  `eval(#{js_call})`
  #end
end
# the commented code above try to find a solution to avoid backstick syntax for js
####### Html render engine #############

module Html
  #atome_methods=[:color,:width]
  atome_methods.each do |property_fct|
    self.define_singleton_method(property_fct) do |param, atome_id, &proc|

      Opalizer.html(property_fct,param,atome_id)
      #html.color(#{param}, #{atome_id});
      #js_call = "html.#{property_fct}('#{param}','#{atome_id}')"
      #`eval(#{js_call})`
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
## exeption below
  def self.preset(param, atome_id)
    param = :div if param.to_sym == :box

    `
    html.preset(#{param}, #{atome_id});
`
  end

  #def self.type(param, atome_id)
  #
  #end

  def self.touch(param, atome_id)
    `
    html.touch(#{param}, #{atome_id});
`
  end


  def self.draggable(param = :true, atome_id)


    atome_id = atome_id.to_s
    id = Atome.atomes[atome_id].id
    `
    html.draggable(#{param}, #{atome_id},#{id});
`

  end

end

