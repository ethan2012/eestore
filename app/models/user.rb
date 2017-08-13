class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_one :profile
  has_many :user_id_images, dependent: :destroy

  has_and_belongs_to_many :roles
  def admin?
    false
  end

  def publish_product
  	self.roles.include? "product"
  end

  def address
    self.profile.address
  end

  def full_name
    self.profile.full_name
  end

  def id_number
    self.profile.id_number
  end

  def id_images
    if self.user_id_images.present? 
      id_images = []
      self.user_id_images.each do |image|
        id_images << image.avatar
      end
    end
    id_images
  end

  def as_json(options={})
    super((options || {}).merge({
        methods: [:address, :full_name, :id_number, :id_images]
    }))
  end
end
