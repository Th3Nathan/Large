class Like < ActiveRecord::Base
  validates :user_id, :likeable_type, :likeable_id, presence: true
  validates :likeable_type, :uniqueness => {
    scope: [:likeable_id]
  }

  belongs_to :likeable, polymorphic: true  
  belongs_to :user
end
