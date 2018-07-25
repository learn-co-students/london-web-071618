class Stay

  attr_accessor :property, :guest, :length
  @@all = []

  def initialize(property, guest, length)
    @property = property
    @guest = guest
    @length = length
    @@all << self
  end

  def self.all
    @@all
  end 

end
