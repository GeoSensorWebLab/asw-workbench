require "bootstrap-sass"
require "haml"

module Workbench
  class Engine < ::Rails::Engine
    isolate_namespace Workbench
  end
end
