# the class below initialize the default values and generate properties's methods
#this module contain the methods to be created and those who needs extra processing

module Atome_methods_list
  def self.atome_methods
    %i[border display record tactile]
  end
  #the line below specify if the properties need specific processing
  def self.need_processing
    %i[border]
  end

  def self.need_rendering
    %i[border display record]
  end
end
# the class below initialize the default values and generate properties's methods
class Sparkle
  include Atome_methods_list
  def initialize
    # the line below create atomes's methods using meta-programming
    atome_methods = Atome_methods_list.atome_methods
    #the line below specify if the properties need specific processing
    #need_processing=%i[ color border]
    atome_methods.each do |method_name|
      create_property(method_name)
    end
  end
end
# the class below contains all common properties's methods
module Properties

  # the methods below must be executed once only
  def send_hash(params, method_name)
    # if prop needs to be refresh we send it to the Render engine
    broadcast(atome_id => {method_name => params})
    if Atome_methods_list.need_processing.include?(method_name)
      send("#{method_name}_processing", params)
    end
    if Atome_methods_list.need_rendering.include?(method_name)
      Render.send("render_#{method_name}", self, params) if params[:render].nil? || params[:render] == true
    end
  end

  def property_parsing(params, method_name)
    # here happen the specific treatment for the current property
    if params.instance_of?(Hash)
      send_hash(params, method_name)
    elsif params.instance_of?(Array)
      # if params is an array we send each item of the array to 'found_property_parsing' as a Hash
      params.each do |param|
        property_parsing param, method_name
      end
    end
  end

  def array_parsing(params, instance_variable, method_name, proc)
    params.each_with_index do |param, index|
      if param.instance_of?(Hash) && param[:add] != false
        param[:add] = true
      elsif !param.instance_of?(Hash)
        param = {content: param, add: true}
      end
      if index == params.length - 1
        # when we reach the last element of the array we add the proc
        method_analysis param, instance_variable, method_name, proc
      else
        method_analysis param, instance_variable, method_name, nil
      end
    end
  end

  def property_save(params, method_name)
    previous_content = instance_variable_get("@#{method_name}")
    if params[:add] && previous_content.instance_of?(Hash) && previous_content != {}
      params.delete(:add)
      params = [previous_content, params]
    elsif params[:add] && previous_content.instance_of?(Array)
      params.delete(:add)
      params = previous_content << params
    elsif previous_content.instance_of?(Hash)
      params.delete(:add)
    end
    send_hash(params, method_name)
    instance_variable_set("@#{method_name}", params)
  end

  def method_analysis(params, instance_variable, method_name, proc)
    if params.instance_of?(Array)
      array_parsing params, instance_variable, method_name, proc
    else
      if params && !params.instance_of?(Hash)
        params = {content: params}
      end
      params ||= {}
      params[:proc] = proc if proc
      property_save(params, method_name)
    end
  end

  def magic_getter(method)
    # the aim of this method is only return the value of the content if the property hash only have a content set
    if method.length == 1 && method.instance_of?(Hash) && method[:content]
      method[:content]
    else
      method
    end
  end
end

