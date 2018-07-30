class CreateFirefighterModel < ActiveRecord::Migration[5.2]
  def change
    create_table :firefighters do |t|
      t.string :name
      t.integer :division
    end
  end
end
