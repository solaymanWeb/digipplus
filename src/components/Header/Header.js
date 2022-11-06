import React from 'react';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import mainlog from "../pictures/logo.png";
import rightLogo from "../pictures/right-logo.png"
import "./Header.css"

const Header = () => {
    return (
        <div>
            <Navbar className='header-area' expand="lg">
                <Container>
                    <div className="navbar-main">
                    <div className="nav-img">
                        <img src={mainlog} alt="logo" />
                    </div>
                    <div className="nav-menu">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="">
                                <Link className='' to="/">Home</Link>
                                <Link to="/jobs">My Jobs</Link>
                                <Link to="/payment">My Payment</Link>
                                <Link to="link">My Offerleeter</Link>
                                <Link to="link">My Certificate</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                    <div className="nav-button">
                        <img src={rightLogo} alt="right logo" />
                    </div>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;