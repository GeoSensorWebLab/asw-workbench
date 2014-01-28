require "backbone-rails"
require "bootstrap-sass-rails"
require "ejs"
require "font-awesome-rails"
require "geocens-js-api-rails"
require "haml"
require "jquery-rails"

module Workbench
  class Engine < ::Rails::Engine
    isolate_namespace Workbench

    initializer :assets do |config|
      Rails.application.config.assets.initialize_on_precompile = true
      Rails.application.config.assets.precompile += %w( *.js *.css *.png *.jpg *.jpeg *.gif)
    end
  end
end
