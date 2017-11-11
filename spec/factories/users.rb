FactoryBot.define do
    factory :user do
        username { Faker::GameOfThrones.character }
        password { Faker::Internet.password(6, 12) }
    end
  end
  