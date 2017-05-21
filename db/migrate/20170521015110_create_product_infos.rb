class CreateProductInfos < ActiveRecord::Migration[5.0]
  def change
    create_table :product_infos do |t|
      t.references :product, foreign_key: true
      t.string :description
      t.decimal :length
      t.decimal :width
      t.decimal :height
      t.decimal :weigth

      t.timestamps
    end
  end
end
