clear

def require valuer
  `
    $.ajax({
        url : #{valuer},
        dataType: "text",
        success : function (data) {
         
		Opal.eval(data)
		// Opal.eval("class String; def toto; puts 'ok';end;end;'oouuuu'.toto ")
        }
  
});
  
  `
end

require "tests/toto.rb"
puts "tests suite"
# class String;def toto; puts 'super kool!!';end;end;"ooo".toto
class String
  def toto
    puts 'super hyper kool!!'
  end
end
"ooo".toto

# gh(



##test fo IDE
#
#clear
#circle
#sleep    4
#box
#play()
#class    String
#  def    verif
#    puts    "verified"
#  end
#end
#
#"test".verif


##test2 fo IDE
# clear
# circle()
# play()
# render
# sleep  1
# box()
# class  String
#   def  verif
#   puts  "verified"
#   end
# end
# "aaa".verif
# eval  "puts  'ok'"
#
# #circle




#bug a corriger:
clear
a=Atome.new
a.box({color: :red})
b=Atome.new
b.circle(25,25,50,50,:orange)


