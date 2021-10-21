
import useAuth from '../../hooks/useAuth';
import React from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const { blogs } = useAuth();
    return (
        <div id="blogs" className="doctors-team p-5">
            <div>
                <h5 className="fs-4 text-danger">Blogs Post</h5>
                <h3 className="fs-1 fw-bold py-4">Latest Update</h3>
            </div>
            {blogs.length === 0 ?
                <div className="d-flex justify-content-center py-5">
                    <div className="spinner-border  text-warning" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div> :
                <div className="row m-0">

                    {/* Map */}

                    {
                        blogs.map(blog =>
                            <Blog
                                key={blog.id}
                                service={blog}
                            >

                            </Blog>
                        )
                    }
                </div>}
        </div>
    );
};

export default Blogs;