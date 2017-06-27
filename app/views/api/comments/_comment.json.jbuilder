  json.set! comment.id do
    json.extract! comment, :id, :body, :date, :author, :story_id
    json.author_image comment.author.image.url 
  end
