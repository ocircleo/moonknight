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
  const [user, setUser] = useState(null);
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
  // ==== update user info like name using this function below =====
  const updateUser = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };
  // ===== google popup sign in using this function below =====
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // ===== sign out user using this function =====
  const signout = () => {
    return signOut(auth).then(() => {
      localStorage.removeItem("acces_token")
    });
  };

  // https://moonknight-backend.vercel.app/
  // ===== jwt sign =====
  const signJwt = async (email) => {
    return fetch("https://moonknight-backend.vercel.app/jwt", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ user: email }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("acces_token", data.token);
      });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (newUser) => {
      setUser(newUser);
      if (newUser) {
        signJwt(newUser.email);
        fetch(`https://moonknight-backend.vercel.app/user/getUser/${newUser.email}`).then(res => res.json()).then(data => setUserDB(data));
        console.log(userDB)
      }
      setLoading(false);
      return () => unSubscribe();
    });
  }, []);
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
    signJwt,
    signout,
  };
  return (
    <Authcontext.Provider value={authData}>{children}</Authcontext.Provider>
  );
};

export default Provider;
