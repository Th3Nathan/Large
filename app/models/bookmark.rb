class Bookmark < ActiveRecord::Base
  validates :user_id, :story_id, presence: true

  validates :user, :uniqueness => {
    scope: [:user_id, :story_id]
  }

  belongs_to :story,
  primary_key: :id,
  foreign_key: :story_id,
  class_name: 'Story'

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: 'User'


end
