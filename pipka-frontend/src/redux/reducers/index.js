import { combineReducers } from "redux";

import dialogs from "./dialogs";
import messages from "./messages";
import notes from "./notes";
import filters from "./filters";

export default combineReducers({
  dialogs,
  messages,
  notes,
  filters,
});
