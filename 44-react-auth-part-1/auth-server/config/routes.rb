Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      resources :users
      post '/signin', to: 'users#signin'
      get '/validate', to: 'users#validate'
    end
  end
end
