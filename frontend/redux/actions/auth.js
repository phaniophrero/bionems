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
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
} from "../constants/userConstants";

export const loadUser = () => async (dispatch) => {
  try {
    const res = await fetch("/api/users/user", {
      method: "GET",
      headers: {
        Access: "application/json",
      },
    });
    const data = await res.json();

    if (res.status === 200) {
      dispatch({
        type: LOAD_USER_SUCCESS,
        payload: data,
      });
    } else {
      dispatch({
        type: LOAD_USER_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: LOAD_USER_FAIL,
    });
  }
};

export const checkAuthStatus = () => async (dispatch) => {
  try {
    const res = await fetch("/api/users/verify", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (res.status === 200) {
      dispatch({
        type: AUTHENTICATED_SUCCESS,
      });
      dispatch(loadUser());
    } else {
      dispatch({
        type: AUTHENTICATED_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: AUTHENTICATED_FAIL,
    });
  }
};

export const requestRefresh = () => async (dispatch) => {
  try {
    const res = await fetch("/api/users/refresh", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (res.status === 200) {
      dispatch({
        type: REFRESH_SUCCESS,
      });
      dispatch(checkAuthStatus());
    } else {
      dispatch({
        type: REFRESH_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: REFRESH_FAIL,
    });
  }
};

export const signUp =
  (first_name, last_name, username, password) => async (dispatch) => {
    const body = JSON.stringify({
      first_name,
      last_name,
      username,
      password,
    });

    dispatch({
      type: SET_AUTH_LOADING,
    });

    try {
      const res = await fetch("/api/users/sign-up", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: body,
      });

      if (res.status === 201) {
        dispatch({
          type: USER_REGISTER_SUCCESS,
        });
      } else {
        dispatch({
          type: USER_REGISTER_FAIL,
        });
      }
    } catch (err) {
      dispatch({
        type: USER_REGISTER_FAIL,
      });
    }
    dispatch({
      type: REMOVE_AUTH_LOADING,
    });
  };

export const reset_signup_success = () => (dispatch) => {
  dispatch({
    type: RESET_USER_REGISTER_SUCCESS,
  });
};

export const signIn = (username, password) => async (dispatch) => {
  const body = JSON.stringify({
    username,
    password,
  });

  dispatch({
    type: SET_AUTH_LOADING,
  });

  try {
    const res = await fetch("/api/users/sign-in", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: body,
    });

    if (res.status === 200) {
      dispatch({
        type: USER_LOGIN_SUCCESS,
      });
      dispatch(loadUser());
    } else {
      dispatch({
        type: USER_LOGIN_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: USER_LOGIN_FAIL,
    });
  }
  dispatch({
    type: REMOVE_AUTH_LOADING,
  });
};

export const signOut = () => async (dispatch) => {
  try {
    const res = await fetch("/api/users/sign-out", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (res.status === 200) {
      dispatch({
        type: USER_LOGOUT_SUCCESS,
      });
    } else {
      dispatch({
        type: USER_LOGOUT_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: USER_LOGOUT_FAIL,
    });
  }
};

// get list of users
export const listUsers = () => async (dispatch, getState) => {
  try {
    const res = await fetch("/api/users/user-list", {
      method: "GET",
      headers: {
        Access: "application/json",
      },
    });
    if (res.status === 200) {
      dispatch({
        type: USER_LIST_SUCCESS,
      });
    } else {
      dispatch({
        type: USER_LIST_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: USER_LIST_FAIL,
    });
  }
};
