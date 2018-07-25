class Guest

  attr_accessor :name, :age
  @@all = []

  def initialize(name, age)
    @name = name
    @age = age
    @@all << self
  end

  def self.all
    @@all
  end

  def stays
    Stay.all.select {|stay| stay.guest == self}
  end

  def properties
    # guest_stays = Stay.all.select {|stay| stay.guest == self}
    stays.map {|stay| stay.property.address }
  end

  def add_property(property, length)
    Stay.new(property, self, length)
  end

end
