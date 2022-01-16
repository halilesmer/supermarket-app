import React, {useState} from "react";
import { loadStripe } from "@stripe/stripe-js";
import Input from "./input";
import Button from "./Button";

export default function Cart({ cart }) {
  const [emailInp, setEmailInp] = useState("");

  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const stripeLoadedPromise = loadStripe(
    "pk_test_51HsqkCGuhXEITAut89vmc4jtjYd7XPs8hWfo2XPef15MFqI8rCFc8NqQU9WutlUBsd8kmNqHBeEmSrdMMpeEEyfT00KzeVdate"
  );

  function handleSubmit(event) {
    event.preventDefault();

    let priceId;
    cart.forEach((product) => (priceId = product));
    console.log("cart", priceId.price_id);

    stripeLoadedPromise.then((stripe) => {
      stripe
        .redirectToCheckout({
          lineItems: [
            {
              price: priceId.price_id,
              quantity: priceId.quantity,
            },
          ],
          mode: "payment",
          successUrl: "https://esmer55.de",
          cancelUrl: "https://esmer55.de",
          customerEmail: emailInp,
        })
        .then((response) => {
          // this will only log if the redirect did not work
          console.log(response.error);
        })
        .catch((error) => {
          // wrong API key? you will see the error message here
          console.log(error);
        });
    });
  }
    

  return (
    <>
      <div className="cart-layout">
        <div>
          <h1>Your Cart</h1>
          {cart.length === 0 && (
            <p>You have not added any product to your cart yet.</p>
          )}
          {cart.length > 0 && (
            <table class="table table-cart">
              <thead>
                <tr>
                  <th width="25%" class="th-product">
                    Product
                  </th>
                  <th width="20%">Unit price</th>
                  <th width="10%">Quanity</th>
                  <th width="25%">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => {
                  //console.log('details',product)
                  return (
                    <tr>
                      <td>
                        <img
                          src={product.image}
                          width="30"
                          height="30"
                          alt=""
                        />
                        {product.name}
                      </td>
                      <td>{product.price} €</td>
                      <td>{product.quantity}</td>
                      <td>
                        <strong>{product.price * product.quantity} €</strong>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan="2"></th>
                  <th class="cart-highlight">Total</th>
                  <th class="cart-highlight">{totalPrice} €</th>
                </tr>
              </tfoot>
            </table>
          )}
          {cart.length > 0 && (
            <form class="pay-form" onSubmit={handleSubmit}>
              <p>
                Enter your email and then click on pay and your products will be
                delivered to you on the same day!
              </p>
              <Input
                value={emailInp}
                onChange={(e) => setEmailInp(e.target.value)}
                required
                autocomplete="email"
                placeholder="Email"
                type="email"
              />
              <Button type="submit">Pay</Button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
