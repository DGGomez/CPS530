Rails.application.routes.draw do
  devise_for :emails
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/' => 'users#index'
  post '/sessions' => 'sessions#create'
  post '/users' => 'users#create'
  get '/dashboard' => 'sales#index'
end
