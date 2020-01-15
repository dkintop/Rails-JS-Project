class ChangeColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :trainers, :pokemon_id, :fokemon_id
    #Ex:- rename_column("admin_users", "pasword","hashed_pasword") :trainers, :column_name, :column_type, :column_options
    #Ex:- change_column("admin_users", "email", :string, :limit =>25)
  end
end
