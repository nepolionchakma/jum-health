// import React, { useState } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import "./Details.css"
const Details = () => {

    const [quantity, setQuantity] = useState(1);
    const { serviceId } = useParams();
    const { services, addToData } = useAuth();
    const service = services.find(ser => ser.id === serviceId);

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    return (
        <div>
            {service?.name ? <div className="row py-5 m-0">
                <div className="details-img col-lg-5">
                    <img src={service.img} alt="" />

                </div>
                <div className="col-lg-5">
                    <h3>{service.name}</h3>
                    <h5>{service.details}</h5>
                    <h6>{service.price}</h6>
                    <div>
                        <h2><button onclick={decreaseQuantity}>-</button><span>{quantity > 9 ? quantity : `0${quantity}`}</span><button onclick={increaseQuantity}>+</button></h2>
                        <button onclick={() => addToData(quantity, service.name)}>Add</button>
                    </div>
                </div>
            </div> :
                <div><h5>hello</h5></div>
            }
        </div>
    );
};

export default Details;