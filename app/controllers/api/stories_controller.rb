class Api::StoriesController < ApplicationController
  def index
    @stories = Story.includes(:author)
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

  def story_params
    params.require(:story).permit(:id, :body, :title, :image, :description, :date, :author_id)
  end
end
