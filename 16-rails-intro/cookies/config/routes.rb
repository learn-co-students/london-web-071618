Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # get "/cookies/new", to: 'cookies#new'
  # post "/cookies", to: 'cookies#create'
  # get "/cookies/:id", to: 'cookies#edit'
  # patch "/cookies/:id", to: 'cookies#update'
  # delete "/cookies/:id", to: 'cookies#destroy'

  resources :cookies, only: [:index, :show]
  # is the same as
  # get "/cookies", to: 'cookies#index'
  # get "/cookies/:id", to: 'cookies#show', as: "cooky"
end
