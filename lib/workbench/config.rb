module Workbench
  module Config
    DEFAULT_MOUNT_PATH = "/"

    class << self
      # Allow configuration to specify where the engine is being mounted.
      def mount_path(custom_mount_path = nil)
        @mount_path = custom_mount_path if custom_mount_path
        @mount_path || DEFAULT_MOUNT_PATH
      end
    end
  end
end
