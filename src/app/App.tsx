'use client'
import Link from "next/link";
import CharacterList from "./components/characterList";
import "./globals.css";

export const MyApp = () => {
  return (
    <div className="main">
      <div className="pages">
        <h1 className="title">Rick and Morty</h1>
        <Link href="/favorite" className="list-favorite">
          Favorite
        </Link>
      </div>
      <CharacterList />
    </div>
  );
};
