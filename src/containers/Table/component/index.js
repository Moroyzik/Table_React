import React, { Fragment } from "react";


import { makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import rows from '../datas.json';
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


function getTableRows() {
    return rows.map((row) => <TableRow key={row.id}>{getRowContent(row)}</TableRow>)

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
function getDelete() {
    return rows
      .filter((key) => key.isDelete !== true)
      .map((row) => <TableRow key={row.id}>{getRowContent(row)}</TableRow>);
  }

const getTableCell = (value) => <TableCell align="right" key={`cell${value}`}>{`${value}`}</TableCell>

function getTableHeader() {
    let headers = rows[0];
    return Object.keys(headers).map((value) => <TableCell align="right" key={`header${value}`}>{value}</TableCell>);
}



function SimpleTable() {
    const classes = useStyles();

    return (
        <Fragment>
            <Button>Edit</Button>
            <Button onClick={getDelete()}>Delete</Button>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {getTableHeader()}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {getTableRows()}
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    );
}

export default SimpleTable;