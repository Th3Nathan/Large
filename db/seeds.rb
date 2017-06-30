# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#wo I get comments connected with story in the story JBuilder, or should I fetch seperately for comments matching story id in the index
User.destroy_all
Story.destroy_all
Comment.destroy_all

#use fake to generate users

guest = User.create({
  image: "https://s3.amazonaws.com/large-dev/dog.jpg",
  username: "Guest",
  password: "password",
  bio: "Thanks for checking out my site!"
})


commenter = User.create({
  image: "https://s3.amazonaws.com/large-dev/dicaprio.jpg",
  username: "Dicaprio",
  password: "password",
  bio: "I make movies"
  });

  follow1 = Follow.create({
    follower_id: guest.id,
    author_id: commenter.id
    })

user3 = User.create({
  image: "https://s3.amazonaws.com/large-dev/dog.jpg",
  username: "Michael Lerner",
  password: "passwordd",
  bio: "I like writing stories"
  });

user4 = User.create({
  image: "https://s3.amazonaws.com/large-dev/dog.jpg",
  username: "Gordan Ramsay",
  password: "passwordd",
  bio: "ITS RAW!"
  });

user5 = User.create({
  image: "https://s3.amazonaws.com/large-dev/dog.jpg",
  username: "Alice Black",
  password: "passwordd",
  bio: "Im a blogger"
  });

user6 = User.create({
  image: "https://s3.amazonaws.com/large-dev/dog.jpg",
  username: "Nao Sakura",
  password: "passwordd",
  bio: "I'm from Japan"
  });

user7 = User.create({
  image: "https://s3.amazonaws.com/large-dev/dog.jpg",
  username: "Jordan Denning",
  password: "passwordd",
  bio: "cocktail and coffee nerd, former nuclear scientist"
  });

user7 = User.create({
  image: "https://s3.amazonaws.com/large-dev/dog.jpg",
  username: "Harper Tin",
  password: "passwordd",
  bio: "Frontend Engineer and Musician"
  });

story1 = Story.create({
  title: "Sample Story",
  description: "Sample story description",
  body: "<h1>Consience doth whips</h1><p>Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer.</p><p><br></p><blockquote> a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;</blockquote><p><img src='https://www.nationalparks.org/sites/default/files/yellowstone-header.jpg'></p><h1>Regard Haveller</h1><p>Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;d</p><p><img src='http://kids.nationalgeographic.com/content/dam/kids/photos/articles/History/M-Z/YELLOWSTONE%20LAKE.adapt.945.1.jpg'></p><p><br></p><h1>Regard Haveller</h1><p>Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;d</p>",
  author_id: guest.id,
  date: Date.new,
  image: "https://s3.amazonaws.com/large-dev/storyimage10.jpg"
})

  comment1 = Comment.create({
    body: "",
    author_id: commenter.id,
    story_id: story1.id
  })

  comment2 = Comment.create({
    body: "What does this story mean?",
    author_id: story1.author_id,
    story_id: story1.id
  })

  comment3 = Comment.create({
    body: "Nice story?",
    author_id: commenter.id,
    story_id: story1.id
  })

story5 = Story.create({
  title: "Eating Sushi",
  description: "Story about eating sushi",
  body: "<h1>Consience doth whips</h1><p>Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer.</p><p><br></p><blockquote> a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;</blockquote><p><img src='https://www.nationalparks.org/sites/default/files/yellowstone-header.jpg'></p><h1>Regard Haveller</h1><p>Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;d</p><p><img src='http://kids.nationalgeographic.com/content/dam/kids/photos/articles/History/M-Z/YELLOWSTONE%20LAKE.adapt.945.1.jpg'></p><p><br></p><h1>Regard Haveller</h1><p>Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;d</p>",
  author_id: guest.id,
  date: Date.new,
  image: "https://s3.amazonaws.com/large-dev/story2.jpg"
})

