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

require 'rails_helper'

RSpec.describe Comment, type: :model do
  describe 'validations' do 
    it { should validate_presence_of :body }
    it { should validate_presence_of :story_id }
    it { should validate_presence_of :date }
  end 

  describe 'associations' do 
    it { should accept_nested_attributes_for :likes }
    it { should belong_to :author }
    it { should belong_to :story }
    it { should have_many :likers }
  end 
end
