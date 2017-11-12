# Large      [![Build Status](https://api.travis-ci.org/Th3Nathan/Large.svg?branch=master)](https://travis-ci.org/Th3Nathan/Large)

Large is a blogging web app based on Medium. It was built using a Rails backend with a React/Redux frontend.

Check it out at at [www.large-blog.site](http://large-blog.site/)

### User View:

![user]

### Edit View:

![edit]

### Technical Details:

* Both stories and comments can be liked by users. In order to reduce duplicate code, I did using a polymorphic association, both stories and comments are able to update their corresponding like information through updating thier own associations. I did this by hitting the update action of the story or comment controller with nested attributes containing like associaion information.

```
      #Story and Comment model
      has_many :likes, as: :likeable
      accepts_nested_attributes_for :likes, allow_destroy: true

     //API Util
        export const updateStoryLikes = (newLike, id) => {
          return $.ajax({
            method: "PATCH",
            url: `/api/stories/${id}`,
            data: {story: { likes_attributes: newLike }  },
          });
        };

```

* I wanted users to be able to easily create stories with multiple images with minimal overhead, so I overwrote the Quill text editor I used for creating stories to accept image urls instead of image files.

```
  linkHandler(value){
      if (value) {
        let href = prompt('Enter the URL');
        this.quillRef.getEditor().format('link', href);
      } else {
        this.quillRef.getEditor().format('link', false);
      }
    }
```

### Features
* Sign up/in with frontend/backend validations
* Create stories using a text editor, supporting multiple images
* Story draft will be saved during a users session
* Stories and comments can be liked by users
* Users can access a feed containing stories by users they follow
* Image hosting on Amazon web services, users can upload and change thier avatar image


[Original Design Docs](./docs/README.md)

[user]: ./docs/images/edit.png
[edit]: ./docs/images/show.png
