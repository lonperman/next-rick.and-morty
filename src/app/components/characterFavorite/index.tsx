import React from "react";
import Image from "next/image";
import { Character } from "../../../../types";
import "./index.css";

function CharacterFavorite({ character }: { character: Character }) {
  return (
    <div className="card-favorite">
      <Image
        className="card-favorite-img"
        src={character.image}
        alt={character.name}
        width={100}
        height={100}
        loading="lazy"
      />
      <section className="info-favorite">
        <h3>{character.name}</h3>
        <section className="info">
          <p key={`${character.id}-status`}>Status: {character.status}</p>
          <p key={`${character.id}-species`}>Species: {character.species}</p>
          <p key={`${character.id}-type`}>Type: {character.type === "" ? 'Unknown' : character.type}</p>
          <p key={`${character.id}-gender`}>Gender: {character.gender}</p>
          {character.origin.name && (
            <p key={`${character.id}-origin`}>Origin: {character.origin.name}</p>
          )}
        </section>
      </section>
    </div>
  );
}

export default CharacterFavorite;

