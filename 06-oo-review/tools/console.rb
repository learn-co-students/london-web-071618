require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end
passenger1 = Passenger.new('Brooke')
driver1 = Driver.new('Niky')
driver2 = Driver.new('Dan')
ride = Ride.new(7.0, passenger1, driver1)
ride2 = Ride.new(2.0, passenger1, driver2)

Pry.start