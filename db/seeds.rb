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

product1 = Product.create(name:"Bulbasaur Plush", description:"Full of adventurous charm, this Bulbasaur Poké Plush is ready to go on a journey! A big plush bulb tops off a fun look featuring embroidery and soft fabric. Where will you go with Bulbasaur?", category:"plush", price: 14.99)
product2 = Product.create(name:"Charmander Plush", description:"Full of adventurous charm, this Charmander Poké Plush is ready to go on a journey! A bright, fluffy tail flame tops off a fun look featuring embroidery and soft fabric. Where will you go with Charmander?", category:"plush",  price: 14.99)
product3 = Product.create(name:"Squirtle Plush", description:"Full of adventurous charm, this Squirtle Poké Plush is ready to go on a journey! A plush shell and curled tail top off a fun look featuring embroidery and soft fabric. Where will you go with Squirtle?", category:"plush", price: 14.99)
product4 = Product.create(name:"Pikachu Plush", description:"Pikachu is here for you as a big plush based on its size listed in the Pokédex! This Electric-type Pokémon is famous the world over, with its can-do attitude and deep friendships with Trainers and fellow Pokémon. This Poké Plush stands out with soft fabric, detailed embroidery, and a super-cute expression!", category:"plush", price: 42.99)
product5 = Product.create(name:"Pikachu Socks", description:"Great socks for any Trainer's journey! These Pikachu Silhouette Sync mid-calf socks fit most adults. A Pokémon Center Original design.n", size:"large", category:"clothing", price: 12.50)
product6 = Product.create(name:"Vaporeon Figure", description:"Vaporeon is ready to make a splash as it leaps from waterfall to pool! Catch your own bit of the wave with the Afternoon with Eevee & Friends Figure by Funko and Pokémon Center while you can—they won’t last long!", category:"figures&pins", price: 14.99)
product7 = Product.create(name:"Eevee Figure", description:"These adorable Eevee are ready to make new friends and explore the world of Pokémon! Catch a touch of Eevee’s magic with the Afternoon with Eevee & Friends Figure by Funko and Pokémon Center while you can—they won’t last long!", category:"figures&pins", price: 14.99)
product8 = Product.create(name:"Pikachu Bow Tie", description:"Put some spark into your formalwear with this black silk bow tie that lends you electrifying style with a classic look. Pikachu's boundless energy will have you looking sharp at the office, that big party, or anywhere else you need to look your very best!", size:"medium", category:"clothing", price: 24.99)
product9 = Product.create(name:"Pikachu Water Bottle", description:"With a cool design featuring Pikachu and friends on stage, jamming, riffing, and making their day rock, this water bottle will help you stay happy and hydrated! The screw-top lid has a loop for easy carrying.", category:"home&office", price: 14.99)


cart_item1 = CartItem.create(user_id:user1.id, product_id:product4.id, quantity:1)


