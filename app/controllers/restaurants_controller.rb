class RestaurantsController < ApplicationController
  def index
    if restaurant_signed_in?
      @restaurant = Restaurant.find_by_email(current_restaurant.email)
    end
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
