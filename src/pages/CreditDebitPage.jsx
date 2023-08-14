import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import tableService from "../services/tableService";
import AppTable from "../components/table/AppTable";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

const CreditDebitPage = () => {
  const { t } = useTranslation();

  const params = useParams();
  const [data, setData] = useState([]);
  const columns = [
    "",
    t("credit data"),
    t("credit"),
    t("debit date"),
    t("debit"),
    t("total"),
    t("Comments"),
  ];

  useEffect(() => {
    const { request, cancel } = tableService.getOne(params.id);

    request.then((res) => {
      setData(res.data);
    });

    return () => cancel();
  }, []);

  const handleAdd = (value) => {
    const origenalData = [...data];

    tableService
      .create({
        customer: params.id,
        credit: value,
      })
      .then(({ data: newData }) => setData([...data, newData]))
      .catch((err) => {
        console.log(err.message);
        setData(origenalData);
      });
  };

  const handleAddDebit = (value, r) => {
    const origenalData = [...data];
    const updateData = {
      ...r,
      debit: parseInt(r.debit ? r.debit : 0) + parseInt(value),
    };

    tableService
      .update(updateData)
      .then(() => setData(data.map((d) => (d._id === r._id ? updateData : d))))
      .catch((err) => {
        console.log(err.message);
        setData(origenalData);
      });
  };

  const handleComment = (value, r) => {
    const origenalData = [...data];
    const updateData = { ...r, comment: value };

    console.log(r);
    tableService
      .update(updateData)
      .then(() => setData(data.map((d) => (d._id === r._id ? updateData : d))))
      .catch((err) => {
        console.log(err.message);
        setData(origenalData);
      });
  };

  return (
    <>
      <Navbar
        onOk={handleAdd}
        inputType="number"
        formLabel={t("enter a credit")}
        title={params.name}
      />
      <AppTable
        columns={columns}
        rows={data}
        onAddDebit={handleAddDebit}
        onComment={handleComment}
      />
    </>
  );
};

export default CreditDebitPage;
