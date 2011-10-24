class RestaurantsController < ApplicationController
  def index
    @restaurant = Restaurant.find_by_email(current_restaurant.email)
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
