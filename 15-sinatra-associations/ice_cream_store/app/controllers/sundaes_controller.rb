class SundaesController < ApplicationController

  get "/sundaes" do
    @sundaes = Sundae.all
    erb :"/sundaes/index"
  end

  get "/sundaes/new" do
    @users = User.all
    @flavours = Flavour.all
    erb :"/sundaes/new"
  end

  get "/sundaes/:id" do
    @sundae = Sundae.find(params[:id])
    erb :"/sundaes/show"
  end

  post "/sundaes" do
    sundae = Sundae.create(params[:sundae])
    # Sundae.create(name: params[:sundae][:name], user_id: params[:sundae][:user_id], flavour_ids: [1, 2, 3])
    redirect "/sundaes/#{sundae.id}"
  end

  get "/sundaes/:id/edit" do
    @users = User.all
    @flavours = Flavour.all
    @sundae = Sundae.find(params[:id])
    erb :"/sundaes/edit"
  end

  patch "/sundaes/:id" do
    
    sundae = Sundae.find(params[:id])
    sundae.update(params[:sundae])
    redirect "/sundaes/#{sundae.id}"
  end

  delete "/sundaes/:id" do
    sundae = Sundae.find(params[:id])
    sundae.destroy
    redirect "/sundaes"
  end

end
