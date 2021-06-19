import { YEAR, SEARCH } from "../constants/constants";

const filter = (data, option, ...expression) => {
  switch (option) {
    case YEAR:
      return yearFilter(data);
    case SEARCH:
      return searchFilter(data, expression[0]);
    default:
      return data;
  }
};

export default filter;

const yearFilter = (data) => {
  const year = new Date();
  const msNow = year.getTime();
  year.setFullYear(year.getFullYear() - 1);
  return data.filter((el) => {
    const ms = Date.parse(el.date);
    return ms >= year && ms <= msNow && el.curency != "null";
  });
};

const searchFilter = (data, expression) => {
  return data.filter((el) => {
    return el.name.toLowerCase().includes(expression.toLowerCase());
  });
};
