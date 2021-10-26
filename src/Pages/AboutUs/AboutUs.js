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
                <div className="col-lg-4 py-3 mx-4">
                    <img src={about} alt="" />
                </div>
                <div className="col-lg-4 mx-4 p-4">
                    <Accordion defaultActiveKey="" className="border border-danger">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h5 className="fw-bold text-danger">Work</h5></Accordion.Header>
                            <Accordion.Body>
                                A medical assistant is a person who completes administrative tasks in a doctor’s office or hospital. Medical assistant jobs are growing much faster than most professions in America, with an estimated increase of 31% in available jobs between 2010 and 2020.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><h5 className="fw-bold text-danger">Mission</h5></Accordion.Header>
                            <Accordion.Body>
                                JUM Health care is delivered by health professionals and allied health fields.Medicine, audiology, psychology, physical therapy and other health professions are all part of health care.It includes work done as well as in public health.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><h5 className="fw-bold text-danger">Achievement</h5></Accordion.Header>
                            <Accordion.Body>
                                An efficient health care system can contribute to a significant part of a country's economy, development, and industrialization. Health care is conventionally regarded as an important general physical and mental health and well-being of people around the world.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};



export default AboutUs;