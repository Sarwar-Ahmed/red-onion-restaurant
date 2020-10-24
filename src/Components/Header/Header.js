import { FiShoppingCart } from "react-icons/fi";
import './Header.css'
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../App";
import { useEffect } from "react";
import { useState } from "react";

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch(`https://red-onion-restaurant-sarwar.herokuapp.com/cart`)
        .then(res => res.json())
        .then(data => {
            setCart(data.filter(cartItem => cartItem.email === loggedInUser.email));
        })
    }, [])

    // console.log(cart);
    return (
        <Container fluid>
            <Container>
                <Navbar expand="lg" className="fixed">
                    <Navbar.Brand><Link to="/home"><img src="https://iili.io/27JGwB.png" style={{width:150}} className="d-inline-block align-top"alt=""/></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link  className="navLink" to="/placeOrder" bg="dark"><FiShoppingCart /><span className="text-danger">{cart.length}</span></Link>
                            {
                                loggedInUser.isSiggnedIn 
                                ?<Link to="" className="navLink font-weight-bold">{loggedInUser.name}</Link>
                                :<Link to="/login" className="navLink font-weight-bold">Login</Link>
                            }
                            {
                                loggedInUser.isSiggnedIn
                                ?<Link to="" onClick={() => setLoggedInUser({})} className="signUpButton">Sign out</Link>
                                :<Link to="/login" className="signUpButton">Sign up</Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </Container>
    );
};

export default Header;