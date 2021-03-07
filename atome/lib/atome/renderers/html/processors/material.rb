module ProcessorHtml
  def color_helper(value)
    case value
    when Hash
      red = if value[:red]
        value[:red] * 255
      else
        0
      end
      green = if value[:green]
        value[:green] * 255
      else
        0
      end
      blue = if value[:blue]
        value[:blue] * 255
      else
        0
      end
      alpha = if value[:alpha]
        value[:alpha] * 1
      else
        1
      end
      value = "rgba(#{red},#{green},#{blue},#{alpha})"
    when Array
      puts "todo : create gradient"
    else
      value
    end
    value
  end
end