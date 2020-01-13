class ChangeDefaultValueOfWinsAndLosses < ActiveRecord::Migration[6.0]
  def change
    change_column :Users, :wins, :integer, default: 0
    #Ex:- change_column("admin_users", "email", :string, :limit =>25)
  end
end
