require 'rails_helper'
require 'helper_methods'

RSpec.describe Api::UsersController, type: :controller do
  render_views
  include Helpers
  subject(:user) { build :user }
  
  describe 'GET #index' do
    before(:each) { login } #starts with one user
    it 'sends a list of users' do
      create_list(:user, 9) #nine more users = 10
      get :index, format: :json
      expect(response).to be_success 
      expect(json.length).to eq(10)
    end
  end

  describe 'GET #show' do 
    let(:user) { create :user, id: 1 }
    before(:each) { login }
    context 'with valid user id' do 
      it 'sends a user' do 
        get :show, format: :json, id: 1
        expect(response).to be_success 
        expect(json['username']).to eq(user.username)
      end 
    end 
    context 'with invalid user id' do 
      it 'will not render show' do 
        begin 
           get :show, format: :json, id: 90
        rescue 
           expect(response).to_not render_template :show 
        end   
      end 
    end 
  end 

  describe 'POST #create' do 
    let(:user) { build :user }
    context 'with a valid params' do
      valid_params = { username: 'validname', password: 'validpassword' }
      it 'logs in user' do 
        #testing implementation rather than behavior?
        expect(controller).to receive(:login).and_call_original
        post :create, format: :json, user: valid_params
      end 
      it 'sends user' do 
        post :create, format: :json, user: valid_params
        expect(response).to render_template :show
      end 
    end 
    context 'with invalid params' do 
      invalid_params = { bad: 'justhaxingyaserver' }
      it 'sends 422 status' do 
        begin 
          post :create, format: :json, user: invalid_params
        rescue 
          expect(response).to have_http_status 422
        end 
      end 
    end 
  end 

  describe 'POST #follow' do 
    let(:followee) { create :user }
    before(:each) { login }
    it 'sends updated user upon success' do 
      post :follow, format: :json, id: followee.id 
      expect(user.followees.include?(followee)).to be true
    end 
    it 'renders json message if already following' do 
      user.followees = [followee]
      user.save 
      post :follow, format: :json, id: followee.id 
      expect(response.body).to eq("Already follows")
    end 
  end 

  describe 'POST #unfollow' do 
    before(:each) { login }
    let(:followee) { create :user }
    it 'causes followee to be removed from current users followers' do 
      user.followees = [followee]
      user.save 
      post :unfollow, format: :json, id: followee.id 
      expect(user.reload.followees.include?(followee)).to be false 
    end 
  end 

  describe 'PATCH #update' do 
    before(:each) { login }
    let(:guest) { create :user, username: "Guest" }
    it 'returns user without updating if user is demo' do 
      patch :update, format: :json, :id => guest.id, :user => {username: 'HAXEST'}
      expect(guest.reload.username).to eq("Guest")
    end  
    it 'updates user with valid params' do 
      patch :update, format: :json, :id => user.id, :user => { username: "New Name"}
      expect(user.reload.username).to eq("New Name")
    end 
    it 'sends 422 with invalid params' do 
      patch :update, format: :json, :id => user.id, :user => { username: nil}
      expect(response).to have_http_status 422
    end 
  end 
end

 