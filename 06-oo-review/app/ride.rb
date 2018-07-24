class Ride
  attr_accessor(:distance)
  # attr_writer
  attr_reader :passenger, :driver
  @@all = []

  def initialize(distance, passenger, driver)
    @distance = distance
    @passenger = passenger
    @driver = driver
    @@all << self
  end

  def self.all
    @@all
  end

  # distance
  # reader
  # def distance
  #   @distance
  # end
  #
  # writer
  # def distance=(distance)
  #   @distance = distance
  # end

  def report_distance
    puts "This ride was #{@distance} kms"
  end

end
