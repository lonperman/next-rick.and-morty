import Image from "next/image";
import React from "react";
import { Character } from "../../../../types";
import { useCharacterStore } from "../../store/charactersStore";
import './index.css';

function Character({ characters, isFavorite }: { characters: Character; isFavorite: boolean }) {

  const addFavorite = useCharacterStore(state => state.addFavorite);
  const removeFavorite = useCharacterStore(state => state.removeFavorite);

  const toggleFavorite = () => {
    if(isFavorite){
      removeFavorite(characters.id)
      return
    }

    addFavorite(characters.id)
  }

  return (
    <div className="card">
      <h3>{characters.name}</h3>
      <Image
        className="card-img"
        src={characters.image}
        alt={characters.name}
        width={150}
        height={150}
      />
      <section className="favorite">
        <p>{characters.origin.name}</p>
        <button className={isFavorite ? 'notFavorite' : 'isFavorite'} onClick={toggleFavorite}>
          {
            isFavorite ? '-' : '+'
          }
          </button>
      </section>
    </div>
  );
}

export default Character;
