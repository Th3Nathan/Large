require 'rails_helper'
require 'helper_methods'

RSpec.describe Api::SessionsController, type: :controller do
    render_views
    include Helpers
    let(:user) { create :user, password: "password123" }  
  
    describe 'POST #create' do 
      context 'with a valid user' do
        it 'logs in user' do 
          post :create, format: :json, user: {username: user.username, password: user.password}
          expect(controller.view_context.current_user).to eq user 
        end 
        it 'renders show' do 
          post :create, format: :json, user: {username: user.username, password: user.password}
          expect(response).to render_template :show
        end 
      end 
      context 'with invalid params' do 
        it 'sends 422 status' do 
          begin 
            post :create, format: :json, user: invalid_params
          rescue 
            expect(response).to have_http_status 422
          end 
        end 
        it 'Adds invalid credentials message to users errors' do 
            begin 
              post :create, format: :json, user: invalid_params
            rescue 
              expect(response.body).to include("invalid credentials")
            end 
          end 
      end 
    end 

    describe 'DELETE #destroy' do 
        it 'logs out current user' do 
          login
          delete :destroy, format: :json, :id => user.id 
          expect(controller.view_context.current_user).to be nil    
        end 
    end 
end
