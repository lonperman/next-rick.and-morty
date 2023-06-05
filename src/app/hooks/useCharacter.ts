import { useQuery } from "@tanstack/react-query";
import api from "../api/fetch-api";
import { ResultCharacter } from "../../../types";

async function fecthCharacter(page: number) {
  const { data:{results} }  = await api.get<ResultCharacter>(`/character?page=${page}`);
  return results;
}

export function useFecthCharacter(page: number) {
  return useQuery(['characters', page],() => fecthCharacter(page));
}
