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
import { useEffect, useState } from "react";
import {
  deleteBlog,
  getAllBlogs,
  getBlogById,
} from "../../../redux/actions/blogActions";
import { PAGE_LIMIT } from "../../../constants/consts";

const Blogs = () => {
  const [searchKey, setSearchKey] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { popups, blogs, totalCount } = useAppSelector((state) => state.blog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      getAllBlogs({
        search: searchKey,
        limit: PAGE_LIMIT,
        page: currentPage,
      })
    );
  }, [searchKey, currentPage]);

  return (
    <>
      <Row justifyContent="space-between">
        <Row gap={"10px"}>
          <Input
            label={"search"}
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
          />
          {/* <CustomButton variant={"outlined"}>Filter</CustomButton> */}
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
  { field: "name", headerName: "Blog title", flex: 1 },
  { field: "username", headerName: "Created By", flex: 1  },
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  // },
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
            onClick={() => dispatch(getBlogById(params.id))}
          >
            <EditOutlinedIcon />
          </CustomButton>
          <CustomButton
            variant="text"
            onClick={() => dispatch(deleteBlog(params.id))}
          >
            <DeleteOutlineOutlinedIcon />
          </CustomButton>
        </div>
      );
    },
  },
];
