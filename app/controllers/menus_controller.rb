class MenusController < ApplicationController

  def index
      #@menu = Menu.find(:all, :order=>"created_at desc",:limit=>20)
      @menu = Menu.where("created_at > ?", Time.at(params[:after].to_i+1)).order('created_at desc');

  end
  def new
    @menu = Menu.new
  end
  def create
    @menu = current_restaurant.menus.build(params[:menu])  
    @menu.save
    redirect_to "/menus/#{@menu.id}"
  end
  def show
    @menu = Menu.find(params[:id])
  end
end
