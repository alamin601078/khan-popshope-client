import  { useContext } from 'react';
import { AuthContext } from '../firebaseProvider/FirebaseProvider';

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;