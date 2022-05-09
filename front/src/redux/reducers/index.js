import { combineReducers } from "redux";
import { selectedUserReducer, userReducer } from "./userReducer";
import { parcelReducer, selectedParcelReducer } from "./parcelReducer";

export const reducers = combineReducers({
  allUsers: userReducer,
  allParcels: parcelReducer,
  selectParcel: selectedParcelReducer,
  selectUser: selectedUserReducer
});
