require 'pry'

class BankAccount

  @@all = []

  attr_accessor :user_id, :balance

  def initialize(user_id, balance)
    @user_id = user_id
    @balance = balance

    @@all << self
  end

  def deposit(amount)
    @balance = @balance + amount
  end

  def withdraw(amount)
    @balance = @balance - amount
  end

  def self.all
    @@all
  end
end

dans_bank_account = BankAccount.new(13135, 3.5)
nikis_bank_account = BankAccount.new(351, 35373183583)

binding.pry

puts 'end of file'
