#bugs ::

######## 1 #######@
JS.call(:parseFloat, "1.1")
######## 2 #######@
def my_meth
  p "msg from my_meth"
end
class My_class
  def method_missing(msg, *args, &block)
    p "msg from missing methode"
  end
end
a=My_class.new
a.my_meth
######## 3 #######@
`function my_fct(val){
p val.$fetch('two')
}
`
hash={one: 1, two: 2, three: 3}
`my_fct(#{hash})`
######## 4 #######@
clear
def my_fct
  puts "function 'my_fct' called"
end

class My_class
  def another_fct
	puts "I should be called"
  end
end


my_var=My_class.new
my_var.my_fct


