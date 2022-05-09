import { userTypes } from "../constants/userTypes";
import * as api from "../../api/users/index";

export const getUsers = () => async (dispatch) => {
  try {
    const response = await api.fetchUsers();
    dispatch({ type: userTypes.GET_USERS, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const selectUser = (id) => async (dispatch) => {
  try {
    const response = await api.getOneUser(id);
    // console.log(response.data);
    dispatch({ type: userTypes.SELECT_USER, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};



export const createUser = (user) => async (dispatch) => {
  try {
    const response = await api.createAUser(user);

    localStorage.setItem("token", response.data.token)

    dispatch({ type: userTypes.CREATE_USER, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const log = (user) => async (dispatch) =>{

try {

  const response = await api.logUser(user);

  localStorage.setItem("token", response.data)
  // console.log(response.data);

  dispatch({ type: userTypes.LOGIN_USER, payload: response.data})
  
} catch (error) {
  console.log(error);
}

}
