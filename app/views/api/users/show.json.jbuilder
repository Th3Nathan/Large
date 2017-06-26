json.extract! @user, :id, :username
json.image_url @user.image.url
json.bio @user.bio
json.story_ids @user.story_ids 
