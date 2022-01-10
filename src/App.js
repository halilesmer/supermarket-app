import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Products from "./Components/Products.js";
import Cart from "./Components/Cart.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/products" element={   <Products />}/>
          <Route exact path="/cart" element={<Cart />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
