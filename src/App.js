import React, {useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Products from "./Components/Products.js";
import ProductDetails from "./Components/ProductDetails.js";
import Cart from "./Components/Cart.js";

function App() {
  const [cart, setCart] = useState([]);

  function handleProductDelete(id) {
    console.log("Deleting product " + id);
  }

  function handleProductAdd(newProduct) {
    console.log("Adding product " + newProduct.id);
  }

  return (
    <BrowserRouter>
      <Navbar cart={cart} />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/products">
            <Products
              cart={cart}
              onProductAdd={handleProductAdd}
              onProductDelete={handleProductDelete}
            />
          </Route>
          <Route path="/products/:id">
            <ProductDetails onProductAdd={handleProductAdd} />
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
