import { Accordion } from 'react-bootstrap';
import about from "../../images/about.jpg";
import "./AboutUs.css"

const AboutUs = () => {
    return (
        <div className="about-us-container p-5" id="about">
            <div className="row py-4 justify-content-center align-items-center">
                <div>
                    <h5 className="fs-4 text-danger">About Us</h5>
                    <h2 className="fs-1 fw-bold py-4">We Are The Best To Take Care Of You</h2>
                </div>
                <div className="col-lg-4 mx-4">
                    <img className="p-2" src={about} alt="" />
                </div>
                <div className="col-lg-4 mx-4 p-4">
                    <Accordion defaultActiveKey="" className="border border-danger">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h5 className="fw-bold text-danger">Work</h5></Accordion.Header>
                            <Accordion.Body>
                                Aenean facilisis sodales est neciMorbi vitapurus on Est facilisisro convallis commodo velante, tiam ltricies lputate.Aenean facilisis sodales est neciMorbi vitapurus on Est facilisisro convallis commodo velante, tiam ltricies lputate.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><h5 className="fw-bold text-danger">Mission</h5></Accordion.Header>
                            <Accordion.Body>
                                Aenean facilisis sodales est neciMorbi vitapurus on Est facilisisro convallis commodo velante, tiam ltricies lputate.Aenean facilisis sodales est neciMorbi vitapurus on Est facilisisro convallis commodo velante, tiam ltricies lputate.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><h5 className="fw-bold text-danger">Achievement</h5></Accordion.Header>
                            <Accordion.Body>
                                Aenean facilisis sodales est neciMorbi vitapurus on Est facilisisro convallis commodo velante, tiam ltricies lputate.Aenean facilisis sodales est neciMorbi vitapurus on Est facilisisro convallis commodo velante, tiam ltricies lputate.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};



export default AboutUs;