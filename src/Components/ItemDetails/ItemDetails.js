import React, { useContext, useState } from 'react';
import './ItemDetails.css'
import { Container, Nav } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import { FiShoppingCart } from "react-icons/fi";
import fakeData from '../../fakeData/fakeData';


const ItemDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const {id} = useParams();
    const history = useHistory();

    const handleCart = () => {
        history.push(`/foodMenu`);
    }
    return (
        <Container fluid>
            <Container>
                <div className="row p-5">
                    <div className="col-md-6 p-5">
                        <h2>{fakeData[id - 1].title}</h2>
                        <p className="text-muted">Gay one the what walk the she. Demesne mention promise you justice arrived way. Amazing foods are Or and icreasing to in especially inquieted companions acceptance admiration. Outweight it families distance wandered ye.</p>
                        <div className="d-flex">
                            <h3 className="ml-auto p-3">${fakeData[id - 1].price * quantity}</h3> <span className="mr-auto p-3 font-weight-bold"><button onClick={() => setQuantity(quantity -1)} className="rounded-circle"> - </button> {quantity} <button onClick={() => setQuantity(quantity + 1)} className="rounded-circle"> + </button></span>
                        </div>
                        <button onClick={() => handleCart()} className="cartBtn"><FiShoppingCart className="m-2" /> Add</button>

                    </div>
                    <div className="col-md-6 p-3">
                        <img className="w-75" src={fakeData[id - 1].image} alt=""/>
                    </div>
                </div>   
            </Container>
        </Container>
    );
};

export default ItemDetails;