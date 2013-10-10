require "bootstrap-sass"
require "font-awesome-rails"
require "haml"

module Workbench
  class Engine < ::Rails::Engine
    isolate_namespace Workbench
  end
end
