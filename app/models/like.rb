class Like < ActiveRecord::Base
  validates :user_id, presence: true
  belongs_to :likeable, polymorphic: true

  validates :user, :uniqueness => {
    scope: [:likeable_type, :likeable_id]
  }

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: 'User'
end
