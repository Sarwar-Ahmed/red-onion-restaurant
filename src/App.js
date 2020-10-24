import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import ItemDetails from './Components/ItemDetails/ItemDetails';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import DeliveryInfo from './Components/DeliveryInfo/DeliveryInfo';
import Login from './Components/Login/Login';
import FoodMenu from './Components/FoodMenu/FoodMenu';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});


  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/foodMenu">
              <FoodMenu />
            </Route>
            <PrivateRoute path="/itemDetails/:id">
              <ItemDetails />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/placeOrder">
              <PlaceOrder />
            </PrivateRoute>
            <PrivateRoute path="/deliveryInfo">
              <DeliveryInfo />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
      
    </div>
  );
}

export default App;
