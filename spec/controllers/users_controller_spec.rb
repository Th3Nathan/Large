require 'rails_helper'
require 'helper_methods'

RSpec.describe Api::UsersController, type: :controller do
  render_views
  include Helpers
  let(:user) { build :user }
  
  describe 'GET #index' do
    it 'sends a list of users' do
      create_list(:user, 9)
      login #adds one more user, total should be 10
      get :index, format: :json
      expect(response).to be_success 
      expect(json.length).to eq(10)
    end
  end

end

 