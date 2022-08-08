import API from "../../Data/Domain/API";
import URL from "../../Data/Domain/URL";

export async function getPokemons(params?: any) {
  return await new API(URL.setParams(URL.buildUrl("pokemon"), params)).get();
}

export async function getPokemon(id: number) {
  return await new API(URL.setId(URL.buildUrl("pokemon"), id)).get();
}
