import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { signInUser } from "../../services/AuthService";
import { userIdState } from "../../state/UserIdState";
import Button from "../Button";

const HomePage = () => {
  const userId = useRecoilValue(userIdState);
  const navigate = useNavigate();

  const handleSignIn = () => {
    signInUser().catch(console.error);
  };

  return (
    <div className="justify-center flex flex-col p-2 space-y-2">
      {userId ? (
        <>
          <Button onClick={() => navigate("games/")}>Find Game</Button>
          <Button onClick={() => navigate("games/new")}>New Game</Button>
        </>
      ) : (
        <Button onClick={handleSignIn}>Log In</Button>
      )}
    </div>
  );
};

export default HomePage;
