# the proxy
class Flickr
  def initialize
    @result = FlickrResult.new
  end

  def method_missing(method, *args, &block)
  puts "start here"
    if @result.data.respond_to?(method)
      #@result.run(method, args, block)
    else
      @result.append(method, args[0])
      puts "-----------------------"
      return self
    end
  end
# the object
  class FlickrResult
    attr_reader :data
    def initialize
      @data = []
      @keys = []
      @options = {}
      @previous_meth=""
    end

    def append(key, options)
      @keys << key
      puts "@previous_meth : #{@previous_meth}"
      @options.merge!(options) if options
      @previous_meth=key
      puts self.object_id
    end


  end
end

flickr = Flickr.new
flickr.groups(:group_id => "123").pools.thing.users(:user_id => "456")
puts "llll"
flickr.groups(:group_id => "123").pools.thing.users(:user_id => "456")
