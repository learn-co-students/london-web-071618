class MoviesController < ApplicationController

  def index
    @movies = Movie.all
  end

  def show
    @movie = Movie.find(params[:id])
  end

  def new
    @movie = Movie.new
  end

  def create
    movie = Movie.create(movie_params)
    if movie.valid?
      redirect_to movie
    else
      flash[:errors] = movie.errors.full_messages
      redirect_to new_movie_path
    end
  end

  def edit
    @movie = Movie.find(params[:id])
  end

  def update
    movie = Movie.find(params[:id])
    movie.update(movie_params)
    if movie.valid?
      redirect_to movie
    else
      flash[:errors] = movie.errors.full_messages
      redirect_to edit_movie_path(movie)
    end
  end

  def destroy
    movie = Movie.find(params[:id])
    movie.destroy
    redirect_to movies_path
  end


  private

  def movie_params
    params.require(:movie).permit(:name, :price)
  end
end
