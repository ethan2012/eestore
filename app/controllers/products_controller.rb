class ProductsController < ApplicationController
  def new
    @tops = CategoryTop.all
    @middles = CategoryMiddle.all
    @bottoms = CategoryBottom.all
  end

  def create
    @product = Product.new(
      name: params[:name], 
      user: current_user, 
      price: params[:price].to_f,
      number: params[:number].to_f,
      category_bottom_id: params[:bottom_id].to_i
    )

    if @product.save
      params[:photo].each do |key, value|
        @product.product_images.create(:avatar=> value)
      end
      ProductInfo.create(
        length: params[:length].to_f,
        width: params[:width].to_f,
        height: params[:height].to_f,
        weight: params[:weight].to_f,
        description: params[:description],
        product: @product
      )
    end
    respond_to do |format|
      format.json { render :json => { :product => @product } }
    end
  end

  def show
    @product = Product.find(params[:id])
  end

  private

end
