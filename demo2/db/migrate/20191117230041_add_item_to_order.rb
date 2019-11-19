class AddItemToOrder < ActiveRecord::Migration[6.0]
  def change
    add_column :orders, :item, :string
  end
end
