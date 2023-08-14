import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import TextboxAlert from "../TextboxAlert";

const getDate = (date) => {
  const d = new Date(date);
  const m = d.getMonth() + 1;

  return "" + d.getFullYear() + "/" + m + "/" + d.getDate();
};

const DebitRow = ({ r, onAddDebit, onComment }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdateDebitOpen, setIsUpdateDebitOpen] = useState(true);
  const [isUpdateCommentOpen, setIsUpdateCommentOpen] = useState(true);

  const handleAddDebit = (data) => {
    onAddDebit(data, r);
    setIsUpdateDebitOpen(!isUpdateDebitOpen);
  };

  const handleComment = (data) => {
    onComment(data, r);
    setIsUpdateCommentOpen(!isUpdateCommentOpen);
  };

  let count = 0;
  return (
    <>
      <tr key={count++}>
        <td key={count++}>
          <button onClick={() => setIsOpen(!isOpen)}>update</button>
        </td>
        <td key={count++}>{getDate(r.creditDate)}</td>
        <td key={count++}>{r.credit}</td>
        <td key={count++}>{r.debitDate ? getDate(r.debitDate) : ""}</td>
        <td key={count++} className="d-flex justify-content-between">
          {r.debit ? r.debit : 0}
          {isOpen && (
            <button onClick={() => setIsUpdateDebitOpen(false)}>+</button>
          )}
          <TextboxAlert
            isOpen={isUpdateDebitOpen}
            onOk={handleAddDebit}
            onConcel={() => setIsUpdateDebitOpen(true)}
            inputType="number"
            label={t("enter a debit")}
          />
        </td>
        <td key={count++}>{r.credit - (r.debit ? r.debit : 0)}</td>
        <td key={count++}>
          {r.comment ? (
            r.comment
          ) : isOpen ? (
            <button onClick={() => setIsUpdateCommentOpen(false)}>+</button>
          ) : (
            ""
          )}
          <TextboxAlert
            isOpen={isUpdateCommentOpen}
            onOk={handleComment}
            onConcel={() => setIsUpdateCommentOpen(true)}
            inputType="string"
            label={t("enter a comment")}
          />
        </td>
      </tr>
    </>
  );
};

export default DebitRow;
