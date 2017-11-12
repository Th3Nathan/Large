# == Schema Information
#
# Table name: stories
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  body               :string           not null
#  author_id          :integer          not null
#  date               :date             not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  description        :string
#

FactoryBot.define do
    factory :story do
        title { Faker::Hipster.words.first }
        body { Faker::Hipster.paragraph(15, true) }
        description { Faker::Hipster.sentence }
        author_id 1
        date { Date.new }
    end
  end
  
