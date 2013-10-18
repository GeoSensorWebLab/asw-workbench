Workbench::Engine.routes.draw do
  resources :sensors, only: [:index, :show]
end
