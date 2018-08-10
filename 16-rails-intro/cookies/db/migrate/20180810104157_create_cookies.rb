class CreateCookies < ActiveRecord::Migration[5.1]
  def change
    create_table :cookies do |t|
      t.string :name
      t.integer :price

      t.timestamps
    end
  end
end
