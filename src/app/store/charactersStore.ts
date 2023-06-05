import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Character } from "../../../types";

type characterState = {
  stateCharacters: Character[];
  favoriteCharacters: number[];
  favorite: Character[];
  addCharacters: (data: Character[]) => void;
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
};

export const useCharacterStore = create(
  persist<characterState>(
    (set) => ({
      stateCharacters: [],
      favoriteCharacters: [],
      favorite: [],
      addCharacters: (data: Character[]) =>
        set(() => ({
          stateCharacters: data,
        })),
      addFavorite: (id: number) =>
        set((state) => {
          const characterToAdd = state.stateCharacters.find(
            (obj) => obj.id === id
          );
          if (!characterToAdd) return state;
          return {
            favoriteCharacters: [...state.favoriteCharacters, id],
            favorite: [...state.favorite, characterToAdd],
          };
        }),
      removeFavorite: (id: number) =>
        set((state) => {
          const updatedFavoriteCharacters = state.favoriteCharacters.filter(
            (charId) => charId !== id
          );
          const updatedFavorite = state.favorite.filter(
            (character) => character.id !== id
          );

          return {
            favoriteCharacters: updatedFavoriteCharacters,
            favorite: updatedFavorite,
          };
        }),
    }),
    {
      name: "my-characters",
    }
  )
);
