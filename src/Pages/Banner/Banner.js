import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Banner.css"

const Banner = () => {
    return (
        <div className="banner px-5">
            <div className="py-4"></div>
            <Carousel fade>
                <Carousel.Item>
                    <div className="row d-flex px-5 align-items-center">
                        <div className="col-lg-6">
                            <img className="slide-img" src="http://kamleshyadav.com/healthcare/healthcare/assets/images/001.png" alt="" />
                            <div className="slide-shape-left"></div>
                        </div>
                        <div className="col-lg-6 p-5 ">
                            <h5 className="text-danger">Our Introduction</h5>
                            <h2 className="fw-bold fs-1 py-3">Book Online For Doctor's Appointment</h2>
                            <p>Aenean facilisis sodales est neciMorbi vitapurus on Est facilisisro convallis commodo velante, tiam ltricies lputate.Aenean facilisis sodales est neciMorbi vitapurus on Est facilisisro convallis commodo velante, tiam ltricies lputate.</p>
                            <button className="btn btn-danger">Get Start</button>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row d-flex px-5 align-items-center">
                        <div className="col-lg-6">
                            <img className="slide-img" src="http://kamleshyadav.com/healthcare/healthcare/assets/images/001.png" alt="" />
                            <div className="slide-shape-left"></div>
                        </div>
                        <div className="col-lg-6 p-5 ">
                            <h5 className="text-danger">Our Introduction</h5>
                            <h2 className="fw-bold fs-1 py-3">Book Online For Doctor's Appointment</h2>
                            <p>Aenean facilisis sodales est neciMorbi vitapurus on Est facilisisro convallis commodo velante, tiam ltricies lputate.Aenean facilisis sodales est neciMorbi vitapurus on Est facilisisro convallis commodo velante, tiam ltricies lputate.</p>
                            <button className="btn btn-danger">Get Start</button>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row d-flex px-5 align-items-center">
                        <div className="col-lg-6">
                            <img className="slide-img" src="http://kamleshyadav.com/healthcare/healthcare/assets/images/001.png" alt="" />
                            <div className="slide-shape-left"></div>
                        </div>
                        <div className="col-lg-6 p-5 ">
                            <h5 className="text-danger">Our Introduction</h5>
                            <h2 className="fw-bold fs-1 py-3">Book Online For Doctor's Appointment</h2>
                            <p>Aenean facilisis sodales est neciMorbi vitapurus on Est facilisisro convallis commodo velante, tiam ltricies lputate.Aenean facilisis sodales est neciMorbi vitapurus on Est facilisisro convallis commodo velante, tiam ltricies lputate.</p>
                            <button className="btn btn-danger">Get Start</button>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;