class MenusController < ApplicationController

  def index
      @currloc = "630 park view drive santa clara"
      if(params[:address].present?)
        @currloc = params[:address]
      end
      if(params[:cuisines] == "All" or !params[:cuisines])
        @menu = Menu.near(@currloc).where("created_at > ?", Time.at(params[:after].to_i+1)).order('created_at desc').limit(20);
      else
        @menu = Menu.near(@currloc).where("cuisines == ? and created_at > ?", params[:cuisines],Time.at(params[:after].to_i+1)).order('created_at desc').limit(20);
        #@menu = Menu.where("cuisines == ? and created_at > ?", params[:cuisines],Time.at(params[:after].to_i+1)).order('created_at desc').limit(20);
      end
  end
  def new
    @menu = Menu.new
  end
  def create
    @menu = current_restaurant.menus.build(params[:menu])  
    @test = Restaurant.find_by_email(restaurant_session[:email])
    
    @menu.address  = current_restaurant.address + " " + current_restaurant.city + " " + current_restaurant.state
    @menu.save
    redirect_to "/menus/#{@menu.id}"
  end
  def show
    @menu = Menu.find(params[:id])
  end
end
