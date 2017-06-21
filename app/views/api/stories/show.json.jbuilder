json.extract! @story, :id, :title, :body, :author_id, :date
json.image_url asset_path(@story.image.url)
