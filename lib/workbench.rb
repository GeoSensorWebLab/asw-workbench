require "workbench/config"
require "workbench/engine"

module Workbench
  def self.config(&block)
    if block_given?
      block.call(Workbench::Config)
    else
      Workbench::Config
    end
  end
end
