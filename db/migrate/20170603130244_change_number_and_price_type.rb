class ChangeNumberAndPriceType < ActiveRecord::Migration[5.0]
  def self.up
    change_table :products do |t|
      t.change :number, :float
      t.change :price, :float
    end
  end
  def self.down
    change_table :products do |t|
      t.change :number, :decimal
      t.change :price, :decimal
    end
  end
end
