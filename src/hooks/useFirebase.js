

import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signOut, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.initialize';
import { useEffect, useState } from 'react';

initializeAuthentication();

const useFirebase = () => {

    const auth = getAuth();
    const [name, setName] = useState();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('');
    const [isLogIn, setLogin] = useState(false);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleEmail = e => {
        setEmail(e.target.value);
        console.log(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
        console.log(e.target.value);
    }
    const nameChange = e => {
        setName(e.target.value);
    }

    const toggleLogIn = e => {
        setLogin(e.target.checked);
    }
    const handleSignUp = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password at least 6 ')
            return;
        };
        if (isLogIn) {
            logIn(email, password)
        }
        else {
            createNewUser(email, password)
        }


    }
    const logIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);

            })
            .catch(error => {
                setError(error.message)
            })
    }
    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {

                setSuccess('Check Mail for Verify');
                setError('');
                verifyEmail();
                setUserName();
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {

            })
    }
    const forgetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => { })
    }

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
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
        });
        return () => unsubscribed;
    }, []);


    const [services, setService] = useState([]);
    useEffect(() => {
        fetch("./fakeservicesdata.json")
            .then(res => res.json())
            .then(data => setService(data))
    }, []);


    const [doctors, setDoctor] = useState([]);
    useEffect(() => {
        fetch("./fakedoctorsdata.json")
            .then(res => res.json())
            .then(data => setDoctor(data))
    }, []);
    const [blogs, setBlog] = useState([]);
    useEffect(() => {
        fetch("./fakepostsdata.json")
            .then(res => res.json())
            .then(data => setBlog(data))
    }, []);


    return {
        user,
        error,
        nameChange,
        handleEmail,
        handlePassword,
        handleSignUp,
        handleGoogleSignIn,
        handleGithubSignIn,
        handleSignOut,
        services,
        success,
        doctors,
        isLogIn,
        toggleLogIn,
        forgetPassword,
        blogs
    }

}
export default useFirebase;