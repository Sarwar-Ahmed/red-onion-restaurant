import React from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import './TopBanner.css'

const TopBanner = () => {
    return (
        <div className="topBanner">
            <div className="bannerContent">
                <h1>Best food waiting for your belly</h1>
                <Form inline className="justify-content-center">
                    <InputGroup>
                        <FormControl type="text" placeholder="Search food items" className="searchBtn" />
                        <InputGroup.Append>
                            <button className="searchButton">Search</button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>
            </div>
        </div>
    );
};

export default TopBanner;