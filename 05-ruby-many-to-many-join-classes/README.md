# What is a many to many relationship?

## Decide on a domain - Countries and Citizens
## Recap objects
### Create models - separate files // importing
`require_relative`

```ruby
class Citizen
  attr_reader :name, :birth_year

  ALL = []

  def initialize(name, birth_year)
    @name = name
    @birth_year = birth_year

    ALL << self
  end

  def self.all
    ALL
  end
```

```ruby
class Country
  attr_reader :name, :continent

  ALL = []
  # @@all

  def initialize(name, continent)
    @name = name
    @continent = continent

    ALL << self
  end

  def self.all
    ALL
  end
```
## Recap one - to many

## What is the relationship that binds the Country and the Citizen?
### Drawing!

[aww](https://awwapp.com/#)

```ruby
class Passport
  attr_reader :citizen, :country

  ALL = []

  def initialize(citizen, country)
    @citizen = citizen
    @country = country

    ALL << self
  end

  def self.all
    ALL
  end
end
```

## Deliverables
### Ability to accept a citizenship by a Citizen
### Ability to list all citizenships of a Citizen

```ruby
# citizen.rb
  def passports
    Passport.all.select do |passport|
      passport.citizen == self
    end
  end
```

### Ability to list Citizens of a Country

```ruby
# country.rb

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
```

## extra stuff

```ruby
# citizen.rb

  def surrender_citizenship(country)
    passport_to_revoke = passports.find do |passport|
      passport.country == country
    end

    if passport_to_revoke
      Passport.all.delete(passport_to_revoke)
    end
  end
```

```ruby
# country.rb
  def citizens_over_18
    citizens.select do |citizen|
      citizen.birth_year < 2000
    end
  end
```
