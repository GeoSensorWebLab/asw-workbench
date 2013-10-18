require_dependency "workbench/application_controller"

module Workbench
  class SensorsController < ApplicationController
    def index
    end

    def show
      @sensor = params[:id]
    end
  end
end
