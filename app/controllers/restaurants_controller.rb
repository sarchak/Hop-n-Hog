class RestaurantsController < ApplicationController
  def index
    @restaurant = Restaurant.all
  end
  def new
    @restaurant = Restaurant.new
  end
  def show
    @restaurant = Restaurant.find(:id)
    respond_to do |format|
      format.html
      format.json { render json=>@restaurant}
    end
  end
end
