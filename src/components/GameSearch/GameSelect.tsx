import { Combobox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Game } from "../../model/Game";
import { onGamesChange } from "../../services/GameService";
import { userIdState } from "../../state/UserIdState";

const GameSelect = () => {
  // userId must be non-null. Protected by AuthRequired
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const userId = useRecoilValue(userIdState)!;
  const [games, setGames] = useState<Game[]>([]);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<Game[]>([]);
  const [selected, setSelected] = useState<Game | null>(null);
  const navigate = useNavigate();

  const handleSelect = (game: Game) => {
    setSelected(game);
    navigate(game.id);
  };

  useEffect(() => {
    return onGamesChange(userId, setGames);
  }, [userId]);

  useEffect(() => {
    const getGames = (query: string | undefined) => {
      return query && query !== ""
        ? games.filter((g) =>
            g.name.toLowerCase().includes(query.toLowerCase())
          )
        : games;
    };
    setResult(getGames(query));
  }, [query, games]);

  return (
    <Combobox value={selected} onChange={handleSelect}>
      <div className="relative">
        <Combobox.Input
          className="w-full rounded-md text-left outline-none ring-0 px-2"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(game: Game | null) => game?.name || ""}
          placeholder={games.length === 0 ? "No games" : "Select a game..."}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon className="h-5 w-5 text-slate-400" />
        </Combobox.Button>
      </div>
      <div className="relative">
        <Transition
          as={Fragment}
          leave="transition ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className="absolute w-full bg-white px-2 rounded-lg z-10 drop-shadow-md">
            {result.length === 0 && query !== "" ? (
              <div className="text-red-900">Nothing Found</div>
            ) : (
              <div>
                {result.map((game) => (
                  <Combobox.Option value={game} key={game.id}>
                    {({ selected }) => (
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {game.name}
                      </span>
                    )}
                  </Combobox.Option>
                ))}
              </div>
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};

export default GameSelect;
