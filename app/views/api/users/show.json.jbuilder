json.partial! 'api/partials/user', user: @user
json.image_url asset_path(@user.image.url)
