import React from "react";
import MaterialTable from "material-table";
import { TableState } from "../interfaces/interfaces";
import { data } from "../data/data";

export default function Table() {
  const [state, setState] = React.useState<TableState>({
    columns: [
      { title: "Name", field: "name" },
      { title: "Type", field: "type", sorting: false },
      {
        title: "Age",
        field: "age",
        sorting: false,
        type: "numeric",
        lookup: {
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          10: 10,
          11: 11,
          12: 12,
          13: 13,
          14: 14,
          15: 15
        }
      }
    ],
    data
  });

  return (
    <MaterialTable
      title="Haymarket Pets Database"
      columns={state.columns}
      data={state.data}
      options={{
        paging: false,
        search: false,
        headerStyle: {
          backgroundColor: "#01579b",
          fontSize: 18,
          color: "#FFF"
        },
        rowStyle: {
          backgroundColor: "#EEE",
          fontSize: 16,
          color: "#000"
        }
      }}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 500);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 500);
          })
      }}
    />
  );
}
