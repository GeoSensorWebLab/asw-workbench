$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "workbench/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "workbench"
  s.version     = Workbench::VERSION
  s.authors     = ["James Badger"]
  s.email       = ["jpbadger@ucalgary.ca"]
  s.homepage    = ""
  s.summary     = ""
  s.description = "GeoCENS Workbench"

  s.files = Dir["{app,config,db,lib}/**/*", "Rakefile", "README.markdown"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", "~> 4.0.0"

  s.add_dependency "bootstrap-sass"
  s.add_dependency "haml"
  s.add_dependency "sass-rails"
end
