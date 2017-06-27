
@stories.each do |story|
  json.set! story.id do
    json.extract! story, :id, :title, :body, :author_id, :description
    json.date story.date.strftime("%B %d")
    json.image_url asset_path(story.image.url)
    json.author do
      json.username story.author.username
      json.image_url story.author.image.url
    end
    json.comments story.comments, :body, :date, :author
  end
end
