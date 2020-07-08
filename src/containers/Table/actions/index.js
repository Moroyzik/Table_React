import { combineReducers } from "redux";

import { usersReducer } from "./tableReducer";

const rootReducer = combineReducers({
  users: usersReducer,
});

export default rootReducer;
export * from "./tableReducer";