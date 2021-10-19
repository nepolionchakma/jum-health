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
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row bg-secondary p-5  d-flex align-items-center">
                        <div className="col-lg-6">
                            <img className="slide-img" src="https://image.pngaaa.com/494/5494-middle.png" alt="" />
                            <div className="slide-shape"></div>
                        </div>
                        <div className="col-lg-6">
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row bg-secondary p-5  d-flex align-items-center">
                        <div className="col-lg-6">
                            <img className="slide-img" src="https://e7.pngegg.com/pngimages/467/913/png-clipart-lima-memorial-health-system-physician-medical-intern-medicine-dentist-medical-team-service-public-relations.png" alt="" />
                            <div className="slide-shape"></div>
                        </div>
                        <div className="col-lg-6">
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Banner;