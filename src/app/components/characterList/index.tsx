import React, { useEffect, useState } from "react";
import { useCharacterStore } from "../../store/charactersStore";
import { useFecthCharacter } from "../../hooks/useCharacter";
import Character from "../character";
import './index.css'

function NavPage({
  page,
  setPage,
}: {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <header className="next-container">
      { page === 1 ? (<p>Page: {page}</p>): (<button className="next-page" onClick={() => setPage(page - 1)}>Page: {page - 1}</button>)}
      <button className="next-page" onClick={() => setPage(page + 1)}>
        Page: {page + 1}
      </button>
    </header>
  );
}

function CharacterList() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useFecthCharacter(page);
  const { stateCharacters, favoriteCharacters ,addCharacters } = useCharacterStore();

  useEffect(() => {
    if (data !== undefined) addCharacters(data);
  }, [data]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container">
      <NavPage page={page} setPage={setPage} />
      <div className="row">
        {stateCharacters.map((characters) => {
          return (
            <div className="row-children" key={characters.id}>
              <Character 
              characters={characters}
              isFavorite={favoriteCharacters.includes(characters.id)} 
              />
            </div>
          );
        })}
      </div>
      <NavPage page={page} setPage={setPage} />
    </div>
  );
}

export default CharacterList;
