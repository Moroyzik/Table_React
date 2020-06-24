import React from "react";
import { TableCell, Button } from "@material-ui/core";

const getTableCell = ({ value, key, id, handleDelete, handleEdit, editId }) => {
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
    case "edit":
      return (
        <TableCell align="right" key={`cellEdit${id}`}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleEdit(id, editId)}
          >
            Edit
          </Button>
        </TableCell>
      );
    default:
      return (
        <TableCell
          align="right"
          key={`cell${key}${id}`}
        >{`${value}`}</TableCell>
      );
  }
};

export { getTableCell };
