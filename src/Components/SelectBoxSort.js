import { Box, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { FormControl } from "react-bootstrap";

function SelectBoxSort() {
  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-autowidth-label">Price</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            autoWidth
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={21}>Twenty one</MenuItem>
            <MenuItem value={22}>Twenty one and a half</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default SelectBoxSort;