# like1 = Like.create({
#   user_id: guest.id,
#   likeable_id: story1.id,
#   likeable_type: "Story"
# })
# like2 = Like.create({
#   user_id: commenter.id,
#   likeable_id: story1.id,
#   likeable_type: "Story"
# })

  comment4 = Comment.create({
    body: "Why are you always eating sushi",
    author_id: commenter.id,
    story_id: story5.id
  })
  #
  # like3 = Like.create({
  #   user_id: guest.id,
  #   likeable_id: comment1.id,
  #   likeable_type: "Comment"
  # })
  # like4 = Like.create({
  #   user_id: commenter.id,
  #   likeable_id: comment2.id,
  #   likeable_type: "Comment"
  # })

  comment5 = Comment.create({
    body: "Because I like it!",
    author_id: story5.author_id,
    story_id: story5.id
  })

  comment6 = Comment.create({
    body: "I like to comment on EVERYTHING",
    author_id: commenter.id,
    story_id: story5.id
  })

story2 = Story.create({
  title: "Mountain Climbing",
  description: "This is in the story blurb",
  body: "<h1>Consience doth whips</h1><p>Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer.</p><p><br></p><blockquote> a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;</blockquote><p><img src='https://www.nationalparks.org/sites/default/files/yellowstone-header.jpg'></p><h1>Regard Haveller</h1><p>Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;d</p><p><img src='http://kids.nationalgeographic.com/content/dam/kids/photos/articles/History/M-Z/YELLOWSTONE%20LAKE.adapt.945.1.jpg'></p><p><br></p><h1>Regard Haveller</h1><p>Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;d</p>",
  author_id: commenter.id,
  date: Date.new,
  image: "https://s3.amazonaws.com/large-dev/story3.jpg"
})

story3 = Story.create({
  title: "Exotic Teas",
  body: "<h1>Consience doth whips</h1><p>Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer.</p><p><br></p><blockquote> a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;</blockquote><p><img src='https://www.nationalparks.org/sites/default/files/yellowstone-header.jpg'></p><h1>Regard Haveller</h1><p>Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;d</p><p><img src='http://kids.nationalgeographic.com/content/dam/kids/photos/articles/History/M-Z/YELLOWSTONE%20LAKE.adapt.945.1.jpg'></p><p><br></p><h1>Regard Haveller</h1><p>Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;d</p>",
  author_id: guest.id,
  description: "Few teas compare to the one I had that day...",
  date: Date.new,
  image: "https://s3.amazonaws.com/large-dev/story2.jpg"
})

story4 = Story.create({
  title: "Ice Cream",
  body: "<h1>Consience doth whips</h1><p>Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer.</p><p><br></p><blockquote> a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;</blockquote><p><img src='https://www.nationalparks.org/sites/default/files/yellowstone-header.jpg'></p><h1>Regard Haveller</h1><p>Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;d</p><p><img src='http://kids.nationalgeographic.com/content/dam/kids/photos/articles/History/M-Z/YELLOWSTONE%20LAKE.adapt.945.1.jpg'></p><p><br></p><h1>Regard Haveller</h1><p>Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;d</p>",
  author_id: guest.id,
  description: "My tour of the nation's Ice Cream Capital",
  date: Date.new,
  image: "https://s3.amazonaws.com/large-dev/story1.jpg"
})


story4 = Story.create({
  title: "Gardening for Beginners",
  body: "<h1>Consience doth whips</h1><p>Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer.</p><p><br></p><blockquote> a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;</blockquote><p><img src='https://www.nationalparks.org/sites/default/files/yellowstone-header.jpg'></p><h1>Regard Haveller</h1><p>Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;d</p><p><img src='http://kids.nationalgeographic.com/content/dam/kids/photos/articles/History/M-Z/YELLOWSTONE%20LAKE.adapt.945.1.jpg'></p><p><br></p><h1>Regard Haveller</h1><p>Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;d</p>",
  author_id: guest.id,
  date: Date.new,
  description: "Become a pro gardener in just a few days!",
  image: "https://s3.amazonaws.com/large-dev/story2.jpg"
})
