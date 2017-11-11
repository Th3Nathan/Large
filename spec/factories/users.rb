# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  username           :string           not null
#  password_digest    :string           not null
#  session_token      :string           not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  bio                :string
#

FactoryBot.define do
    factory :user do
        username { Faker::GameOfThrones.character }
        password { Faker::Internet.password(6, 12) }
    end
  end
  
