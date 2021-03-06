class User < ApplicationRecord
  has_secure_password
  has_many :posts
  has_many :post_likes
  has_many :comments
  # validates :password, length: { minimum: 6 }

  validates :username, presence: true, uniqueness: true
end
