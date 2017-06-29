class Api::CommentsController < ApplicationController

  def show
    @comment = Comment.includes(:likes).find(params[:id])
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
    render json: {}
  end

  def update
    @comment = Comment.includes(:likes).find(params[:id])
    if @comment.update(comment_params)
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def comment_params
    params.require(:comment).permit(:author_id, :story_id, :body, likes_attributes: [:_destroy, :id, :user_id, :likeable_id, :likeable_type])
  end
end
