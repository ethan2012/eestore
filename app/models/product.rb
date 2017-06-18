class Product < ApplicationRecord
  belongs_to :user
  belongs_to :category_bottom
  has_many :product_images, dependent: :destroy
  has_one :product_info, dependent: :destroy

  def avatar
    if self.product_images.present? 
      self.product_images[0].avatar
    else
      nil
    end
  end

  def as_json(options={})
    super((options || {}).merge({
        methods: [:category_bottom, :avatar, :product_info]
    }))
  end
end
