import store from "../../Redux/store";
import {
  setPokemons,
  selectPokemon,
  cancelSelected,
  addPokemons,
  showPokemon,
} from "./Pokemons.reducer";

export function saveListPokemons(records?: any) {
  store.dispatch(setPokemons(records));
}

export function saveSelectedPokemon(pokemon?: any) {
  store.dispatch(selectPokemon(pokemon));
}

export function deselectPokemon(id?: any) {
  store.dispatch(cancelSelected(id));
}

export function saveAddPokemons(records?: any) {
  store.dispatch(addPokemons(records));
}

export function savePokemon(pokemon?: any) {
  store.dispatch(showPokemon(pokemon));
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
