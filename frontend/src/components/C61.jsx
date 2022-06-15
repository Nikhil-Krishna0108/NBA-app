import React, { useState, Component, useEffect } from "react";
import axios from "axios";
import MaterialTable from "material-table";
import GetAppIcon from "@material-ui/icons/GetApp";
import AddIcon from "@material-ui/icons/Add";

function C61table() {
  const [tableData, setTableData] = useState([]);
  const columns = [
    { title: "sl no", field: "sl_no", filterPlaceholder: "filter" },
    { title: "Name of laboratory", field: "name_of_lab", filterPlaceholder: "filter" },
    { title: "No. of students per batch setup", field: "no_of_students_per_batch", filterPlaceholder: "filter" },
    { title: "Name of important equipment", field: "name_of_important_equipment", filterPlaceholder: "filter" },
    { title: "Weekly utilization status", field: "weekly_utilization", filterPlaceholder: "filter" },
    { title: "Name of technical staff", field: "name_of_technical_staff", filterPlaceholder: "filter" },
    { title: "Designation", field: "designation", filterPlaceholder: "filter" },
    { title: "Qualification", field: "qualification", filterPlaceholder: "filter" },
  ];
  // axios
  // .get("http://localhost:5000/criteria6/c61/")
  // .then((response) => {
  //   this.setState({ tableData: response.data });
  //   console.log(tableData);
  // })
  // .catch((error) => {
  //   console.log(error);
  // });
  function getEvents() {
    axios
      .get("http://localhost:5000/criteria6/c61/")
      .then((response) => response.data)
      .then((data) => {
        setTableData(data);
        console.log({ tableData });
      });
  }
  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="App">
      <MaterialTable
        columns={columns}
        data={tableData}
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              setTableData([...tableData, newRow]);
              axios
                .post("http://localhost:5000/criteria6/c61/add", newRow)
                .then((res) => console.log(res.data));

              setTimeout(() => resolve(), 500);
            }),
          onRowUpdate: (newRow, oldRow) => {
            console.log({ newRow, oldRow });
            return new Promise((resolve, reject) => {
              const updatedData = [...tableData];

              updatedData[oldRow.tableData.id] = newRow;

              setTableData(updatedData);

              setTimeout(() => resolve(), 500);
              var id = oldRow["_id"];
              console.log(oldRow._id);
              console.log({ newRow });
              //console.log(id);
              // console.log({tableData.id});

              axios.post(
                `http://localhost:5000/criteria6/c61/update/${oldRow._id}`,
                newRow
              );
            });
          },

          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...tableData];
              updatedData.splice(selectedRow.tableData.id, 1);
              setTableData(updatedData);
              setTimeout(() => resolve(), 1000);

              axios.delete(
                `http://localhost:5000/criteria6/c61/delete/${selectedRow._id}`
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
          headerStyle: { background: "#007bff", color: "#fff" },
        }}
        title="PEO – Mission Correlation"
        icons={{ Add: () => <AddIcon /> }}
      />
    </div>
  );
}

export default C61table;
