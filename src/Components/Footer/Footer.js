import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <Container fluid className="footer">
            <Container>
                <Navbar expand="lg p-4">
                    <Navbar.Brand href="#home"><img src="https://iili.io/27MLNa.png" width="100" className="d-inline-block align-top"alt=""/></Navbar.Brand>
                    
                    <Nav className="ml-auto">
                        <ul className="d-flex flex-column p-3 mr-5">
                            <Link to="">Get help</Link>
                            <Link to="">Read FAQs</Link>
                            <Link to="">View all cities</Link>
                            <Link to="">Restaurants near me</Link>
                        </ul>
                        <ul className="d-flex flex-column p-3">
                            <Link>Get help</Link>
                            <Link>Read FAQs</Link>
                            <Link>View all cities</Link>
                            <Link>Restaurants near me</Link>
                        </ul>
                    </Nav>
                </Navbar>
                <Navbar expand="lg p-3">
                    <Nav><p className="text-muted">Copyright &copy; 2020 Online food</p></Nav>
                    
                    <Nav className="ml-auto">
                        <Link className="mr-5">Privacy Policy.</Link>
                        <Link className="mr-5">Terms of Use</Link>
                        <Link>Pricing</Link>
                    </Nav>
                </Navbar>
            </Container>
        </Container>
    );
};

export default Footer;