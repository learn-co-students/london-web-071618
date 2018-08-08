class FlavoursController < ApplicationController

  # index /flavours

  get "/flavours" do
    @flavours = Flavour.all
    erb :"flavours/index"
  end

  # new /flavours/new

  get "/flavours/new" do
    erb :"flavours/new"
  end

  # show /flavours/:id

  get "/flavours/:id" do
    @flavour = Flavour.find(params[:id])
    erb :"flavours/show"
  end

  # create /flavours

  post "/flavours" do
    flavour = Flavour.create(params[:flavour])
    redirect "/flavours/#{flavour.id}"
  end

  # edit /flavours/:id

  get "/flavours/:id/edit" do
    @flavour = Flavour.find(params[:id])
    erb :"flavours/edit"
  end

  # update /flavours/:id

  patch "/flavours/:id" do
    flavour = Flavour.find(params[:id])
    flavour.update(params[:flavour])
    redirect "/flavours/#{flavour.id}"
  end

  # destroy /flavours/:id

  delete "/flavours/:id" do
    flavour = Flavour.find(params[:id])
    flavour.destroy
    redirect "/flavours"
  end

end
