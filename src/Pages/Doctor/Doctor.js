import React from 'react';
// get our font awesome imports
import { faPhoneVolume, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
const Doctor = (props) => {

    // distraction service

    const { name, img, category, details } = props.service;
    return (
        <div className="service-container p-0 col-lg-4 col-md-6 col-sm-12">

            <div className="p-4 m-3 shadow rounded bg-white">
                <div>
                    <img
                        style={{
                            width: '100px',
                            borderRadius: '50%',
                            margin: '0px 10px',
                            boxShadow: 'rgb(255 0 0 / 15%) 0px 0.5rem 1rem'
                        }}
                        src={img} alt="" />
                </div>
                <div className="p-3">
                    <h2>{name}</h2>
                    <h6>{category}</h6>
                    <p>{details}</p>
                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                    <hr />
                    <div>
                        <FontAwesomeIcon className="text-danger fs-3" icon={faFacebook} />
                        <FontAwesomeIcon className="text-danger mx-4 fs-3" icon={faTwitter} />
                        <FontAwesomeIcon className="text-danger fs-3" icon={faPhoneVolume} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Doctor;