class Atome

  properties = [:content, :color, :x, :y, :z, :width, :height, :child, :name, :id, :shadow, :border, :name, :label]
  @@visual_types = {shape: :box, image: :logo, text: :lorem}
  @@types = {sound: :jingle, human: :user, machine: :computer, tool: :text, group: :empty, code: :hello, atome: :foo}.merge(@@visual_types)
  @@presets = {circle: "circle desc", box: "box desc", star: "star desc", triangle: "triangle desc", polygon: "polygon desc", squiggle: "squiggle desc", bloob: "bloob desc", lorem: "lorem ipsum dolore", user: "anonymous", computer: "riscPC", hello: "puts 'hello world'", foo: "this object has no body"}
  @@default_visuals = {x: [0], y: [0], width: [100], height: [300], color: [:black]}
  @@definition_order = [:type, :preset, :content]
  @@atome_methods = []
  properties.each do |object|
    @@atome_methods << object
    @@atome_methods << (object.to_s + "=").to_sym
  end

  def initialize *content
    @atome = {id: [:my_obj]}
    if content[0].class == Hash
      content = content[0]
      content.each do |prop, value|
        @atome[prop] = [value]
      end
    else
      if content[0].nil?
        @atome[:type] = [:atome]
      else
        content.each_with_index do |prop, index|
          @atome[@@definition_order[index]] = [prop]
        end
      end
    end
    if @atome[:type].nil?
      @atome[:type] = [:atome]

    elsif @@visual_types.include?(@atome[:type][0])
      @atome[:visible] = [true]
      @atome = @atome.merge(@@default_visuals).merge(@atome)
    end

    if @atome[:content].nil?
      if @atome[:preset].nil?
        case @atome[:type][0]
        when :shape
          @atome[:preset] = [:rectangle]
          @atome[:content] = [@@presets[:rectangle]]
        when :text
          @atome[:content] = [@@presets[:lorem]]
        when :human
          @atome[:content] = [@@presets[:user]]
        end
      end
    end

    if @atome[:preset].nil? && @atome[:content].nil?
      @atome[:preset] = @@types[@atome[:type][0]]
      @atome[:content] = @@presets[@atome[:preset]]
    end
    @sub = nil
    return self
  end

  def add electron, val
    puts 'catch if Hash or if Array'
    if @atome[electron].nil?
      @atome[electron] = val
    else
      @atome[electron] << val
    end
    return self
  end

  def set electron, val
    puts 'catch if Hash or if Array'
    if @atome[electron].nil?
      @atome[electron] = val
    else
      @atome[electron] << val
    end
    return self
  end

  def get electron, val
    puts 'catch if Hash or if Array'
    if @atome[electron].nil?
      @atome[electron] = val
    else
      @atome[electron] << val
    end
    return self
  end

  def delete electron, val
    puts 'catch if Hash or if Array'
    if @atome[electron].nil?
      @atome[electron] = val
    else
      @atome[electron] << val
    end
    return self
  end




  @@atome_methods.each do |object|
    define_method(object) do |*value|
      @sub = object.to_s.gsub("=", "").to_sym
      if value.length > 0
        value = [value[0]]
        @atome[@sub] = value
      else
        #if value.length no params are passed: it's getter!!
        #puts "getter"
         return  @atome[object]
      end
      return self
    end
  end

  def to_s
    return @atome.inspect
  end
end
a = Atome.new
#p a
#a = Atome.new(:text)
#p a
#a = Atome.new(:shape)
#p a
#a = Atome.new(color: :orange, x: 200, preset: :circle)
#p a
#a = Atome.new(:text, :lorem)
#p a
#a.add(:y, 78)
#a.color=:prune
a.color(:orange).x(78)
p a.color()

#a.color(:pink)
#a.add(:x, 300)
#a.color(:green)
#p a.color
# a.color.x(200)
#puts a

