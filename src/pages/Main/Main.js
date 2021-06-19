import React, { useEffect } from "react";
import "./main.css";
import SearchBar from "../../common/components/SearchBar/SearchBar";
import Table from "../../common/components/Table/Table";
import { setList } from "./main-slice";
import { connect } from "react-redux";

const Main = ({ option, setList }) => {
  useEffect(() => {
    setList(option);
  }, []);

  return (
    <div className="main_container">
      <div className="search_bar">
        <SearchBar />
      </div>
      <div className="table">
        <Table />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    option: state.filter.filterOption,
  };
};

export default connect(mapStateToProps, { setList })(Main);
