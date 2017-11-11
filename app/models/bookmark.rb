# == Schema Information
#
# Table name: bookmarks
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  story_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Bookmark < ActiveRecord::Base
  validates :user_id, :story_id, presence: true

  # validates :user, :uniqueness => {
  #   scope: [:user_id, :story_id]
  # }

  validates :user_id, :uniqueness => {
    scope: [:story_id]
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
