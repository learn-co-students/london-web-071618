class ApplicationController < Sinatra::Base
  set :views, 'app/views'

  get '/' do
    erb :root
  end

  get '/books' do
    @books = Book.all
    erb :index
  end


end