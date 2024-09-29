import { Box } from "@mui/material";
import Row from "../../../components/row";
import Input from "../../../components/input/Input";
import CustomButton from "../../../components/button";
import Table from "../../../components/table";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { handleOpenPopup } from "../../../redux/reducers/productReducer";
import AddProductPopup from "./popup/AddProductPopup";
import { useEffect, useState } from "react";
import FilterPopup from "./popup/FilterPopup";
import {
  deleteProduct,
  getAllProducts,
} from "../../../redux/actions/productActions";
import { PAGE_LIMIT } from "../../../constants/consts";

const Products = () => {
  const [searchKey, setSearchKey] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filterData, setFilterData] = useState(null);
  const dispatch = useAppDispatch();
  const { popups, products, totalCount } = useAppSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(
      getAllProducts({
        ...filterData,
        search: searchKey,
        limit: PAGE_LIMIT,
        page: currentPage,
      })
    );
  }, [searchKey, currentPage, filterData]);

  return (
    <>
      <Row justifyContent="space-between">
        <Row gap={"10px"}>
          <Input
            label={"search"}
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
          />
          <CustomButton
            variant={"outlined"}
            onClick={() => dispatch(handleOpenPopup("filterPopup"))}
          >
            Filter
          </CustomButton>
        </Row>
        <CustomButton
          variant={"contained"}
          onClick={() => dispatch(handleOpenPopup("addProductPopup"))}
        >
          New Product
        </CustomButton>
      </Row>
      <Box marginTop={"20px"}>
        <Table
          rows={products}
          columns={columns}
          currentPage={currentPage}
          rowCount={totalCount}
          handlePaginationChange={(page) => setCurrentPage(page)}
        />
      </Box>
      <AddProductPopup
        open={popups.addProductPopup}
        handleClose={() => dispatch(handleOpenPopup("addProductPopup"))}
      />
      <FilterPopup
        open={popups.filterPopup}
        handleClose={() => dispatch(handleOpenPopup("filterPopup"))}
        setFilterData={setFilterData}
      />
    </>
  );
};

export default Products;

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Product Name", flex: 1 },
  { field: "category", headerName: "Category", flex: 1 },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    sortable: false,
    filterable: false,
    align: "right",
    renderCell: (params) => {
      const dispatch = useAppDispatch();
      return (
        <div>
          <CustomButton
            variant="text"
            onClick={() => dispatch(deleteProduct(params.id))}
          >
            <DeleteOutlineOutlinedIcon />
          </CustomButton>
        </div>
      );
    },
  },
];
