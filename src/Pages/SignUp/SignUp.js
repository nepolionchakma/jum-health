
import useAuth from '../../hooks/useAuth';

const SignUp = () => {

    const {
        error,
        nameChange,
        handleEmail,
        handlePassword,
        handleGoogleSignIn,
        handleGithubSignIn,
        handleSignUp,
        success, isLogIn, toggleLogIn, forgetPassword } = useAuth();



    return (
        <div className="py-5">
            <br />
            <div>{success}</div>
            <div className="col-lg-4 mx-auto">
                <form onSubmit={handleSignUp}>
                    <h3>Please {isLogIn ? "Login" : 'Sign Up'}</h3>
                    {!isLogIn && <div className="row mb-3">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input onBlur={nameChange} type="text" placeholder="Your Name" className="form-control" id="name" />
                        </div>
                    </div>}
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
                                    {isLogIn ? "New User?" : "Login"}
                                </label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">{isLogIn ? "Login" : "Sign Up"}</button>
                </form>
            </div>
            <br />

            {!isLogIn || <div className="text-danger " onClick={forgetPassword}>Forget Password?</div>}
            <br />
            <div className="text-danger fw-bold">{error}</div>
            <hr />
            <div>
                <div>
                    <button onClick={handleGoogleSignIn} className="btn btn-danger">Google</button>
                    <button onClick={handleGithubSignIn} className="btn btn-danger ms-3">Github</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;