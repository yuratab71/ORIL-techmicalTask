import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setData } from "./details-slice";
import Graph from "../../common/components/Graph/Graph";
import FetchingCircular from "../../common/components/FetchingCircular/FetchingCircular";
import "./details.css";

const Details = ({
  location,
  min,
  max,
  medium,
  total,
  isFetching,
  setData,
}) => {
  useEffect(() => {
    setData(location.pathname.split("/")[2]);
  }, []);
  return (
    <div className="details_container">
      <div className="details_wrapper">
        <Graph />
      </div>
      {isFetching ? (
        <FetchingCircular />
      ) : (
        <div className="details_amount">
          <div className="total">
            <div className="cash_name">Total</div>
            <div className="cash_info_total">$ {total}</div>
          </div>
          <div className="total_detail">
            <div className="detail_element">
              <div className="cash_name">Min</div>
              <div className="cash_info">$ {min}</div>
            </div>
            <div className="detail_element">
              <div className="cash_name">Medium</div>
              <div className="cash_info">$ {medium}</div>
            </div>
            <div className="detail_element">
              <div className="cash_name">Max</div>
              <div className="cash_info">$ {max}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    min: state.graph.min,
    max: state.graph.max,
    medium: state.graph.medium,
    total: state.graph.total,
    isFetching: state.graph.isFetching,
  };
};

export default connect(mapStateToProps, { setData })(Details);
