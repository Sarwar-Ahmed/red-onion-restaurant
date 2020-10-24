import React from 'react';
import './PlaceOuder.css'
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const PlaceOrder = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const [clickedContinue, setClickedContinue] = useState(false);
    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(0)
    const history = useHistory();

    useEffect(() => {
        fetch(`https://red-onion-restaurant-sarwar.herokuapp.com/cart`)
        .then(res => res.json())
        .then(data => {
            setCart(data.filter(cartItem => cartItem.email === loggedInUser.email));
        })
    }, [])

    const onSubmit = (data) => {
        setClickedContinue(true);
        console.log(data);
    }
    const handlePlaceOrder = () => {
        history.push('/deliveryInfo');
    }

    const handleCountMinus = () => {
        setCount(count-1);
    }
    const handleCountPlus = () => {
        setCount(count+1);
    }
    return (
        <Container fluid>
            <Header />
            <Container>
                <div className="placeOuderContainer row p-5">
                    <div className="col-md-7">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h4>Edit Delivery Details</h4>
                            <hr/>
                            <input name="address" className="form-control bg-light" defaultValue="" ref={register({ required: true })} placeholder="Address" />
                            {errors.address && <span className="error">Address is required</span>}
                            <br />

                            <input name="roadNo" className="form-control bg-light" defaultValue="" ref={register({ required: true })} placeholder="Road No" />
                            {errors.roadNo && <span className="error">Road No is required</span>}
                            <br />

                            <input name="flat" className="form-control bg-light" defaultValue="" ref={register({ required: true })} placeholder="Flat, suite or floor" />
                            {errors.flat && <span className="error">Flat, suite or floor is required</span>}
                            <br />

                            <input name="businessName" className="form-control bg-light" defaultValue="" ref={register({ required: true })} placeholder="Business Name" />
                            {errors.businessName && <span className="error">Business Name is required</span>}
                            <br />

                            <input name="instructor" className="form-control bg-light" defaultValue="" ref={register({ required: true })} placeholder="Add delivery instructor" />
                            {errors.instructor && <span className="error">Delivery instructor is required</span>}
                            <br />

                            <button type="submit" className="btn btn-danger text-white">Save &amp; Continue</button>
                        </form>
                    </div>
                    <div className="col-md-5 p-5 font-weight-bold" style={{textAlign: 'left'}}>
                        <div className="p-3">
                            <h6>From <strong>Gulshan Plaza Restaurent GPR</strong></h6>
                            <p>Arriving in 20-30 min</p>
                            <p>107 Rd No 8</p>
                        </div>
                        <div>
                            {
                                cart.map(cart => 
                                    <div style={{borderRadius: 20}} className="row bg-light p-2 mb-2" key={cart._id}>
                                        <div className="col-3">
                                            <img src={cart.image} className="img-fluid" alt=""/>
                                        </div>
                                        <div className="col-6">
                                            <h6>{cart.title}</h6>
                                            <h6 className="text-danger">${cart.price * (cart.quantity + count)}</h6>
                                            <h6 className="text-muted">Delivery free</h6>
                                        </div>
                                        <div className="col-3">
                                            <FontAwesomeIcon icon={faMinus} onClick={() => handleCountMinus()}/> <h6>{cart.quantity + count}</h6><FontAwesomeIcon icon={faPlus} onClick={() => handleCountPlus()}/>
                                        </div>
                                    </div>    
                                )
                            }
                        </div>
                        <div className="p-5">
                            <div className="d-flex">
                                <p>Subtotal: 4 item</p>
                                <p className="ml-auto">$320</p>
                            </div>
                            <div className="d-flex">
                                <p>Tax</p>
                                <p className="ml-auto">$5.00</p>
                            </div>
                            <div className="d-flex">
                                <p>Delivery fee</p>
                                <p className="ml-auto">$2.00</p>
                            </div>
                            <div className="d-flex">
                                <h6>Total</h6>
                                <h6 className="ml-auto"><strong>$327</strong></h6>
                            </div>
                            {
                                clickedContinue
                                ?<button onClick={() => handlePlaceOrder()} className="bg-danger btn text-white rounded pl-5 pr-5 m-5">Place Order</button>
                                :<button onClick={() => handlePlaceOrder()} className="bg-secondary btn text-white rounded pl-5 pr-5 m-5" disabled>Place Order</button>
                            }
                        </div>
                    </div>
                </div>

            </Container>
            <Footer />
        </Container>
    );
};

export default PlaceOrder;