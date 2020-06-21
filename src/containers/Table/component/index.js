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

function getTableRows(rows) {
    return rows.map((row) => (
        <TableRow key={row.id}>{getRowContent(row)}</TableRow>
    ));
}

function getRowContent(row) {
    let content = [];
    for (let key in row) {
        content.push(getTableCell(row[key]));
    }
    return content;
}
// TODO switch(key), func(value, key), return button delete по id delete
// delete

const getTableCell = (value) => (
    <TableCell align="right" key={`cell${value}`}>{`${value}`}</TableCell>
);

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

    const handleDelete = () =>
        setData(data.filter((key) => key.isDelete !== true));

    return (
        <Fragment>
            <Button variant="contained" color="primary">Edit</Button>
            <Button variant="contained" color="secondary" onClick={handleDelete}>Delete</Button>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>{getTableHeader(data)}</TableRow>
                    </TableHead>
                    <TableBody>{getTableRows(data)}</TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    );
}

export default SimpleTable;
