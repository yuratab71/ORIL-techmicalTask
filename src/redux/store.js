import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import menuReducer from "../common/components/MenuComponent/menu-slice";
import mainReducer from "../pages/Main/main-slice";
import detailsReducer from "../pages/Details/details-slice";
import SearchReducer from "../common/components/SearchBar/search-slice";

let reducers = combineReducers({
  filter: menuReducer,
  item: mainReducer,
  graph: detailsReducer,
  search: SearchReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
