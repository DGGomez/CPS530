class CreatePurchases < ActiveRecord::Migration[6.0]
  def change
    create_table :purchases do |t|
      t.string :user
      t.string :item
      t.string :quantity

      t.timestamps
    end
  end
end
