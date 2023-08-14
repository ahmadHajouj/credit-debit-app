import React from "react";
import { useTranslation } from "react-i18next";

const oToA = (opj) => {
  const arr = [];
  for (let key in opj) {
    if (opj.hasOwnProperty(key)) {
      arr.push(opj[key]);
    }
  }
  return arr;
};

function TableBody({ rows, columns = [] }) {
  const { t } = useTranslation();
  const smallCol = [...columns];
  smallCol.pop();
  smallCol.pop();

  let count = 0;
  return (
    <tbody>
      {rows.map((r) => (
        <tr key={count++}>
          {oToA(r).map((col) => (
            <td key={count++}>{col}</td>
          ))}
        </tr>
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
        <td>$</td>
      </tr>
    </tbody>
  );
}

export default TableBody;
