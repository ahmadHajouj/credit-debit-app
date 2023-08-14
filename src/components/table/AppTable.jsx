import React from "react";
import { Table } from "react-bootstrap";

import TableHeader from "./TableHeader";
import DebitTable from "./DebitTable";

function AppTable({ columns, rows, onAddDebit, onComment }) {
  return (
    <div>
      <Table striped bordered hover>
        <TableHeader columns={columns} />
        <DebitTable
          columns={columns}
          rows={rows}
          onAddDebit={onAddDebit}
          onComment={onComment}
        />
      </Table>
    </div>
  );
}

export default AppTable;
