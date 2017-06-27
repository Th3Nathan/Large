  json.set! comment.id do
    json.extract! comment, :id, :body, :date, :author, :story_id
  end
