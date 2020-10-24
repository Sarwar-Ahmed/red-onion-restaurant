import React from 'react';
import './Services.css'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { VscArrowRight } from "react-icons/vsc";
import { useState } from 'react';
import { useEffect } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/services`)
        .then(res => res.json())
        .then(data => {
            setServices(data);
        })
    }, [])
    return (
        <Container fluid>
            <Container >
                <div className="col-md-5">
                    <h1 className="p-2">Why you choose us</h1>
                    <p>Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prosperious increasing surrounded.</p>
                </div>
                <div className="row">
                {
                    services.map(service => 
                        
                        <div className="col-md-4 servicesContent p-5 mb-5" key={service._id}>
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
                                    <Link to="/" className="font-weight-bold p-2">See more</Link><span><Link to="/"><VscArrowRight className="circle bg-success text-white rounded-circle p-1"/></Link></span>
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