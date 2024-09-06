import { FormControl, Select as MuiSelect, MenuItem, OutlinedInput, InputLabel } from "@mui/material";

const Select = ({ name, options = [], label, value, handleChange, fullData }) => {
  return (
    <FormControl style={{ width: "100%" }} size="small">
      <InputLabel id="demo-select-small-label">{label}</InputLabel> 
      <MuiSelect
        labelId="demo-select-small-label"
        id="demo-select-small"
        name={name}
        value={value}
        label={label}
        onChange={handleChange}
        fullWidth
      >
        {options?.map((item) => (
          <MenuItem key={item.id} value={fullData ? item : item.id}>
            {item.name}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
