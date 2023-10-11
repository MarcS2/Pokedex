import { AppState } from "../AppState.js";
import { pokeApi } from "./AxiosService.js"

class WildPokemonsService {
  async setActivePokemon(pokemonName) {
    try {
      const res = await pokeApi.get(pokemonName)
      console.log(res.data);

    } catch (error) {

    }
  }
  async getWildPokemon() {
    const res = await pokeApi.get('?limit=50000&offset=0')
    console.log(res.data.results);
    AppState.wildPokemon = res.data.results
    console.log(AppState.wildPokemon);
  }

}

export const wildPokemonsService = new WildPokemonsService()