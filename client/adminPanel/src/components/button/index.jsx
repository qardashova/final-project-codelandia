import Button from "@mui/material/Button";

const variants = ["text", "contained", "outlined"];

const CustomButton = ({ variant, children, onClick }) => {
  return (
    <Button variant={variant} onClick={onClick}>
      {children}
    </Button>
  );
};

export default CustomButton;
