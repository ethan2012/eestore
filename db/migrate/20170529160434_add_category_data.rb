class AddCategoryData < ActiveRecord::Migration[5.0]
  def self.up
    CategoryTop.create(name: "default" )
   end

  def self.down
    CategoryTop.where(:name => "default").destroy_all
  end
end
