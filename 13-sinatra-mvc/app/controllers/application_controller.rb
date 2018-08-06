class ApplicationController < Sinatra::Base
  set :views, 'app/views'

  binding.pry

  get '/' do
    erb :root
  end

  get '/books' do
    @books = Book.all
    erb :index
  end

  get '/books/new' do
    "Make a New Book Here"
  end

  get '/books/:id' do
    @book = Book.find(params['id'])
    erb :show
  end


  # get '/books/:id/authors/:name' do
  #   params {id: , name: }
  # end

end