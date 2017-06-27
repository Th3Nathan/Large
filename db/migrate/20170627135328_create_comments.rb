class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.date :date, null: false
      t.integer :author_id, null: false
      t.integer :story_id, null: false
      t.timestamps null: false
    end
    add_index :comments, :author_id
    add_index :comments, :story_id
  end
end
