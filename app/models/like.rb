# == Schema Information
#
# Table name: likes
#
#  id            :integer          not null, primary key
#  likeable_id   :integer
#  likeable_type :string
#  created_at    :datetime
#  updated_at    :datetime
#  user_id       :integer          not null
#

class Like < ActiveRecord::Base
  validates :user_id, :likeable_type, :likeable_id, presence: true
  validates :likeable_type, :uniqueness => {
    scope: [:likeable_id]
  }

  belongs_to :likeable, polymorphic: true  
  belongs_to :user
end
