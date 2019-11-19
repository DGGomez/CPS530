class RemoveIdFromOrder < ActiveRecord::Migration[6.0]
  def change

    remove_column :orders, :id, :integer
  end
end
