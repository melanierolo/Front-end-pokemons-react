import {
  getPokemonsRepository,
  getPokemonRepository,
} from "../Structure/Pokemons.repository";

export async function getPokemonsLogic(params?: any) {
  return getPokemonsRepository(params);
}

export async function getPokemonLogic(id: number) {
  return getPokemonRepository(id);
}
