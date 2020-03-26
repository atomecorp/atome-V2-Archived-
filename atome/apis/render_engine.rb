# frozen_string_literal: true

# Render engine

class Render_engine
  # this method parse the atome to search for render engines and once found dispatch to the corresponding render engine.
  # Please notte that the same part could be send simulteanoulsy to multiples render engine
  @@render_engines = %i[Fabric Headless Html Konva Three Zim Vocal]

  def initialize(*val); end

  def self.inception(props, atome)
    atome_to_render = []
    atome_ìd = @last_atome_id
    properties_to_delete = []
    if props.class == Array
      props.each do |prop|
        inception prop, props
      end
    else
      if props.keys[0] == :renderer
        render_engine = props.values[0].capitalize
        # the line below call the render engine, first it turn the value passed (render_engine) into a constant, then caal the init function of the render engine callles
        atome.each_with_index do |prop, index|
          if prop.class == Hash
            prop.each do |key, value|
              if key == :atome_id
                atome_ìd = value
                properties_to_delete << index
              elsif key == :id
                properties_to_delete << index
              elsif key == :renderer
                properties_to_delete << index
              else
                atome_to_render << { key => value }
              end
            end
          elsif prop.class == Array
            atome_to_render << prop
          end
        end
        # here we send the atome and its id to the renderer
        constantize(render_engine).init(atome_to_render, atome_ìd)
      end
    end
  end

  def self.render(object_id)
    # after a bit of analysis we send the result to the different render engines
    atome = Atome.atomes[object_id.to_s]
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
