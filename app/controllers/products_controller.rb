class ProductsController < ApplicationController
  def new
    @tops = CategoryTop.all
    @middles = CategoryMiddle.all
    @bottoms = CategoryBottom.all
  end

  def create
    @product = Product.new(product_params)

    if @product.save
      redirect_to @product, notice: 'Friend was successfully created.'
     else
       render action: 'new'
    end
  end

  private

  def product_params
    params.require(:product).permit(:avatar, :name)
  end
end
