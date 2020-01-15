class CreateTrainers < ActiveRecord::Migration[6.0]
  def change
    create_table :trainers do |t|
      t.string :name
      t.integer :pokemon_id

      t.timestamps
    end
  end
end
