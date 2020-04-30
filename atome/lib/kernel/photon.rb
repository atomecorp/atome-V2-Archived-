# frozen_string_literal: true

# Render engine

class Photon
  # this method parse the atome to search for render engines and once found dispatch to the corresponding render engine.
  # Please notte that the same part could be send simulteanoulsy to multiples render engine
  @@photons = %i[Fabric Headless Html Konva Three Zim Vocal]

  def self.atomize atome
    new_structure = {}
    prop_found = []
    atome.each_with_index do |particle, index|
      # we put all particle found in this array to check if this particle is present many times
      if new_structure.key?(particle.keys[0])
        new_structure[particle.keys[0]] = new_structure[particle.keys[0]] << particle.values[0]
      else
        if particle.values[0].class == Array
          if particle.values[0].length > 1
            new_structure[particle.keys[0]] = [particle.values[0]]
          else
            new_structure[particle.keys[0]] = particle.values[0]
          end
        else
          new_structure[particle.keys[0]] = particle.values[0]
        end
      end
    end
    return new_structure
  end

  def self.inception(props, atome)
    atome_to_render = []
    atome_id = @last_atome_id
    properties_to_delete = []
    if props.class == Array
      props.each do |prop|
        inception prop, props
      end
    else
      if props.keys[0] == :renderer
        photon = props.values[0].capitalize
        # the line below call the render engine, first it turn the value passed (render_engine) into a constant, then call the init function of the render engine callles
        atome.each_with_index do |prop, index|
          if prop.class == Hash
            prop.each do |key, value|
              # we delete all key pair the renderer doesn't need to render (id renderer atome_id)
              if key == :atome_id
                atome_id = value
                properties_to_delete << index
              elsif key == :id
                properties_to_delete << index
              elsif key == :renderer
                properties_to_delete << index
              else
                atome_to_render << {key => value}
              end
            end
          elsif prop.class == Array
            #in this case multiple value are send to the renderer so it's a sub prop such as shadow(color, blur, x , y) or a gradient, ...
            #todo : "msg from photon line 38 : we must recursively get array to find type to send it to the render"
            property_found_from_type = ""
            value_found_in_array = []
            prop.each do |property|
              if property.keys[0].to_sym == :type
                #here we get the sub property name
                property_found_from_type = property.values[0]
              else
                #here we get the sub property values and put it in array formmated like this [sub_prop_name, value,sub_prop_name, value] so Javascript can re constitute the hash
                #value_found_in_array << property.keys[0]
                #value_found_in_array << property.values[0]
                # uncomment below to send a hash and comment above
                value_found_in_array << {property.keys[0] => property.values[0]}
              end
            end
            atome_to_render << {property_found_from_type => value_found_in_array}
          end
        end
        #atome_to_render2=atomize(atome_to_render) #we restructure the atome (we group properties define more than on time) to facilitate rendering
        # here we send the atome and it's id to the transpile render engine ex send to module HTML module fould in transpile_html_to_js  file
        constantize(photon).init(atome_to_render, atome_id)
      end
    end
  end

  def self.render(atome_id)
    # after a bit of analysis we send the result to the differents render engines
    if class_exists?(:Atome)
      atome = Atome.atomes[atome_id.to_s]
      atome = atome.to_array
        atome.each do |props|
          if props.class == Array
            props.each do |prop|
              inception prop, props
            end
          else
            inception props, atome
          end
        end
    end
  end

  def self.delete(property, atome_id)
    grab(atome_id).each do |properties|
      if properties.class==Hash && properties.keys[0] == :renderer
       renderer = properties.values[0].capitalize()
         constantize(renderer).init([delete: :true], atome_id)
      end
    end
  end
end


################ media manipulation ############

def anim(params)
  obj= params[:target]
  if obj.nil?
    obj= self.atome_id
  elsif obj.class==Atome
    obj =obj.atome_id
  else
    obj =Object.get(obj).atome_id
  end
  params.delete(:target)
  animator(params, obj)

end
