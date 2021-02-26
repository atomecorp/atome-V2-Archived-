#Call js method  created in ruby from ruby
%x{window.verif = function(val){ alert(val) }}
$$.verif("verified") # => "verified!"

#Soluce 2
class Js
    def self.method_missing(m, *args, &block)
        opts = []
        args.each do |arg|
            opts << "'" + arg + "'"
        end
        opts = opts.join(",")
        send_msg = m + "(" + opts + ")"
        `eval(#{send_msg})`
    end
end

    `
function verif(val1, val2, val3){
alert(val2)
}
`
Js.verif("test1","test2","test3")


# hash

a={one: 1, two: :two_2_two, three: 3}

`
 function store() {
  for (var i = 0; i < arguments.length; i++) {
  var test=arguments[i].$keys();
   var test=arguments[i].$values();
    var one =arguments[i].$fetch('one')
  var two =arguments[i].$fetch('two')
    alert(test);
  }
}

`


`store(#{a})`
