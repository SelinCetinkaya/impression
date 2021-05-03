# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

PostLike.destroy_all
Comment.destroy_all
Post.destroy_all
User.destroy_all

user1 = User.create!(username: "selin", password: "123456")

post1 = Post.create!(img_url: "randourl", content: "rando content", user: user1)
Post.create!(img_url: "randourl2", content: "rando content 2", user: user1)

comment1 = Comment.create!(content: "random content", user: user1, post: post1)

like = PostLike.create!(is_liked: true, user: user1, post: post1)

puts "#{User.count} users created!"
puts "#{Post.count} posts created!"