class AddAddressToMenus < ActiveRecord::Migration
  def change
    add_column :menus, :address, :string
  end
end
