import React from "react";
import Button from "./Button.js";

export default function ProductDetailInfo({ product }) {
  return (
    <>
      <p>
        {product.description} sold at <strong>${product.price}</strong> per
        piece.
      </p>
      <Button>${product.price}</Button>
    </>
  );
}
