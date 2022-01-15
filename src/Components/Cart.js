import React from "react";

export default function Cart({cart}) {
  return (
    <>
      {" "}
      <div className="cart-layout">
        <div>
          <h1>Your Cart</h1>
          {cart===0 && <p>You have not added any product to your cart yet.</p>}
        </div>
      </div>
    </>
  );
}
