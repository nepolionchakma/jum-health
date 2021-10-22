import React from 'react';
// get our font awesome imports
import { faPhoneVolume, faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./Doctor.css";




const Doctor = (props) => {

    // distraction service

    const { name, img, category, details } = props.service;
    return (
        <div className="service-container p-0 col-lg-4 col-md-6 col-sm-12">

            <div className="p-4 m-3 service-container-in shadow bg-white">
                <div>
                    <img
                        style={{
                            width: '100px',
                            margin: '0px 10px',
                            boxShadow: 'rgb(255 0 0 / 15%) 0px 0.5rem 1rem'
                        }}
                        src={img} alt="" />
                </div>
                <div className="p-3">
                    <h2>{name}</h2>
                    <h6>"{category}"</h6>
                    <p>{details}</p>
                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                    <FontAwesomeIcon className="text-warning" icon={faStarHalfAlt} />
                    <hr />
                    <div>
                        <FontAwesomeIcon className="text-danger fws fs-3 " icon={faLinkedin} />
                        <FontAwesomeIcon className="text-danger fws fs-3 mx-4 " icon={faFacebook} />
                        <FontAwesomeIcon className="text-danger fws fs-3" icon={faInstagram} />
                        <FontAwesomeIcon className="text-danger fws fs-3 mx-4 " icon={faTwitter} />
                        <FontAwesomeIcon className="text-danger fws fs-3" icon={faPhoneVolume} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Doctor;