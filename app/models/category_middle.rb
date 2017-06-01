class CategoryMiddle < ApplicationRecord
  belongs_to :category_top
  has_many :category_bottoms
end
