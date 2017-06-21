# Large #

[Heroku link][heroku]

[Trello link][trello]

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com/b/d5wufFSb/large

### Minimum Viable Product ###
This project is a clone of the online publishing website, Medium. In two weeks, the the app will at least meet the following criteria:
- New account creation, login, and guest/demo login
- A production README
- Hosting on Heroku
- Stories
  - Adequate styling
  - Smooth, bug-free navigation
  - Adequate and appropriate seeds to demonstrate the feature
- Commenting on Stories
  - Adequate styling
  - Smooth, bug-free navigation
  - Adequate and appropriate seeds to demonstrate the feature
- Follows and Feed
  - Adequate styling
  - Smooth, bug-free navigation
  - Adequate and appropriate seeds to demonstrate the feature
- Likes
  - Adequate styling
  - Smooth, bug-free navigation
  - Adequate and appropriate seeds to demonstrate the feature


#### Stories ####
  - A story will need to display its own content, and related images
  - A story consists of headers, paragraphs, and images, separated by consistent white space.
  - They will need to belong to an author
  - Multiple story blurbs are displayed on the homepage, with author information. They can be bookmarked from the blurb.
  - The full page story has social media links in addition to the preceding.
  - Users should be able to write their own stories.
  - A social media widget should be present on a story page
#### Commenting on Stories ####
  - Commenting should only be available for authenticated users, viewing comments is available for everyone.
  - Comments display an identical author header (image, name, date, read time) to stores.
  - Comments truncate after 6 lines.
  - Clicking on comments goes to a comment show page, (like, respond, share Facebook, share Twitter)
#### Follows and Feed ####
  - Users can be followed. Follows can be viewed and toggled in user profile.
  - There is also a suggestions tab with suggested users to follow in the profile
  - Root page for logged in user shows stories that are by followed authors.
#### Likes ####
  - Stories, and comments can be liked
  - A like count should be displayed next to each liking opportunity
  - Likes must be connected from the liked item to the user with a join table

### Bonus Features ###

### Story Images ###
  - Stories should be able to have multiple images in them

#### Tags ####
  - Users can attach tags to their stories before publishing
  - Tags are viewed in the story show page
  - Tabs can be searchable, and have a show page with related stories
  - Tags can be followed
  - Tags should not be created by users, should be seeded appropriately instead
  - Root page shows stories from followed tags

#### Publications ####
  - Stories belongs to a publisher.
  - A publisher blurb will be displayed on each attached story, which will have information that will be displayed on hover.
  - Stories have information related to the publisher.
  - Publisher show page lists its stories.
  - Publications can be followed.
  - Root page of authenticated users shows stories from followed publications.
  - Has a title, description, image, follow_count, followed button

#### Bookmarks ####
 - All stories will have a bookmark button.
 - Clicking this will add the story id to a collection of bookmarked ids associated with the user
 - All bookmarked stories will be displayed in a bookmark index page for authenticated users. =

#### Block User ####
 - Users have a collection of blocked user id
 - Content by blocked users is filtered out when belonging to these users.

#### Replies ####
 - Comments are listed under each story. Those comments will also have viewable replies underneath them.
 - Replies can be liked and shared just like comments.
 - They should be likeable

#### Search ####
 - The header contains a search bar which will display matching users, publications, or tags.

#### Super Bonus ####
  - Publications can have custom header styles
  - Nested Replies
  - New post form should include text manipulation features like the actual website
