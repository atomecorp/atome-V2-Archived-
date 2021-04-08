module Processors
  def size_processor(value)
    if value.instance_of?(Hash) && value[:value].nil?
    else
      if value.instance_of?(Number) || value.instance_of?(Integer)
        value = {value: value}
      end
      size = value[:value]
      if width && height && width != :auto && height != :auto
        if width > height
          ratio = size / width
          self.width = size
          self.height = height * ratio
        else
          ratio = size / height
          self.height = size
          self.width = width * ratio
        end
      else
        self.height = size
        self.width = size
      end
    end
  end
end