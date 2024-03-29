module Processors
  def media_pre_processor(type, preset, value, password = nil)
    # puts "def media_pre_processor :  #{value}"
    #  puts "#################"
    if value.instance_of?(Hash) && value[:proc]
      # if a proc is found we yield we search for child of the requested type to be treated , ex :
      # a.text do |text_found|
      #text_found.color(:red)
      #end
      self.child(nil, password) do |child_found|
        if child_found.type(nil, password) == type
          value[:proc].call(child_found) if value[:proc].is_a?(Proc)
        end
      end
    else
      if value == true
        value = {}
      elsif value.instance_of?(String)
        alert "msg from media.rb  : correct me I shoudn't be a string!!"
        value = { content: value }
      end
      if value[:value] == true
        value.delete(:value)
      end
      if value[:proc] == nil
        value.delete(:proc)
      end
      preset_found = grab(:preset).get(:content)
      preset_found = preset_found[preset]
      # we overload the parent to the current and finally add the value set by user
      preset_found = preset_found.merge({ parent: atome_id }).merge(value)
      #now we create the new atome

      new_atome = Atome.new(preset_found)
      # the condition add an animation property for time sensitive medias
      case new_atome.type
      when :video
        new_atome.animation({ id: :video })
      when :audio
        new_atome.animation({ id: :audio })
      end
      new_atome
    end
  end

  def group_pre_processor(value, password = nil)
    #todo allow group deletion and remove all monitoring binding
    #if there's a condition we feed the content else we treat the content directly
    content_found = if value[:condition]
                      find(value[:condition])
                    else
                      []
                    end
    if value[:content]
      content_found.concat(value[:content])
    end
    # we we atomise the content so it can be process directly
    value[:content] = self.atomiser(content: content_found)
    if value[:dynamic]
      # first we remove the scope that don't need to be treated
      value[:condition].delete(:scope)
      self.child.each do |child_found|
        child_found.monitor(true) do |evt|
          unless content_found.include?(child_found.atome_id)
            if value[:treatment] && (value[:condition].keys[0] == evt[:property] && value[:condition].values[0] == evt[:value])
              value[:treatment].each do |prop, val|
                child_found.send(prop, val, password)
              end
            end
          end
        end
      end
    end
    if value[:treatment]
      value[:treatment].each do |prop, val|
        self.content.send(prop, val)
      end
    end

    value = value.merge({ type: :find, render: false })
    Atome.new(value)
  end

  def container_pre_processor(value, password = nil)
    media_pre_processor(:shape, :container, value, password)
  end

  def container_getter_processor
    child_collected = []
    child do |child_found|
      if child_found.type == :shape
        child_collected << child_found.atome_id
      end
    end
    atomise(:temp, child_collected)
  end

  def particle_pre_processor(value, password = nil)
    media_pre_processor(:particle, :particle, value, password)
  end

  def particle_getter_processor
    child_collected = []
    child do |child_found|
      if child_found.type == :particle
        child_collected << child_found.atome_id
      end
    end
    atomise(:temp, child_collected)
  end

  def shape_pre_processor(value, password = nil)
    media_pre_processor(:shape, :shape, value, password)
  end

  def shape_getter_processor
    child_collected = []
    child do |child_found|
      if child_found.type == :shape
        child_collected << child_found.atome_id
      end
    end
    atomise(:temp, child_collected)
  end

  def cell_pre_processor(value, password = nil)
    media_pre_processor(:cell, :cell, value, password)
  end

  def cell_getter_processor
    child_collected = []
    child do |child_found|
      if child_found.type == :cell
        child_collected << child_found.atome_id
      end
    end
    atomise(:temp, child_collected)
  end

  def box_pre_processor(value, password = nil)
    media_pre_processor(:shape, :box, value, password)
  end

  def star_pre_processor(value, password = nil)
    # star_fabric(value)
    media_pre_processor(:shape, :star, value, password)
  end

  def box_getter_processor
    child_collected = []
    child do |child_found|
      if child_found.type == :shape
        child_collected << child_found.atome_id
      end
    end
    atomise(:temp, child_collected)
  end

  def circle_pre_processor(value, password = nil)
    media_pre_processor(:shape, :circle, value, password)
  end

  def circle_getter_processor
    child_collected = []
    child do |child_found|
      if child_found.type == :shape
        child_collected << child_found.atome_id
      end
    end
    atomise(:temp, child_collected)
  end

  def sphere_pre_processor(value, password = nil)
    media_pre_processor(:volume, :sphere, value, password)
  end

  def sphere_getter_processor
    child_collected = []
    child do |child_found|
      if child_found.type == :sphere
        child_collected << child_found.atome_id
      end
    end
    atomise(:temp, child_collected)
  end

  def text_pre_processor(value, password = nil)
    media_pre_processor(:text, :text, value, password)
  end

  def text_getter_processor
    child_collected = []
    child do |child_found|
      if child_found.type == :text
        child_collected << child_found.atome_id
      end
    end
    atomise(:temp, child_collected)
  end

  def image_pre_processor(value, password = nil)
    media_pre_processor(:image, :image, value, password)
  end

  def image_getter_processor
    child_collected = []
    child do |child_found|
      if child_found.type == :image
        child_collected << child_found.atome_id
      end
    end
    atomise(:temp, child_collected)
  end

  def video_pre_processor(value, password = nil)
    media_pre_processor(:video, :video, value, password)
  end

  def video_getter_processor
    child_collected = []
    child do |child_found|
      if child_found.type == :video
      end
    end
    atomise(:temp, child_collected)
  end

  def audio_pre_processor(value, password = nil)
    media_pre_processor(:audio, :audio, value, password)
  end

  def audio_getter_processor
    child_collected = []
    child do |child_found|
      if child_found.type == :audio
        child_collected << child_found.atome_id
      end
    end
    atomise(:temp, child_collected)
  end

  def web_pre_processor(value, password = nil)
    if value.instance_of?(Hash)
      if value[:html]
        type_found = value[:html]
        case type_found
          #Time.now is used to force refresh if the image changes
        when :iframe
          web_content = { content: "<iframe class='atome' width='100%' height='180%' src='#{value[:path]}?#{Time.now}' frameborder='5' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen/>" }
        when :image
          #Time.now is used to force refresh if the image changes
          web_content = { content: "<image class='atome' width ='100%' height= '100%' src='#{value[:path]}?#{Time.now}'/>" }
        when :audio
        when :video
        else
          web_content = { content: "<iframe class='atome' width='100%' height='180%' src='#{value[:path]}?#{Time.now}' frameborder='5' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen/>" }
        end
        value = value.merge(web_content)
        value[:type]=:web
        media_pre_processor(:web, :web, value, password)
      elsif value[:address]
        JSUtils.adress(value[:address])
      else
      end

    end

  end

  def web_getter_processor
    child_collected = []
    child do |child_found|
      if child_found.type == :web
        child_collected << child_found.atome_id
      end
    end
    atomise(:temp, child_collected)
  end

  def visual_pre_processor(value, password)
    unless @visual
      @visual = atomise(:visual, value)
    end
    visual_html(value, password)
  end

  def active_processor(value, password)
    if value[:exec] == true
      value[:proc].call if value[:proc].is_a?(Proc)
    end
  end

  def inactive_processor(value, password)
    if value[:exec] == true
      value[:proc].call if value[:proc].is_a?(Proc)
    end
  end

  # def tool_pre_processor(value, password = nil)
  #   media_pre_processor(:shape, :tool, value, password)
  # end

  # def tool_getter_processor
  #   child_collected = []
  #   child do |child_found|
  #     if child_found.type == :tool
  #       child_collected << child_found.atome_id
  #     end
  #   end
  #   atomise(:temp, child_collected)
  # end

  def content_pre_processor(value, password)
    # treatment to get local version of text
    if value.instance_of?(Hash) && type == :text
      @content = atomise(:content, value.merge(atome_id: atome_id))
      required_language = self.language || grab(:view).language
      all_language_content = value
      value = all_language_content[required_language]
    elsif type == :text
      # formated_value = { default: value, atome_id: atome_id }
      formated_value = value
      @content = atomise(:content, formated_value)
    else
      @content = atomise(:content, value)
    end

    send_to_render_engine(:content, value, password)
    # below the condition if the value is an atome it  get the corresponding property in the atome passed
    # if value.class == Atome
    #   value = value.content
    # end
    # # lambda below to avoid method in method
    # send_to_content_renderer = -> (renderer, value, password) do
    #   case renderer
    #   when :html
    #     width_html(value, password)
    #   when :fabric
    #     width_fabric(value, password)
    #   when :headless
    #     width_headless(value, password)
    #   when :speech
    #     width_speech(value, password)
    #   when :three
    #     width_three(value, password)
    #   when :zim
    #     width_zim(value, password)
    #   else
    #     width_html(value, password)
    #   end
    # end
    #
    # if $default_renderer == :html
    #   content_html(value, password)
    # elsif $default_renderer.instance_of?(Array)
    #   $default_renderer.each do |renderer|
    #     send_to_content_renderer.call(renderer, value, password)
    #   end
    # else
    #   send_to_content_renderer.call($default_renderer, value, password)
    # end
  end

  def content_getter_processor
    if self.type == :text
      # if  @content.q_read.instance_of?(Hash)
      #   @content.q_read[:default]
      # else
      #   @content
      # end
      @content
    else
      @content&.q_read
    end
  end

end
