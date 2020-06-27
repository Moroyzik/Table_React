import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Input } from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';

import rows from "../datas.json";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function getTableRows(rows, handleDelete, currentlyEditing, setFormInputs) {
  return rows.map((row, id) => (
    <TableRow onClick={() => setFormInputs(row)} key={row.id}>
      {getRowContent(row, handleDelete, currentlyEditing, id)}
    </TableRow>
  ));
}

function getRowContent(row, handleDelete, handleEdit, id) {
  let content = [];
  for (let key in row) {
    content.push(
      getTableCell(key, id, handleDelete, handleEdit, row)
    );
  }
  return content;
}


// debounce убрать постоянные вызовы в консоли, булевские значения убрать из редактирования и id, вместо инпут сделать чекбокс, redux;

//c редаксом подключить json

// GraphQL почитать

// стилизация таблицы (с числами строка подсвечивается)


const getTableCell = (key, id, handleDelete, handleEdit, row, checked, handleChange) => {
  const value = row[key];
  switch (key) {
    case "isDelete":
      return (
        <TableCell align="right" key={`cellDelete${id}`}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleDelete(id)}
          >
            Delete
          </Button>
        </TableCell>
      );

    case "isAdmin":
      return (
        <TableCell align="right" key={`cellisAdmin${id}`}>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
        </TableCell>
      );

    case "edit":
      return (
        <TableCell align="right" key={`cellEdit${id}`}>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
        </TableCell>
      );

    default:
      return (
        <TableCell
          align="right"
          key={`cell${key}${id}`}
        ><Input value={value} disabled={row['edit']} onChange={(e) => {
          handleEdit(id, key, e.target.value)
        }} /></TableCell>
      );
  }
};


function getTableHeader(rows) {
  let headers = rows[0];
  return (
    headers &&
    Object.keys(headers).map((value) => (
      <TableCell align="right" key={`header${value}`}>
        {value}
      </TableCell>
    ))
  );
}

const Form = ({ name, changeName, age, changeAge, courses, changeCourses }) => {
  return (
    <>
      <Input placeholder="name" value={name} onChange={changeName} />
      <Input placeholder="age" value={age} onChange={changeAge} />
      <Input placeholder="courses" value={courses} onChange={changeCourses} />
    </>
  );
};

//checkbox


const SimpleTable = () => {
  const classes = useStyles();

  const [data, setData] = useState(rows);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [courses, setCourses] = useState("");

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeAge = (e) => setAge(e.target.value);
  const handleChangeCourses = (e) => setCourses(e.target.value);

  const setFormInputs = (row) => {
    setName(row.name);
    setAge(row.age);
  };

  // action remove row
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleEdit = (id, key, value) => {
    data[id][key] = value
    let newData = [...data]
    console.log(...data)
    setData(newData)
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
      age: age,
      isAdmin: true,
      courses: courses,
      wife: "",
      edit: true,
      isDelete: true,
    };

    const newData = [...data, cellData];
    setData(newData);
  };

  return (
    <>
      <Form
        name={name}
        changeName={handleChangeName}
        age={age}
        changeAge={handleChangeAge}
        courses={courses}
        changeCourses={handleChangeCourses}
      />
      <Button variant="contained" color="primary" onClick={handleAdd}>
        Add
      </Button>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table" width={30}>
          <TableHead>
            <TableRow>{getTableHeader(data)}</TableRow>
          </TableHead>
          <TableBody>
            {getTableRows(data, handleDelete, handleEdit, setFormInputs)}

          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default SimpleTable;
