

import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.initialize';
import { useEffect, useState } from 'react';

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();


    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();



    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const loggedInUser = {
                    name: displayName,
                    email: email,
                    photo: photoURL

                };
                setUser(loggedInUser);
            }).catch(error => {
                setError(error.message);
            })
    };


    const handleGithubSignIn = () => {

        signInWithPopup(auth, githubProvider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const loggedInUser = {
                    name: displayName,
                    email: email,
                    photo: photoURL,

                };
                setUser(loggedInUser);
            }).catch(error => {
                setError(error.message);
            })
    };


    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    };
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, []);
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch("./fakeData.JSON")
            .then(res => res.json())
            .then(data => setService(data))
    }, []);


    return {
        user,
        error,
        handleGoogleSignIn,
        handleGithubSignIn,
        handleSignOut,
        services
    }

}
export default useFirebase;