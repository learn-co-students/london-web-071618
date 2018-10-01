class Api::V1::UsersController < ApplicationController
  def index
    users = User.all
    render json: users
  end

  def signin
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      render json: {id: user.id, username: user.username}
    else
      render json: {error: 'No valid user found.'}, status: 400
    end
  end

  def validate
    token = request.headers['Authorization'].to_i
    user = User.find(token)
    if user
      render json: {id: user.id, username: user.username}
    else
      render json: {error: 'Validation failed.'}, status: 400
    end
  end
end
