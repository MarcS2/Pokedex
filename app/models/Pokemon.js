import { AppState } from "../AppState.js"

export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.nickName = data.nickName || null
    this.img = data.img || data.sprites.front_default
    this.weight = data.weight
    this.height = data.height
    this.types = data.types || []
    this.creatorId = data.creatorId
  }


  // static get wildListTemplate() {
  //   return `<p role="button" type="button"><i class="mdi mdi-pokeball"></i> ${AppState.wildPokemon.name}</p>`
  // }

  get activePokemon() {
    return ` <div class="border border-3 border-dark fs-2">${this.name}</div>
            <img class="pokemon-img "
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt=" pokemon">
            <div class="border border-3 border-dark fs-2">${this.height}, ${this.weight}, ${this.types}</div>`
  }
}