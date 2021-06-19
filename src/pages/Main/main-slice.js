import api from "../../api/api";
import sorter from "../../common/helpers/sorter";
const SET_LIST = "SET_LIST";
const IS_FETCHING = "IS_FETCHING";
let initialState = {
  list: [],
  isFetching: false,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST:
      return {
        ...state,
        list: action.list,
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

export default mainReducer;

const setListAC = (list) => {
  return {
    type: SET_LIST,
    list,
  };
};

const fetchingAC = (bool) => {
  return {
    type: IS_FETCHING,
    isFetching: bool,
  };
};

export const setList = (option) => {
  return (dispatch) => {
    dispatch(fetchingAC(true));
    api.getList().then((data) => {
      const sortedList = sorter(data, option);
      dispatch(setListAC(sortedList));
      dispatch(fetchingAC(false));
    });
  };
};
