class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :content
      t.boolean :done
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
