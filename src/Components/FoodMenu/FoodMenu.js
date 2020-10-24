import React, { useContext, useState } from 'react';
import './FoodMenu.css'
import { Container, Nav } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import { useEffect } from 'react';

const FoodMenu = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [foodMenu, setFoodMenu] = useState([]);
    const [defaultItem, setDefaultItem] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch(`https://red-onion-restaurant-sarwar.herokuapp.com/foodMenu`)
        .then(res => res.json())
        .then(data => {
            setFoodMenu(data);
        })

        fetch(`https://red-onion-restaurant-sarwar.herokuapp.com/foodMenu`)
        .then(res => res.json())
        .then(data => {
            setDefaultItem(data.filter(item => item.category === "lunch"));
        })

        fetch(`https://red-onion-restaurant-sarwar.herokuapp.com/cart`)
        .then(res => res.json())
        .then(data => {
            setCart(data.filter(cartItem => cartItem.email === loggedInUser.email));
        })
    }, [])
    const [foodItems, setFoodItems] = useState(foodMenu.filter(item => item.category === "lunch"));
    const [isClicked, setIsClicked] = useState("lunch");  
    const history = useHistory();

    const handleFoodItem = (category) =>{
        setIsClicked(category)
        const selectedItems = foodMenu.filter(item => item.category === category);
        setFoodItems(selectedItems);
        
    }

    const handleCheckout = () =>{
        history.push(`/placeOrder`)
    }
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
                        foodItems.length===0
                        ?defaultItem.map(item => 
                            <div className="col-md-4 p-3 items" key={item._id}>
                                <Link to={`/itemDetails/${item._id}`}>
                                    <img src={item.image} className="w-50" alt=""/>
                                    <h5 className="text-dark">{item.title}</h5>
                                    <p className="text-muted">{item.info}</p>
                                    <h2 className="text-dark">${item.price}</h2>
                                </Link>
                            </div>    
                        )
                        :foodItems.map(item => 
                            <div className="col-md-4 p-3 items" key={item._id}>
                                <Link to={`/itemDetails/${item._id}`}>
                                    <img src={item.image} className="w-50" alt=""/>
                                    <h5 className="text-dark">{item.title}</h5>
                                    <p className="text-muted">{item.info}</p>
                                    <h2 className="text-dark">${item.price}</h2>
                                </Link>
                            </div>    
                        )
                    }
                </div>
                {
                    cart.length
                    ?<button  onClick={() => handleCheckout()} className="bg-danger btn text-white rounded pl-5 pr-5 m-5">Checkout Your Food</button>
                    :<button  onClick={() => handleCheckout()} className="bg-secondary btn text-white rounded pl-5 pr-5 m-5" disabled>Checkout Your Food</button>
                }
            </Container>
        </Container>
    );
};

export default FoodMenu;