import React from "react";
import TableRow from "@material-ui/core/TableRow";

import { getTableCell } from "./getTableCell";

const GetTableRows = ({ rows, handleDelete, currentlyEditing }) => {
  const getRowContent = (row, handleDelete, handleEdit) => {
    let content = [];
    for (let key in row) {
      content.push(
        getTableCell({
          value: row[key],
          key: key,
          id: row["id"],
          handleDelete: handleDelete,
          handleEdit: handleEdit,
        })
      );
    }
    return content;
  };

  return rows.map((row) => (
    <TableRow key={row.id}>
      {getRowContent(row, handleDelete, currentlyEditing)}
    </TableRow>
  ));
};

export { GetTableRows };
