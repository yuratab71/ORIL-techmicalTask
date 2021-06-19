import React, { useState } from "react";
import Chart from "react-apexcharts";
import { connect } from "react-redux";
import options, { date, month, week } from "./graphOptions";
import "./graph.css";

const Graph = ({ data }) => {
  const [selection, setSelection] = useState("one_year");
  const series = [
    {
      data: data.map((el) => {
        return [Date.parse(el.date), +el.curency];
      }),
    },
  ];

  const updateData = (timeline) => {
    setSelection(timeline);

    switch (timeline) {
      case "one_month":
        ApexCharts.exec("area-datetime", "zoomX", month.getTime(), Date.now());
        break;
      case "one_year":
        ApexCharts.exec("area-datetime", "zoomX", date.getTime(), Date.now());
        break;
      case "one_week":
        ApexCharts.exec("area-datetime", "zoomX", week.getTime(), Date.now());
        break;
      default:
    }
  };

  return (
    <>
      <div className="graph_header">
        <div className="graph_title">Revenue</div>
        <div className="graph_button_wrapper">
          <button
            className="graph_button"
            id="one_week"
            onClick={() => updateData("one_week")}
            style={
              selection === "one_week"
                ? { fontWeight: "bold", color: "black" }
                : {}
            }
          >
            Week
          </button>
          <button
            className="graph_button"
            id="one_month"
            onClick={() => updateData("one_month")}
            style={{ borderRight: "3px solid #F4F5F7" }}
            style={
              selection === "one_month"
                ? { fontWeight: "bold", color: "black" }
                : {}
            }
          >
            Month
          </button>
          <button
            className="graph_button"
            id="one_year"
            onClick={() => updateData("one_year")}
            style={
              selection === "one_year"
                ? { fontWeight: "bold", color: "black" }
                : {}
            }
          >
            Year
          </button>
        </div>
      </div>
      <div className="chart_wrapper">
        <Chart
          options={options}
          series={series}
          type="area"
          width="1400"
          height={450}
          width="100%"
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.graph.data,
  };
};

export default connect(mapStateToProps)(Graph);
