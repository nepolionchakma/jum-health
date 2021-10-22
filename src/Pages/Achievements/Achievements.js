import React from 'react';
import "./Achievements.css"

const Achievements = () => {
    return (
        <div>
            <div className="row m-0 p-5">
                <div>
                    <h5 className="fs-4 text-danger">Our Achievements</h5>
                    <h2 className="fs-1 fw-bold py-4">Why Choose Us</h2>
                </div>
                <div className="col-lg-3 p-3 ">
                    <div className="shadow rounded p-3">
                        <h1 className="fw-bold fs-1 opacity-75 text-danger">8600</h1>
                        <hr />
                        <div className="d-flex achievements align-items-center">
                            <img src="http://kamleshyadav.com/healthcare/healthcare/assets/images/counter1.png" alt="" />
                            <h4 className="ps-3 m-0">Successful Cases</h4>
                        </div>
                        <p className="mt-3">Our recently edited compendium ‘Health Systems Improvement Across the Globe: Success Stories from 60 Countries’ takes on the task of examining health reform achievement narratives drawing on data from 60 countries experience success with health reform. </p>
                    </div>
                </div>
                <div className="col-lg-3 p-3">
                    <div className="shadow rounded p-3">
                        <h1 className="fw-bold fs-1 opacity-75 text-danger">50</h1>
                        <hr />
                        <div className="d-flex achievements align-items-center">
                            <img src="http://kamleshyadav.com/healthcare/healthcare/assets/images/counter2.png" alt="" />
                            <h4 className="ps-3 m-0">Qualified Doctors</h4>
                        </div>
                        <p className="mt-3">There are many types of health care professionals. Traditional roles and responsibilities held by physicians and nurses have changed, along with the expansion of technology and the demand for health care services.</p>
                    </div>
                </div>
                <div className="col-lg-3 p-3">
                    <div className="shadow rounded p-3">
                        <h1 className="fw-bold fs-1 opacity-75 text-danger">20</h1>
                        <hr />
                        <div className="d-flex achievements align-items-center">
                            <img src="http://kamleshyadav.com/healthcare/healthcare/assets/images/counter3.png" alt="" />
                            <h4 className="ps-3 m-0">Year Of Experience</h4>
                        </div>
                        <p className="mt-3"> Having worked with many clients from the medical industry, we developed a deeper understanding of what it takes to deliver an exceptional healthcare experience.</p>
                    </div>
                </div>
                <div className="col-lg-3 p-3">
                    <div className="shadow rounded p-3">
                        <h1 className="fw-bold fs-1 opacity-75 text-danger">24x7</h1>
                        <hr />
                        <div className="d-flex achievements align-items-center">
                            <img src="http://kamleshyadav.com/healthcare/healthcare/assets/images/counter4.png" alt="" />
                            <h4 className="ps-3 m-0">Staff Availability</h4>
                        </div>
                        <p className="mt-3">Health workforce, the sufficient supply and appropriate stock of health workers, with the competencies and skill‐mix to match the health needs of the population.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Achievements;