import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as Material from "@material-ui/core";

import rows from "./constants/datas.json";

import { GetTableHeader, GetTableRows, Form } from "./components";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// edit строк, debounce; onChange и подключить redux; lodash попробовать

function SimpleTable() {
  const classes = useStyles();

  const [data, setData] = useState(rows);
  const [name, setName] = useState("");
  console.log(name);

  const handleChangeName = (e) => setName(e.target.value);

  // action remove row
  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  const handleEdit = (id, editId) => {
    let changedRows;
    if (editId) {
      changedRows = rows.map((row) =>
        editId[row.id] ? { ...row, ...editId[row.id] } : row
      );
    }
    setData(changedRows);
  };

  // add row
  const handleAdd = () => {
    let id = Math.max.apply(
      Math,
      data.map((item) => Number(item.id))
    );

    let cellData = {
      id: id + 1,
      name: name,
      age: 20,
      isAdmin: true,
      courses: "go",
      wife: null,
      edit: true,
      isDelete: true,
    };

    const newData = [...data, cellData];
    setData(newData);
  };

  return (
    <>
      <Material.Button variant="contained" color="primary" onClick={handleAdd}>
        Add
      </Material.Button>
      <Material.TableContainer component={Material.Paper}>
        <Material.Table
          className={classes.table}
          aria-label="simple table"
          width={30}
        >
          <Material.TableHead>
            <Material.TableRow>
              <GetTableHeader rows={data} />
            </Material.TableRow>
          </Material.TableHead>
          <Material.TableBody>
            <GetTableRows
              rows={data}
              handleDelete={handleDelete}
              currentlyEditing={handleEdit}
            />
          </Material.TableBody>
        </Material.Table>
      </Material.TableContainer>

      <Form name={name} changeName={handleChangeName} />
    </>
  );
}

export { SimpleTable };
