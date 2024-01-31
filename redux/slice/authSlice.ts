import { AuthState, loginDataProps } from "@/types/Auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AuthState = {
  login: {
    id: 0,
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    image: "",
    token: "",
  },
  register: "",
  loading: false,
  error: "",
  success: ''
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<loginDataProps>) => {
      state.login = action.payload;
    },
    setRegister: (state, action: PayloadAction<loginDataProps>) => {
      state.login = action.payload;
    },
    setLoader: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setErrorNotification: (state, action: PayloadAction<string>) => {
        state.error = action.payload
    },
    setSuccessNotification: (state, action: PayloadAction<string>) => {
        state.success = action.payload
    }
  },
});

export const { setLogin, setRegister, setLoader, setSuccessNotification, setErrorNotification } = authSlice.actions;
export default authSlice.reducer;
