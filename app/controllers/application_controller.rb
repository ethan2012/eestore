class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def after_sign_in_path_for(resource)
    if resource.class == AdminUser
      admin_root_path 
    elsif resource.class == User
      user_path(current_user)
    end
  end
end
