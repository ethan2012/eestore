class CreateCategoryBottoms < ActiveRecord::Migration[5.0]
  def change
    create_table :category_bottoms do |t|
      t.string :name
      t.references :category_middle, foreign_key: true

      t.timestamps
    end
  end
end
