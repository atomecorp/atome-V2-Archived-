class Atome
  @atome = []

  def initialize val = nil, propagate_atome_creation = true, create_atome_id = true, force_stop_creation = "false"
    #puts val.class
    val.each do |send_this|
      puts "send_this #{send_this} : #{send_this.class}"
      # atomiser(send_this, propagate_atome_creation, create_atome_id, force_stop_creation)
    end
    #puts val.class
  end

  def atomiser val = nil, propagate_atome_creation = true, create_atome_id = true, force_stop_creation = false
    #puts val.class
    if propagate_atome_creation
      @atome << Atome.new(val, false, false, false)
    else
      if val.values[0].class == Hash
        current_prop = val.keys[0]
        new_atome_content = Atome.new(val.values[0], false, false, false)
        @atome << {current_prop => new_atome_content}
      elsif (val.values[0].class == Integer || val.values[0].class == Symbol || val.values[0].class == String)
        if force_stop_creation
          @atome << val
        else
          val.each do |prop, value|
            full_prop = {prop => value}
            new_atome_content = Atome.new(full_prop, false, false, true)
            @atome << new_atome_content
          end
        end
      end
    end
  end

  def to_s
    return @atome.to_s
  end

end
b={type: :text}
#a = Atome.new([{type: :text, :border => {:color => {color: :red, x: 200}}}, color: :pink])
a = Atome.new({type: :text, :border => {:color => {color: :red, x: 200}}})
#a = Atome.new([{color: :red}, {color: :blue}])
#a = Atome.new([{color: {color: :yellow}}, {color: :blue}])

puts a


