## Components ##
### Auth ###
 - AuthForm
### Home ###
 - Header
 - StoryBlurbs
### Header ###
 - Auth
### StoryBlurbs ###
 - StoryBlurb
### StoryBlurb ###
 - AuthorBox
### StoryShow ###
 - AuthorBox
 - SocialMedia
### AuthorShow ###
 - StoryBlurbs
### EditStory ###
 - AuthorBox
### NewStory ###
 - AuthorBox
### CommentBox ###
 - NewComment
 - AuthorBox
 - Comment
### AuthorBox ###


## Routes
Route | Method | Component |
------------|-----------|--|
api/users   | POST | Auth
api/users/:user_id   | GET | Auth / AuthorBox
api/session  | POST  | Auth
api/session | DELETE | Auth
api/stories | GET | StoryBlurbs
api/stories | POST | NewStory
api/stories/:story_id | GET | StoryShow
api/stories/:story_id | GET | EditStory
api/stories/:story_id | DELETE | EditStory
api/stories/:story_id/comments | GET | StoryShow
api/comments | POST | StoryShow
api/comments/:comment_id | GET | Comment
api/comments/:comment_id | DELETE | Comment
api/likes | POST | StoryShow, StoryBlurb
api/likes | DELETE | StoryShow, StoryBlurb
api/follows | POST | AuthorBox
api/follows/:follow_id | DELETE | AuthorBox
