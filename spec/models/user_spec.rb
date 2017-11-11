# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  username           :string           not null
#  password_digest    :string           not null
#  session_token      :string           not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  bio                :string
#

require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) { create :user }
  describe 'validations' do 
    it { should validate_presence_of :username }
    it { should validate_presence_of :password_digest }
    context 'no password digest explicitly set' do 
      it 'should validate presence of password_digest' do 
        expect(user.password_digest).to_not be nil
      end  
    end 
    it 'should have a default image if none set' do 
        expect(user.image.url).to_not be nil 
    end 
    it 'should have a session token set automatically at validation' do 
      expect(user.session_token).to_not be nil
    end 
    it 'should have a bio set automatically at validation' do 
        expect(user.bio).to_not be nil
    end 

    it 'should not save passwords to the database' do
      saved_user = User.find(user.id)
      expect(saved_user.password).to be nil
    end 
  end 

  describe 'associations' do 
    it {should have_many :followees }
    it { should have_many :followers }
    it { should have_many :bookmarks }
    it { should have_many :bookmarked_stories }
    it { should have_many :liked_stories }
    it { should have_many :liked_comments }
    it { should have_many :stories }
    it { should have_many :comments }
    it { should have_many :followee_follows }
    it { should have_many :feed_stories }
    it { should have_many :follower_follows }
  end 

  describe 'class methods' do  
    describe '::find_by_credentials' do 
      it 'finds user when given correct password' do 
        with_correct_password = User.find_by_credentials(user.username, user.password)
        expect(with_correct_password).to_not be nil
      end 
      it 'finds nothing when given the wrong password' do 
        with_incorrect_password = User.find_by_credentials(user.username, "imahaxor")
        expect(with_incorrect_password).to be nil
      end
    end 
  end 
end
