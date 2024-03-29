module JSUtils
  # timeout

  def set_timeout(time)
    unless ATOME.content[:time_out]
      ATOME.content[:time_out] = []
    end
    timeout = `setTimeout(function(){ #{yield} }, #{time * 1000})`
    ATOME.add_timeout(timeout)
    timeout
  end

  def add_timeout(timeout)
    @content.q_read[:time_out] << timeout
  end

  def clear_timeout(params)
    @content.q_read[:time_out]&.delete(params)
    `clearTimeout(#{params})`
  end

  def clear_timeouts
    @content.q_read[:time_out].each do |timeout|
      `clearTimeout(#{timeout})`
    end
    @content.q_read[:time_out] = []
  end

  # repeat
  def set_interval(delay, repeat)
    unless ATOME.content[:intervals]
      ATOME.content[:intervals] = {}
    end
    interval = ""
    interval = `setInterval(function(){ #{yield(interval_countdown(interval))}}, #{delay * 1000})`
    ATOME.add_interval(interval, repeat)
    interval
  end

  def interval_countdown(interval)
    counter = ATOME.content[:intervals][interval] - 1
    if counter == 0
      clear_interval(interval)
      ATOME.content[:intervals].delete(interval)
    end
    ATOME.content[:intervals][interval] = counter
  end

  def add_interval(interval, repeat)
    @content.q_read[:intervals][interval] = repeat
  end

  def clear_interval(interval)
    `clearInterval(#{interval})`
  end

  def clear_intervals
    ATOME.content[:intervals].each do |interval|
      `clearInterval(#{interval})`
    end
    ATOME.content[:intervals] = {}
  end

  # schedule
  def js_schedule(years, months, days, hours, minutes, seconds, &proc)
    `atome.jsSchedule(#{years},#{months},#{days},#{hours},#{minutes},#{seconds},#{proc})`
  end

  def self.schedule_callback(proc)
    proc.call if proc.is_a?(Proc)
  end
end


