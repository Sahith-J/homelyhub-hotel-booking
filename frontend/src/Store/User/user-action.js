import axios from "axios";
import { userActions } from "./user-slice";

// Guest login
export const guestLogin = () => async (dispatch) => {
  const guestUser = {
    email: "guest@gmail.com",
    password: "Guest@123"
  };

  try {
    const { data } = await axios.post("/api/v1/rent/user/login", guestUser);
    dispatch(userActions.getLoginDetails(data.user));
  } catch (error) {
    dispatch(userActions.getError(error.response.data.message));
  }
};

// User signup
export const getSignup = (user) => async (dispatch) => {
  try {
    dispatch(userActions.getSignupRequest());
    const { data } = await axios.post("/api/v1/rent/user/signup", user);
    dispatch(userActions.getSignupDetails(data.user));
  } catch (error) {
    dispatch(userActions.getError(error.response.data.message));
  }
};

// User login
export const getLogin = (user) => async (dispatch) => {
  try {
    // Check if login credentials match the guest user
    if (user.email === "guest@gmail.com" && user.password === "Guest@123") {
      return guestLogin()(dispatch);
    }

    dispatch(userActions.getLoginRequest());
    const { data } = await axios.post("/api/v1/rent/user/login", user);
    dispatch(userActions.getLoginDetails(data.user));
  } catch (error) {
    dispatch(userActions.getError(error.response.data.message));
  }
};

// Get current user info
export const currentUser = () => async (dispatch) => {
  try {
    dispatch(userActions.getCurrentUserRequest());
    const { data } = await axios.get("/api/v1/rent/user/me");
    dispatch(userActions.getCurrentUser(data.user));
  } catch (error) {
    dispatch(userActions.getError(error.response.data.message));
  }
};

// Update user info
export const updateUser = (updateUser) => async (dispatch) => {
  try {
    dispatch(userActions.getUpdateUserRequest());
    await axios.patch("/api/v1/rent/user/updateMe", updateUser);
    const { data } = await axios.get("/api/v1/rent/user/me");
    dispatch(userActions.getCurrentUser(data.user));
  } catch (error) {
    dispatch(userActions.getError(error.response.data.message));
  }
};

// Handle forgot password
export const forgotPassword = (email) => async (dispatch) => {
  try {
    await axios.post("/api/v1/rent/user/forgotPassword", { email });
  } catch (error) {
    dispatch(userActions.getError(error.response.data.message));
  }
};

// Password reset
export const resetPassword = (repassword, token) => async (dispatch) => {
  try {
    await axios.patch(`/api/v1/rent/user/resetPassword/${token}`, repassword);
  } catch (error) {
    dispatch(userActions.getError(error.response.data.message));
  }
};

// Handle password update
export const updatePassword = (passwords) => async (dispatch) => {
  try {
    dispatch(userActions.getPasswordRequest());
    await axios.patch("/api/v1/rent/user/updateMyPassword", passwords);
    dispatch(userActions.getPasswordSuccess(true));
  } catch (error) {
    dispatch(userActions.getError(error.response.data.message));
  }
};

// User logout
export const Logout = () => async (dispatch) => {
  try {
    await axios.get("/api/v1/rent/user/logout");
    dispatch(userActions.getLogout(null));
  } catch (error) {
    dispatch(userActions.getError(error));
  }
};
