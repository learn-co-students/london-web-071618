require 'pry'

class User

  attr_reader :username, :tweets

  def initialize(username)
    @username = username
  end

  def tweets
    Tweet.all.select do |tweet|
      tweet.user == self
    end
  end

  def post_tweet(message)
    tweet = Tweet.new(message, self)
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

dan = User.new('dan')
brooke = User.new('brooke')
luoana = User.new('luoana')

dan.post_tweet('hi im on twitter')
dan.post_tweet('you all should be on twitter')
dan.post_tweet('im not asking')

brooke.post_tweet('hello world')

luoana.post_tweet('I\'m on twitter too!')

binding.pry

puts 'hello world'
