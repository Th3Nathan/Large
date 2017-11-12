FactoryBot.define do
    factory :comment do
        body { Faker::Hipster.paragraph }
        author_id 1
        story_id 1 
    end
  end
  