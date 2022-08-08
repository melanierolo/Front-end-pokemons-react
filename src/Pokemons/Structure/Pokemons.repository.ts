import { getPokemons, getPokemon } from "./Pokemons.service";

export async function getPokemonsRepository(params?: any) {
  const data = await getPokemons(params);
  return data;
}

export async function getPokemonRepository(id: number) {
  const data = await getPokemon(id);
  return data;
}
