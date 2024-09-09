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
          // onClick={() => handleDelete(params.row)}
        >
          <DeleteOutlineOutlinedIcon />
        </CustomButton>
      </div>
    ),
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const Blogs = () => {
  const { popups } = useAppSelector((state) => state.blog);
  const dispatch = useAppDispatch();

  return (
    <>
      <Row justifyContent="space-between">
        <Row gap={"10px"}>
          <Input label={"search"} />
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
        <Table rows={rows} columns={columns} />
      </Box>
      <CreateBlog
        open={popups.addBlogPopup}
        handleClose={() => dispatch(handleOpenPopup("addBlogPopup"))}
      />
    </>
  );
};

export default Blogs;
