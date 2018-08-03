require 'rack'
require 'pry'

class App

  def call(env)
    req = Rack::Request.new(env)
    resp = Rack::Response.new
    path = req.path
    thing = path.split('/')[1]
    resp.write("<h1>I like #{path.split('/')[1]} like #{path.split('/')[2].split('-').join(' ')}</h1>")
    resp.finish
    # ['200', {'Content-Type' => 'text/html'}, ['A barebones rack app.']]
  end
end

path = johndbritton
User.find_by(username: path)

run App.new
# To use Rack, provide an "app": an object that responds to the call method, taking the environment hash as a parameter, and returning an Array with three elements:
#
# The HTTP response code
# A Hash of headers
# The response body, which must respond to each

# module Rack
#
#   class Request
#
#   end
# end