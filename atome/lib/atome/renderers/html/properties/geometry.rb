module PropertyHtml
  def width_html(value)
    type = grab(atome_id).type
    if type == :text
      jq_get(atome_id).css("font-size", value)
      jq_get(atome_id).css("width", "auto")
    else
      jq_get(atome_id).css("width", value)
    end
  end

  def height_html(value)
    type = grab(atome_id).type
    if type == :text
      jq_get(atome_id).css("font-size", value)
      jq_get(atome_id).css("height", "auto")
    else
      jq_get(atome_id).css("height", value)
    end
  end

  def size_html(value)
    if value == :fit
      self.width = grab(parent.last).convert(:width)
      self.height = grab(parent.last).convert(:height)
    else
      default = { option: { handles: 'all' } }
      unless value.instance_of?(Hash)
        value = { option: value }
      end
      value = default.merge(value)
      option = value[:option]
      jq_get(atome_id).resizable(option)
      jq_get(atome_id).resize do
        if type == :text
          @width = atomise(:width, jq_get(atome_id).css("width").to_i)
          @height = atomise(:height, jq_get(atome_id).css("height").to_i)
          size = @width.read / 5
          jq_get(atome_id).css("font-size", size.to_s + "px")
        else
          self.width(jq_get(atome_id).css("width").to_i, false)
          self.height(jq_get(atome_id).css("height").to_i, false)
        end
        if value.instance_of?(Hash)
          proc = value[:proc]
          proc.call if proc.is_a?(Proc)
        end
      end
    end
  end

end

