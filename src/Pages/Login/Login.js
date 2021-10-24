import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import useAuth from '../../hooks/useAuth';
import { Link, useHistory, useLocation } from "react-router-dom";
// import useFirebase from '../../hooks/useFirebase';



const Login = () => {
    // destructuring
    const {
        handleGoogleSignIn, handleGithubSignIn, handleLogIn,
        handleEmail, handlePassword, forgetPassword, emailError, passwordError, loginSuccess, setUser, setSuccessLogin, setError
    } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || "/";

    // Google Log in & Redirect
    const googleLogIn = () => {
        handleGoogleSignIn()
            .then(result => {

                setUser(result.user);
                setSuccessLogin();
                history.push(redirect_url);
            })
            .catch((error) => {
                // Handle Errors here.
                setError(error.message);

            })
    }
    // Github Log in & Redirect
    const githubLogIn = () => {
        handleGithubSignIn()
            .then(result => {

                setUser(result.user);
                setSuccessLogin();
                history.push(redirect_url);
            })
            .catch((error) => {
                // Handle Errors here.
                setError(error.message);

            })
    }


    return (
        <div className="py-5">
            <br />
            <div className="col-lg-4 mx-auto p-3">
                <div className="text-danger fw-bold">{loginSuccess}{emailError}{passwordError}</div>
                <form onSubmit={handleLogIn}>
                    <h3 className="py-4">Please Log-In</h3>

                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input onBlur={handleEmail} required placeholder="Email" type="email" className="form-control" id="inputEmail3" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input onBlur={handlePassword} required placeholder="Password" type="password" className="form-control" id="inputPassword3" />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary fw-bold m-2">Log-In</button>
                </form>
                <Link to="/signup" className="btn btn-primary fw-bold m-2">Sign Up</Link>
            </div>
            <br />
            <div className="text-danger " onClick={forgetPassword}>Forget Password?</div>
            <br />
            <div className="text-danger fw-bold">{emailError}{passwordError}</div>
            <hr />
            <br />
            <div>
                <div>
                    <button onClick={googleLogIn} className="btn btn-danger"> <FontAwesomeIcon className="text-white fs-5" icon={faGoogle} /> Google</button>
                    <button onClick={githubLogIn} className="btn btn-danger ms-3"> <FontAwesomeIcon className="text-white fs-5" icon={faGithub} /> Github</button>
                </div>
            </div>
        </div>
    );
};

export default Login;