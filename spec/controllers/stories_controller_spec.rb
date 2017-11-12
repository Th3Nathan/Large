require 'rails_helper'
require 'helper_methods'

RSpec.describe Api::StoriesController, type: :controller do
    render_views
    include Helpers
    let(:user) { create :user }
    subject(:story) { create :story, author_id: user.id }
    describe 'GET #index' do
      before(:each) { login } 
      it 'sends a list of stories' do
        create_list(:story, 10, author_id: user.id) 
        get :index, format: :json
        expect(response).to be_success 
        expect(json.length).to eq(10)
      end
    end
  
    describe 'GET #show' do 
      before(:each) { login }
      context 'with valid story id' do 
        it 'sends the story' do 
          get :show, format: :json, id: story.id
          expect(response).to be_success 
          expect(json['id']).to eq(story.id)
        end 
      end 
      context 'with invalid story id' do 
        it 'will not render show' do 
          begin 
             get :show, format: :json, id: 999
          rescue 
             expect(response).to_not render_template :show 
          end   
        end 
      end 
    end 
  
    describe 'POST #create' do 
      before(:each) { login }
      let(:story) { build :story }
      context 'with a valid params' do
        it 'saves story' do 
          post :create, format: :json, story: valid_story_params(user.id)
          expect(Story.find_by_title(valid_story_params(user.id)[:title])).to_not be nil
        end 
        it 'sends story' do 
          post :create, format: :json, story: valid_story_params(user.id)
          expect(response).to render_template :show
        end 
      end 
      context 'with invalid params' do 
        invalid_params = { bad: 'justhaxingyaserver' }
        it 'sends 422 status' do 
          begin 
            post :create, format: :json, story: invalid_params
          rescue 
            expect(response).to have_http_status 422
          end 
        end 
      end 
    end 
  
    describe 'PATCH #update' do 
      before(:each) { login }
      it 'updates story with valid params' do 
        patch :update, format: :json, :id => story.id, :story => { title: "New Title"}
        expect(story.reload.title).to eq("New Title")
      end 
      it 'sends 422 with invalid params' do 
        patch :update, format: :json, :id => story.id, :story => { title: nil}
        expect(response).to have_http_status 422
      end 
    end 

    describe 'DELETE #destroy' do 
        it 'removes a story' do 
          delete :destroy, format: :json, :id => story.id 
          expect(Story.find_by_id(story.id)).to be nil    
        end 
    end 

    describe 'POST #feed' do 
        it 'only sends stories written by followed users' do 
            login 
            followed_user = create :user
            unfollowed_user = create :user 
            feed_story = create :story, author_id: followed_user.id 
            notfeed_story = create :story, author_id: unfollowed_user.id
            user.followees = [followed_user]
            user.save 
            post :feed, format: :json 
            expect(json.keys).to include(feed_story.id.to_s)
            expect(json.keys).to_not include(notfeed_story.id.to_s)
        end 
    end 
end
