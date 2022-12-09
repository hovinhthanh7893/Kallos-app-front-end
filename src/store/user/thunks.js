import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "./selectors";
import {
  loginSuccess,
  logOut,
  setError,
  tokenStillValid,
  getFav,
  getSer,
} from "./slice";

export const signUp =
  (name, email, password, provideService) => async (dispatch, getState) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/signup`, {
        name,
        email,
        password,
        provideService,
      });
      dispatch(loginSuccess(response.data));
    } catch (error) {
      dispatch(setError(error.response.data.message));
    }
  };

export const login = (email, password) => async (dispatch, getState) => {
  try {
    const response = await axios.post(`${apiUrl}/auth/login`, {
      email,
      password,
    });
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(setError(error.response.data.message));
  }
};

export const getUserWithStoredToken = () => {
  return async (dispatch, getState) => {
    // get token from the state
    const token = selectToken(getState());
    // if we have no token, stop
    if (token === null) return;
    // if we do have a token,
    try {
      // check wether it is still valid or if it is expired
      const response = await axios.get(`${apiUrl}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // token is still valid, load profile
      dispatch(tokenStillValid({ user: response.data }));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error);
      }
      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(logOut());
    }
  };
};

export const getService = (id) => {
  return async (dispatch, getState) => {
    if (id === null) return;
    try {
      const response = await axios.get(`${apiUrl}/user/service/${id}`);
      dispatch(getSer(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error);
      }
    }
  };
};

export const getFavorites = (id) => {
  return async (dispatch, getState) => {
    if (id === null) return;
    try {
      const response = await axios.get(`${apiUrl}/user/favorite/${id}`);
      dispatch(getFav(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error);
      }
    }
  };
};
