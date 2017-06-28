class Comment < ActiveRecord::Base
  validates :body, :author_id, :story_id, presence: true
  after_initialize :add_date


  has_many :likes, as: :likeable
  accepts_nested_attributes_for :likes

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: 'User'

  belongs_to :story,
  primary_key: :id,
  foreign_key: :story_id,
  class_name: 'Story'

  def add_date
    self.date = Date.today
  end

end
