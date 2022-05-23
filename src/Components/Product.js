import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "./Button.js";
import { AppContext } from "./AppContext.js";

export default function Product(props) {
  const { details } = props;
 const app = useContext(AppContext);
  const cart = app.cart;
  
 const productFromCart = cart.find((product) => product.id === details.id);
  const quantity = productFromCart ? productFromCart.quantity : 0;
   

  return (
    <div className="product">
      <div className="product-image-container">
        <Link to={`/products/${details.id}`}>
          <img
            src={details.image}
            width="100"
            height="100"
            className="product-image"
            alt={details.name}
          />
        </Link>
        <div className="product-quantity-container">
          {productFromCart && (
            <div className="product-quantity">{quantity}</div>
          )}
        </div>
      </div>
      <div className="product-info">
        <h3>{details.name}</h3>
        <p>{details.description}</p>
      </div>
      <div className="product-checkout">
        <div>
          {productFromCart && (
            <Button
              outline
              className="product-delete"
              onClick={() => app.onProductDelete(details.id)}
            >
              x
            </Button>
          )}
        </div>
        <Button outline onClick={() => app.onProductAdd(details)}>
          ${details.price}
        </Button>
      </div>
    </div>
  );
}
