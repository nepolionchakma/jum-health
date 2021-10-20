
import "./Header.css"
import { Container, Nav, Navbar } from 'react-bootstrap';

// get our font awesome imports
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

// Login();
// console.log(Login)

const Header = () => {

    // destructuring
    const { user, handleSignOut } = useAuth();

    return (
        <div className="header-container">
            <Navbar expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className=""><Link to="/" className="fs-2 text-danger text-uppercase"><FontAwesomeIcon className="fs-1" icon={faHeartbeat} /> <span className="fw-bold ">Jum </span>HealthCare</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to="/services">Services</Link>
                            <Link to="/pricing">Pricing</Link>
                        </Nav>
                        <Nav>
                            {!user?.name ?
                                <div>
                                    <Link className="px-1 jum-text" to="/login">Login</Link>
                                    <Link className="px-1 jum-text" to="/signup">Signup</Link>
                                </div> :
                                <div>
                                    <button onClick={handleSignOut} className="btn btn-danger ms-3">SignOut</button>
                                    <img style={{
                                        width: '30px',
                                        borderRadius: '50%',
                                        margin: '0px 10px'
                                    }} src={user.photo} alt={user.name} />
                                </div>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;