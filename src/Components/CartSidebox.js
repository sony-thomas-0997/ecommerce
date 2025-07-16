import { Typography } from "@mui/material";
import React from "react";
import "./Cartsidebox.css";
function CartSidebox() {
  return (
    <div>
      <div className="cart-side-box-outline">
        <Typography className="cart-side-box-title" variant="h6">
          {" "}
          Heading{" "}
        </Typography>
        <p className="cart-side-box-para">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.    
        </p>
      </div>
    </div>
  );
}

export default CartSidebox;
