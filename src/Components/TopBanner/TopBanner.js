import React from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import './TopBanner.css'

const TopBanner = () => {
    return (
        <div className="topBanner">
            <div className="bannerContent">
                <h1>Best food waiting for your belly</h1>
                <Form inline className="justify-content-center">
                    <InputGroup>
                        <FormControl type="text" placeholder="Search food items" style={{borderRadius: 20}}/>
                        <InputGroup.Append>
                            <button className="btn btn-danger" style={{borderRadius: 20, marginLeft: -30, zIndex: 1}}>Search</button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>
            </div>
        </div>
    );
};

export default TopBanner;