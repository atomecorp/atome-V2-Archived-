# here stand some atome's function to allow atome's objects manipulation

# the result method is used to get the return queries of the database
def result(params)
  result = {}
  params.each do |key_pair|
    result[key_pair[0]] = key_pair[1]
  end
  text("msg from atome_extension line 9 : #{result}")
end

def eden_search(query)
  case query[:type]
  when :image
    Universe.images[query[:name]]
  when :video
    Universe.videos[query[:name]]
  when :audio
    Universe.audios[query[:name]]
  else
    query
  end
end

def find(query)
  if query[:scope] == :eden
    eden_search(query)
  else
    "a look at eDen"
  end
end

def identity
  "a_" + object_id.to_s + "_" + Atome.atomes.length.to_s + "_" + Time.now.strftime("%Y%m%d%H%M%S")
end

def get(id)
  Atome.atomes.values.each do |atome|
    if atome.id == id
      return atome
    end
  end
  nil
end

def grab(atome_id)
  if Atome.atomes.key?(atome_id)
    Atome.atomes[atome_id]
  end
end

def batch(objects)
  batched_atomes = []
  objects.each do |atome_id|
    batched_atomes << atome_id.atome_id
  end
  ATOME.atomise(:batch, batched_atomes)
end

def tactile
  # check if user's device is a tactile device
  false
end

def lorem
  <<~STRDELIM
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
  STRDELIM
end

def wait(seconds)
  wait_html(seconds) do
    yield
  end
end

def repeat(delay = 3, repeat = 5, &proc)
  repeat_html(delay, repeat, &proc)
end

def clear(value)
  if value.instance_of?(Hash)
    case value.keys[0]
    when :wait
      clear_wait_html(value[:wait])
    when :repeat
      clear_repeat_html(value[:repeat])
    when :view
      # future use for specific view child treatment
    else
      value
    end
  else
    case value
    when :view
      if grab(:view).child
        grab(:view).child.delete
      end
    else
      value
    end
  end

end

def compile(code)
  eval(code)
end

@http = Http.new

def read(filename, &proc)
  #  read remote file
  @http.get(filename, &proc)
end

def version
  "v:0.017"
end

def notification(message, duration)
  notification = text({content: message, color: :orange, x: 69, y: 69})
  ATOME.send(:wait, duration) do
    notification.delete
  end
end

def animate(params)
  if params[:start][:blur]
    value_found = params[:start][:blur]
    params[:start][:filter] = "blur(#{value_found}px)"
    params[:start].delete(:blur)
  end
  if params[:end][:blur]
    value_found = params[:end][:blur]
    params[:end][:filter] = "blur(#{value_found}px)"
    params[:end].delete(:blur)
  end
  if params[:start][:smooth]
    value_found = params[:start][:smooth]
    params[:start][:borderRadius] = value_found
    params[:start].delete(:smooth)
  end
  if params[:end][:smooth]
    value_found = params[:end][:smooth]
    params[:end][:borderRadius] = value_found
    params[:end].delete(:smooth)
  end

  if params[:start][:color]
    value_found = params[:start][:color]
    params[:start][:background] = value_found
    params[:start].delete(:color)
  end
  if params[:end][:color]
    value_found = params[:end][:color]
    params[:end][:background] = value_found
    params[:end].delete(:color)
  end
  ATOME.animate_html(params)
end

def animate=(params)
  animate(params)
end

def anim(params)
  animate(params)
end