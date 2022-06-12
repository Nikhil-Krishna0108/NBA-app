import React, { useState } from "react";
import axios from "axios";
import MaterialTable from "material-table";
import GetAppIcon from "@material-ui/icons/GetApp";
import AddIcon from "@material-ui/icons/Add";

function C11table() {
  const [tableData, setTableData] = useState([]);
  const columns = [
    {
      title: "Vision",
      field: "vis",
      sorting: false,
      filtering: false,
      cellStyle: { background: "#009688" },
      headerStyle: { color: "#fff" },
    },
    { title: "M1", field: "M1", filterPlaceholder: "filter" },
    { title: "M2", field: "M2", filterPlaceholder: "filter" },
    { title: "M3", field: "M3", filterPlaceholder: "filter" },
    { title: "M4", field: "M4", filterPlaceholder: "filter" },
    { title: "M5", field: "M5", filterPlaceholder: "filter" },
  ];
  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <h4 align="center">Crash Course on Material Table </h4>

      <MaterialTable
        columns={columns}
        data={tableData}
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              setTableData([...tableData, newRow]);
              axios
                .post("http://localhost:5000/criteria1/add", newRow)
                .then((res) => console.log(res.data));

              setTimeout(() => resolve(), 500);
            }),
          onRowUpdate: (newRow, oldRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...tableData];
              updatedData[oldRow.tableData.id] = newRow;
              setTableData(updatedData);
              setTimeout(() => resolve(), 500);
              axios.post("http://localhost:5000/criteria1/update/"+oldRow.tableData.id, newRow);
            }),
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...tableData];
              updatedData.splice(selectedRow.tableData.id, 1);
              setTableData(updatedData);
              setTimeout(() => resolve(), 1000);
              axios.post(
                "http://localhost:5000/criteria1/delete/:",
                selectedRow.tableData.id
              );
            }),
        }}
        actions={[
          {
            icon: () => <GetAppIcon />,
            tooltip: "Click me",
            onClick: (e, data) => console.log(data),
            // isFreeAction:true
          },
        ]}
        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        options={{
          sorting: true,
          search: true,
          searchFieldAlignment: "right",
          searchAutoFocus: true,
          searchFieldVariant: "standard",
          filtering: true,
          paging: true,
          pageSizeOptions: [2, 5, 10, 20, 25, 50, 100],
          pageSize: 5,
          paginationType: "stepped",
          showFirstLastPageButtons: false,
          paginationPosition: "both",
          exportButton: true,
          exportAllData: true,
          exportFileName: "TableData",
          addRowPosition: "first",
          actionsColumnIndex: -1,
          selection: true,
          showSelectAllCheckbox: false,
          showTextRowsSelected: false,
          selectionProps: (rowData) => ({
            disabled: rowData.age == null,
            // color:"primary"
          }),
          grouping: true,
          columnsButton: true,
          rowStyle: (data, index) =>
            index % 2 === 0 ? { background: "#f5f5f5" } : null,
          headerStyle: { background: "#f44336", color: "#fff" },
        }}
        title="Student Information"
        icons={{ Add: () => <AddIcon /> }}
      />
    </div>
  );
}

export default C11table;
