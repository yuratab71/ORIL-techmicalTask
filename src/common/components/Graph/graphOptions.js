export const date = new Date();
date.setFullYear(date.getFullYear() - 1);
export const month = new Date();
month.setMonth(month.getMonth() - 1);
export const week = new Date();
week.setDate(week.getDate() - 7);

const options = {
  chart: {
    id: "area-datetime",
    type: "area",
    zoom: {
      autoScaleYaxis: true,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  markers: {
    size: 0,
    style: "hollow",
  },
  xaxis: {
    type: "datetime",
    min: date.getTime(),
    tickAmount: 6,
  },
  tooltip: {
    x: {
      format: "dd MMM yyyy",
    },
    y: {
      formatter: function (value, ...options) {
        return Math.floor(value);
      },
    },
  },
  grid: {
    show: true,
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.9,
      opacityTo: 0.8,
      stops: [0, 100],
    },
  },
  //end of options
};

export default options;
