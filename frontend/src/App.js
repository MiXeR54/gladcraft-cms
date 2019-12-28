import React from "react";
import Navbar from "./components/navbar/navbar";
import Shop from './pages/shop/shop'
import Home from './pages/home/home'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
    </Router>
  );
}

export default App;
