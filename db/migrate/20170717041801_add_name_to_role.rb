class AddNameToRole < ActiveRecord::Migration[5.0]
  def up
    add_column :roles, :name, :string
  end

  def down
    remove_column :roles, :name
  end
end
