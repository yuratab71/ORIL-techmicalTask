const SET_SEARCH = "SET_SEARCH";
const SET_MODE = "SET_MODE";

let initialState = {
  searchExpression: "", //String
  searchMode: false, //Bool
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        searchExpression: action.expression,
      };
    case SET_MODE:
      return {
        ...state,
        searchMode: action.searchMode,
      };
    default:
      return state;
  }
};

export default searchReducer;

export const searchModeAC = (bool) => {
  return {
    type: SET_MODE,
    searchMode: bool,
  };
};

export const searchWordAC = (expression) => {
  return {
    type: SET_SEARCH,
    expression,
  };
};
