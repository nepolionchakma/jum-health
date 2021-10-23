import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signOut, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.initialize';
import { useEffect, useState } from 'react';

initializeAuthentication();

const useFirebase = () => {

    const auth = getAuth();
    const [name, setName] = useState();
    const [user, setUser] = useState({});
    // console.log(user);
    const [error, setError] = useState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [success, setSuccess] = useState();
    const [loginSuccess, setSuccessLogin] = useState();
    const [isLogIn, setLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [errorpassempty, setErrorpassempty] = useState("");
    const [errorpass, setErrorpass] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    // const[]=useState();

    // provider
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    // Sign Up Email,Password
    const handleEmail = e => {
        setEmail(e.target.value);
        // console.log(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
        // console.log(e.target.value);
    }
    const nameChange = e => {
        setName(e.target.value);
    }

    const toggleLogIn = e => {
        setLogin(e.target.checked);
    }


    const clearError = () => {
        setEmailError("");
        setPasswordError("");
    }
    // successLogin
    const successLogin = () => {
        setSuccessLogin("Successfully LogIn.");
    }

    // confirm SignUp
    const handleSignUp = e => {

        e.preventDefault();
        if (email.value < 0) {
            setErrorEmail('Set Email Please. ')
            return;
        };
        if (password.length < 6) {
            setErrorpass('Password at least 6 ')
            return;
        };
        if (password.length < 0) {
            setErrorpassempty('Set Password please.')
            return;
        }


        else {

            createNewUser(email, password);
            return;
            // clearInput();

        }


    }

    // login
    const handleLogIn = (email, password) => {
        // clearError();
        return signInWithEmailAndPassword(auth, email, password)
            .then(result => {

                setUser(result.user);
                setSuccessLogin();
            })
            .catch((error) => {
                // Handle Errors here.
                setError(error.message);

            })
    }

    // create new user
    const createNewUser = (email, password) => {
        clearError("");
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                // setError('');
                verifyEmail();
                setSuccess('Successfully sign up And Now Check Mail for Verify');
                setUserName();
            })
            .catch(error => {
                setError(error.code)
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
        return signInWithPopup(auth, googleProvider)

    };

    // github login
    const handleGithubSignIn = () => {

        return signInWithPopup(auth, githubProvider)

    };

    // signout
    const handleSignOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
    };
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                // clearInput();
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
        handleLogIn,
        loginSuccess,
        emailError,
        passwordError,
        isLoading,
        errorpassempty,
        errorpass,
        errorEmail, setSuccessLogin, setIsLoading, setError, setUser, successLogin
    }

}
export default useFirebase;