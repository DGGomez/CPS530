class RemoveOrderNumFromOrder < ActiveRecord::Migration[6.0]
  def change

    remove_column :orders, :order_num, :integer
  end
end
