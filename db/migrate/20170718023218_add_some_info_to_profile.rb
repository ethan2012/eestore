class AddSomeInfoToProfile < ActiveRecord::Migration[5.0]
  def self.up
    add_reference :profiles, :user, foreign_key: true
    add_column :profiles, :address, :string
    add_column :profiles, :name, :string
    add_column :profiles, :id_number, :string
  end
  def self.down
    remove_reference :profiles, :user
    remove_column :profiles, :address, :string
    remove_column :profiles, :name, :string
    remove_column :profiles, :id_number, :string
  end
end
