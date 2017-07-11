class Api::StoriesController < ApplicationController
  helper_method :bookmark_id, :current_user_bookmarked?

  def current_user_bookmarked?(story)
    story.bookmarking_user_ids.include?(current_user.id)
  end

  def index
    @stories = Story.includes(:author, :likes)
  end

  def show
    @story = Story.includes(:comments, :author, :comment_authors).find(params[:id])
  end

  def create
    @story = Story.new(story_params)
    if @story.save
      render :show
    else
      render json: @story.errors.full_messages, status: 422
    end
  end

  def destroy
    story = Story.find(params[:id])
    story.destroy
    render json: {}
  end

  def update
    @story = Story.find(params[:id])
    if @story.update(story_params)
      render :show
    else
      render json: @story.errors.full_messages, status: 422
    end
  end

  def feed
    @stories = current_user.feed_stories
    render :index
  end

  def bookmarked
    @stories = current_user.bookmarked_stories
    render :index
  end

  def bookmark_id(story)
    ( current_user.bookmark_ids & story.bookmark_ids).first
  end

  def story_params
    params.require(:story).permit(
      :id,
      :body,
      :title,
      :image,
      :description,
      :date,
      :author_id,
      likes_attributes:
        [:_destroy, :id, :user_id, :likeable_id, :likeable_type],
      bookmarks_attributes: [:_destroy, :id, :user_id, :story_id]
        )
  end
end
