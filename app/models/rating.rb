class Rating < ActiveRecord::Base

  attr_accessible :value,:menu_id,:user_id
  belongs_to :user
  belongs_to :menu
end
# == Schema Information
#
# Table name: ratings
#
#  id         :integer         not null, primary key
#  user_id    :string(255)
#  menu_id    :string(255)
#  value      :integer
#  created_at :datetime
#  updated_at :datetime
#

