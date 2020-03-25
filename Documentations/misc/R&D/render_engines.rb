def constantize(camel_cased_word)
  names = camel_cased_word.to_s.split('::')
  # Trigger a builtin NameError exception including the ill-formed constant in the message.
  Object.const_get(camel_cased_word) if names.empty?
  # Remove the first blank element in case of '::ClassName' notation.
  names.shift if names.size > 1 && names.first.empty?
  names.inject(Object) do |constant, name|
    if constant == Object
      constant.const_get(name)
    else
      candidate = constant.const_get(name)
      next candidate if constant.const_defined?(name, false)
      next candidate unless Object.const_defined?(name)
      # Go down the ancestors to check it it's owned
      # directly before we reach Object or the end of ancestors.
      constant = constant.ancestors.inject do |const, ancestor|
        break const if ancestor == Object
        break ancestor if ancestor.const_defined?(name, false)
        const
      end
      # owner is in Object, so raise
      constant.const_get(name, false)
    end
  end
end

def  atome_properties
  atome_methods = []
  properties = {atome_id: object_id, id: :my_object, preset: :default, content: :lorem, color: :gray, x: 0, y: 0, z: 0, width: 100, height: 100, child: :none, name: :eVe_object, shadow: 20, border: 3, label: :eVe_label, type: :text, language: :english, display: true, run: true, renderer: :html, selected: false, editable: false, draggable: :false}

  return properties
end

def atome_methods
  atome_methods = []
  atome_properties.each do |object, default_value|
    atome_methods << object
    atome_methods << (object.to_s + "s").to_sym
    atome_methods << (object.to_s + "=").to_sym
  end
  return atome_methods
end


class Render_engine
  #this method parse the atome to search for render engines and once found dispatch to the corresponding render engine.
  # Please notte that the same part could be send simulteanoulsy to multiples render engine
  @@render_engines = [:Fabric, :Headless, :Html, :Konva, :Three, :Zim]

  def initialize (*val)
  end
  #puts poil

  def self.inception props, atome
    if props.class == Array
      props.each do |prop|
        inception prop, props
      end
    else
      if props.keys[0] == :renderer
        engine = props.values[0].capitalize
        constantize(engine).init(atome)
        #puts "#{atome}"
      end
    end
  end

  def self.render(object_id)
    #after a bit of analysis we send the result to the different render engines
    atome = Atome.atomes[object_id.to_s]
    atome.each do |props|
      if props.class == Array
        props.each do |prop|
          #puts prop
          inception prop, props
        end
      else
        inception props, atome
      end
    end
    #if params.class== Hash
    #
    #  if params.keys[0] == :renderer
    #    puts "#{Atome.atomes[object_id.to_s]}"
    #  end
    #end
    #atomes=Atome.atomes
    #toto= atomes[object_id]
    #puts toto


    #puts toto.class
    #puts atomes[toto]
    #puts "#{Atome.atomes}"
    #puts "param's class: #{params.class}, object_id : #{object_id}, params: #{params},  Nb of params: #{params.length}"
    #@@render_engines.each do |engine|
    #  #constantize(engine).init
    #end

  end

end

module Eden
  def initialize (*val)

  end

  def self.init(properties)
    puts "Zim ok!"
  end

  def id val = nil, &bloc
    if bloc
      puts instance_exec(&bloc)
    else
      puts "object #{__method__} is #{val}"
    end
  end

  def color val = nil, &bloc
    if bloc
      puts instance_exec(&bloc)
    else
      puts "object #{__method__} is #{val}"
    end
  end

  def touch

  end

end

module Fabric

  def self.init(properties)
    puts "Fabric ok!"
  end

  def initialize (*val)

  end

  def id val = nil, &bloc
    if bloc
      puts instance_exec(&bloc)
    else
      puts "object #{__method__} is #{val}"
    end
  end

  def color val = nil, &bloc
    if bloc
      puts instance_exec(&bloc)
    else
      puts "object #{__method__} is #{val}"
    end
  end

  def touch

  end

