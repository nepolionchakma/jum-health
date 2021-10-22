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
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLogIn, setLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // provider
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    // Sign Up Email,Password
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

    // clear input field
    const clearInput = () => {
        setEmail("");
        setPassword("");
    }
    const clearError = () => {
        setEmailError("");
        setPasswordError("");
    }

    // confirm SignUp
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

    // login
    const logIn = (email, password) => {
        clearError();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);

            })
            .catch(error => {
                setError(error.message)
            })
    }

    // create new user
    const createNewUser = (email, password) => {
        clearError();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setSuccess('Check Mail for Verify');
                setError('');
                verifyEmail();
                setUserName();
            })
            .catch(error => {
                setError(error.message)
            })
    }

    // user setup
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

    // google log in
    const handleGoogleSignIn = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const loggedInUser = {
                    name: displayName,
                    email: email,
                    photo: photoURL

                };
                setUser(loggedInUser);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // github login
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
            })
            .catch(error => {
                setError(error.message);
            })
    };

    // signout
    const handleSignOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    };
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                clearInput();
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);


    // all fake data
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
        blogs,
        emailError,
        passwordError
    }

}
export default useFirebase;