class AddUserReferenceToUserIdImage < ActiveRecord::Migration[5.0]
  def up
  	add_reference :user_id_images, :user, foreign_key: true
  end
  def down
  	remove_reference :user_id_images, :user
  end
end
