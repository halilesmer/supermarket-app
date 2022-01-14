import React, {useEffect, useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Products from "./Components/Products.js";
import ProductDetails from "./Components/ProductDetails.js";
import Cart from "./Components/Cart.js";

function App() {
  const [cart, setCart] = useState([]);

useEffect(() => {
  // to visualize the cart in the console every time in changes
  // you can also use React dev tools
  console.log("cart", cart);
}, [cart]);
  
  
  function handleProductDelete(id) {
    console.log("Deleting product " + id);
    const updateCart = cart.filter(product => product.id !== id);
    setCart(updateCart)
  }

  function handleProductAdd(newProduct) {
    const existingProduct = cart.find(product => product.id === newProduct.id)

    if (existingProduct) {
      const updateCart = cart.map(product => {
        if (product.id === newProduct.id) {
          return {...product, quantity: product.quantity +1}
        }
        return product;
      })
       setCart(updateCart);
    } else {
      return setCart([...cart, {...newProduct, quantity: 1}])
    }
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
