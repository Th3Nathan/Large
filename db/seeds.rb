# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all
Story.destroy_all


guest = User.create({
  image: "https://s3.amazonaws.com/large-dev/dog.jpg",
  username: "Guest",
  password: "password",
  bio: "I am a guest user, I have a cute puppy pikture and went to Dog College!"
})

commenter = User.create({
  image: "https://s3.amazonaws.com/large-dev/dog.jpg",
  username: "Commenter",
  password: "password",
  bio: "I like to talk about myself, someone better cut me short or im gonna spew my words all over this page. Hey Hey Hey thats what i sayyyyyyydjdjdjdjdjdjdjdjdjflsjfjdsklfja;sf;lkjasdf;lakjsdf;ljasdf;lkjasdf;lkjasdf;lkjasdf;lkjasdf;lkjasd;flkjsad;flkjasd;flkjas;dlfkjas;dlfkjs"
  });

story1 = Story.create({
  title: "Eating Sushi",
  description: "This is in the story blurb",
  body: "This is how you eat sushi...",
  author_id: guest.id,
  date: Date.new,
  image: "https://s3.amazonaws.com/large-dev/story1.jpg"
})

story1 = Story.create({
  title: "Eating Sushi",
  description: "This is in the story blurb",
  body: "This is how you eat sushi...",
  author_id: guest.id,
  date: Date.new,
  image: "https://s3.amazonaws.com/large-dev/story1.jpg"
})

story2 = Story.create({
  title: "Mountain Climbing",
  description: "This is in the story blurb",
  body: "This is how you eat mountains...This is how you eat mountains...This is how you eat mountains...This is how you eat mountains...This is how you eat mountains...This is how you eat mountains...This is how you eat mountains...This is how you eat mountains...",
  author_id: commenter.id,
  date: Date.new,
  image: "https://s3.amazonaws.com/large-dev/story2.jpg"
})

story3 = Story.create({
  title: "Drinking Tea",
  body: "Matcha is nice Matcha is niceMatcha is nice Matcha is niceMatcha is nice Matcha is niceMatcha is nice Matcha is niceMatcha is nice Matcha is niceMatcha is nice Matcha is niceMatcha is nice Matcha is niceMatcha is nice Matcha is niceMatcha is nice Matcha is niceMatcha is nice Matcha is niceMatcha is nice Matcha is nice",
  author_id: guest.id,
  description: "This is in the story blurb",
  date: Date.new,
  image: "https://s3.amazonaws.com/large-dev/story2.jpg"
})

story4 = Story.create({
  title: "Ice Cream",
  body: "I like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMM",
  author_id: guest.id,
  description: "This is in the story blurb",
  date: Date.new,
  image: "https://s3.amazonaws.com/large-dev/story3.jpg"
})


story4 = Story.create({
  title: "Ice Cream",
  body: "I like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICCREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMMI like ICE CREAMMMM",
  author_id: guest.id,
  date: Date.new,
  description: "This is in the story blurb",
  image: "https://s3.amazonaws.com/large-dev/story2.jpg"
})
