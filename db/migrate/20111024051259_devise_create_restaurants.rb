class DeviseCreateRestaurants < ActiveRecord::Migration
  def self.up
    create_table(:restaurants) do |t|
      t.database_authenticatable :null => false
      t.recoverable
      t.rememberable
      t.trackable

      # t.encryptable
      # t.confirmable
      # t.lockable :lock_strategy => :failed_attempts, :unlock_strategy => :both
      # t.token_authenticatable

      t.string :name
      t.string :address
      t.string :phone_number
      t.string :cuisine
      t.string :website
      t.string :city
      t.string :zipcode
      t.string :state
      t.text :description
      t.string :email

      t.timestamps
    end

    add_index :restaurants, :email,                :unique => true
    add_index :restaurants, :reset_password_token, :unique => true
    # add_index :restaurants, :confirmation_token,   :unique => true
    # add_index :restaurants, :unlock_token,         :unique => true
    # add_index :restaurants, :authentication_token, :unique => true
  end

  def self.down
    drop_table :restaurants
  end
end
