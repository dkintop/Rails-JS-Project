class RenameTypeColumnToElementType < ActiveRecord::Migration[6.0]
  def change
    rename_column :fokemons, :type, :element_type
    #Ex:- rename_column("admin_users", "pasword","hashed_pasword")
  end
end
