import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import ItemDetails from './Components/ItemDetails/ItemDetails';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import DeliveryInfo from './Components/DeliveryInfo/DeliveryInfo';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import FoodMenu from './Components/FoodMenu/FoodMenu';

export const UserContext = createContext();
function App() {
  const [userInfo, setUserInfo] = useState({});
  const [loggedInUser, setLoggedInUser] = useState({});

  console.log(userInfo);

  return (
    <div className="App">
      <UserContext.Provider value={[userInfo, setUserInfo, loggedInUser, setLoggedInUser]}>
        <Router>
          <Header />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/foodMenu">
              <FoodMenu />
            </Route>
            <Route path="/itemDetails/:id">
              <ItemDetails />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/placeOrder">
              <PlaceOrder />
            </Route>
            <Route path="/deliveryInfo">
              <DeliveryInfo />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </UserContext.Provider>
      
    </div>
  );
}

export default App;
