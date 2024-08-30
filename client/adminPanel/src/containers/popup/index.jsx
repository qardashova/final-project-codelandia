import { Box, Dialog, Typography } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Row from "../../components/row";
import CustomButton from "../../components/button";

const Popup = ({
  popupTitle,
  minWidth = "300px",
  children,
  defaultButtons = true,
  mainButtonTitle,
  onClickMainButton,
  secondButtonTitle,
  onClickSecondButton,
  thirdButtonTitle,
  onClickThirdButton,
  open = false,
  handleClose,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      className="popUp"
      sx={{
        ".MuiDialog-paper": {
          minWidth: minWidth,
        },
      }}
    >
      <Row
        padding="16px 24px"
        justifyContent="space-between"
        style={{ background: "#F8F8F8" }}
      >
        <Typography variant="h3" component="h3" padding={"10px 0"}>
          {popupTitle}
        </Typography>
        <CustomButton onClick={handleClose}>
          <CloseOutlinedIcon />
        </CustomButton>
      </Row>
      <Box padding={defaultButtons ? "16px 24px" : ""} className="popupRoot">
        {children}
      </Box>
      {defaultButtons && (
        <Row
          justifyContent="flex-end"
          gap={"16px"}
          padding="16px 24px"
          style={{ background: "#F8F8F8" }}
        >
          <CustomButton onClick={onClickSecondButton}>
            {secondButtonTitle}
          </CustomButton>
          <CustomButton onClick={onClickMainButton}>
            {mainButtonTitle}
          </CustomButton>
          {!!thirdButtonTitle && (
            <CustomButton onClick={onClickThirdButton}>
              {thirdButtonTitle}
            </CustomButton>
          )}
        </Row>
      )}
    </Dialog>
  );
};

export default Popup;
