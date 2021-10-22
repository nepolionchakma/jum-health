import React from 'react';
import { Link } from 'react-router-dom';
import "./Service.css"

const Service = (props) => {

    // distraction service

    const { name, img, price, id } = props.service;
    return (
        <div className="service-container p-0 col-lg-4 col-md-6 col-sm-12">
            <div className="p-4 m-3 shadow rounded service-in-container">
                <div>
                    <img className="p-3" src={img} alt="" />
                </div>
                <div className="p-3">
                    <h2>{name}</h2>
                    <h6>Price : ${price}</h6>
                    <Link to={`/details/${id}`}>
                        <button className="btn btn-warning px-3 py-1 mt-3">Details</button></Link>
                    <p>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Service;