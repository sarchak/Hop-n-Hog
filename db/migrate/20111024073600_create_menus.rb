class CreateMenus < ActiveRecord::Migration
  def change
    create_table :menus do |t|
      t.string :starter
      t.text :main_course
      t.string :desserts
      t.string :special
      t.string :discount
      t.string :restaurant_id
      t.text :description

      t.timestamps
    end
  end
end
