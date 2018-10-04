class Api::V1::ItemsController < ApplicationController
  def index
    user = current_user
    items = user.items
    if user
      render json: items
    else
      render json: {error: 'Not a valid user.'}, status: 400
    end
  end
end
