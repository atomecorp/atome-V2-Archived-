# here stand some atome's function to allow atome's objects manipulation
#

def select selector
  grab(:view).child.each do |atome|
    collected_atomes = []
    if atome.selector && atome.selector.include?(:validated)
      collected_atomes << atome
    end
  end
end

#def selected params
#  #Atomes.atomes
#end

def get(params)
  #get atome in view from it's id
  #todo get should allow to get object by its property/value (ex : get(color: :red) => return all atome with the property color set to red)
  atomes = Atome.atomes
  if params.class == Hash
    collected_atomes = []
    params.keys.each do |property|
      case property
      when :selector
        value = params[:selector]
        atomes.each do |atome|
          if atome.selector.class == Array && atome.selector.include?(value.to_s)
            collected_atomes << atome
          end
        end
      else
        collected_atomes = []
        get(:view).child.each do |atome|
          if atome.send(params.keys[0].to_sym) && (atome.send(params.keys[0].to_sym).to_sym == params.values[0].to_sym)
            collected_atomes << atome
          end
        end
        return collected_atomes
      end
    end
    return collected_atomes
  elsif (params.class == String || params.class == Symbol) && params.to_sym == :all
    #alert "message :\n#{"we slected all children view"}\n from : electron.rb : 80"
  elsif params.class == String || params.class == Symbol
    atomes.each do |atome|
      if atome.id.to_s == params.to_s
        return atome
      end
    end
    return false
  end
end

def grab(atome_id)
  #grab atome in view from it's atome_id
  atomes = Atome.atomes
  atomes.each do |atome|
    if atome.atome_id == atome_id
      return atome
    end
  end
  return nil
end

def scour(params)
  #search everywhere
  find({value: params, scope: :all})
end

def dig(params)
  #search in the trash
  find({value: params, scope: :blackhole})
end

def find(params, method = nil)
  #first we parse the params
  if params.class == String || params.class == Symbol || params.class == Boolean
    params = if params == true || params == :true
               {scope: :view, value: :all}
             else
               {property: :id, scope: :view, value: params}
             end
  end
  unless params[:scope]
    params[:scope] = :view
  end
  unless params[:property]
    params[:property] = :id
  end
  unless params[:format]
    params[:format] = :atome
  end
  unless params[:value]
    params[:value] = :all
  end
  atomes = case params[:scope]
           when :all || 'all'
             Atome.atomes + Atome.blackhole
           when :blackhole
             Atome.blackhole
           when :active
             Atome.atomes
           when :view
             grab(:view).child
           else
             #when :dark_matter
             #  atomes=Atome.atomes + Atome.blackhole
           end
  # now we treat
  if params[:value] == :all || params[:value] == 'all'
    atomes_found = []
    case params[:format]
    when :id || 'id'
      atomes.each do |atome_found|
        atomes_found << atome_found.id
      end
      atomes_found.delete(:blackhole)
      atomes_found.delete(:dark_matter)
      atomes_found.delete(:device)
      atomes_found.delete(:intuition)
      atomes_found.delete(:view)
      atomes_found.delete(:actions)
    when :atome_id || 'atome_id'
      atomes.each do |atome|
        atomes_found << atome.atome_id
      end
      atomes_found.delete(:blackhole)
      atomes_found.delete(:dark_matter)
      atomes_found.delete(:device)
      atomes_found.delete(:intuition)
      atomes_found.delete(:view)
      atomes_found.delete(:actions)
    when :atome || 'atome'
      atomes.each do |atome_found|
        atomes_found << atome_found
      end
      atomes_found.delete(grab(:blackhole))
      atomes_found.delete(grab(:dark_matter))
      atomes_found.delete(grab(:device))
      atomes_found.delete(grab(:intuition))
      atomes_found.delete(grab(:view))
      atomes_found.delete(grab(:actions))
    end
  else
    case params[:property]
    when :id || 'id'
      atomes_found = ""
      atomes.each do |atome|
        if atome.id == params[:value]
          atomes_found = atome
        end
      end

    when :atome_id || 'atome_id'
      atomes_found = ""
      atomes.each do |atome|
        if atome.atome_id ==  params[:value]
          atomes_found = atome
        end
      end
    when :atome || 'atome'
      atomes_found = ""
      atomes.each do |atome|
        if atome == params[:value]
          atomes_found = atome
        end
      end
    end
  end
  atomes_found
end

#def delete params, refresh = true
#  alert "message is \n\n#{params} \n\nLocation: electron.rb, line 60"
#end

def clear params = :console
  atome = grab(:device)
  # now we call the clear methods in neutron
  atome.clear(params)
end

def http url
  Render.render_http(url)
end

def read filename, action = :run, code = :ruby #  read local file
  Render.render_reader filename, action, code
end

def lorem
  lorem = <<Strdelilm
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
Strdelilm
end

################## time operation  ##############

def wait(seconds, &proc)
  Render.render_wait(seconds) do
    yield
  end
end

def every(delay = 3, times = 5, &proc)
  Render.render_every(delay, times, &proc)
end

def stop params
  Render.render_stop(params)
end
