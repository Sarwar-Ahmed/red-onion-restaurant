import React from 'react';
import './DeliveryInfo.css'
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const DeliveryInfo = () => {
    return (
        <Container fluid>
            <Header />
            <Container>
                <div className="row p-5">
                    <div className="col-md-8 p-5">
                        <img src="https://www.jquery-az.com/wp-content/uploads/2016/08/95.0_1-jquery-map.jpg" alt="" className="rounded img-fluid" style={{borderRadius: 20}}/>
                    </div>
                    <div className="col-md-4 p-5 rounded">
                        <div className="bg-light p-3" style={{borderRadius: 20, textAlign: "left"}}>
                            <div>
                                <img src="https://iili.io/2vJOzb.png" alt="" className="w-25"/>
                            </div>
                            <div className="bg-white rounded p-2">
                                <h6>Your Location</h6>
                                <p><small className="text-muted">107 Rd No 8</small></p>
                                <h6>Shop Address</h6>
                                <p><small className="text-muted">Gulshan Plaza Restaura GPR</small></p>
                            </div>
                            <div>
                                <h3>09:30</h3>
                                <p><small className="text-muted">Estimated delivery time</small></p>
                            </div>
                            <div>

                            </div>
                            <button className="bg-danger btn text-white rounded">Contact</button>
                        </div>
                    </div>
                </div>
                   
            </Container>
            <Footer />
        </Container>
    );
};

export default DeliveryInfo;