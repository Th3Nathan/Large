# == Schema Information
#
# Table name: follows
#
#  id          :integer          not null, primary key
#  follower_id :integer          not null
#  author_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#



class Follow < ActiveRecord::Base
  validates :follower_id, :author_id, presence: true

  validates :follower_id, :uniqueness => {
    scope: [:author_id]
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
