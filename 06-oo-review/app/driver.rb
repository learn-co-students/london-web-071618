class Driver
  attr_accessor :name
  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def rating
    rand(1...5)
  end

  def passengers
    rides.map{|ride| ride.passenger}
  end

  def rides
    Ride.all.select{|ride| ride.driver == self}
  end

  def self.all
    @@all
  end
end
