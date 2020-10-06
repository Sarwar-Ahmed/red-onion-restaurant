import React, { useState } from 'react';
import './Login.css'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, errors } = useForm();
    const [newUser, setNewUser] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
    }

    const googleSingIn = () => {

    }

    return (
        <div className="loginContainer">
            <div className="p-5">
                <Link to="/home"><img src="https://iili.io/27JGwB.png" style={{ width: 200 }} className="d-inline-block align-top" alt="" /></Link>
            </div>
            <div className="w-50 mx-auto p-5">
                <form onSubmit={handleSubmit(onSubmit)}>

                    {newUser && <input name="name" className="form-control bg-light" defaultValue="" ref={register({ required: true })} placeholder="Name" />}
                    {errors.name && <span className="error">Name is required</span>}
                    <br />

                    <input name="email" type="email" className="form-control bg-light" defaultValue="" ref={register({ required: true })} placeholder="Email" />
                    {errors.email && <span className="error">Email is required</span>}
                    <br />

                    <input name="password" type="password" className="form-control bg-light" defaultValue="" ref={register({ required: true })} placeholder="Password" />
                    {errors.password && <span className="error">Password is required</span>}
                    <br />

                    {newUser && <input name="confirmPassword" type="password" className="form-control bg-light" defaultValue="" ref={register({ required: true })} placeholder="Confirm Password" />}
                    {errors.confirmPassword && <span className="error">Confirm Password is required</span>}
                    <br />

                    {newUser
                        ? <button type="submit" className="btn btn-danger text-white">Sign up</button>
                        : <button type="submit" className="btn btn-danger text-white">Sign in</button>}
                    <br />
                    {newUser
                        ? <Link to="/login" onClick={() => setNewUser(!newUser)} className="text-danger">Already have an account</Link>
                        : <Link to="/login" onClick={() => setNewUser(!newUser)} className="text-danger">Create an account</Link>}
                </form>
                <div className="w-md-50 mx-auto">
                    <h6>or <hr/></h6>
                    <div className="border rounded p-1 pl-5 pr-5 ">
                        <button onClick={googleSingIn} className="btn font-weight-bold text-dark"><span><img src="https://iili.io/2xw5TQ.png" alt="" className="m-1" style={{width: 16}} /></span>Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;