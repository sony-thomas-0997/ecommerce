import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./Cartpaper.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteprdtfromcartfnstore } from "../redux_toolkit/CartsliderReducer";
import CartListCard from "./CartListCard";
import CartSidebox from "./CartSidebox";
import FooterSingleElement from "./FooterSingleElement";

function Cartpaper() {
  return (
    <div>
      <Grid container>
        <Grid size={{ sx: 12, sm: 4, md: 3, lg: 3 }}>
          <CartSidebox />
        </Grid>
        <Grid size={{ sx: 12, sm: 9, md: 9, lg: 9 }}>
          <Typography className="cart-page-list-head" variant="h5">
            Wish List
          </Typography>
          <Grid container>
            <CartListCard />
          </Grid>
        </Grid>
      </Grid>

      <Grid container>
        <Grid size={{ sx: 12, sm: 12, md: 12, lg: 12 }}>
          <FooterSingleElement />
        </Grid>
      </Grid>
    </div>
  );
}

export default Cartpaper;
