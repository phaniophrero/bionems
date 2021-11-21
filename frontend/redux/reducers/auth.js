import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  RESET_USER_REGISTER_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  SET_AUTH_LOADING,
  REMOVE_AUTH_LOADING,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  REFRESH_SUCCESS,
  REFRESH_FAIL,
} from "../constants/userConstants";

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  register_success: false,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        register_success: true,
      };

    case USER_REGISTER_FAIL:
      return {
        ...state,
      };

    case RESET_USER_REGISTER_SUCCESS:
      return {
        ...state,
        register_success: false,
      };

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };

    case USER_LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
      };

    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    case USER_LOGOUT_FAIL:
      return {
        ...state,
      };

    case LOAD_USER_SUCCESS:
      return {
        ...state,
        user: payload.user,
      };

    case LOAD_USER_FAIL:
      return {
        ...state,
        user: null,
      };

    case AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };

    case AUTHENTICATED_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    case REFRESH_SUCCESS:
      return {
        ...state,
      };

    case REFRESH_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    case SET_AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };

    case REMOVE_AUTH_LOADING:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
