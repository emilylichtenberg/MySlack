Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  mount ActionCable.server, at: '/cable'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :chats, only: [:index, :show, :create, :destroy]
    resources :workspaces, only: [:index, :show, :create, :destroy]
  end
end
