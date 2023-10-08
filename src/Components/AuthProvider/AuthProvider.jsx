import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../Firebase/firebase.config";

export const AuthContext = createContext(null);
export default function AuthProvider({children}) {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user , setUser ] = useState(null);

    const createUser = (email , password) => {
        return createUserWithEmailAndPassword(auth , email , password);
    }

    const login = (email , password) => {
        return signInWithEmailAndPassword(auth , email , password );
    }

    const logout = () => {
        return signOut(auth);
    }

    const googleSignIn = () => {
        return signInWithPopup(auth , googleProvider);
    }

    const githubSignIn = () => {
        return signInWithPopup(auth , githubProvider);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , currentUser => {
            setUser(currentUser);
        });
        return () => {
            unSubscribe();
        }
    },[])

    const authInfo = {user , createUser , login , logout , googleSignIn , githubSignIn}
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}
AuthProvider.propTypes = {
    children : PropTypes.node
}