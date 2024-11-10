import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  //   onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
// import useAxiosPublic from "../Hooks/useAxiosPublic";
import { app } from "./firebase.config";

export const auth = getAuth(app);

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  //   const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  //sign up with email and password
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign in with email and password
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //sign out
  const logOut = () => {
    return signOut(auth);
  };

  //update profile
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //sign In With Popup
  const gitHubProvider = new GithubAuthProvider();
  const signInWithGitHub = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  //sign In With GitHub
  const updatePro = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  //user data change
  //   useEffect(() => {
  //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //       setUser(currentUser);
  //       if (currentUser) {
  //         // get token and store client
  //         const userInfo = { email: currentUser.email };
  //         axiosPublic.post("/jwt", userInfo).then((res) => {
  //           if (res.data.token) {
  //             localStorage.setItem("access-token", res.data.token);
  //             setLoading(false);
  //           }
  //         });
  //       } else {
  //         localStorage.removeItem("access-token");
  //       }
  //       setLoading(false);
  //     });
  //     return () => {
  //       unsubscribe();
  //     };
  //   }, [axiosPublic]);

  const authInfo = {
    user,
    loading,
    signUp,
    signIn,
    logOut,
    updatePro,
    signInWithGoogle,
    signInWithGitHub,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
