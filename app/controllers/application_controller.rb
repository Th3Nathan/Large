class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?, :current_user_liked?, :like_id, :current_user_followed?, :follow_id

  def current_user_liked?(item)
    item.liker_ids.include?(current_user.id)
  end

  def current_user_followed?(author)
    current_user.followee_ids.include?(author.id)
  end

  def like_id(item)
    ( current_user.like_ids & item.like_ids).first
  end

  def follow_id(showed_user)
    # current_user.followees.find_by({author_id: showed_user.id})
    current_user.followee_follows.where({author_id: showed_user.id}).destroy_all
  end

  #another route take showeed user id and user.follow.where

  private

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_logged_in
    render json: {base: ['invalid credentials']}, status: 401 if !current_user
  end

end
