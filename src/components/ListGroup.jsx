import React from "react";
import { useNavigate } from "react-router-dom";

const ListGroup = ({ list }) => {
  const navigate = useNavigate();

  return (
    <ul className="list-group px-3">
      {list.map((item) => (
        <li
          key={item.name}
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          onClick={() => navigate(`/user/${item.name}/${item._id}`)}
        >
          <p>{item.phone}</p>
          <p>{item.name}</p>
          <p>{item.account}</p>
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
