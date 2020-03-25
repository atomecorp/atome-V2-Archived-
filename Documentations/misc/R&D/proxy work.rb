# the proxy
class Flickr
  def initialize
    @result = FlickrResult.new
  end

  def method_missing(method, *args, &block)
    if @result.data.respond_to?(method)
      @result.run(method, args, block)
    else
      @result.append(method, args[0])
      return self
    end
  end

# the object
  class FlickrResult
    attr_reader :data

    def initialize
      @data = []
    end

    def append(key, options)
      @data << key
    end

    def run(method, args, block)
      if !@did_run
        puts "data : #{@data}"
        #@did_run = true
      else
        puts "pas ok"
      end
    end

  end
end

flickr = Flickr.new
flickr.groups(:group_id => "123").pools("5555").thing("test").users(:user_id => "456")
flickr.add
puts flickr


#puts "----"
#flickr = Flickr.new
#flickr.groups(:group_id => "123").pools.thing.users(:user_id => "456")
#
#flickr.each {|f| p f }
