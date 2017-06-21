
@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username
    json.image_url asset_path(user.image.url)
  end
end
