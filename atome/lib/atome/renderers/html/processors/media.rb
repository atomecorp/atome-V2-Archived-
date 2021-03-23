module ProcessorHtml
  def video_creator__helper(value)
    video_found = find({ type: :video, scope: :eden, name: value })
    path = if video_found.nil?
             "././medias/videos/video_missing.mp4"
           else
             video_found[:path]
           end
    jq_get(atome_id).create(atome_id)
    jq_get(atome_id).find("video").html("<source src=" + path + " type='video/mp4'></source>")
    unless width
      self.width = jq_get(atome_id).find("video").width
    end
    unless height
      self.height = jq_get(atome_id).find("video").height
    end
    jq_get(atome_id).find("video").css("width", "100%")
  end

  def image_creator__helper(value)
    image_found = find({ type: :image, scope: :eden, name: value })
    if image_found.nil?
      path = "././medias/images/image_missing.svg"
    else
      path = image_found[:path]
      unless !width.nil?
        self.width  = image_found[:width]
      end
      unless !height.nil?
        self.height = image_found[:height]
      end
    end
    #width ||= 300
    #height ||= 300
    #self.width = found_width
    #self.height = found_height
    jq_get(atome_id).css("background-image", "url(#{path})"  )
    jq_get(atome_id).css("background-size", "100% 100%")
  end
end