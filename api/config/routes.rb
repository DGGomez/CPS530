Rails.application.routes.draw do

    root 'site#index'
    devise_for :users
    get '/*path' => 'site#index'
    post '/purchases' => 'purchases#create'
    post '/orders' => 'purchases#show'
end
