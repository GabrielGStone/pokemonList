import { combineReducers } from "redux";
import { reducer as favorite } from "./ducks/favorite";

const rootReducer = combineReducers({
  favorite,
});

export default rootReducer;
