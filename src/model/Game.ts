import { Player } from "./Player";

export interface Game {
  id: string;
  name: string;
  seed: number;
  dateInSecondsFromEpoch: number;
  players: Player[];
}
