import React from "react";
import "./Footer.css";
import { Grid, Typography } from "@mui/material";

function Footer() {
  return (
    <div>
      <Grid container className="footer-color para-border-prop">
        <Grid size={{ sx: 12, md: 3, lg: 3 }}>
          <div className="first-col-prop">
            <Typography className="first-col-heading" variant="h6">
              {" "}
              About US{" "}
            </Typography>
            <Typography className="first-col-para" variant="body2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
            </Typography>
          </div>
        </Grid>

        <Grid size={{ sx: 12, md: 3, lg: 3 }}>
          <div className="first-col-prop">
            <Typography className="first-col-heading" variant="h6">
              {" "}
              Terms & Conditions{" "}
            </Typography>
            <Typography className="first-col-para" variant="body2">
              <ul className="terms-footer">
                <li>Lorem Ipsum is simply dummy</li>
                <li>text of the printing and </li>
                <li>typesetting industry. Lorem </li>
                <li>Ipsum has been the industry's </li>
                <li>standard dummy text ever since the </li>
                <li>1500s, when an unknown printer took a galley </li>
                <li>1500s, when an unknown printer took a galley </li>

              </ul>
            </Typography>
          </div>
        </Grid>
        <Grid size={{ sx: 12, md: 3, lg: 3 }}>
          <div className="first-col-prop">
            <Typography className="first-col-heading" variant="h6">
              {" "}
              Quick links{" "}
            </Typography>
            <Typography className="first-col-para" variant="body2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
            </Typography>
          </div>
        </Grid>
        <Grid size={{ sx: 12, md: 3, lg: 3 }}>
          <div className="first-col-prop">
            <Typography className="first-col-heading" variant="h6">
              {" "}
              Address{" "}
            </Typography>
            <Typography className="first-col-para" variant="body2">
              <ul className="address-footer">
                <li>Lorem Ipsum is simply dummy</li>
                <li>text of the printing and </li>
                <li>typesetting industry. Lorem </li>
                <li>Ipsum has been the industry's </li>
                <li>standard </li>
                <li>Ph:009990009090 </li>
                <li>dummytext@gmail.com </li>
              </ul>
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid size={{ sx: 12, md: 12, lg: 12 }} className="small-footer-grid">
          <Typography variant="body2">All rights reserved </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
