class CreateRestaurantsTable < ActiveRecord::Migration
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :neighborhood
    end
  end
end
