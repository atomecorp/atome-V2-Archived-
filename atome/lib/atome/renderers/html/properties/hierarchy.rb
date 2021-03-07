module PropertylHtml
  def parent_html(value)
    values = value.read
    unless values.instance_of?(Array)
      values = [values]
    end
    # parents.append(child)
    values.each do |val|
      jq_get(val).append(jq_get(atome_id))
    end
  end

  def child_html(value)
    values = value.read
    unless values.instance_of?(Array)
      values = [values]
    end
    #parent.append(child)
    values.each do |val|
      jq_get(atome_id).append(jq_get(val))
    end
  end
end