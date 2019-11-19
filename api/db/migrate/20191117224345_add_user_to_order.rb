class AddUserToOrder < ActiveRecord::Migration[6.0]
  def change
    add_column :orders, :user, :string
  end
end