end

module Headless

  def initialize (*val)

  end


  #def self.atome_properties
  #  @properties = {}
  #  Atome.properties.each do |property, value|
  #    @properties[property] = value
  #  end
  #  return @properties
  #end
  #
  #def self.properties
  #  @properties
  #end


  def self.init(properties)
    #puts "properties.each create the methods"
    puts "Headless ok! #{properties}"
    #prop =Atome.properties
  end
  #puts properties


  def render_properties properties


  end
  atome_methods.each do |method|
    #puts method

  end

  #Atome.properties
  #def id val = nil, &bloc
  #  if bloc
  #    puts instance_exec(&bloc)
  #  else
  #    puts "object #{__method__} is #{val}"
  #  end
  #end
  #
  #def color val = nil, &bloc
  #  if bloc
  #    puts instance_exec(&bloc)
  #  else
  #    puts "object #{__method__} is #{val}"
  #  end
  #end
  #
  #def touch
  #
  #end

end

module Html
  def initialize (*val)

  end

  def self.init(properties)
    puts "Html ok! \n#{properties}"
  end

  def id val = nil, &bloc
    if bloc
      puts instance_exec(&bloc)
    else
      #puts "object #{__method__} is #{val}"
    end
  end

  def color val = nil, &bloc
    if bloc
      puts instance_exec(&bloc)
    else
      #puts "object #{__method__} is #{val}"
    end
  end

  def touch

  end

end

module Konva
  def initialize (*val)

  end

  def self.init(properties)
    puts "Konva ok!"
  end

  def id val = nil, &bloc
    if bloc
      puts instance_exec(&bloc)
    else
      puts "object #{__method__} is #{val}"
    end
  end

  def color val = nil, &bloc
    if bloc
      puts instance_exec(&bloc)
    else
      puts "object #{__method__} is #{val}"
    end
  end

  def touch

  end

end

module Three
  def initialize (*val)

  end

  def self.init(properties)
    puts "Three ok! #{properties}"
  end

  def id val = nil, &bloc
    if bloc
      puts instance_exec(&bloc)
    else
      puts "object #{__method__} is #{val}"
    end
  end

  def color val = nil, &bloc
    if bloc
      puts instance_exec(&bloc)
    else
      puts "object #{__method__} is #{val}"
    end
  end

  def touch

  end

end

module Vocal
  def initialize (*val)

  end

  def self.init(properties)
    puts "Zim ok!"
  end

  def id val = nil, &bloc
    if bloc
      puts instance_exec(&bloc)
    else
      puts "object #{__method__} is #{val}"
    end
  end

  def color val = nil, &bloc
    if bloc
      puts instance_exec(&bloc)
    else
      puts "object #{__method__} is #{val}"
    end
  end

  def touch

  end

end

module Zim
  def initialize (*val)

  end

  def self.init(properties)
    puts "Zim ok!"
  end

  def id val = nil, &bloc
    if bloc
      puts instance_exec(&bloc)
    else
      puts "object #{__method__} is #{val}"
    end
  end

  def color val = nil, &bloc
    if bloc
      puts instance_exec(&bloc)
    else
      puts "object #{__method__} is #{val}"
    end
  end

  def touch

  end

end



#Headless_engine.display("val")


#headless = Headless_engine.new
#headless.verif("kjh")
#headless = Headless_engine.new
#headless.id(:tutu)
#headless.color(:red)
#def headless (method)
#  #headless()
#  #eval("Headless_engine.#{method}")
#end
#

#@headless=Headless_engine.new


#a = headless
#a.color(:green)
#a.color do
#  color "red"
#  id :tutu
#end
#b=headless
#b.color(:pink)
class ClassA
  def self.method
    return "This is a method_from_class_A"
  end
end

