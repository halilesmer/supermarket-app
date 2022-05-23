import React, { useState, useEffect, createContext } from "react";

export const AppContext = createContext();

export function AppProvider(props) {
  //const [cart, setCart] = useState([]);
  //--------- saved the card in the local storage --------------started
  const [cart, setCart] = useState(() => {
    let savedCart = [];
    try {
      savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    } catch (error) {
      savedCart = [];
    }
    return savedCart;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  //--------- saved the card in the local storage --------------ended
    
    
  //------- delete Products
  function handleProductDelete(id) {
    console.log("Deleting product " + id);
    const updateCart = cart.filter((product) => product.id !== id);
    setCart(updateCart);
  }

  //------- add Products
  function handleProductAdd(newProduct) {
    const existingProduct = cart.find(
      (product) => product.id === newProduct.id
    );

    if (existingProduct) {
      const updateCart = cart.map((product) => {
        if (product.id === newProduct.id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
      setCart(updateCart);
    } else {
      return setCart([...cart, { ...newProduct, quantity: 1 }]);
    }
  }

  /* function getTotalPrice() {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  } */
    function getTotalPrice() {
       return cart.reduce(
            (total, product) => total + product.price * product.quantity,
            0
        )
    }

  function getProductFromCart(productId) {
    return cart.find((product) => product.id === productId);
  }

  /* function getCartCount() {
    return cart.reduce((total, product) => total + product.quantity, 0);
  } */
    function getCartCount() {
        return cart.reduce((total, product) => {
            console.log('total + product.quantity: ', total + product.quantity)
            return total + product.quantity;
          
      },0);
    }

  const value = {
    cart,
    onProductAdd: handleProductAdd,
    onProductDelete: handleProductDelete,
    getTotalPrice,
    getProductFromCart,
    getCartCount,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}
