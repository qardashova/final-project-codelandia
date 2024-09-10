import { Box } from "@mui/material";
import Row from "../../../components/row";
import Input from "../../../components/input/Input";
import CustomButton from "../../../components/button";
import Table from "../../../components/table";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CreateBlog from "./popup/CreateBlog";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { handleOpenPopup } from "../../../redux/reducers/blogReducer";
import { useState } from "react";



const Blogs = () => {
  const [searchKey, setSearchKey] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { popups, blogs, totalCount } = useAppSelector((state) => state.blog);
  const dispatch = useAppDispatch();

  return (
    <>
      <Row justifyContent="space-between">
        <Row gap={"10px"}>
          <Input
            label={"search"}
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
          />
          <CustomButton variant={"outlined"}>Filter</CustomButton>
        </Row>
        <CustomButton
          variant={"contained"}
          onClick={() => dispatch(handleOpenPopup("addBlogPopup"))}
        >
          New Blog
        </CustomButton>
      </Row>
      <Box marginTop={"20px"}>
        <Table
          rows={blogs}
          columns={columns}
          currentPage={currentPage}
          rowCount={totalCount}
          handlePaginationChange={(page) => setCurrentPage(page)}
        />
      </Box>
      <CreateBlog
        open={popups.addBlogPopup}
        handleClose={() => dispatch(handleOpenPopup("addBlogPopup"))}
      />
    </>
  );
};

export default Blogs;

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    sortable: false,
    filterable: false,
    align: "right",
    renderCell: (params) => (
      <div>
        <CustomButton
          variant="text"
          // onClick={() => handleEdit(params.row)}
        >
          <EditOutlinedIcon />
        </CustomButton>
        <CustomButton
          variant="text"
          // onClick={() => handleDelete(params.row)}
        >
          <DeleteOutlineOutlinedIcon />
        </CustomButton>
      </div>
    ),
  },
];