
@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username
    json.image_url user.image.url
    json.bio user.bio
  end
end
