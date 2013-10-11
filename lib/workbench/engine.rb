require "backbone-rails"
require "bootstrap-sass-rails"
require "ejs"
require "font-awesome-rails"
require "haml"
require "jquery-rails"

module Workbench
  class Engine < ::Rails::Engine
    isolate_namespace Workbench
  end
end
