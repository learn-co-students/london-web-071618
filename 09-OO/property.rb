class Property

  attr_accessor :address
  @@all = []

  def initialize(address)
    @address = address
    @@all << self
  end

  def self.all
    @@all
  end

  def self.find_by_address(address)
    @@all.find {|property| property.address == address}
  end

  def guests
    property_stays = Stay.all.select {|stay| stay.property == self}
    property_stays.map {|stay| stay.guest}
  end

  def add_guest(guest, length)
    Stay.new(self, guest, length)
  end

end
