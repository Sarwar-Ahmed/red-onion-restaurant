import React from 'react';
import './Services.css'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import servicesData from '../../fakeData/servicesData';
import { VscArrowRight } from "react-icons/vsc";

const Services = () => {
    return (
        <Container fluid>
            <Container >
                <div className="col-md-5">
                    <h1 className="p-2">Why you choose us</h1>
                    <p>Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prosperious increasing surrounded.</p>
                </div>
                <div className="row servicesContent">
                {
                    servicesData.map(service => 
                        
                        <div className="col-md-4">
                            <div>
                                <img className="w-100 h-50 mb-4" src={service.image} alt=""/>
                            </div>
                            <div className="d-flex p-3">
                                <div>
                                    <img src={service.icon} alt=""/>
                                </div>
                                <div>
                                    <h4 className="p-2">{service.title}</h4>
                                    <p className="text-muted">{service.body}</p>
                                    <Link to="" className="font-weight-bold p-2">See more</Link><span><Link><VscArrowRight className="circle bg-success text-white rounded-circle p-1"/></Link></span>
                                </div>
                            </div>
                        </div>
                    
                    )
                }
                </div>
            </Container>
        </Container>
    );
};

export default Services;