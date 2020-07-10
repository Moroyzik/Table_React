import { combineReducers } from "redux";

import { usersReducer } from "./containers/Table/tableReducer";
const rootReducer = combineReducers({
  users: usersReducer,
});

export default rootReducer;
