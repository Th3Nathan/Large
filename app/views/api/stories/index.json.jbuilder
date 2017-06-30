
@stories.each do |story|
  json.set! story.id do
    json.extract! story, :id, :title, :body, :author_id, :description
    json.date story.date.strftime("%B %d")
    json.image_url asset_path(story.image.url)
    json.author do
      json.username story.author.username
      json.image_url story.author.image.url
      json.followed_by_current_user current_user_followed?(story.author)
      json.id story.author.id
    end
    json.like_count story.likes.count
    json.liked_by_current_user current_user_liked?(story)
    json.like_id like_id(story)
  end
end
