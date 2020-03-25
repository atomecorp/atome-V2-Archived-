if Object.respond_to? :clear
  clear
end
class Atome

  def initialize (param = nil)
    if param != nil
      @atome = param
    else
      @atome = {}
    end
  end

  props = [:id, :x, :y, :width, :height, :color, :border, :shadow]
  #We props are not only props for the Atome but they are used created methods form this list
  prop_list = []
  # for more convenience we add pluralisation to all props and methods as well as assignation for all methods adding "=" to all props methods
  props.each do |object|
    prop_list << object
    prop_list << (object.to_s + "s").to_sym
    prop_list << (object.to_s + "=").to_sym
  end

  # we define all Atome's methods below
  prop_list.each do |function|
    define_method(function) do |*values, &proc|

      if proc
        #proc.call
        #instance_exec(proc.call)
        instance_exec(&proc)
        #puts  yield.length
      else
        #puts function
      end
      if values.length == 0
        value = nil
      elsif values.length == 1
        value = values[0]
      else
        values.each_with_index do |value, index|
          singular_function = function.to_s.chomp("s").to_sym
          if index == 0
            self.set(singular_function => value)
          else
            self.add(singular_function => value)
          end
        end
      end
      #we remove the "=" sign to create the method
      function = function.to_s.chomp("=").to_sym
      if value
        # a parameter is passed we set up a setter
        if value.class == Hash
          method = value.keys[0]
          property = function
          value = value[method]
          self.send(method, ({property => value}))
        else
          new_prop = {:value => value}
          @atome[function] = Atome.new(new_prop)
        end
        return self
      else

        #no params are passed: we set up a  getter!!
        if function.to_s.end_with?("s")
          collected_prop = []
          @atome.each do |prop, value|
            if prop.to_s.start_with?(function.to_s.chomp("s"))
              collected_prop << value
            end
          end
          return collected_prop
        else
          return @atome[function]
        end
      end
    end
  end

  # SAGED methods here (Set Add Get Exchange Delete)

  def value data = nil

    if data.class == Symbol
      prop = @atome.keys[0]
      self.send(:set, {prop => data})
    elsif data.class == Hash
      prop = data.keys[0]
      value = data[prop]
      #self.send(prop, value)
      self.send(:set, {prop => value})
    end


  end

  def set prop = nil
    prop_to_set = prop.keys[0]
    value = prop[prop_to_set]
    @atome.each do |key, value|
      if key.to_s.start_with?(prop_to_set.to_s)
        @atome.delete(key)
      end
    end
    # now we feed the @atome
    if value.class == Hash
      new_prop = value
    else
      new_prop = {:value => value}
    end
    @atome[prop_to_set] = Atome.new(new_prop)
    #return self
  end

  def add prop = nil
    if prop
      nb_of_prop_found = 0
      requested_prop = prop.keys[0].to_s
      value = prop[prop.keys[0]]
      @atome.keys.each do |prop_found|
        prop_found = prop_found.to_s
        if prop_found.start_with?(requested_prop)
          nb_of_prop_found = nb_of_prop_found + 1
        end
      end
      requested_prop = (requested_prop + "_#{nb_of_prop_found}").to_sym
      # now we feed the @atome
      if value.class == Hash
        new_prop = value
      else
        new_prop = {:value => value}
      end
      @atome[requested_prop] = Atome.new(new_prop)
    end
    return self
  end

  def get prop = nil

  end

  def erase prop = nil

  end

  # Various utils methods here
  def atome
    return @atome
  end

  def length
    return @atome.length
  end

  def each(&block)
    @atome.each(&block)
  end

  def to_hash
    self.to_enum(self)
  end

  def to_s
    if @atome.length == 1
      #hack to display only the value of the request prop,  seems to work  with multiple values too
      if @atome.keys[0] == :value
        key = @atome.keys[0]
        return @atome[key].to_s
      end
    end
    return @atome.to_s
  end

end

e = Atome.new
e.color = :red
e.color = :mauve

e.color do
  value :orange
  value :red
  x 200
  y 100
end
#e.color({value: :blue})
#puts e.colors
puts e
#
#e.set(color: :red)
#e.set(color: {value: :pink, x: 200, y: 100})
#e.colors({value: :pink, x: 200, y: 100}, "red", "blue")
##puts e
#puts e.colors[0]
#e.add(color: :yellow)
#e.add(color: :purple)
#e.add(color: {value: :gray, x: 200, y: 100})
#
##e.colors[0] = :prune todo :  make this work
#puts e
#########################
#
#
#puts e
#e.add(color: :blue)
#e.add(color: :mauve)
#
#
#puts e.class
#puts e
#puts e.colors.class
#e.colors[1] = "cyan"
#puts e.colors[1]
#puts e.class
#
#e.add(color: :magenta)
#e.add(color: :rose)
#e.color(add: :yellow_green)
#
#
#e.x = 333
#e.y(555)
#e.color(:blue)
#e.color
#e.color.x(22)
#e.border(39)
#e.border.color(67)
#e.border.height(98)
#e.border.width(98)
#e.border.shadow(7)
#e.border.color.x(66)
#e.set(color: :violet)
#e.color(set: :mauve)
#puts "--------"
#puts e.color.x
#puts e


#a = Atome.new
#a.id = "poil"
#a.color = :pink
#a.add(color: :purple)
##puts a.id
##puts a.color
#puts a.colors
##puts a

