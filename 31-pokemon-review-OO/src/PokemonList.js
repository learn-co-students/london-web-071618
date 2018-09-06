class PokemonList {
  constructor() {
    this.pokemons = []
    this.filteredPokemons = []
    this.containerEl = document.querySelector('#pokemon-container')
    this.inputEl = document.querySelector('#pokemon-search-input')
    this.addEventListenerToInput()
    this.getAllPokemons()
  }

  addEventListenerToInput() {
    this.inputEl.addEventListener('keyup', () => {
      this.filterPokemons(this.inputEl.value)
      this.appendPokemons(this.filteredPokemons)
    })
  }

  filterPokemons(searchTerm) {
    this.containerEl.innerHTML = ''
    this.filteredPokemons = this.pokemons.filter(
      pokemon => pokemon.name.includes(searchTerm)
    )
  }

  appendPokemons(pokemons) {
    pokemons.forEach(pokemon => {
      pokemon.appendPokemon()
    })
  }

  getAllPokemons() {
    fetch('http://localhost:8000/db.json')
      .then(resp => resp.json())
      .then(data => data.pokemons)
      .then(pokemons => {
        const pokemonInstances = pokemons.map(pokemon => new Pokemon(pokemon))
        this.pokemons = pokemonInstances
      })
  }

}