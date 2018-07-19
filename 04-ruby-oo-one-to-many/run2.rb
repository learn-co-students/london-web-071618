require 'pry'


class Person
  attr_accessor :name
  @@all = []

  def self.all
    @@all
  end

  def self.create(name)
    person = self.new
    person.name = name
    @@all << person
  end
end

Person.create('Ada Lovelace')
Person.create('Grace Hopper')

binding.pry

p 'hi'
