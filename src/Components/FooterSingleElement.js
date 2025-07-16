import { Grid, Typography } from "@mui/material";
import React from "react";
import "./FooterSingleElement.css"
function FooterSingleElement() {
  return (
    <div>
      <Grid container className="footer-section-full-container">
        <Grid size={{ sx: 12, md: 12, lg: 12 }} className="small-footer-grid">
          <Typography className="footertextprop" variant="body2">All rights reserved © It is a long established fact that a reader </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default FooterSingleElement;
