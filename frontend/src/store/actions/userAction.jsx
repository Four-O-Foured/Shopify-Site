import axios from "../../APIs/axios";
import { showCustomToast } from "../../components/Notification";
import { loadUser, removeUser } from "../reducers/userSlice";

export const asyncUserLogin = (user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );

    console.log(data[0]);

    {
      data[0] && showCustomToast("User logged in successfully", "success");
      localStorage.setItem("user", JSON.stringify(data[0]));
    }

    {
      !data[0] && showCustomToast("User not found", "error");
    }
  } catch (error) {
    console.log(error);
  }
};

export const asyncUserLogOut = (user) => async (dispatch, getState) => {
  try {
    localStorage.removeItem("user");
    showCustomToast("User logged out successfully", "success");
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
