import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
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
            <button className="btn btn-danger">Google</button>
            <button className="btn btn-danger m-4">Facebook</button>
            <button className="btn btn-danger">Github</button>
        </div>
    );
};

export default SignUp;