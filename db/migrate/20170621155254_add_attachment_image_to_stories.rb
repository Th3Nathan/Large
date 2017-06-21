class AddAttachmentImageToStories < ActiveRecord::Migration
  def self.up
    change_table :stories do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :stories, :image
  end
end
