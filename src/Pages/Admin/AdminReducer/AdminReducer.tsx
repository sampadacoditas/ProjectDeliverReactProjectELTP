export function dataTableReducer(dataTable:any,actions:{type:any,payload:any})
    {
      console.log("first")
      switch(actions.type)
      {
        case "setTableData":
          dataTable=actions.payload;
          return dataTable;
          default:
            return dataTable
      }

    }