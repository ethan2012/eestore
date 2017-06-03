class RenameWeigthToWeight < ActiveRecord::Migration[5.0]
  def change
  	rename_column :product_infos, :weigth, :weight
  end
end
