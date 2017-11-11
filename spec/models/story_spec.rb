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

require 'rails_helper'

RSpec.describe Story, type: :model do
  subject(:story) { build :story }
  describe 'validations' do 
    it { should validate_presence_of :title }
    it { should validate_presence_of :body }
    it { should validate_presence_of :author_id }
    it { should validate_presence_of :description }
    it { should validate_presence_of :date }
    it 'should have a default image if none set' do 
        expect(story.image.url).to_not be nil 
    end 
  end 

  describe 'associations' do 
    it { should accept_nested_attributes_for :likes }
    it { should accept_nested_attributes_for :bookmarks }    
    it { should have_many :likers }
    it { should have_many :comments }
    it { should have_many :comment_authors }
    it { should have_many :bookmarks }
    it { should have_many :bookmarking_users }
    it { should belong_to :author }
  end 
end
