import { combineReducers } from "redux";

import { default as general } from "../reducers/general";
import { default as user } from "../reducers/user";
import { default as project } from "../reducers/project";

export default combineReducers({
  general,
  user,
  project
});
