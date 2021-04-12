class Element
  def position(params)
    atome_id = "##{params.delete(:atome_id)}"
    `$(#{atome_id}).position(#{params.to_n})`
  end

  def create_video(parent)
    `videoHelper.addVideoPlayer(#{parent}, false)`
  end

  def off(value)
    ` $(window).off(#{value});`
  end

end

class Event
  def key
    `String.fromCharCode(#{@native}.keyCode)`
  end

  def key_char
    self.key
  end

  def touch_x(touch_nb = 0)
    `#{@native}.originalEvent.touches[#{touch_nb}].pageX`
  end

  def touch_y(touch_nb = 0)
    `#{@native}.originalEvent.touches[#{touch_nb}].pageY`
  end

  def offset_x=(value)
    @offset_x = value
  end

  def offset_x
    @offset_x
  end

  def offset_y=(value)
    @offset_y = value
  end

  def offset_y
    @offset_y
  end

  def start=(value)
    @drag_star = value
  end

  def start
    @drag_star
  end

  def stop=(value)
    @drag_stop = value
  end

  def stop
    @drag_stop
  end

end

module Events
  def self.playing(proc, evt)
    @time = evt
    #evt = Events.update_values(evt)
    proc.call(evt) if proc.is_a?(Proc)
  end
end