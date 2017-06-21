# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
story1 = Story.new({title: "The little train", body: "once a pon a time, blah", author_id: 1, date: Date.new, image: "images/logo.png"})
story1.create
