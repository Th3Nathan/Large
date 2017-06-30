
json.extract! user, :username, :bio, :id
json.image_url user.image.url
json.story_ids user.story_ids
json.comment_ids user.comment_ids
json.following_count user.followees.count #works
json.followed_by_count user.followers.count #works
json.followed_by_current_user current_user_followed?(user)
json.follow_id follow_id(user)


#custom route to togle like
