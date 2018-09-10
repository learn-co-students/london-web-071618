class AddDefaultValueToShowAttribute < ActiveRecord::Migration[5.2]
  def change
    def up
      change_column :task, :done, :boolean, default: false
    end
    
    def down
      change_column :task, :done, :boolean, default: nil
    end
  end
end
