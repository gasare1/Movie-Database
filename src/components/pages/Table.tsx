import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Card, TextField } from "@mui/material";

import { boxAllTime } from "../Common/ApiFetch";
import { Container } from "@mui/system";

// const columns: GridColDef[] = [
//   { field: "id", headerName: "ID", width: 160 },
//   { field: "rank", headerName: "Rank", width: 160 },
//   { field: "title", headerName: "Title", width: 160 },
//   {
//     field: "worldwideLifetimeGross",
//     headerName: "WorldWideLifetimeGross",
//     type: "number",
//     width: 200,
//   },
//   {
//     field: "domesticLifetimeGross",
//     headerName: "DomesticLifetimeGross",
//     type: "number",
//     width: 200,
//   },
//   {
//     field: "year",
//     headerName: "Year",
//     type: "number",
//     width: 160,
//   },
//   {
//     field: "foreign",
//     headerName: "Foreign",
//     type: "number",
//     width: 160,
//   },
// ];

export default function DataTable(props: any) {
  const [searchText, setSearchText] = React.useState("");

  const [tableData, setTableData] = React.useState<any[]>([]);
  const [Data, setData] = React.useState<any[]>([]);
  const [columns] = React.useState<any[]>([
    { field: "id", headerName: "ID", width: 160 },
    { field: "rank", headerName: "Rank", width: 160 },
    { field: "title", headerName: "Title", width: 160 },
    {
      field: "worldwideLifetimeGross",
      headerName: "WorldWideLifetimeGross",
      type: "number",
      width: 200,
    },
    {
      field: "domesticLifetimeGross",
      headerName: "DomesticLifetimeGross",
      type: "number",
      width: 200,
    },
    {
      field: "year",
      headerName: "Year",
      type: "number",
      width: 160,
    },
    {
      field: "foreign",
      headerName: "Foreign",
      type: "number",
      width: 160,
    },
  ]);

  const handleClick = () => {
    boxAllTime().then(function (response) {
      setTableData(response?.data.items);
      console.log(tableData, "____________", response?.data.items);
    });
  };

  const arraySearch = (array: any, keyword: any) => {
    const searchTerm = keyword.toLowerCase();
    return array.filter((value: any) => {
      return (
        value.id.toLowerCase().match(new RegExp(searchTerm, "g")) ||
        value.title.toLowerCase().match(new RegExp(searchTerm, "g")) ||
        value.rank.toLowerCase().match(new RegExp(searchTerm, "g"))
      );
    });
  };
  const handleOnChange = async () => {
    if (searchText.length > 2) {
      let search = await arraySearch(tableData, searchText);
      setData(search);
      console.log(tableData);
    } else {
      setTableData(tableData);
    }
  };
  React.useEffect(() => {
    handleOnChange();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  return (
    <Container>
      
        <div
          style={{
            height: 400,
            width: "55vw",
            color: "white",
            paddingBottom: "100px", 
          }}
        >
          <div
            style={{
              background: "gray",
              justifyContent: "flex-end",
              display: "flex",
            }}
          >
            <TextField
              onChange={(event) => {
                setSearchText(event.target.value);
              }}
              label="Search for Titles"
            />
            <Button variant="contained" onClick={handleClick}>
              Get Data
            </Button>
          </div>
          <DataGrid
            rows={searchText ? Data : tableData}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            sx={{ color: "white", background: "gray" }}
          />
        </div>
    
    </Container>
  );
}
