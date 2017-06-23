

json.set! @story.id do
  json.extract! @story, :id, :title, :body, :author_id, :description
  json.image_url asset_path(@story.image.url)
  json.date story.date.strftime("%B %d")
  json.set! :author do
    @story.author do
      json.username @story.author.username
      json.image_url @story.author.image.url
    end
  end
end
