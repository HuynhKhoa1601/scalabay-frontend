import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from "./pages/home-page/homePage";
import ShoppingCart from "./pages/shopping-cart/shoppingCart";
import User from "./pages/user/user";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
        </Routes>
        <Routes>
          <Route exact path="/shopping-cart" element={<ShoppingCart/>}/>
        </Routes>
        <Routes>
          <Route exact path="/user" element={<User/>}/>
        </Routes>
    </Router>
      
    </div>
  );
}
export default App;
