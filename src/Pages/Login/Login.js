import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';


const Login = () => {
    // destructuring
    const {
        handleGoogleSignIn, handleGithubSignIn, handleSignUp, isLogIn, nameChange,
        handleEmail, handlePassword, toggleLogIn, forgetPassword, emailError, passwordError
    } = useAuth();

    return (
        <div className="py-5">
            <br />
            <div className="col-lg-4 mx-auto p-3">
                <form onSubmit={handleSignUp}>
                    <h3>Please {isLogIn ? "Sign Up" : "Login"}</h3>
                    {!isLogIn || <div className="row mb-3">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input onBlur={nameChange} type="text" placeholder="Your Name" className="form-control" id="name" />
                        </div>
                    </div>}

                    {
                        isLogIn ? "" : <div className="row py-4 mt-3">

                        </div>
                    }


                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input onBlur={handleEmail} placeholder="Email" type="email" className="form-control" id="inputEmail3" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input onBlur={handlePassword} placeholder="Password" type="password" className="form-control" id="inputPassword3" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-10 offset-sm-2">
                            <div className="form-check">
                                <input onClick={toggleLogIn} className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label d-flex justify-content-start" htmlFor="gridCheck1">
                                    {isLogIn ? "Already Account ? Login" : "Don't Have Account New User?"}
                                </label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">{isLogIn ? "Sign Up" : "Login"}</button>
                </form>
            </div>
            <br />
            <div className="text-danger " onClick={forgetPassword}>Forget Password?</div>
            <br />
            <div className="text-danger fw-bold">{emailError}{passwordError}</div>
            <hr />
            <br />
            <div>
                <div>
                    <button onClick={handleGoogleSignIn} className="btn btn-danger"> <FontAwesomeIcon className="text-white fs-5" icon={faGoogle} /> Google</button>
                    <button onClick={handleGithubSignIn} className="btn btn-danger ms-3"> <FontAwesomeIcon className="text-white fs-5" icon={faGithub} /> Github</button>
                </div>
            </div>
        </div>
    );
};

export default Login;