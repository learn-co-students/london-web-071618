class Citizen
  attr_reader :name, :birth_year

  @@all = []

  def initialize(name, birth_year)
    @name = name
    @birth_year = birth_year

    @@all << self
  end





  def self.all
    @@all
  end

  def passports
    Passport.all.select do |passport|
      passport.citizen == self
    end
  end
end
