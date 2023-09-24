import { TrashIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Game } from "../../model/Game";
import { deleteGame, getGame } from "../../services/GameService";

type Params = {
  id: string;
};

const GameDetails = () => {
  const gameId = useParams<Params>().id;
  const [game, setGame] = useState<Game | null>(null);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (gameId) {
      deleteGame(gameId);
      navigate("/");
    }
  };

  useEffect(() => {
    if (gameId) {
      getGame(gameId)
        .then((g) => setGame(g ?? null))
        .catch(console.error);
    }
  }, [gameId]);

  return (
    <div className="bg-white rounded-lg px-2 relative h-10">
      {game ? `GameDetails: ${game?.name}` : `No game found for ID: ${gameId}`}
      <div className="absolute inset-y-0 right-0 flex pr-2 py-1.5 items-start">
        <button onClick={handleDelete}>
          <TrashIcon className="text-slate-400 h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default GameDetails;
