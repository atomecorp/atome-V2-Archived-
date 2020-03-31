# frozen_string_literal: true

####### Html render engine #############
def html_view
  # below we create the html view that will contain all atomes
  `
    var html_view = document.createElement("div");
   html_view.setAttribute("id", "html_view");
    html_view.id = "html_view";
    html_view.style.left = "0px";
    html_view.style.top = "0px";
    html_view.style.right = "0px";
    html_view.style.bottom = "0px";
    html_view.style.zIndex = "1";
    html_view.style.position = "absolute";
    html_view.style.display = "block";
    document.getElementsByTagName('body')[0].appendChild(html_view);
`
end

# def synchronise_code id, param
#
#  puts "id is #{id}, param is #{param}"
#
#  #Opal.Object.$replace("get(\""+obj_id+"\").x("+this.x+")"  , x_def_pos);
#  #Opal.Object.$replace("get(\""+obj_id+"\").y("+this.y+")"  , y_def_pos);
# end

html_view
module Html
  def initialize(*val)
    ;
  end

  def self.init(properties, id)
    properties.each do |property|
      # puts "properties : #{properties} id : #{id}"
      if property.class == Hash
        send(property.keys[0], property.values[0], id)
      elsif property.class == Array
        parent_id = ìd
        property.each do |sub_property|
          if sub_property.class == Hash
            send(sub_property.keys[0], sub_property.values[0], parent_id)
          end
        end
      end
    end
  end

  def self.preset(param, id)
    param = :div if param.to_sym == :box
    `

if (!document.getElementById(#{id})) {
        $('#html_view').append("<"+param+" id="+id+" style='width:100px;height:100px;position:absolute;color:red;background-color:orange;display:block'></"+param+">");
}

`
  end

  def self.type(param, id)

  end

  def self.touch(param, id)

    puts "param is #{param}"
  end

  def self.color(param, id)
    `document.getElementById(#{id}).style.backgroundColor = #{param}`
  end

  def self.draggable(param = :true, atome_id)
    if param == :true
      # important delete the line below
      # id=atome_id
      atome_id = atome_id.to_s
      id = Atome.atomes[atome_id].id
      # puts id
      `
$( "#"+#{atome_id}+"" ).draggable({
     start: function() {
search_x="get(\""+#{id}+"\").x"
search_y="get(\""+#{id}+"\").y"


code=editor.getDoc().getValue("\n");
// we add a line if the last line is not empty
    code_lines=code.split("\n");
    code_length=code_lines.length;
    last_line=code_lines[code_length-1];

x_def_pos=Opal.Object.$find(code,search_x);
  Opal.Object.$replace("" , code_length);
y_def_pos=Opal.Object.$find(code,search_y);
if (x_def_pos==y_def_pos){
y_def_pos=y_def_pos+1
}
      },
      drag: function() {
Opal.Object.$replace("get(\""+#{id}+"\").x("+parseInt(document.getElementById(#{atome_id}).style.left)+")"  , x_def_pos);
Opal.Object.$replace("get(\""+#{id}+"\").y("+parseInt(document.getElementById(#{atome_id}).style.top)+")"  , y_def_pos);
      },
      stop: function() {
//filename=Opal.Atome.$project();
//content=editor.getDoc().getValue("\n");
      }
});

$( "#"+#{atome_id}+"" ).draggable("enable")
`
    elsif param == :false
      `$( "#"+#{atome_id}+"" ).draggable('disable')`
    end
  end

  def self.x(param, id)
    `document.getElementById(#{id}).style.left = #{param}+"px"`
  end

  def self.y(param, id)
    `document.getElementById(#{id}).style.top = #{param}+"px"`
  end
end

# module Html
#  def initialize (*val)
#
#  end
#
#  def self.init(properties)
#    puts properties
#    properties.each do |property|
#      if property.keys[0] != :renderer
#        if property.keys[0] == :preset
#          self.send(property.values[0] )
#
#        elsif property.keys[0] == :type
#          #self.send(property.values[0])
#          puts "we must get the associated preset if the shape is not define"
#        else
#          self.send(property.keys[0], property.values[0])
#
#        end
#
#
#      end
#    end
#  end
#
#  def self.id val = nil, &bloc
#    if bloc
#      puts instance_exec(&bloc)
#    else
#      puts "the user send to the objectthe method  #{__method__} it's value is #{val}"
#    end
#  end
#
#  def self.atome_id val = nil, &bloc
#    if bloc
#      puts instance_exec(&bloc)
#    else
#      puts "object #{__method__} is #{val}"
#    end
#  end
#
#  def self.box val = nil, &bloc
#    if bloc
#      puts instance_exec(&bloc)
#    else
#      `$('body').append('<div style="position:absolute;color:red;background-color:white;z-index:5000">hello</div>');`
#    end
#  end
#
#  def self.preset val = nil, &bloc
#    if bloc
#      puts instance_exec(&bloc)
#    else
#      puts "object #{__method__} is #{val}"
#    end
#  end
#
#  def self.type val = nil, &bloc
#    if bloc
#      puts instance_exec(&bloc)
#    else
#      puts "object #{__method__} is #{val}"
#    end
#  end
#
#
#  def self.color val = nil, &bloc
#    if bloc
#      puts instance_exec(&bloc)
#    else
#      puts "object #{__method__} is #{val}"
#    end
#  end
#
#  def self.touch
#
#  end
#
# end
