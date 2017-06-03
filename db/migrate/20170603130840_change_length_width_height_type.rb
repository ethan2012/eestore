class ChangeLengthWidthHeightType < ActiveRecord::Migration[5.0]
  def self.up
    change_table :product_infos do |t|
      t.change :length, :float
      t.change :width, :float
      t.change :height, :float
    end
  end
  def self.down
    change_table :product_infos do |t|
      t.change :length, :decimal
      t.change :width, :decimal
      t.change :height, :decimal
    end
  end
end
