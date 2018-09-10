class CreatePokemons < ActiveRecord::Migration[5.2]
  def change
    create_table :pokemons do |t|
      t.belongs_to :user, foreign_key: true
      t.string :name
      t.string :image

      t.timestamps
    end
  end
end
