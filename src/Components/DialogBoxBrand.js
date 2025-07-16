import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Checkbox, FormControlLabel } from "@mui/material";
import { updateNewBrandToFilter } from "../redux_toolkit/BrandSelectedReducer";
import { useDispatch, useSelector } from "react-redux";
import "./DialogBoxBrand.css";
function DialogBoxBrand(props) {
  // console.log(props, "props");

  /* =====    dialogue box functions and variables ========= */
  const { brandNames, open, onClose } = props;
  // console.log(brandNames, "brand names as props");

  const brandFilterStoreUseSelectorDialog = useSelector((state) => {
    return state.selectedBrandstoFilterList;
  });
  //console.log(brandFilterStoreUseSelectorDialog, "this is from dialog box");

  const handleClose = () => {
    onClose();
  };

  /* =====    dialogue box functions and variables ========= */

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

  const [all_brands_to_list_dialog, setAll_brands_to_list_dialog] =
    React.useState();

  /* ===== useeffect for list elements ======== */

  /* ===== useeffect for list elements ======== */

  return (
    <div>
      <div>
        <Dialog open={open} key={12}>
          <DialogTitle className="heading-select-brand" id="alert-dialog-title">
            {"Select Brand"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              id="alert-dialog-description"
              className="show-multiple-column-brand-popup"
            >
              {brandNames.map((item, index, array) => {
                // console.log(item, "item");

                return (
                  <FormControlLabel
                    className="each-brand-position"
                    control={
                      brandFilterStoreUseSelectorDialog.indexOf(item) !== -1 ? (
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
                  />
                );
              })}
            </DialogContentText>
          </DialogContent>
          <DialogActions className="close-btn-border">
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default DialogBoxBrand;
