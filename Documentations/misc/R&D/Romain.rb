#class Test
#  def a &block_a
#    Test.define_method :b do |&block_b|
#      block_b.(&block_a)
#    end
#  end
#end
#f = Test.new
#f.a { puts "A" }
#
#f.b { |&block| puts "B"; instance_eval &block }


class Test
  def color &block
    if block
      puts __method__
      meth = :width
      Test.define_method meth do |values, &block_b|
        puts "values: #{values}"
        yield block_b
      end
      self.send(meth, meth)

    else

    end

  end
end
f = Test.new
f.color do
  puts "__method__"
end




