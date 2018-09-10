class Api::V1::TasksController < ApplicationController
  def show
    @task = Task.find(params[:id])
    render json: @task
  end

  def index
    @tasks = Task.all
    render json: @tasks
  end

  def create
    @user = User.find_by({email: params[:email]})
    @task = Task.new(content: params[:content], user: @user, done: params[:done] || false)

    if @task.save
      render json: @task
    else
      render json: @task.errors
    end
  end
end
