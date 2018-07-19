# Object Oriented Ruby

## Let us pry

```ruby
require `pry`

binding.pry

```

## What is an object? Absolutely everything. At least in Ruby, that is...

```ruby

x = 3
puts x.class
puts x

x = "hello how are you"
x.split
x.split.class
```

## How to send messages to objects

```ruby
x = 3

message_name = :+

x.send(message_name, 1) === x + 1

names = ['Josh', 'Anna', 'Becky']

names[0]
names.[](0)
names.send(:[], 0)

names.respond_to_whatevs_method

names.responds_to? message_name
```

### So what actually is an object?

o = Object.new
o.object_id

## Crating classes and instantiating instances. Differences?

Let's store data about a bank account.

```ruby
bank_account = {"user_id": 31548839, "balance": 100}

# that's not good! Let's build something more robust!
```

## Passing arguments to `new` by defining an `initialize` method in `class`

```ruby
class BankAccount

  def initialize(user_id, balance)
    @user_id = user_id
    @balance = balance
  end

end
```

## Creating instance methods

```ruby
class BankAccount

  def initialize(user_id, balance)
    @user_id = user_id
    @balance = balance
  end

  def deposit(amount)
    @balance = @balance + amount
  end

  def widthdraw(amount)
    @balance = @balance - amount
  end
end
```

## Define `attr` readers, writers and accessors

```ruby
class BankAccount
  attr_reader :user_id, :balance

  @@all = []

  def initialize(user_id, balance)
    @user_id = user_id
    @balance = balance

    @@all << self
  end

  def deposit(amount)
    @balance = @balance+amount
  end

  def widthdraw(amount)
    @balance = @balance-amount
  end

  def self.all
    @@all
  end
end
```

## Variable scope and not utilising global variables

## If we have time: array methods - `each`, `map`, `find, `select` and `filter`
