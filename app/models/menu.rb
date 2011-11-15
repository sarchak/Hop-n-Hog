class Menu < ActiveRecord::Base
  attr_accessible :starter, :main_course, :desserts, :special, :discount, :restaurant_id, :description, :cuisines, :address,:latitude, :longitude
  
  belongs_to :restaurant
  geocoded_by :address
  after_validation :geocode, :if => :address_changed?
  
end
# == Schema Information
#
# Table name: menus
#
#  id            :integer         not null, primary key
#  starter       :string(255)
#  main_course   :text
#  desserts      :string(255)
#  special       :string(255)
#  discount      :string(255)
#  restaurant_id :string(255)
#  description   :text
#  created_at    :datetime
#  updated_at    :datetime
#  cuisines      :string(255)
#  address       :string(255)
#  latitude      :float
#  longitude     :float
#

