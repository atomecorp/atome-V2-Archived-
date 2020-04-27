# frozen_string_literal: true
# atome object and apis below
class Atome
  #@@definition_order = %i[type preset content]
  @@atomes = {}
  @@black_hole = [] # deleted atomes
  @@buffer = []
  attr_reader :atome

  def initialize(*options)
    create_atome_id = true
    create_id = true
    get = false
    item_to_delete = []
    options.each_with_index do |option, index|
      if option.class == Hash
        # below we remove the hash containing the info to create an atome_id or not and also remove the atome_id, in case a user try to force the value of the atome_id
        if option.keys[0] == :create_atome_id || option.keys[0] == :atome_id
          create_atome_id = option.values[0]
          item_to_delete << index
          # options.delete_at(index)
        end
        if option.keys[0] == :get_mode
          get = option.values[0]
          item_to_delete << index
        end
      elsif option.class == Symbol || option.class == String
        # if it's a symbol or a string whe try to find if the user send a preset otr a type
        #:todo buggy code below must be re work
        #if Proton.presets.include?(option)
        #  # so it's a preset we seach for its type
        #  preset = {}
        #  type = {}
        #  preset[:preset] = option
        #  type[:type] = Proton.types.key(option)
        #  options = [preset, type]
        #elsif Proton.types.include?(option)
        #  # so it's a type we seach for its preset
        #  preset = {}
        #  type = {type: option}
        #  preset[:preset] = Proton.types[option]
        #  options = [type, preset]
        #end
      end
    end
    item_to_delete.each do |item|
      options.delete_at(item)
    end

    # the initialize methods is used to parse the params sends
    @atome = []
    @atome_initial_state = []
    if get
      # the get options allows to return only the wanted prop
      @atome = options
      return self
    end
    # we uniformise the data received into an array in order to treat it later
    options ||= []
    # if the user submit only a string or symbol instaed of he hash we have to create a simple object and find either the associated preset from type or the type from its preset
    if options.class == Symbol || options.class == String
      Proton.types.each do |type|
        if type[0].to_sym == options.to_sym
          @atome_initial_state << {type: options}
        elsif type[1].to_sym == options.to_sym
          type = Proton.types.key(options)
          @atome_initial_state << {type: type}
          @atome_initial_state << {preset: options}
        end
      end
    else

      @atome_initial_state = options
    end
    @atome_initial_state = sanitize_prop(nil, @atome_initial_state)
    # below we search if the render engine has been defined
    renderer_define = false
    @atome_initial_state.each do |option|
      # here we check only have to check first level for the renderer
      next unless option.class == Hash

      renderer_define = true if option.keys[0] == :renderer
    end
    # we create an automaticaly generated id
    if create_id
      id=:unknown
      @atome_initial_state.each do |property_key_pair|
        @atome_initial_state.each do |property_key_pair|
          if property_key_pair.keys[0].to_sym == :preset
            id = property_key_pair.values[0].to_s + '_'
          elsif property_key_pair.keys[0].to_sym == :type && id== :unknown_
            id = property_key_pair.values[0].to_s + '_'
          end
        end
      end
      id = (id + @@atomes.length.to_s).to_sym
      @atome_initial_state.unshift(id: id)
    end
    if create_atome_id
      #atome_id generation here
      atome_id = object_id
      @atome_initial_state.unshift(atome_id: atome_id)
    end
    unless renderer_define
      @atome_initial_state << {renderer: Proton.properties[:renderer]}
    end
    @atome_initial_state.each do |atomes|
      set(atomes)
    end
  end

  def class_exec proc, event
    #puts "--------------------------- msg from class_exec in atome line 111 : #{event} ---------------------------"
    # solution self.current meth event
    instance_eval(&proc)
  end

  # we define all Atome's methods below with a bit of metaprogramming, methods ending with a s will be treated as batch for set, add, enhance and delete methods  or return an array for the getter method
  # All methods exept the getter mehod end up using the set method to add a modify a prop. ex : if the add method call the set methnod just changing the @add variable, so the set method accumulate prop instead of replacing it
  Proton.atome_methods.each do |property_fct|
    define_method(property_fct) do |*options, &proc|
      if proc
        #todo : important keep old code below and maybe add a condition if the property_fct is an event
        set({property_fct => proc})
      else
        if options[0].nil?
          # here the method call is a  getter
          get(property_fct)
        else
          # here the method call is a setter
          property_fct = property_fct.to_s.chomp('=').to_sym
          set({property_fct => options})
        end
      end
    end
  end

  # SAGED methods (Set Add Get Enhance Delete) the four main atome methods

  def set(*properties, &proc)
    if proc
      instance_exec(&proc)
    else
      properties.each do |props|
        #if props.class == Array
        #  # TODO: buggy code below maybe never used,anyway we have to analyse a bit before sending this to erase previous stored, even better factorise and externalise the whole analysis for the set method
        #  puts "atome line 148 #{props}"
        #  props = sanitize_prop(nil, props)
        #  insert_properties_in_atome(props)
        #  return self
        #elsif props.class == Hash
        #  insert_properties_in_atome(props)
        #  puts "okokokokoko goody"
        #end
        master_prop = props.keys[0]
        new_values = props.values[0]
        new_values = [new_values] if new_values.class != Array
        if master_prop.to_s.end_with?('s')
          master_prop = master_prop.to_s.chomp('s').to_sym
          new_values.each do |new_value|
            set({master_prop => [new_value]})
            @add = true
          end
          @add = false
          return false
        else
          # we get the props and values
          new_values = sanitize_prop(master_prop, new_values)
          cleanup_prop = []
          # we analyse the prop according to their type and cleanup the whole things
          if new_values.length > 1 # multiple values found, we send them after a type check analysis
            # we check if current type is in the array else we add it
            add_type = true
            new_values.each do |prop|
              add_type = check_if_type_exist(new_values, master_prop)
              cleanup_prop << prop
            end
            cleanup_prop.unshift({type: master_prop}) if add_type
          elsif new_values[0].class == Symbol || new_values[0].class == String || new_values[0].class == Integer || new_values[0].class == Float || new_values[0].class == TrueClass || new_values[0].class == FalseClass || new_values[0].class == Number
            # if it's a uniq value we have to add the prop (master_prop)
            cleanup_prop = {master_prop => new_values[0]}
          elsif new_values[0].class == Hash
            # as the length of the hash should always be only 1,  we just have to check if the prop is the current of else we have to add typenew_values_array
            if new_values[0].keys[0] != master_prop
              cleanup_prop << {type: master_prop}
              cleanup_prop << new_values[0]
            else
              cleanup_prop = new_values[0]
            end
          elsif new_values[0].class == Array
            new_values_array = new_values[0]
            if new_values_array.length == 1 # if the array contains only one item we check it's content add the missing prop if needed
              if new_values_array[0].class == Symbol || new_values_array[0].class == String || new_values_array[0].class == Integer || new_values_array[0].class == Float || new_values_array[0].class == TrueClass || new_values_array[0].class == FalseClass || new_values_array[0].class == Number
                new_values_array[0] = {master_prop => new_values_array[0]}
              end
            end
            ## we check if current type is in the array else we add it
            add_type = check_if_type_exist(new_values, master_prop)
            new_values[0].unshift({type: master_prop}) if add_type
            cleanup_prop = new_values[0]
          elsif new_values[0].class == Proc
            #cleanup_prop = new_values[0]
            cleanup_prop = {master_prop => new_values[0]}
          end
          # now we clean the current @atome before updating it
          unless @add
            master_prop = (master_prop.to_s + 's').to_sym
            if @temp_prop
              delete(@temp_prop)
            else
              delete(master_prop)
            end
          end
          # we add the whole new prop to the atome
          if @temp_prop # in this case prop is generated using using a proc (in @@atome_methods.each)
            # we remove whe  get_mode prop that doesn't have to be stored
            @temp_atome << cleanup_prop
            return self
          else
            insert_properties_in_atome(cleanup_prop)
            return self
          end
        end
      end
    end
  end

  def add(*properties, &proc)
    if proc
      @add = true
      instance_exec(&proc)
      @add = false
    else
      @add = true
      properties.each do |property|
        set property
      end
      @add = false
    end
    self
  end

  def get(property)
    pluralize = false
    if property.to_s.end_with?('s')
      pluralize = true
      property = property.to_s.chomp('s').to_sym
    end
    found_prop = []
    @atome.each do |props|
      if props.class == Hash
        found_prop << props.values[0] if props.keys[0] == property
      elsif props.class == Array
        # Attention here we have to find if the type of the atome correspond to the property requested !!
        props.each do |atome|
          next unless atome.class == Hash
          if atome.keys[0] == :type && atome.values[0] == property
            found_prop << props
          end
        end
      end
    end
    events= Proton.events.keys
    if pluralize
      found_prop
    elsif property == :atome_id || property == :id || property == :label
      # we made an exeption and return a string when the prop is an id, an atome_id or a label
      #:todo make an exeption list of type that shouldn't return an atome
      found_prop[0].to_s
      # if its an event, todo : create a list of prop of all events,   todo : get content using parser or Opal
    elsif events.include? property ##if the val is an event then we return the prop instead of a an atome object
      return found_prop[found_prop.length - 1]
    else
      # Here we create an atome to allow getter properties to respond to methods then return the corresponding value ex: - puts a.color => :black

      Atome.new(found_prop[found_prop.length - 1], {create_atome_id: :false}, {get_mode: :true})
    end
  end

  def self.trig proc
    class_exec(proc)
  end

  def trig proc , event
    class_exec(proc, event)
  end

  def enhance(*properties)
    # TODO: exchange or enhance targeted prop
  end

  def delete(*properties)
    if !properties.empty?
      list_of_matching_prop = []
      index_to_delete = []
      pluralize = false
      properties.each do |prop|
        if prop.class == Hash
          index_to_delete = prop.values[0]
          prop = prop.keys[0]
          if index_to_delete.class == Integer || index_to_delete.class == Float || index_to_delete.class == TrueClass || index_to_delete.class == FalseClass || index_to_delete.class == Number
            index_to_delete = [index_to_delete]
          end
          pluralize = true
        end
        if prop.to_s.end_with?('s')
          pluralize = true
          prop = prop.to_s.chomp('s').to_sym
        end
        @atome.each_with_index do |atome, index|
          if atome.class == Hash
            atome.keys.each do |key|
              list_of_matching_prop << index if key == prop
            end
          elsif atome.class == Array
            atome.each do |prop_found|
              if prop_found.class == Hash && prop_found.keys[0] == :type && prop_found.values[0] == prop
                list_of_matching_prop << index
              end
            end
          end
        end
      end
      if pluralize
        user_list_of_prop_to_delete = []
        index_to_delete.each_with_index do |_add_to_list, index|
          if index_to_delete[index].class == Integer || index_to_delete[index].class == Float || index_to_delete[index].class == TrueClass || index_to_delete[index].class == FalseClass || index_to_delete[index].class == Number
            user_list_of_prop_to_delete << list_of_matching_prop[index_to_delete[index]]
          else
            # TODO: search for prop with id and delete
            puts "todo : search for prop with id   #{index_to_delete[index]}"
          end
        end
        if !user_list_of_prop_to_delete.empty?
          if user_list_of_prop_to_delete && !user_list_of_prop_to_delete[0].nil?
            @atome.delete_at_multi(user_list_of_prop_to_delete)
          end
        else
          @atome.delete_at_multi(list_of_matching_prop) if list_of_matching_prop
        end
      else
        last_item = list_of_matching_prop[list_of_matching_prop.length - 1]
        @atome.delete_at(last_item) if last_item
      end
    else
      @atome = []
    end
  end

  # ------- Various utils methods below -------
  # Analysis of prop below
  def sanitize_prop(property_fct, options)
    sanitized_opt = []
    options.each do |properties|
      if properties.class == Hash
        properties.each do |key, index|
          if index.class == Hash
            new_props = [{type: key}]
            index.each do |prop, value|
              new_props << {prop => value}
            end
            sanitized_opt << new_props
            # TODO: attention recursive analysis not done if a hash is in a hash it wont be processed and restrutured!!
            # todo  some treatment must be added : get the content for #{sanitized_opt}
          elsif index.class == Array
            index.unshift(type: key)
            # TODO: some treatment may be added : get the content for #{index}
            sanitized_opt << [index]
          else
            sanitized_opt << {key => index}
          end
        end
      elsif properties.class == Array
        sanitized_opt = sanitize_prop(property_fct, properties)
      else
        sanitized_opt << properties
      end
    end

    sanitized_opt
  end

  def check_if_type_exist(new_values, master_prop)
    # TODO: make it works at the first level
    # we check if current type is in the array else we add it
    add_type = true
    new_values.each do |prop|
      if prop.class == Hash
        if prop.keys[0] == :type && prop.values[0] == master_prop
          add_type = false
        end
      elsif prop.class == Array
        prop.each do |item|
          next unless item.class == Hash

          if item.keys[0] == :type && item.values[0] == master_prop
            add_type = false
          end
        end
      end
    end
    if add_type
      true
    else
      false
    end
  end

  def insert_properties_in_atome(properties)
    # this method is called when a property is added or modified , the insert_properties_in_atome method is call by the set method.
    # The insert_properties_in_atome add the the prop in the @atome hash and also add the current atome in he @atomes hash(this hash contain all current atoms)
    # finaly the  insert_properties_in_atome send the current atome to the Render engine.
    if properties.class==Hash && properties.values[0].class == Proc
      proc = properties.values[0]
      proc = send_to_get_proc_content(proc)
      #----------- todo get proc conetnt here -----------
      #puts "msg from atome line 416 ------ the proc can now be store we now have to eval the code instead of instance eval the proc ------"
      #puts proc
      #puts "----------"
    end

    @atome << properties
    # now we store the current @atome id in the current @atomes array
    @@atomes[atome_id.to_s] = self
    # we send the id of the atome to be renderered to the main render engine for analysys
    Render_engine.render(atome_id)
  end

  def length
    @atome.length
  end

  def each(&block)
    @atome.each(&block)
  end

  def to_hash
    to_enum(self)
  end

  def to_array
    atome = []
    each do |property|
      atome << property
    end
    atome
  end

  def check
    atome = @atome.to_s
    atome
  end

  def to_s
    @atome.each_with_index do |atome, index|
      if atome.class == Hash && atome.keys[0] == :get_mode
        @atome.delete_at(index)
        @atome = @atome[0]
      end
    end
    # below it's just to  cleanup the result for the user
    if @tome.class == Array && @atome.length == 1 && !@@atome[0].nil?
      @@atome[0]
    else
      @atome.to_s
    end
  end

  def [](_val = nil)
    @atome
  end

  def self.atomes
    @@atomes
  end

  def nuke
    @@atomes = {}
  end

  def self.nuke
    @@atomes = {}
  end

  def self.purge
    # allow eVe to remove all object exept the two first :  the human (the user) and eDen ( the machine)
    @@atomes = {}
  end

  def self.properties
    @@properties
  end

  def methods
    Proton.atome_methods
  end

  def self.methods
    Proton.atome_methods
  end
  def self.presets
    return Proton.presets
  end

  def self.version
    return "v:0.08"
  end
end