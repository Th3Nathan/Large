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
  validates :id, :title, :body, :author_id, :date, presence: true
  has_attached_file :image, default_url: "/images/logo.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
end
