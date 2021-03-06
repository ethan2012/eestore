class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_one :profile
  has_many :user_id_images, dependent: :destroy

  has_and_belongs_to_many :roles
  def admin?
    self.class == AdminUser
  end

  def publish_product
  	self.roles.include? (Role.find_by(name: "product"))
  end

  def address
    if self.profile.present?
      self.profile.address
    else
      nil
    end
  end

  def full_name
    if self.profile.present?
      self.profile.full_name
    else
      nil
    end
  end

  def id_number
    if self.profile.present?
      self.profile.id_number
    else
      nil
    end
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
