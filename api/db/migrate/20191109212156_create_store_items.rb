class CreateStoreItems < ActiveRecord::Migration[6.0]
  def change
    create_table :store_items do |t|
      t.string :name
      t.decimal :price
      t.decimal :in_stock
      t.string :photo_url

      t.timestamps
    end
  end
end
