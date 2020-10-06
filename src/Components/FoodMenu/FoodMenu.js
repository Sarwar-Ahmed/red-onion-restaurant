import React, { useContext, useState } from 'react';
import './FoodMenu.css'
import { Container, Nav } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';
import { UserContext } from '../../App';

const FoodMenu = () => {
    const [foodItems, setFoodItems] = useState(fakeData.filter(item => item.category === "lunch"));
    const [isClicked, setIsClicked] = useState("lunch");  
    const history = useHistory();


    const handleFoodItem = (category) =>{
        setIsClicked(category)
        const selectedItems = fakeData.filter(item => item.category === category);
        setFoodItems(selectedItems);
        
    }

    const handleCheckout = () =>{
        history.push(`/placeOrder`)
    }
    // console.log(foodItems);
    return (
        <Container fluid>
            <Container>
                <Nav className="justify-content-center font-weight-bold p-5" activeKey="/home">
                    <Nav.Item>
                        <Link className={isClicked==="breakfast" ? "active mr-3" : "navLink mr-3"} to="" onClick={() => {handleFoodItem("breakfast")}}>Breakfast</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className={isClicked==="lunch" ? "active mr-3" : "navLink mr-3"} to="" onClick={() => {handleFoodItem("lunch")}} >Lunch</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className={isClicked==="dinner" ? "active mr-3" : "navLink mr-3"} to="" onClick={() => {handleFoodItem("dinner")}}>Dinner</Link>
                    </Nav.Item>
                </Nav>
                <div className="row p-4">
                    {
                        foodItems.map(item => 
                            <div className="col-md-4 p-3 items">
                                <Link to={`/itemDetails/${item.id}`}>
                                    <img src={item.image} className="w-50" alt=""/>
                                    <h5 className="text-dark">{item.title}</h5>
                                    <p className="text-muted">{item.info}</p>
                                    <h2 className="text-dark">${item.price}</h2>
                                </Link>
                            </div>    
                        )
                    }
                </div>
                <button  onClick={() => handleCheckout()} className="bg-secondary text-white rounded pl-5 pr-5 m-5" disabled>Checkout Your Food</button>
            </Container>
        </Container>
    );
};

export default FoodMenu;