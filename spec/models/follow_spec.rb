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

require 'rails_helper'

RSpec.describe Follow, type: :model do
  subject(:follow) { create :follow}
  describe 'validations' do 
    it { should validate_presence_of :follower_id }
    it { should validate_presence_of :author_id }
    it { should validate_uniqueness_of(:follower_id).scoped_to(:author_id) }
  end 

  describe 'associations' do 
    it { should belong_to :follower }
    it { should belong_to :author }
  end 
end
