import { Box } from "@mui/material";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";
import PageWrapper from "../containers/pageWrapper/PageWrapper";
import Row from "../components/row";

const InnerLayout = () => {
  return (
    <Row>
      <Box>
        <Sidebar />
      </Box>
      <Box width={"100%"} padding={"10px 20px"}>
        <PageWrapper>
          <Outlet />
        </PageWrapper>
      </Box>
    </Row>
  );
};

export default InnerLayout;
