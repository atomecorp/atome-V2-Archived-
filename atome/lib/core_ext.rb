# frozen_string_literal: true

#require 'opal-parser'

class Array
  def swap!(a, b)
    self[a], self[b] = self.fetch(b), self.fetch(a)
    self
  end

  def pick(prop, mode = :value)
    prop_found = []
    each_with_index do |props, h_index|
      if props.keys[0] == prop.delete_suffix('s')
        if mode == :value
          prop_found << props.values[0]
        elsif mode == :electron
          prop_found << self[h_index]
        end
      end
    end
    if prop.end_with? 's'
      prop_found
    else
      prop_found[0]
    end
  end

  def delete_at_multi(arr)
    res = arr.map { |i| self[i] }
    arr = arr.sort.reverse.uniq # delete highest indexes first.
    arr.each do |i|
      delete_at i
    end
    res
  end
end

def constantize(camel_cased_word)
  names = camel_cased_word.to_s.split('::')
  # Trigger a built-in NameError exception including the ill-formed constant in the message.
  Object.const_get(camel_cased_word) if names.empty?
  # Remove the first blank element in case of '::ClassName' notation.
  names.shift if names.size > 1 && names.first.empty?
  names.inject(Object) do |constant, name|
    if constant == Object
      constant.const_get(name)
    else
      candidate = constant.const_get(name)
      next candidate if constant.const_defined?(name, false)
      next candidate unless Object.const_defined?(name)

      # Go down the ancestors to check it it's owned
      # directly before we reach Object or the end of ancestors.
      constant = constant.ancestors.inject do |const, ancestor|
        break const if ancestor == Object
        break ancestor if ancestor.const_defined?(name, false)

        const
      end
      # owner is in Object, so raise
      constant.const_get(name, false)
    end
  end
end

# below patch to use the class Number instead of the class Integer that is not supported by Opal
if defined?(Number) == 'constant'
else
  Number = Integer
end


def class_exists?(class_name)
  klass = Module.const_get(class_name)
  return true

rescue NameError
  return false
end