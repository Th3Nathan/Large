json.extract! user, :username, :bio, :id
json.image_url user.image.url
json.story_ids user.story_ids
json.comment_ids user.comment_ids
json.following_count user.followed_author_follow_ids.count
json.followed_by_count user.following_user_follow_ids.count
json.following_ids user.followed_author_follow_ids
json.followed_by_current_user current_user_followed?(user)
