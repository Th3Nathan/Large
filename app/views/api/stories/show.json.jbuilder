
  json.extract! @story, :id, :title, :body, :author_id, :description
  json.date @story.date.strftime("%B %d")
  json.image_url asset_path(@story.image.url)
  json.author do
    json.username @story.author.username
    json.image_url @story.author.image.url
    json.bio @story.author.bio
  end
