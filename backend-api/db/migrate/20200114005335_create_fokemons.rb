class CreateFokemons < ActiveRecord::Migration[6.0]
  def change
    create_table :fokemons do |t|
      t.string :name
      t.string :type, :default => "water"
      t.integer :hit_points, :default => 0
      t.integer :attack_points, :default => 0
      t.string :avatar, :default => 'https://i.ytimg.com/vi/OxgKvRvNd5o/maxresdefault.jpg'

      t.timestamps
    end
  end
end
