# == Schema Information
#
# Table name: stories
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :string           not null
#  author_id  :integer          not null
#  date       :date             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Story < ActiveRecord::Base
  validates :title, :body, :author_id, :date, :description, presence: true
  has_attached_file :image, default_url: "/images/logo.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: 'User'
end
