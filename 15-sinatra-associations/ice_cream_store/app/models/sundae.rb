class Sundae < ActiveRecord::Base
  belongs_to :user
  has_many :sundae_flavours
  has_many :flavours, through: :sundae_flavours
end
