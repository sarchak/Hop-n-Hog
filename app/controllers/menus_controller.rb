class MenusController < ApplicationController

  def index
     
      if(params[:address].present?)
        @currloc = params[:address]
      else
         @currloc = "630 park view drive santa clara"
      end

      @menu = Menu.near(@currloc).where("created_at > ?", Time.at(params[:after].to_i+1)).order('created_at desc').limit(20);

  end
  def sidebar
    if(params[:address].present?)
      @currloc = params[:address]
    else
       @currloc = "630 park view drive santa clara"
    end
    if(params[:cuisines].present?)
      @menu=Menu.near(@currloc).where("cuisines == ?",params[:cuisines]).order('created_at desc').limit(20);
    end
  end
  def new
    @menu = Menu.new
  end
  def topn
    @menu  = Rating.order('value desc').limit(1);
    respond_to do |format|
      format.html
      format.js
    end
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
