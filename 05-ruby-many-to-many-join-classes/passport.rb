class Passport
  attr_reader :citizen, :country

  @@all = []

  def initialize(citizen, country)
    @citizen = citizen
    @country = country

    @@all << self
  end

  def self.all
    @@all
  end
end
