import { useState } from "react";
import Row from "../../../components/row";
import Input from "../../../components/input/Input";
import { Box } from "@mui/material";
import Table from "../../../components/table";
import CustomButton from "../../../components/button";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { handleOpenPopup } from "../../../redux/reducers/faqReducer";
import AddFAQ from "./popup/AddFAQ";

const FAQ = () => {
  const [searchKey, setSearchKey] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { FAQs, totalCount, popups } = useAppSelector((state) => state.faq);
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
          {/* <CustomButton variant={"outlined"}>Filter</CustomButton> */}
        </Row>
        <CustomButton
          variant={"contained"}
          onClick={() => dispatch(handleOpenPopup("addFAQpopup"))}
        >
          New FAQ
        </CustomButton>
      </Row>
      <Box marginTop={"20px"}>
        <Table
          rows={FAQs}
          columns={columns}
          currentPage={currentPage}
          rowCount={totalCount}
          handlePaginationChange={(page) => setCurrentPage(page)}
        />
      </Box>
      <AddFAQ
        open={popups.addFAQpopup}
        handleClose={() => dispatch(handleOpenPopup("addFAQpopup"))}
      />
    </>
  );
};

export default FAQ;

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
