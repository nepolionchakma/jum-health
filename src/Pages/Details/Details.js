// import React, { useState } from 'react';

import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import "./Details.css"


const Details = () => {

    const { serviceId } = useParams();
    const { services } = useAuth();
    const service = services.find(ser => ser.id === serviceId);

    return (
        <div>
            {service?.name ? <div className="row py-5 m-0">
                <div className="details-img col-lg-5">
                    <img className="bg-danger p-3 rounded" src={service.img} alt="" />

                </div>
                <div className="col-lg-5 d-flex align-items-center">
                    <div>
                        <h3 className="fw-bold text-danger">{service.name}</h3>
                        <h5 className="py-3">{service.details}</h5>
                        <h5>${service.price}</h5>
                        <div>
                            <button className="btn btn-danger">Booking Now</button>
                        </div>
                    </div>
                </div>
            </div> :
                <div><h5>hello</h5></div>
            }
        </div>
    );
};

export default Details;