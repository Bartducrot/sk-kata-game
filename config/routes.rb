Rails.application.routes.draw do
  devise_for :users
  root to: 'landing#index'
  get '/monthly' => 'landing#monthly'

  namespace :api do
    resources :suggestions, only: %i[index create]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
