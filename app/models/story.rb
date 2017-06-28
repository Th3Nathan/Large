# == Schema Information
#
# Table name: stories
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  body               :string           not null
#  author_id          :integer          not null
#  date               :date             not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  description        :string
#

class Story < ActiveRecord::Base
  validates :title, :body, :author_id, :description, presence: true
  has_attached_file :image, default_url: "/images/logo.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  after_initialize :add_date


  has_many :likes, as: :likeable
  accepts_nested_attributes_for :likes
  has_many :likers,
    through: :likes,
    source: :user

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: 'User'

  has_many :comments,
  primary_key: :id,
  foreign_key: :story_id,
  class_name: 'Comment'

  has_many :comment_authors,
  through: :comments,
  source: :author


  def add_date
    self.date = Date.today
  end
end
