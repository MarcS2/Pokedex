import { AppState } from "../AppState.js"

export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.nickName = data.nickName || null
    this.img = data.img || data.sprites.front_default
    this.weight = data.weight.toString()
    this.height = data.height.toString()
    this.types = data.types || []
    this.creatorId = data.creatorId
  }


  // static get wildListTemplate() {
  //   return `<p role="button" type="button"><i class="mdi mdi-pokeball"></i> ${AppState.wildPokemon.name}</p>`
  // }

  get activePokemonTemplate() {
    let pokeType = ''
    this.types.forEach(type => pokeType += type.type.name + ' ')
    console.log(pokeType);
    return `<div class="border border-3 border-dark fs-2">${this.name}</div>
    <img class="pokemon-img "
      src="${this.img}" alt=" pokemon">
    <div class="border border-3 border-dark fs-2">height: ${this.height}, Weight: ${this.weight} Type: ${pokeType}</div>
            `
  }
}