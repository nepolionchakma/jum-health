import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Banner.css"

const Banner = () => {
    return (
        <div className="banner">
            <Carousel fade>
                <Carousel.Item>
                    <div className="row bg-secondary p-5  d-flex align-items-center">
                        <div className="col-lg-6">
                            <img className="slide-img" src="http://kamleshyadav.com/healthcare/healthcare/assets/images/001.png" alt="" />
                            <div className="slide-shape"></div>
                        </div>
                        <div className="col-lg-6">
                            <h5>Our Introduction</h5>
                            <h3>Book Online For Doctor's Appointment</h3>
                            <p>Aenean facilisis sodales est neciMorbi vitapurus on Est facilisisro convallis commodo velante, tiam ltricies lputate.Aenean facilisis sodales est neciMorbi vitapurus on Est facilisisro convallis commodo velante, tiam ltricies lputate.</p>
                            <button className="btn btn-danger">Get Start</button>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="row bg-secondary p-5  d-flex align-items-center">

                        <div className="col-lg-6">
                            <h5>Our Introduction</h5>
                            <h3>Book Online For Doctor's Appointment</h3>
                            <p>Aenean facilisis sodales est neciMorbi vitapurus on Est facilisisro convallis commodo velante, tiam ltricies lputate.Aenean facilisis sodales est neciMorbi vitapurus on Est facilisisro convallis commodo velante, tiam ltricies lputate.</p>
                            <button className="btn btn-danger">Get Start</button>
                        </div>
                        <div className="col-lg-6">
                            <img className="slide-img" src="http://kamleshyadav.com/healthcare/healthcare/assets/images/001.png" alt="" />
                            <div className="slide-shape"></div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row bg-secondary p-5  d-flex align-items-center">
                        <div className="col-lg-6">
                            <img className="slide-img" src="http://kamleshyadav.com/healthcare/healthcare/assets/images/001.png" alt="" />
                            <div className="slide-shape"></div>
                        </div>
                        <div className="col-lg-6">
                            <h5>Our Introduction</h5>
                            <h3>Book Online For Doctor's Appointment</h3>
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