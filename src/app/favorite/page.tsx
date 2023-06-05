"use client";
import React from "react";
import { useCharacterStore } from "../store/charactersStore";
import CharacterFavorite from "../components/characterFavorite";
import "../globals.css";
import "./index.css";
import Link from "next/link";
import useStore from "../store/useStore";

function Favorite() {
  const favorite = useStore(useCharacterStore, (state) => state.favorite);

  return (
    <div className="container-favorite">
      <section>
        <h1 className="favorite-item">Favorite</h1>
        <Link href="/" className="home-favorite">
          Home
        </Link>
      </section>
      <div className="row-favorite">
        {favorite === undefined ? (
          <h2 className="not-add">Not Added to Favorites</h2>
        ) : favorite.length === 0 ? (
          <h2 className="not-add">Not Added to Favorites</h2>
        ) : (
          favorite.map((character) => (
            <div key={character.id} className="row-children-favorite">
              <CharacterFavorite character={character} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Favorite;
