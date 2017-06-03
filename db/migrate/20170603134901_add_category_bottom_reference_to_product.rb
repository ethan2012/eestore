class AddCategoryBottomReferenceToProduct < ActiveRecord::Migration[5.0]
  def change
    add_reference :products, :category_bottom, foreign_key: true
  end
end
