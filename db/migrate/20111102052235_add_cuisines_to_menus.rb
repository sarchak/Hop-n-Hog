class AddCuisinesToMenus < ActiveRecord::Migration
  def change
    add_column :menus, :cuisines, :string
  end
end
