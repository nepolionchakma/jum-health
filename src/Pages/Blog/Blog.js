import React from 'react';
// get our font awesome imports
import { faArrowRight, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import "./Blog.css"
const Blog = (props) => {

    // distraction service

    const { title, img, date, category } = props.service;
    return (
        <div className="service-container p-0 col-lg-4 col-md-6 col-sm-12">

            <div className=" p-4 m-3 mx-auto ">
                <div className="row d-flex p-3 service-container-in shadow rounded bg-white align-items-center">
                    <div className="col-lg-8">
                        <img
                            style={{
                                width: '100%',
                                borderRadius: '5px'
                            }}
                            src={img} alt="" />
                    </div>
                    <div className="col-lg-4 py-3">
                        <h6 className="fw-bold">{category}</h6>
                        <h6>{date}</h6>

                        <div className="d-flex justify-content-center">
                            <FontAwesomeIcon className="text-danger  fs-5" icon={faTwitter} />
                            <FontAwesomeIcon className="text-danger fs-5 mx-3" icon={faFacebook} />
                            <FontAwesomeIcon className="text-danger fs-5" icon={faPhoneVolume} />
                        </div>
                    </div>
                    <div className="p-3 mx-auto ">
                        <h5>{title}</h5>

                        <hr />
                        <div className="p-2">
                            <Link to="#" className="m-left text-danger text-decoration-none fw-bold">Read More <FontAwesomeIcon className="text-danger" icon={faArrowRight} /></Link>
                        </div>


                    </div>
                </div>

            </div>

        </div>
    );
};

export default Blog;