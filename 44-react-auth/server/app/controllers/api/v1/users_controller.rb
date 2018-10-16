class Api::V1::UsersController < ApplicationController
  def index
    users = User.all
    render json: users
  end

  def signin
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      render json: {username: user.username, token: issue_token({id: user.id})}
    else
      render json: {error: 'No valid user found.'}, status: 400
    end
  end

  def validate
    user = current_user
    if user
      render json: {username: user.username, token: token}
    else
      render json: {error: 'Validation failed.'}, status: 400
    end
  end
end
