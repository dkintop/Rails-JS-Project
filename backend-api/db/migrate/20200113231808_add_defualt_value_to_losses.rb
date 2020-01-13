class AddDefualtValueToLosses < ActiveRecord::Migration[6.0]
  def change
    change_column :Users, :losses, :integer, default: 0
  end
end
