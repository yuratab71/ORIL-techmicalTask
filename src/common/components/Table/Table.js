import React from "react";
import TableElement from "../TableElement/TableElements";
import MenuComponent from "../MenuComponent/MenuComponent";
import { connect } from "react-redux";
import dateParser from "../../helpers/dateParser";
import FetchingCircular from "../FetchingCircular/FetchingCircular";
import filter from "../../helpers/filter";
import { SEARCH } from "../../constants/constants";
import "./table.css";

const Table = ({ option, list, isFetching, isSearch, searchExpression }) => {
  return (
    <div className="table_wrapper">
      <div className="table_header">
        <div className="header_menu_wrapper">
          {option}
          <MenuComponent />
        </div>
        <div>Date</div>
        <div>State</div>
      </div>
      {isSearch ? (
        filter(list, SEARCH, searchExpression).map((el) => {
          return (
            <TableElement
              key={el.id}
              id={el.id}
              name={el.name}
              active={el.isActive}
              date={dateParser(el.createdAt)}
            />
          );
        })
      ) : isFetching ? (
        <FetchingCircular />
      ) : (
        list.map((el) => {
          return (
            <TableElement
              key={el.id}
              id={el.id}
              name={el.name}
              active={el.isActive}
              date={dateParser(el.createdAt)}
            />
          );
        })
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    option: state.filter.filterOption,
    list: state.item.list,
    isFetching: state.item.isFetching,
    isSearch: state.search.searchMode,
    searchExpression: state.search.searchExpression,
  };
};

export default connect(mapStateToProps)(Table);
