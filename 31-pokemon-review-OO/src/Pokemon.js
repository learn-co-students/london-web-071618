class Pokemon {
  constructor(pokemon) {
    this.name = pokemon.name
    this.frontImage = pokemon.sprites.front
    this.backImage = pokemon.sprites.back
    this.containerEl = document.querySelector('#pokemon-container')
  }

  appendPokemon() {
    const pokemonEl = document.createElement('div')
    
    pokemonEl.innerHTML = `
      <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${this.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
           <img id="img-${this.name}" src="${this.frontImage}">
          </div>
        </div>
        <p style="padding:10px;" class="center-text flip-image" data-pokename="blastoise" data-action="flip-image">flip card</p>
      </div>
    `
    const flipImageEl = pokemonEl.querySelector('.flip-image')
    flipImageEl.addEventListener('click', () => {
      const imageEl = document.querySelector(`#img-${this.name}`)
      if (imageEl.src === this.frontImage) {
        imageEl.src = this.backImage
      } else {
        imageEl.src = this.frontImage
      }
    })
  
    this.containerEl.append(pokemonEl)
  }
}
