import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signOut , signInWithPopup } from "firebase/auth";
import InitializeAuthantication from "../firebase/firebase.init";
InitializeAuthantication()
const useFirebase =()=>{
    const [user,setUser]= useState({});

    const auth = getAuth();
    const googleprovider = new GoogleAuthProvider();

    const singinUsingGoogle = () =>{
    return signInWithPopup(auth,googleprovider)
    }
    const logOut= ()=>{
        signOut(auth)
        .then(()=>{
        setUser({})
        })
    }

    //obserb wether user auth state changed or not
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } 
          });
    },[])
    return {
        user,
        singinUsingGoogle,
        logOut
    }
}
export default useFirebase;