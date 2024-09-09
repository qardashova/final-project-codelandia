import TextField from "@mui/material/TextField";

const Input = ({ label, value, name, onChange, type, rows, multiline }) => {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      size="small"
      rows={rows}
      value={value}
      multiline={multiline}
      name={name}
      onChange={onChange}
      fullWidth
      type={type}
    />
  );
};

export default Input;
