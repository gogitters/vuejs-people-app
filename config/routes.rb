Rails.application.routes.draw do
  root to: 'people#index'

  namespace :api do
    namespace :v1 do
      get "/people", to: 'people#index'
      post "/people", to: 'people#create'
      get "/people/:id", to: 'people#show'
      delete "/people/:id", to: 'people#destroy'
      patch "/people/:id", to: 'people#update'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
