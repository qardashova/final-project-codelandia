import { FormControl, Select as MuiSelect, MenuItem } from "@mui/material";
import React from "react";

const Select = ({ name, options = [], label, value, handleChange }) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <MuiSelect
        labelId="demo-select-small-label"
        id="demo-select-small"
        name={name}
        value={value}
        label={label}
        onChange={handleChange}
      >
        {options?.map((data: any) => (
          <MenuItem key={data.id} value={data.value}>
            {data.value}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
