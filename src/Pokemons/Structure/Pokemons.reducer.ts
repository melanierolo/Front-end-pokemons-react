import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../Redux/store";

// Define a type for the slice state}

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonImage {
  front_default: string;
}

interface Other {
  dream_world: PokemonImage;
}

interface TypesStat {
  name: string;
}
interface Stat {
  base_stat: number;
  stat: TypesStat;
}

interface PokemonItem {
  name: string;
  id: number;
  sprites: {
    other: Other;
  };
  height: number;
  stats: Array<Stat>;
}

interface PokemonsState {
  list: Array<Pokemon>;
  newList: Array<PokemonItem>;
  selected: null;
  id: null;
  pokemon: PokemonItem;
}

// Define the initial state using that type
const initialState: PokemonsState = {
  list: [],
  newList: [],
  pokemon: {
    name: "",
    id: 0,
    sprites: {
      other: {
        dream_world: {
          front_default: "",
        },
      },
    },
    height: 0,
    stats: [],
  },
  selected: null,
  id: null,
};

export const slice = createSlice({
  name: "pokemons",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setPokemons: (state, { payload: list }) => {
      return {
        ...state,
        list,
      };
    },
    selectPokemon: (state, { payload: selected }) => {
      return {
        ...state,
        selected,
      };
    },
    addPokemons: (state, { payload: newList }) => {
      return {
        ...state,
        newList: [...state.newList, newList],
      };
    },
    cancelSelected: (state, { payload: id }) => {
      return {
        ...state,
        newList: [...state.newList.filter((elem) => elem.id !== id)],
      };
    },
    showPokemon: (state, { payload: pokemon }) => {
      return {
        ...state,
        pokemon,
      };
    },
  },
});

export const {
  setPokemons,
  selectPokemon,
  cancelSelected,
  addPokemons,
  showPokemon,
} = slice.actions;

export default slice.reducer;

// Other code such as selectors can use the imported `RootState` type
export const getPokemonsSelector = (store: RootState) => store.pokemons.list;
export const getSelectedPokemonSelector = (store: RootState) =>
  store.pokemons.selected;
export const addPokemonsSelector = (store: RootState) => store.pokemons.newList;
export const deletePokemonSelector = (store: RootState) =>
  store.pokemons.selected;
export const showPokemonSelector = (store: RootState) => store.pokemons.pokemon;
