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
  image: "https://s3.amazonaws.com/large-dev/dog.jpg",
  username: "Commenter",
  password: "password",
  bio: "I like to comment on stuff"
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
  title: "Eating Sushi",
  description: "This is in the story blurb",
  body: "<p><strong>ومطالبة دول الحصار بإغلاق القاع</strong></p><p>ور وزير الدولة القطري لشؤون الدفاع خالد العطية أنقرة مساء اليوم وسيلتقي غدا نظيره التركي والرئيس أردوغان. ويتوقع أن تشمل المحادثات الأزمة الخليجية ومطالبة دول الحصار بإغلاق القور وزير الدولة القطري لشؤون الدفاع خالد العطية أنقرة مساء اليوم وسيلتقي غدا نظيره التركي والرئيس أردوغان. ويتوقع أن تشمل المحادثات الأزمة الخليجية ومطالبة دول الحصار بإغلاق القور وزير الدولة القطري لشؤون الدفاع خالد العطية أنقرة مساء اليوم وسيلتقي غدا نظيره التركي والرئيس أردوغان. ويتوقع أن تشمل المحادثات الأزمة الخليجية ومطالبة دول الحصار بإغلاق القور وزير الدولة القطري لشؤون الدفاع خالد العطية أنقرة مساء اليوم وسيلتقي غدا نظيره التركي والرئيس أردوغان. ويتوقع أن تشمل المحادثات الأزمة الخليجية ومطالبة دول الحصار بإغلاق القور وزير الدولة القطري لشؤون الدفاع خالد العطية أنقرة مساء اليوم وسيلتقي غدا نظيره التركي والرئيس أردوغان. ويتوقع أن تشمل المحادثات الأزمة الخليجية ومطالبة دول الحصار بإغلاق القور وزير الدولة القطري لشؤون الدفاع خالد العطية أنقرة مساء اليوم وسيلتقي غدا نظيره التركي والرئيس أردوغان. ويتوقع أن تشمل المحادثات الأزمة الخليجية ومطالبة دول الحصار بإغلاق الق</p><p><img src='https://tse4.mm.bing.net/th?id=ORT.TH_470633631&amp;pid=1.12&amp;eid=G.470633631'> ر وزير الدولة القطري لشؤون الدفاع خالد العطية أنقرة مساء اليوم وسيلتقي غدا نظيره التركي والرئيس أردوغان. ويتوقع أن تشمل المحادثات الأزمة الخليجية ومطالبة دول الحصار بإغلاق القاعر وزير</p><p><strong> الدولة القطري لشؤون الدفاع</strong> خالد العطية أنقرة مساء اليوم وسيلتقي غدا نظيره التركي والرئيس أردوغان. ويتوقع أن تشمل المحادثات الأزمة الخليجية ومطالبة دول الحصار بإغلاق القاعر وزير الدولة القطري لشؤون الدفاع خالد العطية أنقرة مساء اليوم وسيلتقي غدا نظيره التركي والرئيس أردوغان. ويتوقع أن تشمل المحادثات الأزمة الخليجية ومطالبة دول الحصار بإغلاق القاعر وزير الدولة القطري لشؤون الدفاع خالد العطية أنقرة مساء اليوم وسيلتقي غدا نظيره التركي والرئيس أردوغان. ويتوقع أن تشمل المحادثات الأزمة الخليجية ومطالبة دول الحصار بإغلاق القاعر وزير الدولة القطري لشؤون الدفاع خالد العطية أنقرة مساء اليوم وسيلتقي غدا نظيره التركي والرئيس أردوغان. ويتوقع أن تشمل المحادثات الأزمة الخليجية ومطالبة دول الحصار بإغلاق القاعر وزير الدولة القطري لشؤون الدفاع خالد العطية أنقرة مساء اليوم وسيلتقي غدا نظيره التركي والرئيس أردوغان. ويتوقع أن تشمل المحادثات الأزمة الخليجية ومطالبة دول الحصار بإغلاق القاعر وزير الدولة القطري لشؤون الدفاع خالد العطية أنقرة مساء اليوم وسيلتقي غدا نظيره التركي والرئيس أردوغان. ويتوقع أن تشمل المحادثات الأزمة الخليجية ومطالبة دول الحصار بإغلاق القاعر وزير الدولة القطري لشؤون الدفاع خالد العطية أنقرة مساء اليوم وسيلتقي غدا نظيره التركي والرئيس أردوغان. ويتوقع أن تشمل المحادثات الأزمة الخليجية ومطالبة دول الحصار بإغلاق القاعر وزير الدولة القطري لشؤون الدفاع خالد العطية أنقرة مساء اليوم وسيلتقي غدا نظيره التركي والرئيس أردوغان. ويتوقع أن تشمل المحادثات الأزمة الخليجية ومطالبة دول الحصار بإغلاق القاعر وزير الدولة القطري لشؤون الدفاع خالد العطية أنقرة مساء اليوم وسيلتقي غدا نظيره التركي والرئيس أردوغان. ويتوقع أن تشمل المحادثات الأزمة الخليجية ومطالبة دول الحصار بإغلاق القاعر وزير الدولة القطري لشؤون الدفاع خالد العطية أنقرة مساء اليوم وسيلتقي غدا نظيره التركي والرئيس أردوغان. ويتوقع أن تشمل المحادثات الأزمة الخليجية ومطالبة دول الحصار بإغلاق القاعر وزير الدولة القطري لشؤون الدفاع خالد العطية أنقرة مساء اليوم وسيلتقي غدا نظيره التركي والرئيس أردوغان. ويتوقع أن تشمل المحادثات الأزمة الخليجية ومطالبة دول الحصار بإغلاق القاع</p><p><img src='https://cdn.pixabay.com/photo/2017/01/06/19/15/soap-bubble-1958650_960_720.jpg'> نقرة مساء اليوم وسيلتقي غدا نظيره التركي والرئيس أردوغان. ويتوقع أن تشمل المحادثات الأزمة الخليجية ومطالبة دول الحصار بإغلاق القاعر وزير</p><p><strong> الدولة القطري لشؤون الدفاع</strong> خالد العطية أنقرة مساء اليوم وسيلتقي غدا نظيره التركي والرئيس أردوغان. ويتوقع أن تشمل المحادثات الأزمة الخليجية ومطالبة دول الحصار بإغلاق القاعر وزير الدولة القطري لشؤون الدفاع خالد العطية أنقرة مساء اليوم وسيلتقي غدا نظيره التركي والرئيس أردوغان. ويتوقع أن تشمل المحادثات الأزمة الخليجية ومطالبة دول الحصار بإغلاق القاعر وزير الدولة القطري لشؤون الدفاع خالد العطية أنقرة مساء اليوم وسيلتقي غدا نظيره التركي والرئيس أردوغان. ويتوقع أن تشمل المحادثات الأزمة الخليجية ومطالبة دول الحصار بإغلاق القاعر وزير الدولة القطري لشؤون الدفاع خالد العطية أنقرة مساء اليوم وسيلتقي غدا نظيره التركي والرئيس أردوغان. ويتوقع أن تشمل المحادثات الأزمة الخليجية ومطالبة دول الحصار بإغلاق القاعر وزير الدولة القطري لشؤون الدفاع خالد العطية أنقرة مساء اليوم وسيلتقي غدا نظيره التركي والرئيس أردوغان. ويتوقع أن تشمل المحادثات الأزمة الخليجية ومطالبة دول الحصار بإغلاق القاعر وزير الدولة القطري لشؤون الدفاع خالد العطية أنقرة مساء اليوم وسيلتقي غدا نظيره التركي والرئيس أردوغان. ويتوقع أن تشمل المحادثات الأزمة الخليجية ومطالبة دول الحصار بإغلاق القاعر وزير الدولة القطري لشؤون الدفاع خالد العطية أنقرة مساء اليوم وسيلتقي غدا نظيره التركي والرئيس أردوغان. ويتوقع أن تشمل المحادثات الأزمة الخليجية ومطالبة دول الحصار بإغلاق القاعر وزير الدولة القطري لشؤون الدفاع خالد العطية أنقرة مساء اليوم وسيلتقي غدا نظيره التركي والرئيس أردوغان. ويتوقع أن تشمل المحادثات الأزمة الخليجية ومطالبة دول الحصار بإغلاق القاعر وزير الدولة القطري لشؤون الدفاع خالد العطية أنقرة مساء اليوم وسيلتقي غدا نظيره التركي والرئيس أردوغان. ويتوقع أن تشمل المحادثات الأزمة الخليجية ومطالبة دول الحصار بإغلاق القاعر وزير الدولة القطري لشؤون الدفاع خالد العطية أنقرة مساء اليوم وسيلتقي غدا نظيره التركي والرئيس أردوغان. ويتوقع أن تشمل المحادثات الأزمة الخليجية ومطالبة دول الحصار بإغلاق القاعر وزير الدولة القطري لشؤون الدفاع خالد العطية أنقرة مساء اليوم وسيلتقي غدا نظيره التركي والرئيس أردوغان. ويتوقع أن تشمل المحادثات الأزمة الخليجية ومطالبة دول الحصار بإغلاق القاع</p>",
  author_id: guest.id,
  date: Date.new,
  image: "https://s3.amazonaws.com/large-dev/story1.jpg"
})

  comment1 = Comment.create({
    body: "Why are you eating so much sushi?",
    author_id: commenter.id,
    story_id: story1.id
  })

  comment2 = Comment.create({
    body: "Cuz Im RICH...!",
    author_id: story1.author_id,
    story_id: story1.id
  })

  comment3 = Comment.create({
    body: "Sik LIFE Homz",
    author_id: commenter.id,
    story_id: story1.id
  })

story5 = Story.create({
  title: "Eating Sushi",
  description: "This is in the story blurb",
  body: "This is how you eat sushi...",
  author_id: guest.id,
  date: Date.new,
  image: "https://s3.amazonaws.com/large-dev/story1.jpg"
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
    body: "Not again yo",
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
    body: "You know I like sushi, comon man",
    author_id: story5.author_id,
    story_id: story5.id
  })

  comment6 = Comment.create({
    body: "UGh Fine ... ders keepers!",
    author_id: commenter.id,
    story_id: story5.id
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
