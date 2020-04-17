# frozen_string_literal: true
####### Vocal render engine #############
module Vocal
  def initialize(*val); end

  def self.init(properties, atome_id)
    properties.each do |property|
      # puts properties
      if property.class == Hash
        send(property.keys[0], property.values[0], atome_id)
      elsif property.class == Array
        parent_id = atome_id
        property.each do |sub_property|
          if sub_property.class == Hash
            send(sub_property.keys[0], sub_property.values[0], parent_id)
          end
        end
      end
    end
  end

  def self.preset(param, id)
    `
  ssu = new SpeechSynthesisUtterance()
  ssu.lang = "fr-FR"
  ssu.text = "une "+#{param}+" vient d'etre crre avec l'identite :"+#{id}
  speechSynthesis.speak(ssu)
`
  end

  def self.type(param, id); end

  def self.color(param, id)
    `
      ssu = new SpeechSynthesisUtterance()
      ssu.lang = "fr-FR"
      ssu.text = "probleme avec les accents et le mode test de eVe,L'objet  "+#{id}+" a ete colorie en "+ #{param}
      speechSynthesis.speak(ssu)
`
  end

  def self.draggable(_param = :true, id)
    `
      ssu = new SpeechSynthesisUtterance()
      ssu.lang = "fr-FR"
      ssu.text = #{id}+" est maintenant deplacable, attention probleme avec les accents et le mode test de eVe"
      speechSynthesis.speak(ssu)
`
  end

  def self.x(param, id)
    `
      ssu = new SpeechSynthesisUtterance()
      ssu.lang = "fr-FR"
      ssu.text = #{id}+" a ete deplace horizontalement a la position "+ #{param}+"attention probleme avec les accents et le mode test de eVe"
      speechSynthesis.speak(ssu)
`
  end

  def self.y(param, id)
    `
      ssu = new SpeechSynthesisUtterance()
      ssu.lang = "fr-FR"
      ssu.text = #{id}+" a ete deplace verticalement a la position "+ #{param}+"attention probleme avec les accents et le mode test de eVe"
      speechSynthesis.speak(ssu)
`
  end
  end
