import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { debounce } from "lodash";
import { DebounceInput } from "react-debounce-input";
import {
  Input,
  Button,
  Checkbox,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  makeStyles,
} from "@material-ui/core";
import * as action from "../actions/index"


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
    content.push(getTableCell(key, id, handleDelete, handleEdit, row));
  }
  return content;
}
 
// скрин в скайпе, 
//-нормальное название функций comlexAction, 
//-удалить комменты, которые не юзаются, 
//-классовый пожход убрать, 
//загрузить header на сайте под user(redux), роутинг изучить

const getTableCell = (
  key,
  id,
  handleDelete,
  handleEdit,
  row,
  checked,
  handleChange
) => {
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

    case "id":
      return (
        <TableCell align="right" key={`cellId${id}`}>
          {id}
        </TableCell>
      );

    case "isAdmin":
      return (
        <TableCell align="right" key={`cellisAdmin${id}`}>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </TableCell>
      );

    case "edit":
      return (
        <TableCell align="right" key={`cellEdit${id}`}>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </TableCell>
      );

    default:
      return (
        <TableCell align="right" key={`cell${key}${id}`}>
          <DebounceInput
            minLength={1}
            debounceTimeout={1000}
            value={value}
            disabled={row["edit"]}
            onChange={(e) => {
              handleEdit(id, key, e.target.value);
            }}
          />
        </TableCell>
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

const SimpleTable = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const data = useSelector((state) => state.users.data);
  console.log(...data);
  
  useEffect(() => {
    dispatch(action.dataFromServer())
  }, [])

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [courses, setCourses] = useState("");

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeAge = (e) => setAge(e.target.value);
  const handleChangeCourses = (e) => setCourses(e.target.value);

  const setFormInputs = (row) => {
    setName(row.name);
    setAge(row.age);
    setCourses(row.courses)
  };

  // action remove row
  const handleDelete = (id) => {
    dispatch(action.updateUser(data.filter((item) => item.id !== id)));
  };
  
  // action edit row
  const handleEdit = (id, key, value) => {
    data[id][key] = value;
    let newData = [...data];
    dispatch(action.updateUser(newData));
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
      edit: false,
      isDelete: true,
    };

    dispatch(action.addUser(cellData));
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
