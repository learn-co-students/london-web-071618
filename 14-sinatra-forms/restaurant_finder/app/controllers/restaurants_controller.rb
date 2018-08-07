class RestaurantsController < ApplicationController

  # there are 7 actions to complete crud
  # index - read all
  # show - read one
  # new - see create form
  # create - create one
  # edit - see update form
  # update - change one
  # destroy - delete one

  get '/restaurants' do
    @restaurants = Restaurant.all
    erb :"restaurants/index"
  end

  get '/restaurants/new' do
    erb :"restaurants/new"
  end

  get '/restaurants/:id' do
    @restaurant = Restaurant.find(params[:id])
    erb :"restaurants/show"
  end


  # when you name your param whatever[name],
  # the params hash looks like this:
  # {
  #   whatever: {
  #     name: '???'
  #   }
  # }

  post '/restaurants' do
    restaurant = Restaurant.create(params[:restaurant])
    redirect "/restaurants/#{restaurant.id}"
  end #create

  get '/restaurants/:id/edit' do
    @restaurant = Restaurant.find(params[:id])
    erb :"restaurants/edit"
  end

  patch '/restaurants/:id' do
    restaurant = Restaurant.find(params[:id])
    restaurant.update(params[:restaurant])
    redirect "/restaurants/#{restaurant.id}"
  end

  delete '/restaurants/:id' do
    restaurant = Restaurant.find(params[:id])
    restaurant.destroy
    redirect "/restaurants"
  end



end
