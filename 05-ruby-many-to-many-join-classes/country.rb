class Country
  attr_reader :name, :continent

  @@all = []

  def initialize(name, continent)
    @name = name
    @continent = continent

    @@all << self
  end

  def self.all
    @@all
  end

  def naturalize_citizen(citizen)
    Passport.new(citizen, self)
  end

  def passports
    Passport.all.select do |passport|
      passport.country == self
    end
  end

  def citizens
    passports.map do |passport|
      passport.citizen
    end
  end
end
