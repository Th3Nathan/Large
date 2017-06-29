class Follow < ActiveRecord::Base
end

class Like < ActiveRecord::Base
  validates :follower_id, :author_id, presence: true

  validates :follower, :uniqueness => {
    scope: [:follower_id, :author_id]
  }

  belongs_to :follower,
  primary_key: :id,
  foreign_key: :follower_id,
  class_name: 'User'

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: 'User'

  
end
