class AddAvatarToProductImages < ActiveRecord::Migration[5.0]
  def self.up
    add_attachment :product_images, :avatar
  end

  def self.down
    remove_attachment :product_images, :avatar
  end
end
