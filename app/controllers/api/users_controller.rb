class Api::UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def follow
    @user = User.includes(:comments, :followees, :followers).find(params[:id])

    follow = Follow.new({author_id: @user.id, follower_id: current_user.id})
    if follow.save

      render :show
    else
      render json: "Already follows"
    end
  end

  def unfollow
    @user = User.includes(:comments, :followees, :followers).find(params[:id])
    @follow = Follow.where({author_id: @user.id, follower_id: current_user.id })[0]
    Follow.destroy(@follow.id)
    render :show
  end


  def update
    @user = User.find(params[:id])
    if @user.username === "Guest"
      render :show
      return
    end
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def user_params
    params.require(:user).permit(:username, :password, :image, :bio, followed_author_follows_attributes: [:_destroy, :id, :follower_id, :author_id])
  end
end
