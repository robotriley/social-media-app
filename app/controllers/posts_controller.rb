class PostsController < ApplicationController
  # When someone types a URL in the browser
  # one of these functions will be invoked.
  #
  # Which function gets fired is determined
  # by config/routes.rb

  def index
    posts = Post.all
    render json: posts
  end
  
  def show
    post = Post.find(params[:id])
    render json: post
  end
end
