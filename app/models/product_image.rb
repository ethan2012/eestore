class ProductImage < ApplicationRecord
  belongs_to :product
  has_attached_file :avatar, styles: {
    original: '200x200#',
  }
  # Validate the attached image is image/jpg, image/png, etc
  validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/
end
