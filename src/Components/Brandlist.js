import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./Brandlist.css";
import DialogBoxBrand from "./DialogBoxBrand";
import { useDispatch, useSelector } from "react-redux";
import { updateNewBrandToFilter } from "../redux_toolkit/BrandSelectedReducer";

function Brandlist(props) {
  /* ==== ==== Dispatch store ===== */
  const brandFilterActionDispatch = useDispatch();
  const fnToDispatchBrandFilter = (e) => {
    //console.log(e.target.checked,"event checkbox");

    brandFilterActionDispatch(
      updateNewBrandToFilter({
        boxChecked: e.target.checked,
        boxValue: e.target.value,
      })
    );
  };

  /* ==== ==== Dispatch store ===== */

  /* ==================== user checked brands to filter useSelector start     ===================== */

  const brandFilterStoreUseSelectoronlybrand = useSelector((state) => {
    return state.selectedBrandstoFilterList;
  });

  /*console.log(
    brandFilterStoreUseSelectoronlybrand,
    "brandFilterStoreUseSelectoronlybrand"
  );*/

  /* ==================== user checked brands to filter useSelector End       ===================== */

  /* ============== For dialog box ================== */

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  /* ============== For dialog box ================== */

  let [brand_check_html, setBrand_check_html] = useState();
  let { brands_list } = props;
  // console.log(brands_list, "brand list");
  useEffect(() => {
    let brand_check_html_to_set = brands_list.map((item, index, array) => {
      // console.log(item, "item");
      if (index < 4) {
        return index < 3 ? (
          <FormControlLabel
            control={
              brandFilterStoreUseSelectoronlybrand.indexOf(item) !== -1 ? (
                <Checkbox
                  value={item}
                  onClick={fnToDispatchBrandFilter}
                  checked={true}
                />
              ) : (
                <Checkbox
                  value={item}
                  onClick={fnToDispatchBrandFilter}
                  checked={false}
                />
              )
            }
            label={item}
            key={index}
          />
        ) : (
          <Button
            className="see_more_btn"
            variant="text"
            onClick={handleClickOpen}
            key={index + 10}
          >
            see more
          </Button>
        );
      }
    });
    //console.log(brand_check_html_to_set, "checking set value");

    setBrand_check_html(brand_check_html_to_set);
  }, [brands_list, brandFilterStoreUseSelectoronlybrand]);
  return (
    <div>
      <div className="brand-chip-margin">
        <DialogBoxBrand
          key={brand_check_html}
          brandNames={brands_list}
          open={open}
          onClose={handleClose}
        />
      </div>
      <div key={brands_list}>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Brands</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <div className="listflex">
                {brand_check_html ? brand_check_html : "hello"}
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default Brandlist;
