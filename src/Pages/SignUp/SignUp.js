import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {
    const { handleGoogleSignIn, handleGithubSignIn, handleSignOut, user } = useAuth();
    return (
        <div className="py-5">
            <h4>Please Sign Up</h4>
            <br />
            <form action="">
                <input type="email" placeholder="Email" name="" id="" />
                <br />
                <br />
                <input type="password" placeholder="Password" name="" id="" />
                <br />
                <br />
                <input type="submit" className="btn btn-success" value="Sign Up" />
            </form>
            <br />
            <Link to="/login">Already SignUp?</Link>
            <hr />
            <div>
                {!user?.name ?
                    <div>
                        <button onClick={handleGoogleSignIn} className="btn btn-danger">Google</button>
                        <button onClick={handleGithubSignIn} className="btn btn-danger ms-3">Github</button>
                    </div> :
                    <button onClick={handleSignOut} className="btn btn-danger ms-3">SignOut</button>
                }
            </div>
            <div>
                {
                    user?.name && <div>
                        <h4>Welcome {user.name}</h4>
                        <img src={user.photo} alt="" />
                    </div>
                }
            </div>
        </div>
    );
};

export default SignUp;