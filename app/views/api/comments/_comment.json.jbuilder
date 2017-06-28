  json.set! comment.id do
    json.extract! comment, :id, :body, :date, :author, :story_id
    json.author_image comment.author.image.url
    json.like_count comment.likes.count
    json.liked_by_current_user current_user_liked?(comment)
  end
