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

require 'test_helper'

class StoryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
