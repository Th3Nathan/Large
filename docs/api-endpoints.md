# API Endpoints #

## HTML API ##

### Root ###

- `GET /` - loads React web app

## JSON API ##

### Users ###

- `POST /api/users`
- `GET /api/users/:user_id`

### Session ###

- `POST /api/session`
- `DELETE /api/session`

### Stories ###

- `GET /api/stories`
- `POST /api/stories`
- `GET /api/stories/:story_id`
- `PATCH /api/stories/:story_id`
- `DELETE /api/stories/:story_id`

### Comments ###

- `GET /api/stories/:story_id/comments`
  - In comments controller index action, check for params.has_key?(:story_id)
  - In routes, next a comments :index action under stories
- `POST /api/comments`
  - Create will need to get story_id via hidden input
- `GET /api/comments/:comment_id`
- `DELETE /api/comments/:comment_id`

### Likes ###

- `POST /api/likes`
  - Will need to pass a user id and (either a story or comment id)?how via hidden input.
- `DELETE /api/likes/:like_id`

### Follows ###
- `POST /api/follows`
  - `Will need a follower_id and a followed_id, creates a instance in join table`
- `DELETE /api/follows/:follow_id`

## Bonus ##

### Tags ###
- `Tags can be associated with more than one story, stories can be associated with more than one tag. Join table for taggings required`
- `GET /api/tags`
- `GET /api/tags/tag_id/stories`
  - Gets all the stories with a given tag
  - In stories controller index action, check for params.has_key?(:tag_id)
  - In routes, next a stories :index action under tags
- `GET /api/stories/:story_id/tags`
  - Gets all the tags with a given story
  - In tags controller index action, check for params.has_key?(:story_id)
  - In routes, next a tags :index action under stories
- `DELETE /api/tags/:tag_id`

### Publications ###

-  `GET /api/publications`
-  `GET /api/publications/:publication_id`
-  `GET /api/publications/:publication_id/stories`
-  `GET /api/tags/tag_id/stories`
  - Gets all the stories in a publication
  - In stories controller index action, check for params.has_key?(:publication_id)
  - In routes, next a stories :index action under publications

### Bookmarks ###
- Data Stored in a bookmarking table
- `POST /api/bookmarks/`
  - `Will need a user_id and a story_id from hidden input`
- `DELETE /api/bookmarks/:bookmark_id`
??? need assistance on the following, want to get all stories for user that are bookmarked
- `GET /api/users/:user_id/bookmarks`
  - Gets all the bookmarks for a user

### Blocked User ###
- `PATCH /api/users/:user_id`
  - `The blocked user will be in an updated blocked users array in params`

### Reply ###
- `GET /api/replies/:reply_id`
- `POST /api/replies/:reply_id`
- `GET /api/comments/:comment_id/replies`
- `DELETE /api/replies/:reply_id`

### Nested Replies ??? ###
