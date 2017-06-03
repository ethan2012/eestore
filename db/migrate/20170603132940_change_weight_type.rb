class ChangeWeightType < ActiveRecord::Migration[5.0]
  def change
  	change_table :product_infos do |t|
      t.change :weight, :float
    end
  end
end
