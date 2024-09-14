import { Box } from "@mui/material";
import Row from "../../../components/row";
import Input from "../../../components/input/Input";
import CustomButton from "../../../components/button";
import Table from "../../../components/table";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddUser from "./popup/AddUser";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { handleOpenPopup } from "../../../redux/reducers/userReducer";
import { useEffect, useState } from "react";
import { deleteUser, getAllUsers } from "../../../redux/actions/userActions";
import { PAGE_LIMIT } from "../../../constants/consts";


const Users = () => {
  const [searchKey, setSearchKey] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { popups, users, totalCount } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      getAllUsers({
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
          onClick={() => dispatch(handleOpenPopup("addUserPopup"))}
        >
          New User
        </CustomButton>
      </Row>
      <Box marginTop={"20px"}>
        <Table
          rows={users}
          columns={columns}
          currentPage={currentPage}
          rowCount={totalCount}
          handlePaginationChange={(page) => setCurrentPage(page)}
        />
      </Box>
      <AddUser
        open={popups.addUserPopup}
        handleClose={() => dispatch(handleOpenPopup("addUserPopup"))}
      />
    </>
  );
};

export default Users;


const columns = [
  { field: "id", headerName: "ID" },
  { field: "username", headerName: "User Name", width: 200 },
  { field: "fullname", headerName: "Full Name", width: 300 },
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
            onClick={() => dispatch(deleteUser(params.id))}
          >
            <DeleteOutlineOutlinedIcon />
          </CustomButton>
        </div>
      );
    },
  },
];