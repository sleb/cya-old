import { Game } from "../model/Game";

const games: Game[] = [
  {
    id: "1",
    dateInSecondsFromEpoch: 1693980582,
    name: "You are Cruisin' for a Bruisin' my Friend",
    players: [
      { displayName: "Hen", id: "123" },
      { displayName: "Abe", id: "124" },
      { displayName: "Dad", id: "125" },
      { displayName: "Mom", id: "126" },
      { displayName: "Fred", id: "127" },
    ],
  },
  {
    id: "2",
    dateInSecondsFromEpoch: 1693000000,
    name: "Thanksgiving '23",
    deckSeed: 12003,
    players: [
      { displayName: "Hen", id: "123" },
      { displayName: "Abe", id: "124" },
      { displayName: "Dad", id: "125" },
      { displayName: "Mom", id: "126" },
      { displayName: "Fred", id: "127" },
    ],
  },
];

export const getGames = (query: string | undefined) => {
  return query && query !== ""
    ? games.filter((g) => g.name.toLowerCase().includes(query.toLowerCase()))
    : games;
};

export const getGame = (id: string): Game | undefined => {
  return games.find((g) => g.id === id);
};
