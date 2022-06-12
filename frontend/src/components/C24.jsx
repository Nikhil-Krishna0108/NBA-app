import React, { useState,Component,useEffect} from "react";
import axios from "axios";
import MaterialTable from "material-table";
import GetAppIcon from "@material-ui/icons/GetApp";
import AddIcon from "@material-ui/icons/Add";
import { Checkbox, MenuItem, Select } from "@material-ui/core";


function C24table() {
    

  const [tableData, setTableData] = useState([
    // { teachingMethod: 1, type: "Neeraj", subject: 'neeraj@gmail.com', relavance: 9876543210, year: 2019 },
    // { teachingMethod: 1, type: "Neeraj", subject: 'neeraj@gmail.com', relavance: 9876543210, year: 2019 },
    // { teachingMethod: 1, type: "Neeraj", subject: 'neeraj@gmail.com', relavance: 9876543210, year: 2019 },
    // { teachingMethod: 1, type: "Neeraj", subject: 'neeraj@gmail.com', relavance: 9876543210, year: 2021 },
    // { teachingMethod: 1, type: "Neeraj", subject: 'neeraj@gmail.com', relavance: 9876543210, year: 2020 },

  ]);
  const [year,setYear]=useState('all')
  const [filteredData,setFilteredData]=useState(tableData)
  const [filter, setFilter]=useState(true)
  const columns = [

    { title: "Teaching method", field: "teachingMethod", filterPlaceholder: "filter", type:"numeric" },
    { title: "Type", field: "type", filterPlaceholder: "filter" },
    { title: "Subject", field: "subject", filterPlaceholder: "filter" },
    { title: "Relavance of PO's", field: "relavance", filterPlaceholder: "filter" },
    { title: "Year", field: "year" },
    
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

    axios.get("http://localhost:5000/criteria2/C24")
        .then(response => response.data)
        .then((data) => {
            setTableData(data)
            console.log({tableData})
         
        });
}

useEffect(()=>{
    getEvents();
  },[])
  const handleChange=()=>{
    setFilter(!filter)
   }
   useEffect(()=>{
       console.log({tableData});
 setFilteredData(year==='all'?tableData:tableData.filter(dt=>dt.year===year))
 
   },[year, tableData])
 


  
  return (
    
    <div className="App">
      <h4 align="center">Table 3: CAY (2016-17)</h4>

      <MaterialTable
        columns={columns}
        data={filteredData}
        // options={{
            
        //   }}
          actions={[
            {
                icon: () => <GetAppIcon />,
                tooltip: "Click me",
                onClick: (e, data) => console.log(data),
              icon:()=><Checkbox
              checked={filter}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />,
            tooltip:"Hide/Show Filter option",
            isFreeAction:true
            },
            {
              icon:()=><Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              style={{width:100}}
              value={year}
              onChange={(e)=>setYear(e.target.value)}
            >
               <MenuItem value={"all"}><em>All</em></MenuItem>
              <MenuItem value={'2019'}>2019</MenuItem>
              <MenuItem value={'2020'}>2020</MenuItem>
              <MenuItem value={'2021'}>2021</MenuItem>
            </Select>,
            tooltip:"Filter Year",
            isFreeAction:true
            }
          ]}
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              setFilteredData([...filteredData, newRow]);
              axios
                .post("http://localhost:5000/criteria2/c24//add", newRow)
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
              

              axios.post(`http://localhost:5000/criteria2/c24/update/${oldRow._id}`, newRow);
            })},
          
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...tableData];
              updatedData.splice(selectedRow.tableData.id, 1);
              setTableData(updatedData);
              setTimeout(() => resolve(), 1000);

              axios.delete(`http://localhost:5000/criteria2/c24/delete/${selectedRow._id}`);
            }),
        }}
        // actions={[
        //   {
        //     icon: () => <GetAppIcon />,
        //     tooltip: "Click me",
        //     onClick: (e, data) => console.log(data),
        //     // isFreeAction:true
        //   },
        // ]}
        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        options={{
            filtering:filter,
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

export default C24table;
