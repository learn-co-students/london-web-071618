class CreateSundaesTable < ActiveRecord::Migration
  def change
    create_table :sundaes do |t|
      t.string :name
      t.belongs_to :user
    end
  end
end
