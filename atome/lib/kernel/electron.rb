# here is alll methods that fazcilitate the atome creation
#electron  provide public methods for end users that simplify atome creation
def box(options)
  obj_prop = Proton.default_visuals
  obj_prop[:type] = :shape
  # we add the box preset to the default visual
  obj_prop = Hash[:preset, :box].merge!(obj_prop)
  if options
    atome = Atome.new(obj_prop, options)
  else
    atome = Atome.new(obj_prop)
  end
  return atome
end

def square(options)
  box(options)
end

def circle(options)
  obj_prop = Proton.default_visuals
  obj_prop[:type] = :shape
  # we add the circle preset to the default visual
  obj_prop = Hash[:preset, :circle].merge!(obj_prop)
  if options
    atome = Atome.new(obj_prop, options)
  else
    atome = Atome.new(obj_prop)
  end
  return atome
end

def ellipse(options)
  circle(options)
end

def text(options)
  obj_prop = Proton.default_visuals
  obj_prop[:type] = :text
  # we add the box preset to the default visual
  obj_prop = Hash[:preset, :text].merge!(obj_prop)
  if options
    if options.class == String || options.class == Symbol
      options = {:content => options}
    end
    atome = Atome.new(obj_prop, options)
  else
    atome = Atome.new(obj_prop)
  end
  return atome
end

def image(options)
  obj_prop = Proton.default_visuals
  obj_prop[:type] = :image
  # we add the box preset to the default visual
  obj_prop = Hash[:preset, :image].merge!(obj_prop)
  if options
    if options.class ==String ||options.class ==Symbol
      options={:content => options}
    end
        atome = Atome.new(obj_prop, options)
  else
    atome = Atome.new(obj_prop)
  end
  return atome
end


def video(options)
  obj_prop = Proton.default_visuals
  obj_prop[:type] = :video
  # we add the box preset to the default visual
  obj_prop = Hash[:preset, :video].merge!(obj_prop)
  if options
    atome = Atome.new(obj_prop, options)
  else
    atome = Atome.new(obj_prop)
  end
  return atome
end


def sound(options)
  # obj_prop = Proton.default_visuals
  obj_prop[:type] = :sound
  # we add the box preset to the default visual
  obj_prop = Hash[:preset, :sound].merge!(obj_prop)
  if options
    atome = Atome.new(obj_prop, options)
  else
    atome = Atome.new(obj_prop)
  end
  return atome
end



def particle(options)
  obj_prop = Proton.default_visuals
  obj_prop[:type] = :atome
  # we add the box preset to the default visual
  obj_prop = Hash[:preset, :particle].merge!(obj_prop)
  if options
    atome = Atome.new(obj_prop, options)
  else
    atome = Atome.new(obj_prop)
  end
  return atome
end