import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <div className="space-x-4">
      <button onClick={() => navigate("games/new")}>New Game</button>
      <button onClick={() => navigate("profile")}>Profile</button>
    </div>
  );
};

export default Menu;
