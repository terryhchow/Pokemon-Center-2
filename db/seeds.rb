# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create(email: "pikachu@pokemon.com", name: "Pikachu", address: "Not a pokeball", password: 'password')
user2 = User.create(email: "lapras@pokemon.com", name: "Lapras", address: "Ice Castle", password: 'password')
user3 = User.create(email: "oshawot@pokemon.com", name: "Oshawot", address: "", password: 'password')
user3 = User.create(email: "karp@pokemon.com", name: "Magikarp", address: "Ocean", password: 'password')