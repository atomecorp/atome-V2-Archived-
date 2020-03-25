def bin_to_hex(s)
  s.each_byte.map { |b| b.to_s(16) }.join
end
def require rb_file
  alert rb_file
end

p bin_to_hex("salut")

