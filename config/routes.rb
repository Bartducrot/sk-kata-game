Rails.application.routes.draw do
  root to: 'landing#index'
  get '/monthly' => 'landing#monthly'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
