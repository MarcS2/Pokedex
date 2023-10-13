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
    return `<section class="row mt-5">
    <div class="col-12 border border-3 border-dark fs-2">
      ${this.name}
    </div>
    <div class="col-12">
      <img class="pokemon-img " src="${this.img}" alt=" pokemon">

    </div>
    <div class="col-12">
      <section class="row border border-3 border-dark fs-2 txt-bg justify-content-between">
        <div class="col-3">
          <p class="text-start">Height: ${this.height}</p>

        </div>
        <div class="col-3">
          <p class="d-inline text-end mx-3">Weight: ${this.weight}</p>

        </div>
        <div class="col-12">
          <p class="text-center">Type: ${pokeType}</p>

        </div>
      </section>

    </div>
  </section>
            `
  }
}