class ProductsController < ApplicationController
  def new
    @tops = CategoryTop.all
    @middles = CategoryMiddle.all
    @bottoms = CategoryBottom.all
  end
end
