import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { PAGE_LIMIT } from "../../constants/consts";

const Table = ({ rows, columns, currentPage = 1, handlePaginationChange, rowCount }) => {
  const onPaginationModelChange = (newModel) => {
    console.log(newModel, "Pagination change");
    // Call the handlePaginationChange passed from parent
    if (handlePaginationChange) {
      handlePaginationChange(newModel.page + 1); // Convert back to 1-based index
    }
  };

  return (
    <Paper sx={{ height: "70vh", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        paginationMode="server"
        paginationModel={{
          pageSize: PAGE_LIMIT,
          page: currentPage - 1, // Convert to zero-based index
        }}
        rowCount={rowCount}
        onPaginationModelChange={onPaginationModelChange}
        // checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
};

export default Table;
