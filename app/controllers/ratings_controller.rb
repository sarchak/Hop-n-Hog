class RatingsController < ApplicationController
  before_filter :authenticate_user!
 
      def create
              @menu = Menu.find_by_id(params[:menu_id])
              if current_user.id == @menu.id
                  redirect_to menu_path(@menu), :alert => "You cannot rate for your own menu"
              else
                  @rating = Rating.new(params[:rating])
                  @rating.menu_id = @menu.id
                  @rating.user_id = current_user.id
                  if @rating.save
                      respond_to do |format|
                          format.html { redirect_to menu_path(@menu), :notice => "Your rating has been saved" }
                          format.js
                      end
                  end
              end
      end

          def update
              @menu = Menu.find_by_id(params[:menu_id])
              if current_user.id == @menu.id
                  redirect_to menu_path(@menu), :alert => "You cannot rate for your own menu"
              else
                  @rating = current_user.ratings.find_by_menu_id(@menu.id)
                  if @rating.update_attributes(params[:rating])
                      respond_to do |format|
                          format.html { redirect_to menu_path(@menu), :notice => "Your rating has been updated" }
                          format.js
                      end
                  end
              end
          end
          def show
            @rating  = Rating.order("value desc").limit(3);
            @menu_id = Rating.select("menu_id").order("avg(value) desc").group("menu_id").limit(3);
          end
          def topn
            @rating = Rating.order('value desc').limit(0);
      
            @menu = Menu.find_by_id(@rating.menu_id)
            respond_to do |format|
                format.html 
                format.js
            end
          end
  
end
