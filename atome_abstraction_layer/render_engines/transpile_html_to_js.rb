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

############### animatione

def animator(params,obj)

  if params[:start][:blur]
    value_found= params[:start][:blur]
    params[:start][:filter]="blur(#{value_found}px)"
    params[:start].delete(:blur)
  end
  if params[:end][:blur]
    value_found= params[:end][:blur]
    params[:end][:filter]="blur(#{value_found}px)"
    params[:end].delete(:blur)
  end
  if params[:start][:smooth]
    value_found= params[:start][:smooth]
    params[:start][:borderRadius]=value_found
    params[:start].delete(:smooth)
  end
  if params[:end][:smooth]
    value_found= params[:end][:smooth]
    params[:end][:borderRadius]=value_found
    params[:end].delete(:smooth)
  end

  if params[:start][:color]
    value_found= params[:start][:color]
    params[:start][:background]=value_found
    params[:start].delete(:color)
  end
  if params[:end][:color]
    value_found= params[:end][:color]
    params[:end][:background]=value_found
    params[:end].delete(:color)
  end

  `
  motion.animate(#{params}, #{obj})
  `

end