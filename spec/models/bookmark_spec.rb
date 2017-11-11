# == Schema Information
#
# Table name: bookmarks
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  story_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Bookmark, type: :model do
  subject(:bookmark) { create :bookmark}
  describe 'validations' do 
    it { should validate_presence_of :user_id }
    it { should validate_presence_of :story_id }
    it { should validate_uniqueness_of(:user_id).scoped_to(:story_id) }
  end 

  describe 'associations' do 
    it { should belong_to :story }
    it { should belong_to :user }
  end 
end
