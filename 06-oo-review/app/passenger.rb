class Passenger
  # has many rides
  # has many drivers through the rides
  attr_accessor :name
  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def rating
    rand(1...5)
  end

  def self.all
    @@all
  end

  def rides
    Ride.all.select{|ride| ride.passenger == self}
  end

  def drivers
    rides.map{|ride| ride.driver}
  end

  def request_ride
    # assign me a random driver
    # init new ride
    driver = Driver.all.sample
    distance = rand(1...20).to_f
    Ride.new(distance, self, driver)
  end

  def total_distance
    # get array of rides
    # get array of distances from rides
    # total
    # distances = rides.map {|ride| ride.distance}
    # total = 0
    # distances.each do |dist|
    #   total += dist
    # end
    # total
    distances = rides.map {|ride| ride.distance}
    distances.inject(0){|total, dist| total + dist }
  end
end
