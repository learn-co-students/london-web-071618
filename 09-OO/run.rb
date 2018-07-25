require 'pry'

require_relative './guest.rb'
require_relative './property.rb'
require_relative './stay.rb'

sarah = Guest.new("Sarah", 15)
ritz = Guest.new("Ritz", 65)

rainbow = Property.new("101 Rainbow Road")
canyon = Property.new("102 Canyon Ranch")

vacation = Stay.new(rainbow, sarah, 7)



binding.pry
