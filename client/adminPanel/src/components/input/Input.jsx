import TextField from "@mui/material/TextField";

const Input = ({ label, value, name, onChange,type }) => {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      size="small"
      value={value}
      name={name}
      onChange={onChange}
      fullWidth
      type={type}
    />
  );
};

export default Input;
