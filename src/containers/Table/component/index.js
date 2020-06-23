import React, { Fragment, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import rows from "../datas.json";
import { Button } from "@material-ui/core";


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const user = [
   
]

function getTableRows(rows, handleDelete) {
    return rows.map((row) => (
        <TableRow key={row.id}>{getRowContent(row, handleDelete)}</TableRow>
    ));
}

function getRowContent(row, handleDelete) {
    let content = [];
    for (let key in row) {
        content.push(getTableCell(row[key], key, row['id'], handleDelete));
    }
    return content;
}

// edit строк, debounce; onChange и подключить redux; lodash попробовать



const getTableCell = (value, key, id, handleDelete) => {
    switch (key) {
        case 'isDelete':
            return <TableCell align="right" key={`cellDelete${id}`}><Button variant="contained" color="secondary" onClick={()=>handleDelete(id)}>Delete</Button></TableCell>
        default: return (
            <TableCell align="right" key={`cell${key}${id}`}>{`${value}`}</TableCell>
        );
    }


}
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

function SimpleTable() {
    const classes = useStyles();

    const [data, setData] = useState(rows);

    const handleDelete = (id) => {
        
        setData(data.filter((item) => item.id !== id));
        
        let test = data.filter((item) => item.id !== id)
        console.log(test)
    }

    const handleAdd = () => {
       let id = Math.max.apply(Math, data.map(item => Number(item.id)) )

       let cellData =  {
        id: id + 1,
        name: "Max",
        age: 20,
        isAdmin: true,
        courses: "go",
        wife: null,
        edit: true,
        isDelete: true
    }

    const newData = [...data, ...[cellData]]
      setData(newData)
    }

    return (
        <Fragment>
            <Button variant="contained" color="primary" onClick={handleAdd}>Add</Button>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table" width={30}>
                    <TableHead>
                        <TableRow>{getTableHeader(data)}</TableRow>
                    </TableHead>
                    <TableBody>{getTableRows(data, handleDelete)}</TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    );
}

export default SimpleTable;
