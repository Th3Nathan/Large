require 'rails_helper'

RSpec.describe Like, type: :model do
  subject(:like) { create :like}
  describe 'validations' do 
    it { should validate_presence_of :user_id }
    it { should validate_presence_of :likeable_type }
    it { should validate_presence_of :likeable_id }    
    it { should validate_uniqueness_of(:likeable_type).scoped_to(:likeable_id) }
  end 

  describe 'associations' do 
    it { should belong_to :likeable }
    it { should belong_to :user }
  end 
end
