class UsersController < ApplicationController
  load_and_authorize_resource
  def show
  end

  def update
    if @user.profile.present?
      @profile = @user.profile
      @profile.update_attributes(
        address: params[:address],
        id_number: params[:id_number],
        full_name: params[:name]
      )
      @user.email = params[:email]
      puts @profile.inspect
    else
      Profile.create(
        :address => params[:address], 
        :id_number => params[:id_number],
        :name => params[:name],
        :user => @user
      )
    end
    if @user.save && params[:photo].present?
      if @user.user_id_images.count == 2
        params[:photo].each do |key, value|
          if key == 0
            @user.user_id_images[0].update_attributes(:avatar=> value)
          else
            @user.user_id_images[1].update_attributes(:avatar=> value)
          end
          # @user.user_id_images.update_attributes(:avatar=> value)
        end
      else
        params[:photo].each do |key, value|
          @user.user_id_images.create(:avatar=> value)
        end
      end
    end
    respond_to do |format|
      format.json { render :json => { :user => @user } }
    end
  end
end
