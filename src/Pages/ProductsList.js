import { Chip, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../Data/Products";
import Products from "../Data/Products";

import { useDispatch, useSelector } from "react-redux";
import {
  removeallbrandsonmenuchange,
  updateNewBrandToFilter,
} from "../redux_toolkit/BrandSelectedReducer";
import PriceSlider from "../Components/PriceSlider";
import Brandlist from "../Components/Brandlist";
import ProductsGridList from "../Components/ProductsGridList";
import Footer from "../Components/Footer";
import "./ProductList.css";

import { useParams } from "react-router";
import { updateMinAndMaxPriceRangeByClient } from "../redux_toolkit/PriceSliderReducer";
function ProductsList() {
  //const [filterbrand, setFilterbrand] = useState([]);
  //const [products,setProducts] = useState([{}])
  const products = Products; // prodocts from json file
  const [price_min_value, setPrice_min_value] = useState(0);
  const [price_max_value, setPrice_max_value] = useState(1000);
  const [removechiponpricechange, setRemovechiponpricechange] = useState();
  const [uniqueBrandsToSideMenu, setUniqueBrandsToSideMenu] = useState([]);

  let [keyforprice, setKeyforprice] = useState();

  let nav_menu_params = useParams();
  let main_category_params = nav_menu_params.m_id;
  let second_category_params = nav_menu_params.s_id;

  const filter1_catagory = main_category_params.toLowerCase();
  const filter2_catagory = second_category_params.toLowerCase();

  //console.log(products);
  const [byMenuproductsNoChange, setByMenuproductsNoChange] = useState([{}]);
  const [productsToDisplayAfterFilter, setProductsToDisplayAfterFilter] =
    useState([{}]);

  /* ---------------------------- Empty filter on menu change starts ------------- */
  let dispatchtopricefilter = useDispatch();
  useEffect(() => {
    dispatchtopricefilter(
      updateMinAndMaxPriceRangeByClient({
        slidingValueinstantlyclient: [undefined, undefined],
      })
    );
  }, [filter1_catagory, filter2_catagory]);

  let dispatchtobrandfilter = useDispatch();
  useEffect(() => {
    dispatchtobrandfilter(removeallbrandsonmenuchange());
  }, [filter1_catagory, filter2_catagory]);

  /* ---------------------------- Empty filter on menu change  ends------------- */

  useEffect(() => {
    if (filter1_catagory !== "") {
      let maincata1 = products.filter((item, index) => {
        return (
          item.category.main_category.toLocaleLowerCase() === filter1_catagory
        );
      });
      if (filter2_catagory !== "all") {
        if (
          filter2_catagory === "top" ||
          filter2_catagory === "bottom" ||
          filter2_catagory === "kitchen"
        ) {
          maincata1 = maincata1.filter((item, index) => {
            return (
              item.category.second_category.toLowerCase() === filter2_catagory
            );
          });
        } else {
          maincata1 = maincata1.filter((item, index) => {
            return (
              item.category.third_category.toLowerCase() === filter2_catagory
            );
          });
        }
      }

      console.log(maincata1);

      setByMenuproductsNoChange(maincata1);
      // setProductsToDisplayAfterFilter(maincata1);
    }
    setProductsToDisplayAfterFilter(byMenuproductsNoChange);
  }, [main_category_params, second_category_params]);

  useEffect(() => {
    /*---------------------------------- Brands to array start ---------------------------------- */

    function removeRepeatedArrayElements(value, index, array) {
      return array.indexOf(value) === index;
    }

    let toSetuniqueBrandsToSideMenu = byMenuproductsNoChange
      .map((item, index) => {
        return item.brand;
      })
      .filter(removeRepeatedArrayElements);
    setUniqueBrandsToSideMenu(toSetuniqueBrandsToSideMenu);

    let brandsFilteredToUniqueSorted = toSetuniqueBrandsToSideMenu.toSorted();

    /* ----------------------------------  Brands to array End  ----------------------------- */
  }, [byMenuproductsNoChange]);

  /* ---------------------------------- customer filter products  ---------------------------------- */

  const brandOptByUserStoreLstpge = useSelector((state) => {
    return state.selectedBrandstoFilterList;
  });

  const minMaxRateByUserStoreLstpge = useSelector((state) => {
    return state.selectedPricerangeToReducer;
  });

  /* -------------------- customer filter products  -------------------------------- */

  /* --------------------- deletable brand at top start (chip) --------------------    */

  const brandFilterchipdeleteDispatch = useDispatch();
  const fnToDispatchBrandFilter = (item) => () => {
    brandFilterchipdeleteDispatch(
      updateNewBrandToFilter({
        boxChecked: false,
        boxValue: item,
      })
    );
  };

  /* ------------------------- deletable brand at top end (chip) ------------------------    */

  /* --  useeffect to get full data array after price and brand filter starts ---------------- */

  useEffect(() => {
    if (brandOptByUserStoreLstpge[0] === undefined) {
      let brandfilteruserclickedvalues = [...byMenuproductsNoChange];
      setProductsToDisplayAfterFilter(brandfilteruserclickedvalues);
    }
    if (
      brandOptByUserStoreLstpge[0] !== undefined ||
      minMaxRateByUserStoreLstpge[0] !== undefined
    ) {
      let brandfilteruserclickedvalues = [...byMenuproductsNoChange];

      if (brandOptByUserStoreLstpge[0] !== undefined) {
        brandfilteruserclickedvalues = byMenuproductsNoChange.filter(
          (prdtfulldata) => {
            return brandOptByUserStoreLstpge.includes(prdtfulldata.brand);
          }
        );
      }

     
      

      if (minMaxRateByUserStoreLstpge[0] !== undefined) {
        brandfilteruserclickedvalues = brandfilteruserclickedvalues.filter(
          (prdtdata) => {
            return (
              prdtdata.price >= minMaxRateByUserStoreLstpge[0] &&
              prdtdata.price <= minMaxRateByUserStoreLstpge[1]
            );
          }
        );
      }

      setProductsToDisplayAfterFilter(brandfilteruserclickedvalues);
    }
  }, [
    brandOptByUserStoreLstpge,
    minMaxRateByUserStoreLstpge,
    byMenuproductsNoChange,
  ]);
  /*  ------------useeffect to get full data array after price and brand filter Ends  -----------*/

  /* -------------- UseEffect for brand list after price adjust  starts ---------------------------- */

  useEffect(() => {
    function removeRepeatedArrayElements(value, index, array) {
      return array.indexOf(value) === index;
    }

    if (minMaxRateByUserStoreLstpge[0] !== undefined) {
      let brandsUiqueAfterPriceSelected = byMenuproductsNoChange
        .filter((item, index) => {
          return (
            item.price >= minMaxRateByUserStoreLstpge[0] &&
            item.price <= minMaxRateByUserStoreLstpge[1]
          );
        })
        .map((afterfilteritems) => {
          return afterfilteritems.brand;
        })
        .filter(removeRepeatedArrayElements);

      setUniqueBrandsToSideMenu(brandsUiqueAfterPriceSelected);
    }
  }, [productsToDisplayAfterFilter]);

  /* ----------  UseEffect for brand list after price adjust End            --------------- */

  /* ----------  change chip brand and side option diffrence if price changed -------------- */

  useEffect(() => {
    let removechiponpricechangeLocal = brandOptByUserStoreLstpge.filter(
      (element) => {
        return !uniqueBrandsToSideMenu.includes(element);
      }
    );
    setRemovechiponpricechange(removechiponpricechangeLocal);
  }, [productsToDisplayAfterFilter, uniqueBrandsToSideMenu]);

  /* -----  change chip brand and side option diffrence if price changed     ---------------- */

  /* -----  UseEffect for price list after brand adjust starts               ----------------- */

  useEffect(() => {
    function removeRepeatedArrayElements(value, index, array) {
      return array.indexOf(value) === index;
    }

    if (brandOptByUserStoreLstpge[0] !== undefined) {
      let priceUiqueAfterBrandSelected = byMenuproductsNoChange
        .filter((item, index) => {
          return brandOptByUserStoreLstpge.includes(item.brand);
        })
        .map((afterfilteritems) => {
          return afterfilteritems.price;
        })
        .filter(removeRepeatedArrayElements);

      setPrice_min_value(Math.min(...priceUiqueAfterBrandSelected));
      setPrice_max_value(Math.max(...priceUiqueAfterBrandSelected));
    }
    if (brandOptByUserStoreLstpge[0] === undefined) {
      let priceUniqueValueForDisplayPrice = byMenuproductsNoChange
        .map((item, index) => {
          return item.price;
        })
        .filter(removeRepeatedArrayElements);

      setPrice_min_value(Math.min(...priceUniqueValueForDisplayPrice));
      setPrice_max_value(Math.max(...priceUniqueValueForDisplayPrice));
      setKeyforprice(() => {
        return priceUniqueValueForDisplayPrice;
      });
    }
  }, [productsToDisplayAfterFilter]);

  /* ------ UseEffect for price list after brand adjust starts End ----------------- */

  return (
    <div>
      <div>
        <Grid container>
          <Grid
            className="price-brand-col-prop"
            size={{ sx: 12, md: 3, lg: 3 }}
          >
            <Grid size={{ sx: 12, md: 12, lg: 12 }}>
              <div>
                <PriceSlider
                  key={price_min_value + price_max_value}
                  min_price_value={price_min_value}
                  max_price_value={price_max_value}
                />
              </div>
            </Grid>

            <Grid size={{ sx: 12, md: 12, lg: 12 }}>
              <div>
                <Brandlist
                  key={uniqueBrandsToSideMenu}
                  brands_list={uniqueBrandsToSideMenu}
                />
              </div>
            </Grid>
          </Grid>

          <Grid
            className="prdt-list-section-col"
            size={{ sx: 12, md: 9, lg: 9 }}
          >
            <Grid size={{ sx: 12, md: 12, lg: 12 }}>
              <div>
                <div>
                  {brandOptByUserStoreLstpge.map((item, index, array) => {
                    return removechiponpricechange?.includes(item) ? null : (
                      <Chip
                        className="chip-brand-product-page"
                        key={item}
                        label={item}
                        onClick={fnToDispatchBrandFilter(item)}
                        onDelete={fnToDispatchBrandFilter(item)}
                      />
                    );
                  })}
                </div>
                <ProductsGridList
                  key={productsToDisplayAfterFilter}
                  data={productsToDisplayAfterFilter}
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Footer />
      </div>
    </div>
  );
}

export default ProductsList;
