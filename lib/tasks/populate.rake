namespace :db do
  desc "Erase and fill database"
  task :populate => :environment do
    require 'populator'
    require 'faker'
    [Restaurant].each(&:delete_all)
    cnt = 1
    Restaurant.populate 20 do |restaurant|
     
      restaurant.encrypted_password = "welcome"
      restaurant.name = Populator.words(1..2).titleize
      restaurant.address = Faker::Address.street_address
      restaurant.phone_number = Faker::PhoneNumber.phone_number
      restaurant.cuisine = Populator.words(1)
      restaurant.email = Faker::Internet.email
      restaurant.website = Faker::Internet.domain_name
      restaurant.description = Populator.sentences(2..10)
      restaurant.city = Faker::Address.city
      restaurant.zipcode = Faker::Address.zip_code
      restaurant.state = Faker::Address.us_state_abbr

    end
  end
end