import { faAngleRight, faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="text-white">
            <div className="footer-container p-5">
                <div className="p-4 fs-2 text-danger text-uppercase" >
                    <h3><FontAwesomeIcon className="fs-1" icon={faHeartbeat} /> <span className="fw-bold ">Health</span>Care</h3>
                </div>
                <div className="row p-5 border-primary border-top border-bottom">
                    <div className="col-lg-4">
                        <h4>Office Address</h4>
                        <address>Evanto HQ 24 Fifth st., Los Angeles, USA</address>
                    </div>
                    <div className="col-lg-4 border-primary border-start border-end">
                        <h4>Talk To Expert</h4>
                        <a href="tel:555-666-7777">555-666-7777</a>
                    </div>
                    <div className="col-lg-4">
                        <h4>Email Us</h4>
                        <a href="mailto: jum@healthcare.com">jum@healthcare.com</a>
                    </div>
                </div>
                <div className="row p-5 text-start">
                    <div className="col-lg-3">
                        <h5><FontAwesomeIcon className="" icon={faAngleRight} /> Pediatric Clinic</h5>
                        <h5><FontAwesomeIcon className="" icon={faAngleRight} /> Dental Clinic</h5>
                        <h5><FontAwesomeIcon className="" icon={faAngleRight} /> General Surgery</h5>
                        <h5><FontAwesomeIcon className="" icon={faAngleRight} /> Physiotherapy</h5>
                        <h5><FontAwesomeIcon className="" icon={faAngleRight} /> Ltricies lputate</h5>
                    </div>
                    <div className="col-lg-3">
                        <h5><FontAwesomeIcon className="" icon={faAngleRight} /> Cardiologist</h5>
                        <h5><FontAwesomeIcon className="" icon={faAngleRight} /> Surgery</h5>
                        <h5><FontAwesomeIcon className="" icon={faAngleRight} /> Gynecologist</h5>
                        <h5><FontAwesomeIcon className="" icon={faAngleRight} /> Dentist</h5>
                        <h5><FontAwesomeIcon className="" icon={faAngleRight} /> Pediatricians</h5>
                    </div>
                    <div className="col-lg-3">
                        <h5><FontAwesomeIcon className="" icon={faAngleRight} /> Psychological</h5>
                        <h5><FontAwesomeIcon className="" icon={faAngleRight} />  Cardiology</h5>
                        <h5><FontAwesomeIcon className="" icon={faAngleRight} /> Gynecology</h5>
                        <h5><FontAwesomeIcon className="" icon={faAngleRight} />  Breast Surgeon</h5>
                        <h5><FontAwesomeIcon className="" icon={faAngleRight} />  Pediatrician</h5>
                    </div>
                    <div className="col-lg-3">
                        <h5><FontAwesomeIcon className="" icon={faAngleRight} /> CT Scan Center</h5>
                        <h5><FontAwesomeIcon className="" icon={faAngleRight} /> Medical Store</h5>
                        <h5><FontAwesomeIcon className="" icon={faAngleRight} /> Pediatric Clinic</h5>
                        <h5><FontAwesomeIcon className="" icon={faAngleRight} /> Physiotherapy</h5>
                        <h5><FontAwesomeIcon className="" icon={faAngleRight} /> Gynecologist</h5>
                    </div>
                </div>
            </div>
            <div className="p-4 copyright">
                <p>Copyright &copy; 2021 Health Care. All Right Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;