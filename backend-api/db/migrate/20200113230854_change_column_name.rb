class ChangeColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :Users, :password, :password_digest
    #Ex:- rename_column("admin_users", "pasword","hashed_pasword")
  end
end
