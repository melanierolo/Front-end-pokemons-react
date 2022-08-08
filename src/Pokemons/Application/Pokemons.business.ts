import { getPokemonLogic, getPokemonsLogic } from "./Pokemons.logic";
import {
  saveAddPokemons,
  saveListPokemons,
  saveSelectedPokemon,
  savePokemon,
} from "../Structure/Pokemons.store";

export async function getPokemons(params?: any) {
  const data = await getPokemonsLogic(params);
  saveListPokemons(data?.data?.results);
}

export async function getPokemon(id: number) {
  const pokemon = await getPokemonLogic(id);
  saveSelectedPokemon(pokemon?.data);
  saveAddPokemons(pokemon?.data);
}

export async function getPokemonData(id: number) {
  const pokemon = await getPokemonLogic(id);
  savePokemon(pokemon?.data);
}

export default getPokemons;
