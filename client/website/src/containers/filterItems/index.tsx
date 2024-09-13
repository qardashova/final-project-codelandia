import { Typography } from "@mui/material";
import { FC } from "react";
import './style.scss';

interface FilterItems {
  title: string;
}

const FilterItems: FC<FilterItems> = ({ title }) => {
  return (
    <div className="filterItems">
      <Typography variant="h4" component="h3">
        {title}
      </Typography>
      <div className="filterItem">
        <p>Item123</p>
      </div>      <div className="filterItem">
        <p>Item123</p>
      </div>
    </div>
  );
};

export default FilterItems;
