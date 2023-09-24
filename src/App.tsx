import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Outlet } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { app } from "./firebase";
import { userIdState } from "./state/UserIdState";

const App = () => {
  const setUserId = useSetRecoilState(userIdState);

  onAuthStateChanged(
    getAuth(app),
    (user) => {
      setUserId(user ? user.uid : null);
    },
    (err) => console.log(err)
  );

  return <Outlet />;
};

export default App;
