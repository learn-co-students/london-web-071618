class Flavour < ActiveRecord::Base
  has_many :sundae_flavours
  has_many :sundaes, through: :sundae_flavours
end
