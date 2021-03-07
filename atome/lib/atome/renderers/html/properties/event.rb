module PropertylHtml
  def touch_html(value)
    value = value.read
    proc = value[:proc]
    jq_get(atome_id).on(:click) do |evt|
      proc.call(evt) if proc.is_a?(Proc)
    end
  end

  def drag_html(value)
    value = value.read
    if value == true
      value = {}
      value[:lock] = ""
    end
    proc = value[:proc]
    jq_object = jq_get(atome_id)
    lock = case value[:lock]
           when :parent
             {containment: "parent"}
           when :x
             {axis: "y"}
           when :y
             {axis: "x"}
           else
             {}
           end
    jq_object.draggable(lock)
    jq_object.on(:drag) do |evt|
      # we update the position of the atome
      x_position = jq_object.css("left").sub("px", "").to_i
      y_position = jq_object.css("top").sub("px", "").to_i
      @x = atomise(:x, x_position)
      @y = atomise(:y, y_position)
      # we send the position to the proc
      proc.call(evt) if proc.is_a?(Proc)
    end
  end
end