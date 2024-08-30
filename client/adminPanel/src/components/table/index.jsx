import { Paper } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';

const Table = ({ rows, columns }) => {
  return (
    <Paper sx={{ height: "70vh", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        // initialState={{ pagination: { paginationModel } }} 
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
};

export default Table;
