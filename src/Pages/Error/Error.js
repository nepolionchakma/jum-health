import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <img style={{
                width: '100%'
            }}
                src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png" alt="Error" />
            <Link className="btn btn-danger " style={{
                position: "absolute",
                left: "45%",
                bottom: "45%"
            }} to="/">Go To Home Page</Link>
        </div>
    );
};

export default Error;