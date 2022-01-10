import React from "react";

export default function Home() {
  return (
    <>
      <div class="home-layout">
        <div>
          <h1>Online shopping simplified</h1>
          <p>
            Order your groceries from <em>SuperM</em> with our easy to use app,
            and get your products delivered straight to your doorstep.
          </p>
          <a to="/products" class="btn btn-default">
            Start shopping
          </a>
        </div>
        <img
          src="https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_700/v1607770215/react-tutorial/supermarket/home.jpg"
          width="350"
          height="240"
          class="rounded home-image"
          alt=""
        />
      </div>
    </>
  );
}
