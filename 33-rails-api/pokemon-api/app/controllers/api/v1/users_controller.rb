class Api::V1::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.new(name: params[:name], email: params[:email])

    if @user.save
      render json: @user
    else
      render json: @user.errors
    end
  end
end
