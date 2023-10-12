import { AppState } from "../AppState.js";
import { wildPokemonsService } from "../services/WildPokemonnsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawWildPokemon() {
  const wildPokemon = AppState.wildPokemon
  let content = ''
  wildPokemon.forEach(pokemon => content += `<p onclick="app.WildPokemonsController.setActivePokemon('${pokemon.name}')" role="button" type="button" class="fs-4"><i class="mdi mdi-pokeball"></i> ${pokemon.name}</p>`)
  setHTML('wild-pokemon-list', content)
}

function _drawActivePokemon() {
  // @ts-ignore
  setHTML('active-pokemon', AppState.activePokemon.activePokemonTemplate)
}

export class WildPokemonsController {
  constructor() {
    this.getWildPokemon()
    AppState.on('wildPokemon', _drawWildPokemon)
    AppState.on('activePokemon', _drawActivePokemon)
  }
  async getWildPokemon() {
    try {
      await wildPokemonsService.getWildPokemon()
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }


  setActivePokemon(pokemonName) {

    wildPokemonsService.setActivePokemon(pokemonName)
  }
}