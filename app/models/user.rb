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

class User < ActiveRecord::Base
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token, :ensure_bio

  validates :session_token, presence: true, uniqueness: true
  validates :username, presence: true, uniqueness: true

  has_attached_file :image, styles: { thumb: ["32x32#", :png] }, default_url: "/images/logo.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  has_many :likes,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: 'Like'

  has_many :liked_stories, through: :likes, source: :likeable, source_type: 'Story'
  has_many :liked_comments, through: :likes, source: :likeable, source_type: 'Comment'

  has_many :stories,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: 'Story'

  has_many :comments,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: 'Comment'

  has_many :followee_follows,
  primary_key: :id,
  foreign_key: :follower_id,
  class_name: 'Follow'

  has_many :followees,
  through: :followee_follows,
  source: :author

  has_many :feed_stories,
  through: :followees,
  source: :stories

#these are the follows that follow us, self
  has_many :follower_follows,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: 'Follow'

  has_many :followers,
  through: :follower_follows,
  source: :follower

  has_many :bookmarks,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: 'Bookmark'

  has_many :bookmarked_stories,
  through: :bookmarks,
  source: :story
  # accepts_nested_attributes_for :followed_author_follows, allow_destroy: true

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    return user if user && user.is_password?(password)
    nil
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def ensure_bio
    self.bio ||= ""
  end
end
