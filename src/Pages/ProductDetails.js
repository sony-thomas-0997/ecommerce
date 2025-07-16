import { Button, Grid, Typography } from "@mui/material";
import { useParams } from "react-router";
import "./ProductDetails.css";
import Products from "../Data/Products";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { addprdttocart } from "../redux_toolkit/CartsliderReducer";
import { useEffect, useState } from "react";
import Multipledataslider from "../Components/RecentlyViewdSlider";
import { addtorecentlyviewdarray } from "../redux_toolkit/RecentlyViewsReducer.js";
import FooterSingleElement from "../Components/FooterSingleElement.js";

function ProductDetails() {
  const fulldata = Products;
  const prdtIdFromLink = useParams();
  let [idofproductsincart, setIdofproductsincart] = useState([]);
  let [booleanPrdtInCart, setBooleanPrdtInCart] = useState(false);
  let singleDataBasedOnId = fulldata.filter((item, index, array) => {
    return item.id === Number(prdtIdFromLink.prdtId);
  });
  const dispatchToCart = useDispatch();
  const dispatchtoRecentlyviewd = useDispatch();
  const dispatchtoRecentlyviewdAdd = useDispatch();

  const fntoaddtocart = (e) => {
    dispatchToCart(addprdttocart(singleDataBasedOnId[0]));
  };

  let prdctsincartuseselect = useSelector((state) => {
    return state.CartListProdctsArray;
  });

  useEffect(() => {
    let idofprdtsincarttosetmainvariable = prdctsincartuseselect.map(
      (item, index) => {
        return item.id;
      }
    );
    setIdofproductsincart(idofprdtsincarttosetmainvariable);
    console.log(idofprdtsincarttosetmainvariable);
  }, [prdctsincartuseselect]);
  useEffect(() => {
    let booleanincludeforcartprdtpresent = idofproductsincart.includes(
      singleDataBasedOnId[0].id
    );

    setBooleanPrdtInCart(booleanincludeforcartprdtpresent);
  }, [idofproductsincart,prdtIdFromLink.prdtId]);

  /* ----------------------  Recently viewd ------------------------- */
  const recentlyviewdfromstore = useSelector((state) => {
    return state.RecentlyViewdstoreArray;
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [prdtIdFromLink.prdtId]);




  useEffect(() => {
    let idOfAllDataInRecentStore = recentlyviewdfromstore.map((item, index) => {
      return item.id;
    });

    let booloeanItemAlreadyInRecent = idOfAllDataInRecentStore.includes(
      singleDataBasedOnId[0].id
    );

    if (!booloeanItemAlreadyInRecent) {
      console.log(recentlyviewdfromstore, "from store value hai hai");

      let arraywiththisdata = [
        singleDataBasedOnId[0],
        ...recentlyviewdfromstore,
      ];
      console.log(...arraywiththisdata, "arraywiththisdata");

      dispatchtoRecentlyviewdAdd(addtorecentlyviewdarray(arraywiththisdata));
    }
    if (booloeanItemAlreadyInRecent) {
      let uniquearrayofrecently = recentlyviewdfromstore.filter(
        (item, index) => {
          return item.id !== singleDataBasedOnId[0].id;
        }
      );
      console.log(uniquearrayofrecently, "inique array of recently");
      let arraywiththisdata = [
        singleDataBasedOnId[0],
        ...uniquearrayofrecently,
      ];
      console.log(arraywiththisdata, "arraywiththisdata");

      dispatchtoRecentlyviewdAdd(addtorecentlyviewdarray(arraywiththisdata));
    }
  }, []);

  /* ----------------------  Recently viewd ------------------------- */
  return (
    <>
      <div className="details-page-margin-top">
        <Grid container>
          <Grid size={{ sx: 12, sm: 4, md: 6, lg: 6 }}>
            <Grid container>
              <Grid
                className="overflow-hide-image"
                size={{ sx: 12, sm: 6, md: 6, lg: 6 }}
              >
                <div className="details-img-section">
                  <img
                    className="image-size-detail-page"
                    src={require(`../images/All-prdt-images/${singleDataBasedOnId[0].pictures.pic1}`)}
                    alt="can't load"
                  />
                </div>
              </Grid>
              <Grid
                className="overflow-hide-image"
                size={{ sx: 12, sm: 6, md: 6, lg: 6 }}
              >
                <div className="details-img-section">
                  <img
                    className="image-size-detail-page"
                    src={require(`../images/All-prdt-images/${singleDataBasedOnId[0].pictures.pic2}`)}
                    alt="can't load"
                  />
                </div>
              </Grid>
 
            </Grid>
          </Grid>

          <Grid size={{ sx: 12, sm: 6, md: 6, lg: 6 }}  key={prdtIdFromLink.prdtId}>
            <div className="inside-desc-section">
              <Typography variant="h5" className="brandpricecolor">
                {singleDataBasedOnId[0].brand
                  ? singleDataBasedOnId[0].brand
                  : ""}{" "}
              </Typography>

              <Typography variant="body2">
                {singleDataBasedOnId[0].category.main_category
                  ? singleDataBasedOnId[0].category.main_category
                  : ""}{" "}
                {singleDataBasedOnId[0].category.third_category
                  ? singleDataBasedOnId[0].category.third_category
                  : ""}{" "}
              </Typography>
              <Typography variant="h6" className="brandpricecolor">
                {" "}
                ₹{" "}
                {singleDataBasedOnId[0].price
                  ? singleDataBasedOnId[0].price
                  : ""}{" "}
                <br></br>
              </Typography>
              <Typography className="taxincludedtext" variant="body2">
                inclusive of all taxes
              </Typography>

              <div className="car-btn-div" key={booleanPrdtInCart}>
                {booleanPrdtInCart ? (
                  <Button
                    onClick={fntoaddtocart}
                    className="btn-cart-color-disabled"
                    variant="contained"
                    endIcon={<ShoppingCartIcon />}
                    disabled
                  >
                    Add to Cart
                  </Button>
                ) : (
                  <Button
                    onClick={fntoaddtocart}
                    className="btn-cart-color"
                    variant="contained"
                    endIcon={<ShoppingCartIcon />}
                  >
                    Add to Cart
                  </Button>
                )}
                {booleanPrdtInCart ? (
                  <Typography className="already-added-msg" variant="body2">
                    {" "}
                    **added to cart
                  </Typography>
                ) : (
                  <Typography></Typography>
                )}
              </div>
              <Typography className="subHeadingsDescriptionSide" variant="h6">
                Product details
              </Typography>
              <Typography className="desc-para" variant="body2">
                {" "}
                {singleDataBasedOnId[0].description
                  ? singleDataBasedOnId[0].description
                  : ""}{" "}
              </Typography>

              <div className="highlts-terms-flex">
                <ul>
                  <Typography
                    className="subHeadingsDescriptionSide"
                    variant="h6"
                  >
                    Highlights{" "}
                  </Typography>
                  <li>Cash on delivery </li>
                  <li>30 days Replacement </li>
                  <li>Special offers for card holders </li>
                  <li>Nice product </li>

                  <li>Offer is applicable on select products and brands." </li>
                </ul>
                <ul>
                  <Typography
                    className="subHeadingsDescriptionSide"
                    variant="h6"
                  >
                    Terms and conditions{" "}
                  </Typography>
                  <li> Final Price is inclusive of the offer. </li>
                  <li>Offer is applicable on select products and brands." </li>
                  <li> Final Price is inclusive of the offer. </li>
                  <li>Offer is applicable on select products and brands." </li>
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <Grid container>
        <Grid size={{ sx: 12, sm: 12, md: 12, lg: 12 }}>
          <Multipledataslider />
        </Grid>
      </Grid>

      <Grid container>
        <Grid size={{ sx: 12, sm: 12, md: 12, lg: 12 }}>
          <FooterSingleElement />
        </Grid>
      </Grid>
    </>
  );
}

export default ProductDetails;
