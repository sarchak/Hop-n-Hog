class AddLongitudeLatitudeToMenus < ActiveRecord::Migration
  def change
    add_column :menus, :latitude, :float
    add_column :menus, :longitude, :float
  end
end
