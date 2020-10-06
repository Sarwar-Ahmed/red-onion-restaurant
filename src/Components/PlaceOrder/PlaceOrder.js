import React from 'react';
import './PlaceOuder.css'
import { Container, Nav } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const PlaceOrder = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <Container fluid>
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
                    <div className="col-md-5 p-5" style={{textAlign: 'left'}}>
                        <div className="p-3">
                            <h6>From <strong>Gulshan Plaza Restaurent GPR</strong></h6>
                            <p>Arriving in 20-30 min</p>
                            <p>107 Rd No 8</p>
                        </div>
                        <div></div>
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
                            <button className="bg-secondary btn text-white rounded pl-5 pr-5 m-5" disabled>Place Order</button>
                        </div>
                    </div>
                </div>

            </Container>
        </Container>
    );
};

export default PlaceOrder;