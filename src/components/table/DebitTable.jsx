import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import DebitRow from "./DebitRow";

function TableBody({ rows, columns = [], onAddDebit, onComment }) {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let t = 0;
    rows.map((r) => (t = t + (r.credit - (r.debit ? r.debit : 0))));

    setTotal(t);
  }, [rows]);

  const { t } = useTranslation();
  const smallCol = [...columns];
  smallCol.pop();
  smallCol.pop();

  let count = 0;
  return (
    <tbody>
      {rows.map((r) => (
        <DebitRow
          key={count++}
          r={r}
          onAddDebit={onAddDebit}
          onComment={onComment}
        />
      ))}
      <tr>
        {columns.map(() => (
          <td key={count++}>|</td>
        ))}
      </tr>
      <tr>
        {smallCol.map(() => (
          <td key={count++}></td>
        ))}
        <td>{t("total")}</td>
        <td>{total}$</td>
      </tr>
    </tbody>
  );
}

export default TableBody;
