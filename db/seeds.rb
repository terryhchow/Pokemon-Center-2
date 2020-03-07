# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Product.destroy_all
CartItem.destroy_all

user1 = User.create(email: "pika@chu.com", name: "Pikachu", address: "Not a pokeball", password: 'password')
user2 = User.create(email: "lapras@hrrr.com", name: "Lapras", address: "Ice Castle", password: 'password')
user3 = User.create(email: "oshawot@pokemon.com", name: "Oshawot", address: "", password: 'password')
user3 = User.create(email: "karp@karp.com", name: "Magikarp", address: "karp", password: 'password')

product1 = Product.create(name:"Pikachu Plush", description:"Soft and huggable plush", category:"plush")
product2 = Product.create(name:"Magikarp Plush", description:"Soft and huggable plush", category:"plush")
product3 = Product.create(name:"Oshawot Plush", description:"Soft and huggable plush", category:"plush")
product4 = Product.create(name:"Lapras Plush", description:"Soft and huggable plush", category:"plush")
product5 = Product.create(name:"Pikachu Socks", description:"Black socks with pikachu pattern", size:"large", category:"clothing")

cart_item1 = CartItem.create(user_id:1, product_id:1, quantity:1)