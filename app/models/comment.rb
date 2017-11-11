# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  body       :string           not null
#  date       :date             not null
#  author_id  :integer          not null
#  story_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ActiveRecord::Base
  validates :date, :body, :author_id, :story_id, presence: true
  after_initialize :add_date

  has_many :likes, as: :likeable
  accepts_nested_attributes_for :likes, allow_destroy: true

  has_many :likers,
  through: :likes,
  source: :user

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
