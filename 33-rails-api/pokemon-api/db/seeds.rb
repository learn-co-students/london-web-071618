# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create([
  {name: 'Nicolas', email: 'nicolas@email.com'},
  {name: 'Sam', email: 'sam@email.com'},
  {name: 'Dan', email: 'Dan@email.com'}
])

Task.create([
  {content: 'Buy milk', user: User.find(1), done: false},
  {content: 'Buy milk', user: User.find(2), done: false},
  {content: 'Buy milk', user: User.find(3), done: false},
])

Pokemon.create([
  {name: 'Pikachu', image: 'https://vignette.wikia.nocookie.net/youtubepoop/images/f/f7/5Pikachu.png', user: User.find(1)},
  {name: 'Pikachu', image: 'https://vignette.wikia.nocookie.net/youtubepoop/images/f/f7/5Pikachu.png', user: User.find(2)},
  {name: 'Pikachu', image: 'https://vignette.wikia.nocookie.net/youtubepoop/images/f/f7/5Pikachu.png', user: User.find(3)}
])