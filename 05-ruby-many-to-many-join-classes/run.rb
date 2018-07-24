require 'pry'
require_relative 'country'
require_relative 'citizen'
require_relative 'passport'



dan = Citizen.new('Daniel', 1991)
brooke = Citizen.new('Brooke', 1995)
niky = Citizen.new('Niky', 1991)
luoana = Citizen.new('Luoana', 1997)

poland = Country.new('Poland', 'Europe')
madagascar = Country.new('Madagascar', 'Africa')
romania = Country.new('Romania', 'Europe')
us = Country.new('United States', 'North America')
australia = Country.new('Australia', 'Australia')

poland.naturalize_citizen(dan)
poland.naturalize_citizen(brooke)

romania.naturalize_citizen(luoana)

us.naturalize_citizen(niky)
us.naturalize_citizen(brooke)

madagascar.naturalize_citizen(dan)
madagascar.naturalize_citizen(brooke)
madagascar.naturalize_citizen(niky)
madagascar.naturalize_citizen(luoana)

australia.naturalize_citizen(niky)

binding.pry
p 'hello'
