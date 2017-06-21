### {
###  currentUser: {
### &nbsp; id: 90,
### &nbsp; username: "th3Nathan",
### &nbsp; followed_users: [1, 2, 4, 5, 6]
###  },
###  forms: {
### &nbsp; signUp: {errors: []},
### &nbsp; logIn: {errors: []},
### &nbsp; createNote: {errors: ["body can't be blank"]}
###  },
###  current_story: {
###  &nbsp;  title: {
###  &nbsp;&nbsp;    title: "The Best Foods",
###   &nbsp;&nbsp;   body: "There are a lot of really good ones to choose from, but the best is...",
###    &nbsp;&nbsp;  author_id: 4,
###   &nbsp;&nbsp;   comments: [1, 4, 6],
###   &nbsp;&nbsp;   likers: [2, 4, 5]
###  &nbsp;&nbsp;    }
###  &nbsp;  }
###  },
###  stories: {
###  &nbsp;  1: {
###   &nbsp;&nbsp;   title: "The Best Foods",
###   &nbsp;&nbsp;   body: "There are a lot of really good ones to choose from, but the best is...",
###   &nbsp;&nbsp;   author_id: 4,
###   &nbsp;&nbsp;   comments: [1, 4, 6],
###   &nbsp;&nbsp;   likers: [2, 4, 5]
###  &nbsp;&nbsp;    }
###  &nbsp;  }
###  &nbsp;  2: {
###  &nbsp;&nbsp;    title: "Super story",
###   &nbsp;&nbsp;   body: "Here is a super stories body..."
###   &nbsp;&nbsp;   author_id: 9,
###   &nbsp;&nbsp;   comments: [],
###  &nbsp;&nbsp;    likers: []
###  &nbsp;  }
###  },
###  comments: {
###   &nbsp; 1: {
###  &nbsp;&nbsp;    title: "Really?",
###   &nbsp;&nbsp;   author_id: 1,
###  &nbsp;&nbsp;    description: "... is not even a food"
###   &nbsp;&nbsp; },
###  &nbsp; 4: {
###  &nbsp;&nbsp;    title: "Pacman",
###  &nbsp;&nbsp;    author_id: 7,
###   &nbsp;&nbsp;   description: "My name is Pacman and I beg do differ"
###   &nbsp;&nbsp; }
###   &nbsp; 6: {
###   &nbsp;&nbsp;   title: "I'm a ghost",
###   &nbsp;&nbsp;   author_id: 4,
###   &nbsp;&nbsp;   description: "BOO! my trap worked!"
###   &nbsp;&nbsp; }
###  &nbsp; }
### }

A state like this could arise on a story show page, when other stories have either been fetched and cached or are being displayed in
blurb form with the current story.
