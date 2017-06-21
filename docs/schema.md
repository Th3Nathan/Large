
# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## stories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
image_url   | string    |
date        | date      | not null
??How to store multiple images per story in order??

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
story_id    | integer   | not null, foreign key (references stories), indexed
body        | string    | not null
date        | date      | not null

## follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users), indexed
author_id   | integer   | not null, foreign key (references users), indexed

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
story_id    | integer   | not null, foreign key (references stories), indexed

# Bonus #

## Tagging ##

## tag_follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users), indexed
tag_id      | integer   | not null, foreign key (references tags), indexed

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
story_id    | integer   | not null, foreign key (references stories), indexed
tag_id      | integer   | not null, foreign key (references tags), indexed

## publications
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | string    |
image_url   | string    | not null
description | string    | not null
follow_count| integer   | not null

Stories will need a publisher_id foreign key

## bookmarkings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
story_id    | integer   | not null, foreign key (references stories), indexed

## blockings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
blocker_id  | integer   | not null, foreign key (references users), indexed
blocked_id  | integer   | not null, foreign key (references users), indexed

## replies
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
comment_id  | integer   | not null, foreign key (references comments), indexed
body        | string    | not null
date        | date      | not null

???How to support nested replies on the database level
