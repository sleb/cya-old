import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Game } from "../../model/Game";
import { getGame } from "../../services/GameService";

type Params = {
  id: string;
};

const GameDetails = () => {
  const gameId = useParams<Params>().id;
  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    if (gameId) {
      const g = getGame(gameId);
      if (g) {
        setGame(g);
      }
    }
  }, [gameId]);

  return (
    <div className="bg-white rounded-lg px-2">
      {game ? `GameDetails: ${game?.name}` : `No game found for ID: ${gameId}`}
    </div>
  );
};

export default GameDetails;
