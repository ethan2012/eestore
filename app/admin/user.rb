ActiveAdmin.register User do
  permit_params :email, :password, :password_confirmation

  index do
    selectable_column
    id_column
    column :email
    column :full_name
    column :sign_in_count
    column :created_at
    actions
  end

  show do
    panel "用户资料" do
      attributes_table_for user.profile do
        row :address
        row :full_name
        row :id_number
      end
    end
    panel "证件照片" do
      ul do
        user.user_id_images.map do |i|
          li do
            span do
              image_tag(i.avatar)
            end
          end
        end
      end
    end


  end

  # if !current_user.publish_product
    action_item only: [:show] ,
      if: proc{ !user.publish_product } do
      link_to "审核通过", approve_admin_user_path(user)
    end
  # end



  member_action :approve, method: :get do
    redirect_to resource_path, notice: "Approved!"
  end

  controller do
    # This code is evaluated within the controller class

    def approve
      user = User.find(params[:id])
      r = Role.find_by(name: "product")
      puts r.inspect
      user.roles << r
      redirect_to admin_user_path(params[:id])
    end
  end

end