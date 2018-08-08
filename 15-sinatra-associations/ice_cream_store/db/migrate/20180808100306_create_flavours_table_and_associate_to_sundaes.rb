class CreateFlavoursTableAndAssociateToSundaes < ActiveRecord::Migration
  def change
    create_table :flavours do |t|
      t.string :name
    end

    create_table :sundae_flavours do |t|
      t.belongs_to :sundae
      t.belongs_to :flavour
    end
  end
end
