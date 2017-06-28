json.extract! user, :username, :bio, :id
json.image_url user.image.url
json.story_ids user.story_ids
json.comment_ids user.comment_ids 
