import React, { useState,Component,useEffect} from "react";
import axios from "axios";
import MaterialTable from "material-table";
import GetAppIcon from "@material-ui/icons/GetApp";
import AddIcon from "@material-ui/icons/Add";


function C22table() {
  const [tableData, setTableData] = useState([]);
  const columns = [

    { title: "C", field: "C", filterPlaceholder: "filter" },
    { title: "Subject", field: "Subject", filterPlaceholder: "filter" },
    { title: "PO1", field: "PO1", filterPlaceholder: "filter", type:"boolean"},
    { title: "PO2", field: "PO2", filterPlaceholder: "filter", type:"boolean"},
    { title: "PO3", field: "PO3", filterPlaceholder: "filter", type:"boolean"},
    { title: "PO4", field: "PO4", filterPlaceholder: "filter", type:"boolean"},
    { title: "PO5", field: "PO5", filterPlaceholder: "filter", type:"boolean"},
    { title: "PO6", field: "PO6", filterPlaceholder: "filter", type:"boolean"},
    { title: "PO7", field: "PO7", filterPlaceholder: "filter", type:"boolean"},
    { title: "PO8", field: "PO8", filterPlaceholder: "filter", type:"boolean"},
    { title: "PO9", field: "PO9", filterPlaceholder: "filter", type:"boolean"},
    { title: "PO10", field: "PO10", filterPlaceholder: "filter", type:"boolean"},
    { title: "PO11", field: "PO11", filterPlaceholder: "filter", type:"boolean"},
    { title: "PO12", field: "PO12", filterPlaceholder: "filter", type:"boolean"},
    { title: "PSO1", field: "PSO1", filterPlaceholder: "filter", type:"boolean"},
    { title: "PSO2", field: "PSO2", filterPlaceholder: "filter", type:"boolean"},
    { title: "PSO3", field: "PSO3", filterPlaceholder: "filter", type:"boolean"},
  ];
  // axios
  // .get("http://localhost:5000/criteria1/")
  // .then((response) => {
  //   this.setState({ tableData: response.data });
  //   console.log(tableData);
  // })
  // .catch((error) => {
  //   console.log(error);
  // });
  function getEvents() {

    axios.get("http://localhost:5000/criteria2/C22")
        .then(response => response.data)
        .then((data) => {
            setTableData(data)
            console.log({tableData})
         
        });
}
useEffect(()=>{
    getEvents();
  },[])


  
  return (
    
    <div className="App">
      <h1 align="center">Criteria 2</h1>
      <h4 align="center">Table 1: Comparison of AICTE and VTU Program Structure</h4>

      <MaterialTable
        columns={columns}
        data={tableData}
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              setTableData([...tableData, newRow]);
              axios
                .post("http://localhost:5000/criteria2/c22//add", newRow)
                .then((res) => console.log(res.data));

              setTimeout(() => resolve(), 500);
            }),
          onRowUpdate: (newRow, oldRow) =>
          {
            console.log({newRow,oldRow});
            return new Promise((resolve, reject) => {
              
              const updatedData = [...tableData];
            
              updatedData[oldRow.tableData.id] = newRow;
             
              setTableData(updatedData);
              
              setTimeout(() => resolve(), 500);
              var id=oldRow["_id"];
              console.log(oldRow._id);
              console.log({newRow});
              //console.log(id);
              // console.log({tableData.id});
              

              axios.post(`http://localhost:5000/criteria2/c22/update/${oldRow._id}`, newRow);
            })},
          
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...tableData];
              updatedData.splice(selectedRow.tableData.id, 1);
              setTableData(updatedData);
              setTimeout(() => resolve(), 1000);

              axios.delete(`http://localhost:5000/criteria2/c22/delete/${selectedRow._id}`);
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

export default C22table;
