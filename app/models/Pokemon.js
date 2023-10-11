import { AppState } from "../AppState.js"

export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.nickName = data.nickName
    this.img = data.img
    this.weight = data.weight
    this.height = data.height
    this.types = data.types || data.types.forEach(type =>)
    this.creatorId = data.creatorId
  }


  // static get wildListTemplate() {
  //   return `<p role="button" type="button"><i class="mdi mdi-pokeball"></i> ${AppState.wildPokemon.name}</p>`
  // }
}