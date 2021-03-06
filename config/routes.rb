Rails.application.routes.draw do
   root to: 'static_pages#root'
   namespace :api, defaults: {format: :json} do
     resources :stories
     resources :users, only: [:create, :index, :show, :update]
     resources :comments
     resource :session, only: [:create, :destroy]
     post "users/:id/follow", to: "users#follow"
     post "users/:id/unfollow", to: "users#unfollow"
     post "stories/feed", to: "stories#feed"
   end
end
