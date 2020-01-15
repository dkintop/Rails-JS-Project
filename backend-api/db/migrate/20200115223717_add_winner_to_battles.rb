class AddWinnerToBattles < ActiveRecord::Migration[6.0]
  def change
    add_column :battles, :winner, :string
  end
end
