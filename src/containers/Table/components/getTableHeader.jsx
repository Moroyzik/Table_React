import React from "react";
import TableCell from "@material-ui/core/TableCell";

const GetTableHeader = ({ rows }) => {
  let headers = rows[0];

  return (
    headers &&
    Object.keys(headers).map((value) => (
      <TableCell align="right" key={`header${value}`}>
        {value}
      </TableCell>
    ))
  );
};

export { GetTableHeader };
