class MenusController < ApplicationController
  
  def index
    @menu = Menu.all
  end
  def new
    @menu = Menu.new
  end
  def create
    @menu = current_restaurant.menus.build(params[:menu])  
    @menu.save
  end
  def show
    @menu = Menu.find(params[:id])
  end
end
