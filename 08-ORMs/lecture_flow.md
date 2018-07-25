# ORM in action

## Run run.rb, try some sql queries

## Make sure to pry!

```ruby

require 'sqlite3'
require 'pry'

# establish the db connection
DB = { :conn => SQLite3::Database.new('./artists.db') }
DB[:conn].results_as_hash = true

# CODE

Pry.start
```

## Define artist class

```ruby
class Artist

  attr_accessor :id, :name

  # why do we set it to nil?
  # ssot shift from rb to db
  def initialize(id=nil, name)
    @id = id
    @name = name
  end

end
```

### Newest artist

```ruby
  def self.get_highest_id
    sql = <<-SQL
      SELECT id FROM artists ORDER BY id DESC LIMIT 1;
    SQL

    DB[:conn].execute(sql, @name)[0]["id"]
  end
```

### Hash to object conversion

```ruby
  def self.parse_artist(artist_hash)
    if artist_hash
      Artist.new(artist_hash["id"], artist_hash["name"])
    else
      nil
    end
  end
```

### Exact artist
```ruby
  def self.find(id)
    sql = <<-SQL
      SELECT * FROM artists WHERE id=?
    SQL

    artist_hash = DB[:conn].execute(sql, id)[0]
    Artist.parse_artist(artist_hash)
  end
```

## get CRUDdy

### Create

```ruby
  def save
    sql = <<-SQL
      INSERT INTO artists (name) VALUES (?);
    SQL

    DB[:conn].execute(sql, @name)
    Artist.find(Artist.get_highest_id)
  end

  def self.create(name)
    a = Artist.new(name)
    a.save
  end
```
### Read

```ruby
  def self.find(id)
    sql = <<-SQL
      SELECT * FROM artists WHERE id=?
    SQL

    artist_hash = DB[:conn].execute(sql, id)[0]
    Artist.parse_artist(artist_hash)
  end
```

### Update

```ruby
  def update(new_name)
    sql = <<-SQL
      UPDATE artists SET name=? WHERE id=?;
    SQL

    DB[:conn].execute(sql, new_name, @id)
    Artist.find(@id)
  end
```

### Delete

```ruby
  def self.delete(id)
    if !Artist.find(id)
      puts "CAN'T DELETE WHAT AINT THERE"
      return false
    end

    sql = <<-SQL
      DELETE FROM artists WHERE id=?;
    SQL

    DB[:conn].execute(sql, id)

    !Artist.find(id)
  end
```

### Fetch all

```ruby
  def self.all
    sql = <<-SQL
      SELECT * FROM artists
    SQL

    DB[:conn].execute(sql).map do |artist_hash|
      Artist.parse_artist(artist_hash)
    end
  end
```
