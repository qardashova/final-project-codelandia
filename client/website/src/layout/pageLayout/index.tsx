import { Grid2 } from "@mui/material";
import "./style.scss";
import FilterItems from "src/containers/filterItems";
const PageLayout = () => {
  return (
    <div className="page-container">
      <div className="main-container">
        <div className="breadcrumbs">Breadcrumbs</div>
        <Grid2 container spacing={3} sx={{ marginTop: "60px" }}>
          <Grid2 size={2}>
            <FilterItems title="Categories" />
          </Grid2>
          <Grid2 size={10}>Item2</Grid2>
        </Grid2>
      </div>
    </div>
  );
};

export default PageLayout;
