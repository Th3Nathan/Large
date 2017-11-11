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

FactoryBot.define do
    factory :like do
        user_id 1
        likeable_type "Story"
        likeable_id 1 
    end
  end
  
