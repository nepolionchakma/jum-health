import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Banner.css";
import banner10 from "../../images/banner10.png";
import banner2 from "../../images/banner2.png";
import banner3 from "../../images/banner23.png";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Banner = () => {
    return (
        <div className="banner px-5" id="banner">
            <div className="py-4"></div>
            <Carousel fade>
                <Carousel.Item>
                    <div className="row px-5">
                        <div className="col-lg-6">
                            <img className="slide-img" src={banner10} alt="" />
                        </div>
                        <div className="col-lg-6 p-5 ">
                            <div className="py-5">
                                <h5 className="text-danger">Our Introduction</h5>
                                <h2 className="fw-bold fs-1 py-3">Book Online For Doctor's Appointment</h2>
                                <p>Suppose you are in the healthcare industry and seeking to improve the quality and productivity of your medical services. In that case, no doubt, developing a doctor's appointment app or a web platform might be the right solution for your practice. Many patients consider this kind of doctor-on-demand app essential for any healthcare provider now.</p>
                                <button className="btn btn-danger">Book Now <FontAwesomeIcon className="" icon={faArrowRight} /></button>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row d-flex px-5 align-items-center">
                        <div className="col-lg-6">
                            <img className="slide-img" src={banner2} alt="" />
                        </div>
                        <div className="col-lg-6 p-5 ">
                            <div className="py-5">
                                <h5 className="text-danger">Our Introduction</h5>
                                <h2 className="fw-bold fs-1 py-3">JUM Healthcare provide digital capabilities</h2>
                                <p>As more and more people have smartphones these days, they are willing to use them to plan their doctor visits, medication pickup, and other factors with their health and well-being. Thus more consumers will choose the healthcare provider that offers such digital capabilities as e-prescriptions, online communication, remote monitoring, and virtual appointment.</p>
                                <button className="btn btn-danger">Book Now <FontAwesomeIcon className="" icon={faArrowRight} /></button>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row d-flex px-5 align-items-center">
                        <div className="col-lg-6">
                            <img className="slide-img" src={banner3} alt="" />
                        </div>
                        <div className="col-lg-6 p-5 ">
                            <div className="py-5">
                                <h5 className="text-danger">Our Introduction</h5>
                                <h2 className="fw-bold fs-1 py-3">COVID-19 times Appointment Doctor's</h2>
                                <p>These are both indicators of convenience for such an option of online doctor appointment scheduling. It should not be unreasonable to assume that all of these numbers will continue to grow exponentially in the future, considering the popularity of this feature in the post-COVID-19 times, regardless of whether they are getting treatment at a hospital, clinic, or private practice.</p>
                                <button className="btn btn-danger">Book Now <FontAwesomeIcon className="" icon={faArrowRight} /></button>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;