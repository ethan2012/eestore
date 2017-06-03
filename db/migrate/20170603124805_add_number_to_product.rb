class AddNumberToProduct < ActiveRecord::Migration[5.0]
  def up
    add_column :products, :number, :integer
  end

  def down
    remove_column :products, :number
  end
end
