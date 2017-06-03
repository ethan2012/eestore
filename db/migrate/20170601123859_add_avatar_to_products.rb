class AddAvatarToProducts < ActiveRecord::Migration[5.0]
  def self.up
    add_attachment :products, :avatar
  end

  def self.down
    remove_attachment :products, :avatar
  end
end
