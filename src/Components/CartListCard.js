import React, { useEffect, useState } from "react";
import "./CartListCard.css";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, Paper, Typography } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import "./Cartpaper.css";

import { deleteprdtfromcartfnstore } from "../redux_toolkit/CartsliderReducer";
import CartSidebox from "./CartSidebox";
import { NavLink } from "react-router";
function CartListCard() {
  const [cartarrayhtmlmap, setCartarrayhtmlmap] = useState("");
  let dispatchcartdelete = useDispatch();
  const cartArrayUseSelect = useSelector((state) => {
    return state.CartListProdctsArray;
  });

  let arrayofidofitemdincart = cartArrayUseSelect.map((item, index) => {
    return item.id;
  });

  let deleteprdtcart = (cartitemdelete) => () => {
    let indexofitemtodeleteincart = arrayofidofitemdincart.indexOf(
      cartitemdelete.id
    );
    dispatchcartdelete(
      deleteprdtfromcartfnstore({
        indexofvaluetodelete: indexofitemtodeleteincart,
      })
    );
  };

  useEffect(() => {
    let valueusedtosetmapcart = cartArrayUseSelect.map(
      (cartitem, cartindex) => {
        return (
                 
          <Grid
            size={{ sx: 12, sm: 3, md: 3, lg: 3 }}
            className="data-all-grid-prop"
          >
              <NavLink to={`/Product-details/${cartitem.id}`}> 
            <div className="card-cart card-boder-cart">
              <div className="close-btn-outer-div">
              <div
                className="close-icon-cart"
                onClick={deleteprdtcart(cartitem)}
              >
                <CloseIcon className="cart-list-close-btn"></CloseIcon>
              </div>
              </div>
              <img
                className="card-card-image"
                src={require(`../images/All-prdt-images/${cartitem.pictures.pic1}`)}
                alt="not-available"
              />
              <div>
                <Typography className="box-text-first" variant="body1">
                  <b>
                    {" "}
                    {cartitem.brand} {cartitem.category.third_category}
                  </b>
                </Typography>
                <Typography className="box-text-second" variant="body1">
                  <b>₹{cartitem.price}</b>
                </Typography>
              </div>
            </div>
               </NavLink>
          </Grid>
       
        );
      }
    );

    setCartarrayhtmlmap(valueusedtosetmapcart);
  }, [cartArrayUseSelect]);
 
  return (
    <>
      {cartArrayUseSelect.length !== 0
        ? cartarrayhtmlmap
        : <Typography   variant="h6" className="no-data-message cart-no-item"> Cart is empty!... </Typography>}
    </>
  );
}

export default CartListCard;
