import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { signInUser, signOutUser } from "../../services/AuthService";
import { userIdState } from "../../state/UserIdState";

const Menu = () => {
  const userId = useRecoilValue(userIdState);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser().catch(console.error);
  };

  const handleSignIn = () => {
    signInUser().catch(console.error);
  };

  return (
    <div className="space-x-4">
      <button onClick={() => navigate("games/new")}>New Game</button>
      {userId ? (
        <button onClick={handleSignOut}>Log Out</button>
      ) : (
        <button onClick={handleSignIn}>Log In</button>
      )}
    </div>
  );
};

export default Menu;
