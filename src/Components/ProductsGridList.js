import { Grid, Pagination, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./ProductsGridList.css";
import { NavLink, useSearchParams } from "react-router";

import Brandlist from "./Brandlist";
import { useSelector } from "react-redux";
import SelectBoxSort from "./SelectBoxSort";
function ProductsGridList(props) {
  const { data, menumain, menutwo } = props;

  let [datamapfnToHtml, setDatamapfnToHtml] = useState();
  let [paginationCount, setPaginationCount] = useState(1);
  let [countofdatatoshow, setCountofdatatoshow] = useState(0);
  let [itemsShowingFrom, setItemsShowingFrom] = useState(0);
  let [itemsShowingTo, setItemsShowingTo] = useState(15);

  let [pagenosearchparams, setPagenosearchparams] = useSearchParams();
  const fntosetpaginationparams = (event, value) => {
    setPagenosearchparams({ page_no: value });
  };

  let currentpagenumber = pagenosearchparams.get("page_no");
  useEffect(() => {
    let datamaptoupdate = data
      .map((item, index, array) => {
        var image_path = "";
        
         
          if (item.hasOwnProperty('pictures')) {
             let imagetoinsert = item.pictures.pic1;
            image_path = require(`../images/All-prdt-images/${imagetoinsert}`);
          }
        

        return (
          <Grid
            className="product-each-row-margin flex-product-item each-product-div-prdt-list-page"
            size={{ sx: 12, sm: 6, md: 4, lg: 4 }}
            key={index}
          >
            <NavLink to={`/Product-details/${item.id}`}>
              {" "}
              <div key={array}>
                <img className="image-size" src={image_path} alt="can't load" />

                <Typography className="item-list-brand" variant="body1">
                  {item.brand}
                </Typography>

                <Typography
                  className="item-list-price"
                  variant="body2"
                >{`₹ ${item.price}`}</Typography>
              </div>
            </NavLink>
          </Grid>
        );
      })
      .filter((item, index) => {
        let indexminvalue;
        let indexmaxvalue;
        if (
          currentpagenumber === null ||
          currentpagenumber === undefined ||
          currentpagenumber === 1
        ) {
          indexminvalue = 0;

          indexmaxvalue = 15;
        } else {
          indexmaxvalue = currentpagenumber * 15;
          indexminvalue = indexmaxvalue - 15;
        }

        return index >= indexminvalue && index < indexmaxvalue;
      });
    setDatamapfnToHtml(() => {
      return datamaptoupdate;
    });
    let localcountofatatoshow = data.length;
    setCountofdatatoshow(localcountofatatoshow);
  }, [data, pagenosearchparams, Brandlist]);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pagenosearchparams]);

  /* --------------------- UseEffect for pagination --------------------------  */
  useEffect(() => {
    if (data.length !== 0) {
      let prdtCountByPerPage = data.length / 15;
      let prdtCountByPerPageRoundedValue = Math.ceil(prdtCountByPerPage);

      setPaginationCount(() => {
        return prdtCountByPerPageRoundedValue;
      });
    }
    setPagenosearchparams(() => {
      return 1;
    });
  }, [data]);
  /* --------------------- UseEffect for pagination --------------------------  */
  /* -----------------   Showing items from and to -----------------*/

  useEffect(() => {
    if (data.length === 0) {
      setItemsShowingFrom(() => {
        return 0;
      });

      setItemsShowingTo(() => {
        return 0;
      });
    }

    if (
      data.length !== 0 &&
      (currentpagenumber === 1 || currentpagenumber === null)
    ) {
      setItemsShowingFrom(() => {
        return 1;
      });
      if (data.length > 15) {
        setItemsShowingTo(() => {
          return 15;
        });
      } else {
        setItemsShowingTo(() => {
          return data.length;
        });
      }
    }
    if (
      data.length !== 0 &&
      currentpagenumber !== 1 &&
      currentpagenumber !== null
    ) {
      setItemsShowingFrom(() => {
        return currentpagenumber * 15 - 14;
      });

      let countlengthtofindboundary = currentpagenumber * 15;
      if (data.length > countlengthtofindboundary) {
        setItemsShowingTo(() => {
          return currentpagenumber * 15;
        });
      } else {
        setItemsShowingTo(() => {
          return data.length;
        });
      }
    }
  }, [data, currentpagenumber]);

  /* -----------------   Showing items from and to ----------------- */

  return (
    <div>
      <Grid className="product-starting-margin">
        {" "}
        <span className="prop-for-available-text">Available : </span>
        <span className="prop-for-available-count">
          {countofdatatoshow} Items,
        </span>
        <span className="prop-showing-from-text">Showing Items: </span>
        <span className="prop-for-available-count">
          {itemsShowingFrom} - {itemsShowingTo}
        </span>
      </Grid>
      <Grid key={datamapfnToHtml} container>
        {datamapfnToHtml ? datamapfnToHtml : "sorry no Products found"}
      </Grid>
      <Grid>
        <div className="pagination-position">
          {paginationCount > 1 ? (
            <Pagination
              onChange={fntosetpaginationparams}
              count={paginationCount}
              color="secondary"
            />
          ) : (
            ""
          )}
        </div>
      </Grid>
    </div>
  );
}

export default ProductsGridList;
