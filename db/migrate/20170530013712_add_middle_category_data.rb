class AddMiddleCategoryData < ActiveRecord::Migration[5.0]
  def self.up
    default_category_top = CategoryTop.find_by(name: "default")
    CategoryMiddle.create(name: "母婴产品", category_top: default_category_top)
    CategoryMiddle.create(name: "医药保健品", category_top: default_category_top)
    CategoryMiddle.create(name: "生活日用品", category_top: default_category_top)
    CategoryMiddle.create(name: "服装类", category_top: default_category_top)
    CategoryMiddle.create(name: "包包", category_top: default_category_top)
    CategoryMiddle.create(name: "化妆品", category_top: default_category_top)
    CategoryMiddle.create(name: "电器", category_top: default_category_top)
    CategoryMiddle.create(name: "电子数码", category_top: default_category_top)
    CategoryMiddle.create(name: "食品", category_top: default_category_top)
    CategoryMiddle.create(name: "其他", category_top: default_category_top)
  end

  def self.down
    CategoryMiddle.where(:name => "母婴产品").destroy_all
    CategoryMiddle.where(:name => "医药保健品").destroy_all
    CategoryMiddle.where(:name => "生活日用品").destroy_all
    CategoryMiddle.where(:name => "服装类").destroy_all
    CategoryMiddle.where(:name => "包包").destroy_all
    CategoryMiddle.where(:name => "化妆品").destroy_all
    CategoryMiddle.where(:name => "电器").destroy_all
    CategoryMiddle.where(:name => "电子数码").destroy_all
    CategoryMiddle.where(:name => "食品").destroy_all
    CategoryMiddle.where(:name => "其他").destroy_all
  end
end
