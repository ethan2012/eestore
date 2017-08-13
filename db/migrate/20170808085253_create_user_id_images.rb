class CreateUserIdImages < ActiveRecord::Migration[5.0]
  def change
    create_table :user_id_images do |t|

      t.timestamps
    end
  end
end
