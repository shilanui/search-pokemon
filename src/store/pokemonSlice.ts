import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pokemons: [],
  searchName: ''
};

export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setPokemonList: (state, action) => {
        state.pokemons = action.payload;
    },
    setSearchName: (state, action) => {
    state.searchName = action.payload;
    },
  },
});

export const { setPokemonList,setSearchName } = pokemonSlice.actions;
export const pokemonList = (state: any) => state?.pokemons;
export default pokemonSlice.reducer;