import TextField from "@mui/material/TextField";

const Input = ({ label, value, name, onChange }) => {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      size="small"
      value={value}
      name={name}
      onChange={onChange}
    />
  );
};

export default Input;
