import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import useAuth from '../../hooks/useAuth';
import { Link } from "react-router-dom";

const SignUp = () => {
    //  distracturing
    const {
        nameChange,
        handleEmail,
        handlePassword,
        handleGoogleSignIn,
        handleGithubSignIn,
        handleSignUp,
        success, forgetPassword, errorpassempty,
        errorpass,
        errorEmail, } = useAuth();



    return (
        <div className="py-5">
            <br />
            <div className="col-lg-4 mx-auto p-3">


                <form onSubmit={handleSignUp}>
                    <h3>Please Sign Up</h3>
                    <div className="row mb-3">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input onChange={nameChange} required type="text" placeholder="Your Name" className="form-control" id="name" />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input onChange={handleEmail} required placeholder="Email" type="email" className="form-control" id="inputEmail3" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input onChange={handlePassword} required placeholder="Password" type="password" className="form-control" id="inputPassword3" />
                        </div>
                    </div>
                    <div className="text-danger fw-bold">{success}{errorpassempty}{errorpass}{errorEmail}</div>
                    <input type="submit" className="btn btn-primary fw-bold m-2" value="Sign Up" />
                </form>


                <Link to="/login" className="btn btn-primary fw-bold m-2">Log-In</Link>
                <button className="btn btn-danger fw-bold m-2" type="reset">Reset</button>
            </div >
            <br />

            <Link className="text-danger " to="" onClick={forgetPassword}>Forget Password?</Link>
            <br />

            <hr />
            <div>
                <div>
                    <button onClick={handleGoogleSignIn} className="btn btn-danger"> <FontAwesomeIcon className="text-white fs-5" icon={faGoogle} /> Google</button>
                    <button onClick={handleGithubSignIn} className="btn btn-danger ms-3"> <FontAwesomeIcon className="text-white fs-5" icon={faGithub} /> Github</button>
                </div>
            </div>
        </div >
    );
};

export default SignUp;