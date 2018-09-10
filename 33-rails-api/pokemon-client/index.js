const formEl = document.querySelector('#pokeForm')
const nameInput = document.querySelector('#pokeNameInput')
const imageInput = document.querySelector('#pokeImageInput')
const trainerInput = document.querySelector('#pokeTrainerInput')
const pokeListEl = document.querySelector('#pokeList')
const url = 'http://localhost:3000/user'

function appendPokemon(pokemon) {
  const pokeEl = document.createElement('li')
  pokeEl.innerHTML = `
    <h3>${pokemon.name}</h3>
    <img src="${pokemon.image}" />
  `
  pokeListEl.append(pokeEl)
}

function appendPokemons(pokemons) {
  pokemons.forEach(pokemon => appendPokemon(pokemon))
}

formEl.addEventListener('submit', event => {
  event.preventDefault()
  const pokemon = {
    name: nameInput.value,
    image: imageInput.value,
    trainer: trainerInput.value
  }
  console.log(pokemon)
  appendPokemon(pokemon)
})

function getUsers() {
  return fetch(url)
    .then(resp => resp.json())
}

getUsers()
  .then(usersData => appendPokemons(usersData[0].pokemons))
