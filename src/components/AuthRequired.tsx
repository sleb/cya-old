import { Navigate, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userIdState } from "../state/UserIdState";

const AuthRequired = () => {
  const userId = useRecoilValue(userIdState);
  return userId ? <Outlet /> : <Navigate to="/" />;
};

export default AuthRequired;
