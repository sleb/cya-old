import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../firebase";

export const signInUser = async (): Promise<string> => {
  const credential = await signInWithPopup(
    getAuth(app),
    new GoogleAuthProvider()
  );

  return credential.user.uid;
};

export const signOutUser = (): Promise<void> => {
  return signOut(getAuth(app));
};
