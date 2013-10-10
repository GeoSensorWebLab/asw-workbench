require "bootstrap-sass"
require "font-awesome-rails"
require "haml"
require "jquery-rails"

module Workbench
  class Engine < ::Rails::Engine
    isolate_namespace Workbench
  end
end
