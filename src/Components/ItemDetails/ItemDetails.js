import React, { useContext, useState } from 'react';
import './ItemDetails.css'
import { Container, Nav } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FiShoppingCart } from "react-icons/fi";
import { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const ItemDetails = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [item, setItem] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/foodMenu`)
        .then(res => res.json())
        .then(data => {
            setItem(data.find(item => item._id === id));
        })
    }, [])

    const [quantity, setQuantity] = useState(1);
    const history = useHistory();

    const handleCart = () => {
        const cartItem = item;
        cartItem.quantity = quantity;
        cartItem.email = loggedInUser.email;
        fetch('http://localhost:5000/addCart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cartItem)
        })
        alert("Item successfully added to cart.");
        history.push(`/home`);
    }

    return (
        <Container fluid>
            <Header />
            <Container>
                <div className="row p-5">
                    <div className="col-md-6 p-5">
                        <h2>{item.title}</h2>
                        <p className="text-muted">Gay one the what walk the she. Demesne mention promise you justice arrived way. Amazing foods are Or and icreasing to in especially inquieted companions acceptance admiration. Outweight it families distance wandered ye.</p>
                        <div className="d-flex">
                            <h4 className="ml-auto p-3">${item.price * quantity}</h4> <h4 className="mr-auto p-3 font-weight-bold"><FontAwesomeIcon onClick={() => setQuantity(quantity -1)} icon={faMinusCircle} /> {quantity} <FontAwesomeIcon onClick={() => setQuantity(quantity + 1)} icon={faPlusCircle}/></h4>
                        </div>
                        <button onClick={() => handleCart()} className="cartBtn"><FiShoppingCart className="m-2" /> Add</button>

                    </div>
                    <div className="col-md-6 p-3">
                        <img className="w-75" src={item.image} alt=""/>
                    </div>
                </div>
            </Container>
            <Footer />
        </Container>
    );
};

export default ItemDetails;