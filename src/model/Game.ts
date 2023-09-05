import { Player } from "./Player";

export interface Game {
  id: string;
  name: string;
  dateInSecondsFromEpoch: number;
  players: Player[];
}
