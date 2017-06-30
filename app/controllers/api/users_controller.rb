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
    @user = User.find(params[:id])
    follower = @user.follower_follows.new({follower_id: current_user.id})
    if follower.save
      render :show
    else
      render json: "Already follows"
    end
  end

  def unfollow
    @user = User.find(params[:id])
    follow = current_user.followee_follows.where({author_id: params[:id]}).destroy_all
    render :show

  end

  def update
    @user = User.find(params[:id])
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
