import React from "react";
import "./tableElement.css";
import { Link } from "react-router-dom";

const TableElements = ({ name, date, active, id }) => {
  return (
    <div className="element_wrapper">
      <div className="element_name">
        <Link
          to={`item/${id}`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          {name}
        </Link>
      </div>
      <div className="element_date">{date}</div>
      <div>
        {active ? (
          <span className="active">Active</span>
        ) : (
          <span className="disable">Disable</span>
        )}
      </div>
    </div>
  );
};

export default TableElements;
