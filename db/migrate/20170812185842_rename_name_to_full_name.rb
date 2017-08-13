class RenameNameToFullName < ActiveRecord::Migration[5.0]
  def change
  	rename_column :profiles, :name, :full_name
  end
end
