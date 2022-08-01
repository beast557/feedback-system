import { combineReducers } from "redux";

import auth from "./auth";
import alert from "./alert";
import faculty from "./faculty";
// import transaction from "./transaction";
// import company from "./company";
// import dashboard from "./dashboard";

export default combineReducers({
  auth,
  alert,
  faculty
  // transaction,
  // company,
  // dashboard
});
