import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { FormControl, InputLabel } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const MultiSelect = ({ name, options = [], label, value, handleChange }) => {
  return (
    <>
      <FormControl style={{ width: "100%" }}>
        <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          name={name}
          value={value || []}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
          renderValue={(selected) => {
            return options
              .filter((option) => selected.includes(option.id))
              .map((option) => option.name)
              .join(", ");
          }}
          MenuProps={MenuProps}
          size="small"
          fullWidth
        >
          {options.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              <Checkbox checked={value?.indexOf(item.id) > -1} />
              <ListItemText primary={item.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default MultiSelect;
