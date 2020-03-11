class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.string :description
      t.string :size
      t.string :category
      t.decimal :price
      t.timestamps
    end
    add_index :products, :name, unique: true
  end
end
