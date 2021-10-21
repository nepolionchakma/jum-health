import React from 'react';
import "./ContactUs.css"

const ContactUs = () => {
    return (
        <div className="contact-container row mx-auto py-5 mx-auto">
            <div className="col-3 col-md-1 col-sm-1"></div>
            <div className="col-3 col-md-5 col-sm-5 text-white mt-5">
                <h4>Follow Us On</h4>
                <p>
                    <a className="px-3" href="/home"><i className="fab fa-twitter"> </i></a>
                    <a className="px-3" href="/home"><i className="fab fa-facebook"> </i></a>
                    <a className="px-3" href="/home"><i className="fab fa-instagram"> </i></a>
                </p>
                <p> <i className="fas fa-phone-volume"></i> +88-01893600000</p>
                <p> <i className="fas fa-envelope"></i> elerning.bd@gmail.com</p>
                <address>
                    <p>20 Hatazari, Chittagong, Bangladesh</p>
                </address>
            </div>
            <div className="col-3 col-md-5 col-sm-5">
                <h3 className="fw-bold text-success ps-5">Contact Us</h3>
                <ul className="ps-4">
                    <li><input type="text" placeholder="Name" /></li>
                    <li><input type="email" name="" id="" placeholder="Email" /></li>
                    <li><input type="number" name="" id="" placeholder="Number" /></li>
                    <li><textarea name="" id="" cols="30" rows="2" placeholder="Message"></textarea></li>
                    <li><button className="btn btn-success">Send</button></li>
                </ul>
            </div>
            <div className="col-3 col-md-1"></div>
        </div >
    );
};

export default ContactUs;