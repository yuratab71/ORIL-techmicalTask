import { NAME, DATE, STATE, DATA } from "../constants/constants";

const sorter = (list, option) => {
  switch (option) {
    case NAME:
      return nameSorter(list);
    case DATE:
      return dateSorter(list);
    case STATE:
      return stateSorter(list);
    case DATA:
      return graphSorter(list);
    default:
      return list;
  }
};

export default sorter;

const nameSorter = (list) => {
  return list.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
};

const dateSorter = (list) => {
  return list.sort((a, b) => {
    a = Date.parse(a.createdAt);
    b = Date.parse(b.createdAt);
    return a > b ? -1 : a < b ? 1 : 0;
  });
};

const graphSorter = (data) => {
  return data.sort((a, b) => {
    a = Date.parse(a.date);
    b = Date.parse(b.date);
    return a > b ? -1 : a < b ? 1 : 0;
  });
};

const stateSorter = (list) => {
  return list.sort((a, b) => {
    a = a.isActive;
    b = b.isActive;
    if (!a && b) return 1;
    return -1;
  });
};
