import { Combobox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Game } from "../../model/Game";
import { getGames } from "../../services/GameService";

const GameSelect = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<Game[]>([]);
  const [selected, setSelected] = useState<Game | null>(null);
  const navigate = useNavigate();

  const handleSelect = (game: Game) => {
    setSelected(game);
    navigate(`games/${game.id}`);
  };

  useEffect(() => {
    setResult(getGames(query));
  }, [query]);

  return (
    <Combobox value={selected} onChange={handleSelect}>
      <div className="relative">
        <Combobox.Input
          className="w-full rounded-md text-left outline-none ring-0 px-2"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(game: Game | null) => game?.name || ""}
          placeholder="Select a game..."
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
          <Combobox.Options className="absolute w-full bg-white/80 px-2 rounded-lg">
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
