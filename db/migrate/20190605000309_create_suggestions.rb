class CreateSuggestions < ActiveRecord::Migration[5.1]
  def change
    create_table :suggestions do |t|
      t.string :name
      t.string :description
      t.date :planned_date
      t.integer :category
      t.integer :kata_leader

      t.timestamps
    end
  end
end
