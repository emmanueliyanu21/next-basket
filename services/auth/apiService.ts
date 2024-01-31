import { baseURL } from "@/libs/endpoints";
import {
  setErrorNotification,
  setLogin,
  setRegister,
  setSuccessNotification,
} from "@/redux/slice/authSlice";
import { setLoader } from "@/redux/slice/authSlice";
import { AppDispatch } from "@/store/store";
import { LoginProps, RegisterProps } from "@/types/Auth";

export const login = async (dispatch: AppDispatch, data: LoginProps) => {
  const apiURL = `${baseURL}/auth/login`;
  const header = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: data.name,
      password: data.password,
      //   expiresInMins: 60,
    }),
  };
  try {
    dispatch(setLoader(true));
    const response = await fetch(apiURL, header);
    if (response.ok === true) {
      const data = await response.json();
      dispatch(setLogin(data));
      dispatch(setSuccessNotification("Successful Login"));
    } else {
      dispatch(
        setErrorNotification("Invalid login details. Please try again.")
      );
    }
    dispatch(setLoader(false));
  } catch (error) {
    dispatch(setErrorNotification("An error occured during login. Try again"));
    dispatch(setLoader(false));
  }
};

export const register = async (dispatch: AppDispatch, data: RegisterProps) => {
  const apiURL = `${baseURL}/auth/register`;
  const header = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: data.name,
      email: data.email,
      password: data.password,
    }),
  };
  try {
    dispatch(setLoader(true));
    const response = await fetch(apiURL, header);
    const data = await response.json();
    dispatch(setRegister(data));
    dispatch(setLoader(false));
  } catch (error) {
    dispatch(setLoader(false));
  }
};
