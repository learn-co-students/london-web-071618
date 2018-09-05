document.addEventListener("DOMContentLoaded", function() {
  const inputEl = document.querySelector('#pokemon-search-input')
  const pokemonContainer = document.querySelector('#pokemon-container')
  let pokemons = []

  getPokemons()
    .then(pokemonsData => {
      pokemons = pokemonsData
      appendPokemons(pokemons)
    })

  inputEl.addEventListener('keyup', () => {
    const filteredPokemons = filterPokemons(pokemons, inputEl.value)
    pokemonContainer.innerHTML = ''
    appendPokemons(filteredPokemons)
  })
})

function appendPokemon(pokemon) {
  const pokemonEl = document.createElement('div')
  const pokemonContainer = document.querySelector('#pokemon-container')
  
	pokemonEl.innerHTML = `
		<div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
      <h1 class="center-text">${pokemon.name}</h1>
      <div style="width:239px;margin:auto">
        <div style="width:96px;margin:auto">
         <img src="${pokemon.sprites.front}">
        </div>
      </div>
      <p style="padding:10px;" class="center-text flip-image" data-pokename="blastoise" data-action="flip-image">flip card</p>
    </div>
	`
	pokemonContainer.append(pokemonEl)
}

function appendPokemons(pokemons) {
	pokemons.forEach(pokemon => appendPokemon(pokemon))
}

function filterPokemons(pokemons, searchTerm) {
  return pokemons.filter(pokemon => pokemon.name.includes(searchTerm) )
}

function getPokemons() {
  return fetch('http://localhost:8000/db.json')
    .then(resp => resp.json())
    .then(data => data.pokemons)
}
