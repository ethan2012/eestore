class CreateUsersAndRoles < ActiveRecord::Migration[5.0]
  def up
    create_table :roles_users, :id => false do |t|
      t.belongs_to :user, index: true
      t.belongs_to :role, index: true
    end
  end

  def down
    drop_table :roles_users
  end
end
