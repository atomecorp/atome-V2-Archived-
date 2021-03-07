def box(value = {})
  grab(:view).box(value)
end

def circle(value = {})
  grab(:view).circle(value)
end

def text(value = {content: lorem})
  grab(:view).text(value)
end

def image(value = {})
  grab(:view).image(value)
end

def video(value = {})
  grab(:view).video(value)
end

def audio(value = {})
  grab(:view).audio(value)
end

def code(value = {atome_id: identity, content: ""})
  JSUtils.load_opal_parser
  ide_atome_id = value[:atome_id]
  content = value[:content]
  value = {atome_id: ide_atome_id, width: 500, height: 300, shadow: {x: 0, y: 0, blur: 6, thickness: 0, color: {red: 0, green: 0, blue: 0, alpha: 0.6}, invert: false}}.merge(value)
  code_editor = box(value)
  ATOME.load_codemirror(ide_atome_id, content)
  run = code_editor.circle({width: 20, height: 20, x: 500, y: 0})
  close = code_editor.box({width: 20, height: 20, x: 520, y: 0})
  run.touch do
    compile(ATOME.get_ide_content(ide_atome_id))
  end
  close.touch do
    grab(ide_atome_id).delete
  end
  code_editor
end