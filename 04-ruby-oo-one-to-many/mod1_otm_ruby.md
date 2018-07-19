# One to many relationships

## Introducing topic

- Model: A class whose primary responsibility is to store data. It's going to be more apparent as to why when we get to build apps with databases.

- Domain: The subject matter of the problem we're going to be coding the solution for.

- Domain Modelling: Creating models for your domain to represent real or abstract ideas.

- Relationships: How one model or thing is connected to other model/thing.
  - One to many: A relationship describing a single model that contains or keeps tracks of other models.
    - A tree has many leaves.
    - An organism has many cells
    - The universe has many galaxies
  - Many to many: next time
  - Other relationships: next time

## Let's DRAW!
[aww](https://awwapp.com/#)

## What will we build?

```
* Create a User class. The class should have these methods:
  * `#initialize` which takes a username and have
  * a reader method for the username
  * `#tweets` that returns an array of Tweet instances
  * `#post_tweet` that takse a message, creates a new tweet, and adds it to the user's tweet collection
* Create a Tweet class. The class should have these methods:
  * `Tweet#message` that returns a string
  * `Tweet#user` that returns an instance of the user class
  * `Tweet.all` that returns all the Tweets created.
  * `Tweet#username` that returns the username of the tweet's user
```

## Implementing one to many relationships
Remember we're now operating on objects. Not strings, not numbers, always objects. The arrays we're going to iterate over today are going to be little collections of objects, relevant to whatever cause/domain we're going to dwindle in.

### One object can have many objects.

GANGS AND MEMBERS through blood oaths

## Passing custom objects as arguments to methods

Let's put some actual tweets into the user class and show how that thing works!

## Single Source of Truth (SSoT)

OOOps! (Object Oriented Oops) We're not entirely controlling th e contents of the SSoT - tweets are actually being held in both places and that's not necessarily what we want. How do we remedy such a problem?

## Example code

```ruby

class User

  attr_reader :username, :tweets

  def initialize(username)
    @username = username
    @tweets = []  # is it really ok?
  end

  def post_tweet(message)
    tweet = Tweet.new(message, self)
    add_tweet(tweet)
  end

  private

  def add_tweet(tweet)
    self.tweets << tweet
  end
end

class Tweet
  attr_reader :message, :user

  @@all = []

  def initialize(message, user)
    @message = message
    @user = user

    @@all << self
  end

  def self.all
    @@all
  end
end
```

Wouldn't it be better if we did that... ?

```ruby

class User

  def tweets
    Tweet.all.select do |tweet|
      tweet.user == self
    end
  end

  def post_tweet(message)
    Tweet.new(self, message)
  end
end
```
