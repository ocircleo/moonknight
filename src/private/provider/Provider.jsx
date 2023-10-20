//!!!!! DO NOT TOUCH THIS CODE
import { createContext, useEffect, useState } from "react";
import app from "../../assets/Firebase_Sdk";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
export const Authcontext = createContext(null);

// eslint-disable-next-line react/prop-types
const Provider = ({ children }) => {
  const [user, setUser] = useState({});
  const [userDB, setUserDB] = useState({});
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  // ===== Sign In Methods =====
  //===== Register user using this function below =====
  const createEmailusers = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //===== login user using this function below =====
  const signInEmailusers = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // ==== update user info like name and phot url using this function below =====
  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  // ===== google popup sign in using this function below =====
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // ===== sign out user using this function =====
  const signout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (newUser) => {
      setUser(newUser);
      setLoading(false);
      return () => unSubscribe();
    });
  });
  //===== context api data for user login and sign up management
  let authData = {
    user,
    userDB,
    loading,
    setUser,
    setUserDB,
    setLoading,
    createEmailusers,
    signInEmailusers,
    googleSignIn,
    updateUser,
    signout,
  };
  return (
    <Authcontext.Provider value={authData}>{children}</Authcontext.Provider>
  );
};

export default Provider;