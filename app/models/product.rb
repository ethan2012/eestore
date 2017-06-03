class Product < ApplicationRecord
  belongs_to :user
  belongs_to :category_bottom
  has_many :product_images, dependent: :destroy
  has_one :product_info, dependent: :destroy
end
