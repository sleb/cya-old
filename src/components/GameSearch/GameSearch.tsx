import { Outlet } from "react-router-dom";
import GameSelect from "./GameSelect";

const GameSearch = () => {
  return (
    <div className="flex flex-col space-y-2">
      <GameSelect />
      <Outlet />
    </div>
  );
};

export default GameSearch;
