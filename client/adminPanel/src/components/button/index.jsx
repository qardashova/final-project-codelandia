import Button from "@mui/material/Button";

const variants = ["text", "contained", "outlined"];

const CustomButton = ({ variant, children, onClick, fullWidth }) => {
  return (
    <Button variant={variant} onClick={onClick} fullWidth={fullWidth}>
      {children}
    </Button>
  );
};

export default CustomButton;
