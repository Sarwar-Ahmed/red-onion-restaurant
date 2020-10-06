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
                            <Link to="" className="text-white">Get help</Link>
                            <Link to="" className="text-white">Read FAQs</Link>
                            <Link to="" className="text-white">View all cities</Link>
                            <Link to="" className="text-white">Restaurants near me</Link>
                        </ul>
                        <ul className="d-flex flex-column p-3">
                            <Link to="" className="text-white">Get help</Link>
                            <Link to="" className="text-white">Read FAQs</Link>
                            <Link to="" className="text-white">View all cities</Link>
                            <Link to="" className="text-white">Restaurants near me</Link>
                        </ul>
                    </Nav>
                </Navbar>
                <Navbar expand="lg p-3">
                    <Nav><p className="text-muted">Copyright &copy; 2020 Online food</p></Nav>
                    
                    <Nav className="ml-auto">
                        <Link to="" className="mr-5 text-white">Privacy Policy.</Link>
                        <Link to="" className="mr-5 text-white">Terms of Use</Link>
                        <Link to="" className="text-white">Pricing</Link>
                    </Nav>
                </Navbar>
            </Container>
        </Container>
    );
};

export default Footer;