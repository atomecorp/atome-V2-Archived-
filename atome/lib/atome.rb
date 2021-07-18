# ruby main Object extensions
require "atome/extensions/ruby/object"
# default_value
require "atome/environment/default_values"
# opal specific
require "atome/extensions/opal/opal_audio"
require "atome/extensions/opal/opal_code_editor"
require "atome/extensions/opal/opal_database"
require "atome/extensions/opal/opal_generator.rb"
require "atome/extensions/opal/opal_helpers"
require "atome/extensions/opal/opal_io"
require "atome/extensions/opal/opal_timer"
require "atome/extensions/opal/opal_video"
require "atome/extensions/opal/opal_jquery"

# render helper
require './atome/lib/atome/renderers/renderers.rb'

require './atome/lib/atome/renderers/fabric/helpers/html_helpers.rb'
require './atome/lib/atome/renderers/fabric/processors/communication.rb'
require './atome/lib/atome/renderers/fabric/processors/effect.rb'
require './atome/lib/atome/renderers/fabric/processors/event.rb'
require './atome/lib/atome/renderers/fabric/processors/geometry.rb'
require './atome/lib/atome/renderers/fabric/processors/helper.rb'
require './atome/lib/atome/renderers/fabric/processors/hierarchy.rb'
require './atome/lib/atome/renderers/fabric/processors/identity.rb'
require './atome/lib/atome/renderers/fabric/processors/material.rb'
require './atome/lib/atome/renderers/fabric/processors/media.rb'
require './atome/lib/atome/renderers/fabric/processors/spatial.rb'
require './atome/lib/atome/renderers/fabric/processors/utility.rb'
require './atome/lib/atome/renderers/fabric/properties/communication.rb'
require './atome/lib/atome/renderers/fabric/properties/effect.rb'
require './atome/lib/atome/renderers/fabric/properties/event.rb'
require './atome/lib/atome/renderers/fabric/properties/generator.rb'
require './atome/lib/atome/renderers/fabric/properties/geometry.rb'
require './atome/lib/atome/renderers/fabric/properties/helper.rb'
require './atome/lib/atome/renderers/fabric/properties/hierarchy.rb'
require './atome/lib/atome/renderers/fabric/properties/identity.rb'
require './atome/lib/atome/renderers/fabric/properties/inputs.rb'
require './atome/lib/atome/renderers/fabric/properties/material.rb'
require './atome/lib/atome/renderers/fabric/properties/media.rb'
require './atome/lib/atome/renderers/fabric/properties/spatial.rb'
require './atome/lib/atome/renderers/fabric/properties/utility.rb'
require './atome/lib/atome/renderers/fabric.rb'
require './atome/lib/atome/renderers/headless/helpers/helpers.rb'
require './atome/lib/atome/renderers/headless/processors/communication.rb'
require './atome/lib/atome/renderers/headless/processors/effect.rb'
require './atome/lib/atome/renderers/headless/processors/event.rb'
require './atome/lib/atome/renderers/headless/processors/geometry.rb'
require './atome/lib/atome/renderers/headless/processors/helper.rb'
require './atome/lib/atome/renderers/headless/processors/hierarchy.rb'
require './atome/lib/atome/renderers/headless/processors/identity.rb'
require './atome/lib/atome/renderers/headless/processors/material.rb'
require './atome/lib/atome/renderers/headless/processors/media.rb'
require './atome/lib/atome/renderers/headless/processors/spatial.rb'
require './atome/lib/atome/renderers/headless/processors/utility.rb'
require './atome/lib/atome/renderers/headless/properties/communication.rb'
require './atome/lib/atome/renderers/headless/properties/effect.rb'
require './atome/lib/atome/renderers/headless/properties/event.rb'
require './atome/lib/atome/renderers/headless/properties/generator.rb'
require './atome/lib/atome/renderers/headless/properties/geometry.rb'
require './atome/lib/atome/renderers/headless/properties/helper.rb'
require './atome/lib/atome/renderers/headless/properties/hierarchy.rb'
require './atome/lib/atome/renderers/headless/properties/identity.rb'
require './atome/lib/atome/renderers/headless/properties/inputs.rb'
require './atome/lib/atome/renderers/headless/properties/material.rb'
require './atome/lib/atome/renderers/headless/properties/media.rb'
require './atome/lib/atome/renderers/headless/properties/spatial.rb'
require './atome/lib/atome/renderers/headless/properties/utility.rb'
require './atome/lib/atome/renderers/headless.rb'
require './atome/lib/atome/renderers/html/helpers/helpers.rb'
require './atome/lib/atome/renderers/html/processors/communication.rb'
require './atome/lib/atome/renderers/html/processors/effect.rb'
require './atome/lib/atome/renderers/html/processors/event.rb'
require './atome/lib/atome/renderers/html/processors/geometry.rb'
require './atome/lib/atome/renderers/html/processors/helper.rb'
require './atome/lib/atome/renderers/html/processors/hierarchy.rb'
require './atome/lib/atome/renderers/html/processors/identity.rb'
require './atome/lib/atome/renderers/html/processors/material.rb'
require './atome/lib/atome/renderers/html/processors/media.rb'
require './atome/lib/atome/renderers/html/processors/spatial.rb'
require './atome/lib/atome/renderers/html/processors/utility.rb'
require './atome/lib/atome/renderers/html/properties/communication.rb'
require './atome/lib/atome/renderers/html/properties/effect.rb'
require './atome/lib/atome/renderers/html/properties/event.rb'
require './atome/lib/atome/renderers/html/properties/generator.rb'
require './atome/lib/atome/renderers/html/properties/geometry.rb'
require './atome/lib/atome/renderers/html/properties/helper.rb'
require './atome/lib/atome/renderers/html/properties/hierarchy.rb'
require './atome/lib/atome/renderers/html/properties/identity.rb'
require './atome/lib/atome/renderers/html/properties/inputs.rb'
require './atome/lib/atome/renderers/html/properties/material.rb'
require './atome/lib/atome/renderers/html/properties/media.rb'
require './atome/lib/atome/renderers/html/properties/spatial.rb'
require './atome/lib/atome/renderers/html/properties/utility.rb'
require './atome/lib/atome/renderers/html.rb'
require './atome/lib/atome/renderers/speech/helpers/helpers.rb'
require './atome/lib/atome/renderers/speech/processors/communication.rb'
require './atome/lib/atome/renderers/speech/processors/effect.rb'
require './atome/lib/atome/renderers/speech/processors/event.rb'
require './atome/lib/atome/renderers/speech/processors/geometry.rb'
require './atome/lib/atome/renderers/speech/processors/helper.rb'
require './atome/lib/atome/renderers/speech/processors/hierarchy.rb'
require './atome/lib/atome/renderers/speech/processors/identity.rb'
require './atome/lib/atome/renderers/speech/processors/material.rb'
require './atome/lib/atome/renderers/speech/processors/media.rb'
require './atome/lib/atome/renderers/speech/processors/spatial.rb'
require './atome/lib/atome/renderers/speech/processors/utility.rb'
require './atome/lib/atome/renderers/speech/properties/communication.rb'
require './atome/lib/atome/renderers/speech/properties/effect.rb'
require './atome/lib/atome/renderers/speech/properties/event.rb'
require './atome/lib/atome/renderers/speech/properties/generator.rb'
require './atome/lib/atome/renderers/speech/properties/geometry.rb'
require './atome/lib/atome/renderers/speech/properties/helper.rb'
require './atome/lib/atome/renderers/speech/properties/hierarchy.rb'
require './atome/lib/atome/renderers/speech/properties/identity.rb'
require './atome/lib/atome/renderers/speech/properties/inputs.rb'
require './atome/lib/atome/renderers/speech/properties/material.rb'
require './atome/lib/atome/renderers/speech/properties/media.rb'
require './atome/lib/atome/renderers/speech/properties/spatial.rb'
require './atome/lib/atome/renderers/speech/properties/utility.rb'
require './atome/lib/atome/renderers/speech.rb'
require './atome/lib/atome/renderers/three/helpers/helpers.rb'
require './atome/lib/atome/renderers/three/processors/communication.rb'
require './atome/lib/atome/renderers/three/processors/effect.rb'
require './atome/lib/atome/renderers/three/processors/event.rb'
require './atome/lib/atome/renderers/three/processors/geometry.rb'
require './atome/lib/atome/renderers/three/processors/helper.rb'
require './atome/lib/atome/renderers/three/processors/hierarchy.rb'
require './atome/lib/atome/renderers/three/processors/identity.rb'
require './atome/lib/atome/renderers/three/processors/material.rb'
require './atome/lib/atome/renderers/three/processors/media.rb'
require './atome/lib/atome/renderers/three/processors/spatial.rb'
require './atome/lib/atome/renderers/three/processors/utility.rb'
require './atome/lib/atome/renderers/three/properties/communication.rb'
require './atome/lib/atome/renderers/three/properties/effect.rb'
require './atome/lib/atome/renderers/three/properties/event.rb'
require './atome/lib/atome/renderers/three/properties/generator.rb'
require './atome/lib/atome/renderers/three/properties/geometry.rb'
require './atome/lib/atome/renderers/three/properties/helper.rb'
require './atome/lib/atome/renderers/three/properties/hierarchy.rb'
require './atome/lib/atome/renderers/three/properties/identity.rb'
require './atome/lib/atome/renderers/three/properties/inputs.rb'
require './atome/lib/atome/renderers/three/properties/material.rb'
require './atome/lib/atome/renderers/three/properties/media.rb'
require './atome/lib/atome/renderers/three/properties/spatial.rb'
require './atome/lib/atome/renderers/three/properties/utility.rb'
require './atome/lib/atome/renderers/three.rb'
require './atome/lib/atome/renderers/zim/helpers/helpers.rb'
require './atome/lib/atome/renderers/zim/processors/communication.rb'
require './atome/lib/atome/renderers/zim/processors/effect.rb'
require './atome/lib/atome/renderers/zim/processors/event.rb'
require './atome/lib/atome/renderers/zim/processors/geometry.rb'
require './atome/lib/atome/renderers/zim/processors/helper.rb'
require './atome/lib/atome/renderers/zim/processors/hierarchy.rb'
require './atome/lib/atome/renderers/zim/processors/identity.rb'
require './atome/lib/atome/renderers/zim/processors/material.rb'
require './atome/lib/atome/renderers/zim/processors/media.rb'
require './atome/lib/atome/renderers/zim/processors/spatial.rb'
require './atome/lib/atome/renderers/zim/processors/utility.rb'
require './atome/lib/atome/renderers/zim/properties/communication.rb'
require './atome/lib/atome/renderers/zim/properties/effect.rb'
require './atome/lib/atome/renderers/zim/properties/event.rb'
require './atome/lib/atome/renderers/zim/properties/generator.rb'
require './atome/lib/atome/renderers/zim/properties/geometry.rb'
require './atome/lib/atome/renderers/zim/properties/helper.rb'
require './atome/lib/atome/renderers/zim/properties/hierarchy.rb'
require './atome/lib/atome/renderers/zim/properties/identity.rb'
require './atome/lib/atome/renderers/zim/properties/inputs.rb'
require './atome/lib/atome/renderers/zim/properties/material.rb'
require './atome/lib/atome/renderers/zim/properties/media.rb'
require './atome/lib/atome/renderers/zim/properties/spatial.rb'
require './atome/lib/atome/renderers/zim/properties/utility.rb'
require './atome/lib/atome/renderers/zim.rb'
# generated property
require "atome/generated_methods/communications"
require "atome/generated_methods/effects"
require "atome/generated_methods/events"
require "atome/generated_methods/geometries"
require "atome/generated_methods/generator"
require "atome/generated_methods/helpers"
require "atome/generated_methods/hierarchies"
require "atome/generated_methods/identities"
require "atome/generated_methods/medias"
require "atome/generated_methods/inputs"
require "atome/generated_methods/spatials"
require "atome/generated_methods/utilities"
require "atome/generated_methods/materials"
# property processors
require "atome/processors/communication"
require "atome/processors/effect"
require "atome/processors/event"
require "atome/processors/generator"
require "atome/processors/geometry"
require "atome/processors/helper"
require "atome/processors/hierarchy"
require "atome/processors/identity"
require "atome/processors/media"
require "atome/processors/input"
require "atome/processors/spatial"
require "atome/processors/utility"
require "atome/processors/material"
# helpers
require "atome/helpers/atome_helpers"
require "atome/helpers/internal_helpers"
require "atome/generated_methods/atome_methods"
# main atome builder
require "atome/generated_methods/batch"
require "atome/builder/properties"
#Quark.genesis
require "atome/builder/atome_generator"
# Atome helper (methods available at main Object level)
require "atome/extensions/atome_extensions"
require "atome/extensions/atome_utilities"
# class to create a new device
require "atome/environment/device"
# elementary atomes for basic environment
require "atome/environment/initialize"
# methods to simplify object creation
require "atome/generated_methods/atome_object_creator"
require "atome/extensions/atome_code_creator"
