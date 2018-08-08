class UsersController < ApplicationController


  # index /users

  get "/users" do
    @users = User.all
    erb :"users/index"
  end

  # new /users/new

  get "/users/new" do
    erb :"users/new"
  end

  # show /users/:id

  get "/users/:id" do
    @user = User.find(params[:id])
    erb :"users/show"
  end

  # create /users

  post "/users" do
    user = User.create(params[:user])
    redirect "/users/#{user.id}"
  end

  # edit /users/:id

  get "/users/:id/edit" do
    @user = User.find(params[:id])
    erb :"users/edit"
  end

  # update /users/:id

  patch "/users/:id" do
    user = User.find(params[:id])
    user.update(params[:user])
    redirect "/users/#{user.id}"
  end

  # destroy /users/:id

  delete "/users/:id" do
    user = User.find(params[:id])
    user.destroy
    redirect "/users"
  end

end
