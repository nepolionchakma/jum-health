
import "./Header.css"
import { Container, Nav, Navbar } from 'react-bootstrap';

import { HashLink } from 'react-router-hash-link';
// get our font awesome imports
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Header = () => {

    // destructuring
    const { user, handleSignOut } = useAuth();
    console.log(user);

    // const userName = user.name.slice(0, 1);

    return (

        <>

            <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
                <Container className="header-container py-2">
                    <Navbar.Brand className=""><Link to="/" className="fs-2 text-danger text-uppercase"><FontAwesomeIcon className="fs-1" icon={faHeartbeat} /> <span className="fw-bold ">Jum </span>HealthCare</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#doctors">Doctors</Nav.Link>
                            <Nav.Link as={HashLink} to="/services">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#about">About</Nav.Link>
                            <Nav.Link as={HashLink} to="/contactus">Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            {!user?.name ?
                                <div>
                                    <Link className="px-1 jum-text" to="/login">Login</Link>
                                    <Link className="px-1 jum-text" to="/signup">Signup</Link>
                                </div> :
                                <div>
                                    <span className="text-white">Hi,{user.name}</span>
                                    <img
                                        style={{
                                            width: '30px',
                                            borderRadius: '50%',
                                            margin: '0px 5px'
                                        }}
                                        src={user.photo} alt="" />
                                    <button onClick={handleSignOut} className="btn btn-danger p-1">SignOut</button>
                                </div>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;