import { configureStore } from '@reduxjs/toolkit';
import pokemonSlice from "./pokemonSlice";

export default configureStore({
    reducer: {
        pokemons: pokemonSlice,
        searchName: pokemonSlice,
    },
  });