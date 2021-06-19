import React from "react";
import "./searchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import { connect } from "react-redux";
import { searchWordAC, searchModeAC } from "./search-slice";

const SearchBar = ({ setMode, setExpression, expression }) => {
  const inputHandler = (event) => {
    if (event.target.value) {
      setMode(true);
      setExpression(event.target.value);
    } else {
      setMode(false);
      setExpression(null);
    }
  };

  return (
    <div className="search_bar_wrapper">
      <SearchIcon style={{ color: "#858991" }} fontSize="large" />
      <input
        onChange={inputHandler}
        className="search_input"
        placeholder="Search"
        type="text"
        value={expression}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expression: state.search.searchExpression,
    isSearch: state.search.searchMode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setExpression: (expression) => {
      dispatch(searchWordAC(expression));
    },
    setMode: (bool) => {
      dispatch(searchModeAC(bool));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
