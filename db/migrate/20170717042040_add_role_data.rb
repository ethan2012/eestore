class AddRoleData < ActiveRecord::Migration[5.0]
  def self.up
  	Role.create(name: "product")
  end
  def self.down
  	Role.where(:name => "product").destroy_all
  end
end
