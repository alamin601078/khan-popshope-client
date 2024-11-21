import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword ,GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged} from "firebase/auth";
import { app } from './../firebase-config/firebase';
import { axiosPublic } from "../hocks/useAxiosPublic";



export const AuthContext = createContext(null);

const auth = getAuth(app)

const gooleProvider = new GoogleAuthProvider();

const FirebaseProvider = ({children}) => {
    const [user,setUser] = useState(null);
    // console.log(user)
    
    const [loading, setLoading] = useState(true)
   
    const createUser =(email, password) =>{
        setLoading(true)
         return createUserWithEmailAndPassword(auth, email, password)
    }
    const sinInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //goole singin
    const gooleSingIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, gooleProvider)
    }
    
     //logUot
     const logOut = () => {
        setUser(null)
        signOut(auth)
    }


    const allInfo = {
        createUser,
        gooleSingIn,
        sinInUser,
        logOut,
        loading,
        user,
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            // console.log(user)

            if (user && user?.email) {
                setUser(user); 
                axiosPublic.post(`/authentication`,{
                    email:user.email,
                }).then(data => {
                    if(data.data){
                        localStorage.setItem('access-token',data?.data?.token)
                        setLoading(false)
                    }
                })
            } else{
                localStorage.removeItem('access-token');
            }
        });
        return () => unsubscribe();
    },[])
    return (
        <AuthContext.Provider value={allInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default FirebaseProvider;