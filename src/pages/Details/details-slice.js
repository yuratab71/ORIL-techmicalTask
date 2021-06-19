import api from "../../api/api";
import { DATA, YEAR } from "../../common/constants/constants";
import sorter from "../../common/helpers/sorter";
import filter from "../../common/helpers/filter";
import amount from "../../common/helpers/amountHelper";
const SET_DATA = "SET_DATA";
const IS_FETCHING = "IS_FETCHING";

let initialState = {
  data: [],
  max: null,
  min: null,
  medium: null,
  total: null,
  isFetching: false,
};

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.data,
        max: action.max,
        min: action.min,
        medium: action.medium,
        total: action.total,
      };
    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

export default detailsReducer;

const setDataAC = (data, min, max, medium, total) => {
  return {
    type: SET_DATA,
    data,
    min,
    max,
    medium,
    total,
  };
};

const fetchingAC = (bool) => {
  return {
    type: IS_FETCHING,
    isFetching: bool,
  };
};

export const setData = (id) => {
  return (dispatch) => {
    dispatch(fetchingAC(true));
    api.getItem(id).then((data) => {
      const arr = sorter(filter(data.data, YEAR), DATA);
      const sums = amount(arr);
      dispatch(setDataAC(arr, sums.min, sums.max, sums.medium, sums.total));
      dispatch(fetchingAC(false));
    });
  };
};
