import { Box, Slider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMinAndMaxPriceRangeByClient } from "../redux_toolkit/PriceSliderReducer";
import "./PriceSlider.css";

function PriceSlider(props) {
  let minMaxRateByUserStore = useSelector((state) => {
    return state.selectedPricerangeToReducer;
  });

  let { min_price_value = 0, max_price_value = 5000 } = props;
  let [valuesOnSliderMove, setValuesOnSliderMove] = useState([]);
 

  let [Price_value, setPrice_Value] = useState([
    min_price_value,
    max_price_value,
  ]);
  useEffect(() => {
    let userminvalue =
      minMaxRateByUserStore[0] !== undefined &&
      minMaxRateByUserStore[0] >= min_price_value
        ? minMaxRateByUserStore[0]
        : min_price_value;
    let usermaxvalue =
      minMaxRateByUserStore[1] !== undefined &&
      minMaxRateByUserStore[1] <= max_price_value
        ? minMaxRateByUserStore[1]
        : max_price_value;

    setPrice_Value([userminvalue, usermaxvalue]);
       
  }, [min_price_value, max_price_value]);

  const dipatchPriceRange = useDispatch();

  const change_price_range_fn = (event, newValue) => {
    setPrice_Value(newValue);
    dipatchPriceRange(
      updateMinAndMaxPriceRangeByClient({
        slidingValueinstantlyclient: newValue,
      })
    );
  };

  /* --------------- ---------------- ---------------------------- */

  /* --------------- ---------------- ---------------------------- */

  /* -------------------  data to show below slider (current value)  starts --------------- */
  useEffect(() => {
    let minimumValuePriceForLabel =
      minMaxRateByUserStore[0] !== undefined &&
      minMaxRateByUserStore[0] >= min_price_value
        ? minMaxRateByUserStore[0]
        : min_price_value;
    let maximumValuePriceForLabel =
      minMaxRateByUserStore[1] !== undefined &&
      minMaxRateByUserStore[1] <= max_price_value
        ? minMaxRateByUserStore[1]
        : max_price_value;

    setValuesOnSliderMove(() => {
      return [
        {
          value: min_price_value,
          label: `₹ ${min_price_value}`,
        },
        {
          value: minimumValuePriceForLabel,
          label: `₹ ${minimumValuePriceForLabel}`,
        },
        {
          value: maximumValuePriceForLabel,
          label: `₹ ${maximumValuePriceForLabel} `,
        },
        {
          value: max_price_value,
          label: `₹ ${max_price_value}`,
        },
      ];
    });

    return () => {};
  }, [min_price_value, max_price_value, minMaxRateByUserStore, Price_value]);

  /* -------------------  data to show below slider ends (current value) ------------------  */

  return (
    <div>
      <Box sx={{ width: 300 }}>
        <Typography id="input-slider" gutterBottom>
          Price
        </Typography>
        <Slider
          getAriaLabel={() => "Price range"}
          value={Price_value}
          min={Number(min_price_value)}
          max={Number(max_price_value)}
          onChange={change_price_range_fn}
          // shiftStep={20}
          marks={valuesOnSliderMove}
          //valueLabelDisplay="auto"
          // getAriaValueText={valuetext}
        />
      </Box>
    </div>
  );
}

export default PriceSlider;
