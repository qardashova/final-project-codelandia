import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { sidebarItems } from "../../constants/sidebar-list";

const PageWrapper = ({ children }) => {
  const location = useLocation();

  return (
    <Box >
      <Typography variant="h3" component="h3">
        {sidebarItems.find((item) => item.pathName == location.pathname).title}
      </Typography>
      <Box marginTop={"20px"}>{children}</Box>
    </Box>
  );
};

export default PageWrapper;
