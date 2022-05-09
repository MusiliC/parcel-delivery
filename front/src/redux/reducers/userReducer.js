import { userTypes } from "../constants/userTypes";

const initialState = {
  user: {},
  loggedUsers:{},
  authUser: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.GET_USERS:
      return { ...state, loggedUsers: action.payload };
;

    case userTypes.CREATE_USER:
      return { ...state, authUser: action.payload };

    case userTypes.LOGIN_USER:
      console.log(action.payload.user);
      return {
        ...state,
        authUser: action.payload.authToken,
        loggedUser: action.payload.user,
      };

    default:
      return state;
  }
};


export const selectedUserReducer = (state = [{}], { type, payload }) => {
  switch (type) {
    case userTypes.SELECT_USER:
      return { ...state, ...payload };

    default:
      return state;
  }
};
