import axios from "../../APIs/axios";
import { showCustomToast } from "../../components/Notification";
import { loadUser, removeUser } from "../reducers/userSlice";

export const asyncUserLogin = (user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );

    {
      data[0] && showCustomToast("User logged in successfully", "success");
      localStorage.setItem("user", JSON.stringify(data[0]));
      dispatch(asyncUserDets());
    }

    {
      !data[0] && showCustomToast("User not found", "error");
    }
  } catch (error) {
    console.log(error);
  }
};

export const asyncUserLogOut = () => async (dispatch, getState) => {
  try {
    localStorage.removeItem("user");
    dispatch(removeUser());
  } catch (error) {
    console.log(error);
  }
};
export const asyncUserDets = () => async (dispatch, getState) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    user
      ? dispatch(loadUser(user))
      : showCustomToast("Login to continue", "info");
  } catch (error) {
    console.log(error);
  }
};

export const asyncUserRegistration = (data) => async (dispatch, getState) => {
  try {
    await axios.post("/users", data);
    showCustomToast("User registered successfully", "success");
  } catch (error) {
    console.log(error);
  }
};

export const asyncUpdateUser = (id, user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.patch(`/users/${id}`, user);
    localStorage.setItem("user", JSON.stringify(data)); 
    dispatch(asyncUserDets());
  } catch (error) {
    console.log(error);
  }
};
export const asyncDeleteUser = (id) => async (dispatch, getState) => {
  try {
    await axios.delete(`/users/${id}`);
    showCustomToast("User deleted successfully", "success");
    dispatch(asyncUserLogOut());
  } catch (error) {
    console.log(error);
  }
};
