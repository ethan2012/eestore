class AddAvatarToUserIdImages < ActiveRecord::Migration[5.0]
  def self.up
    add_attachment :user_id_images, :avatar
  end

  def self.down
    remove_attachment :user_id_images, :avatar
  end
end
