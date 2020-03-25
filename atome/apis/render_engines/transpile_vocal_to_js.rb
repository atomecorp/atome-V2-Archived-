####### Vocal render engine #############
module Vocal


    def initialize (*val)

    end

    def self.init(properties, atome_ìd)
      properties.each do |property|
        #puts properties
        if property.class == Hash
          self.send(property.keys[0], property.values[0], atome_ìd)
        elsif property.class == Array
          parent_id = atome_ìd
          property.each do |sub_property|
            if sub_property.class == Hash
              self.send(sub_property.keys[0], sub_property.values[0], parent_id)
            end
          end
        end
      end
    end

    def self.preset param, id


      `
	ssu = new SpeechSynthesisUtterance()
	ssu.lang = "fr-FR"
	ssu.text = "une "+#{param}+" vient d'être créée avec l'identité :"+#{id}
	speechSynthesis.speak(ssu)
`

    end

    def self.type param, id

    end

    def self.color param, id
      `
      ssu = new SpeechSynthesisUtterance()
      ssu.lang = "fr-FR"
      ssu.text = "L'objet  "+#{id}+" a été colorié en "+ #{param}
      speechSynthesis.speak(ssu)
`
    end

    def self.draggable param=:true, id
      `
      ssu = new SpeechSynthesisUtterance()
      ssu.lang = "fr-FR"
      ssu.text = #{id}+" est maintenant déplaçable"
      speechSynthesis.speak(ssu)
`
    end


    def self.x param, id
      `
      ssu = new SpeechSynthesisUtterance()
      ssu.lang = "fr-FR"
      ssu.text = #{id}+" a été déplacé horizontalement à la position "+ #{param}
      speechSynthesis.speak(ssu)
`
    end

    def self.y param, id
      `
      ssu = new SpeechSynthesisUtterance()
      ssu.lang = "fr-FR"
      ssu.text = #{id}+" a été déplacé verticalement à la position "+ #{param}
      speechSynthesis.speak(ssu)
`
    end

  end
