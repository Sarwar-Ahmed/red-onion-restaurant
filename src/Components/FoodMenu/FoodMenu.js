import React, { useState } from 'react';
import './FoodMenu.css'
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FoodMenu = () => {
    const [foodItems, setFoodItems] = useState([]);
    return (
        <Container fluid>
            <Container>
                <Nav className="justify-content-center font-weight-bold p-5" activeKey="/home">
                    <Nav.Item>
                        <Link className="navLink" to="">Breakfast</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="navLink" to="">Lunch</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="navLink" to="">Dinner</Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Container>
    );
};

export default FoodMenu;