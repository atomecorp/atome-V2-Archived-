class SimpleMath
  def initialize
    @result = 0
    @add = 0
    @subtract = 0
    @cursus=[]
  end

  #1 add function
  def add(val = nil, &bloc)
    if @add == 0
      @result += val
      @add = :setted
    else
      @result=0
      @result += val
      @add = :setted
    end
    @cursus << {:add => val}
    self
  end

  def end
    @result = 0
  end

  #2 Subtract function
  def subtract(val)
    if @subtract == 0
      @result -= val
      @subtract = :setted
    else
      @result=0
      @result += val
      @subtract = :sette
    end
    @cursus << {:subtract => val}
    self
  end

  def to_s
    result=@result.to_s + " : "+@cursus.to_s
    result
  end
end

newNumber = SimpleMath.new
puts newNumber.add(7).subtract(10)
#puts newNumber.add(7).subtract(1)

#class Atome
#
#  def set_color
#    @color ||= {:color => {}}
#  end
#
#  def set_x
#    @x ||= {:x => {}}
#  end
#
#  def color(args)
#    set_color[:color].merge!({:color => args})
#    self
#  end
#
#  def x(args)
#    set_x[:x].merge!({:x => args})
#    self
#  end
#
#  def limit(limit=nil)
#
#    self
#  end
#end
#
#c = Atome.new
##=> #<Criteria:0x007fe91117c738>
#p c.color('Jeff').x('jkreeftmeijer').limit()
#
#p c.color('jeezs').x( 'moi').limit()
##=> #<Criteria:0x007fe91117c738 @criteria={:conditions=>{:name=>"Jeff", :login=>"jkreeftmeijer"}}>