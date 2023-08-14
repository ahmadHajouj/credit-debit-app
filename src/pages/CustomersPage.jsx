import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import customersServices from "../services/customersServices";
import Navbar from "../components/Navbar";
import ListGroup from "../components/ListGroup";

const CustomersPage = () => {
  const { t } = useTranslation();

  const [data, setData] = useState([]);

  useEffect(() => {
    const { request, cancel } = customersServices.getAll();

    request.then((res) => {
      setData(res.data);
    });

    return () => cancel();
  }, []);

  const handleAdd = (value) => {
    const origenalData = [...data];

    customersServices
      .create({
        name: value,
      })
      .then(({ data: newData }) => setData([...data, newData]))
      .catch((err) => {
        console.log(err.message);
        setData(origenalData);
      });
  };

  return (
    <>
      <Navbar onOk={handleAdd} formLabel={t("enter a customer")} />
      <ListGroup list={data} />
    </>
  );
};

export default CustomersPage;
