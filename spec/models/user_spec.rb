require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) { User.create(username: "nathan", password: "password") }
  describe 'validations' do 
    it 'should validate presence of username' do 
      user = User.new(password_digest: "password_digest", session_token: "session token")
      expect(user.valid?).to be false
    end 
    it { should validate_presence_of :username }
    it { should validate_presence_of :password_digest }
    context 'no password digest explicitly set' do 
      user = User.new(username: "username", password: "password", session_token: "session token")
      it 'should validate presence of password_digest' do 
        expect(user.password_digest).to_not be nil
      end  
    end 
    it 'should have a session token set automatically at validation' do 
      user = User.new(username: "username", password: "password", session_token: "session token")
      user.valid? 
      expect(user.session_token).to_not be nil
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
  end 
  describe 'class methods' do  
    describe '::find_by_credentials' do 
      it 'finds user when given correct password' do 
        user
        with_correct_password = User.find_by_credentials("nathan", "password")
        expect(with_correct_password).to_not be nil
      end 
      it 'finds nothing when given the wrong password' do 
        user
        with_incorrect_password = User.find_by_credentials("nathan", "imahaxor")
        expect(with_incorrect_password).to be nil
      end
    end 
  end 
end
