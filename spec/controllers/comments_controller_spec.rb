require 'rails_helper'
require 'helper_methods'

RSpec.describe Api::CommentsController, type: :controller do
    render_views
    include Helpers
    let(:user) { create :user }
    subject(:comment) { create :comment, author_id: user.id }
  
    describe 'GET #show' do 
      before(:each) { login }
      context 'with valid comment id' do 
        it 'sends the comment' do 
          get :show, format: :json, id: comment.id
          expect(response).to be_success 
          expect(json.keys.first.to_i).to eq(comment.id)
        end 
      end 
      context 'with invalid comment id' do 
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
      let(:comment) { build :comment }
      context 'with a valid params' do
        it 'saves comment' do 
          post :create, format: :json, comment: valid_comment_params
          expect(Comment.find_by_body('valid comment body')).to_not be nil
        end 
        it 'sends comment' do 
          post :create, format: :json, comment: valid_comment_params
          expect(response).to render_template :show
        end 
      end 
      context 'with invalid params' do 
        it 'sends 422 status' do 
          begin 
            post :create, format: :json, comment: invalid_params
          rescue 
            expect(response).to have_http_status 422
          end 
        end 
      end 
    end 
  
    describe 'PATCH #update' do 
      before(:each) { login }
      it 'updates comment with valid params' do 
        patch :update, format: :json, :id => comment.id, :comment => { body: "Updated Body"}
        expect(comment.reload.body).to eq("Updated Body")
      end 
      it 'sends 422 with invalid params' do 
        patch :update, format: :json, :id => comment.id, :comment => { body: nil}
        expect(response).to have_http_status 422
      end 
    end 

    describe 'DELETE #destroy' do 
        it 'removes a comment' do 
          delete :destroy, format: :json, :id => comment.id 
          expect(Comment.find_by_id(comment.id)).to be nil    
        end 
    end 
end
