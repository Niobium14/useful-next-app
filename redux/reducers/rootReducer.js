import homeReducer from "./homeReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  homePage: homeReducer,
});

export default rootReducer;
