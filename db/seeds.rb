# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create(email: "pika@chu.com", name: "Pikachu", address: "Not a pokeball", password: 'password')
user2 = User.create(email: "lapras@hrrr.com", name: "Lapras", address: "Ice Castle", password: 'password')
user3 = User.create(email: "oshawot@pokemon.com", name: "Oshawot", address: "", password: 'password')
user3 = User.create(email: "karp@karp.com", name: "Magikarp", address: "karp", password: 'password')