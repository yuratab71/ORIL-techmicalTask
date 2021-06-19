import { NAME } from "../../constants/constants";
const SET_FILTER_OPTION = "SET_FILTER_OPTION";
const SORT = "SORT";
let initialState = {
  filterOption: NAME,
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER_OPTION:
      return {
        ...state,
        filterOption: action.option,
      };
    case SORT:
      return {
        ...state,
        list: action.list,
      };
    default:
      return state;
  }
};

export default menuReducer;

export const setFiterAC = (option) => {
  return {
    type: SET_FILTER_OPTION,
    option,
  };
};

export const sortAC = (list) => {
  return {
    type: SORT,
    list,
  };
};
