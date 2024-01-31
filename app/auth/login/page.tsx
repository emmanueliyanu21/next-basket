"use client";

import { useState } from "react";
import Link from "next/link";
import { Box, Button, TextField, Typography } from "@mui/material";
import { login } from "@/services/auth/apiService";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Snackbar from '@/components/Snackbar'

const LoginPage = () => {
  const dispatch = useDispatch();
//   const [isVisible, setSnackbarOpen] = useState(false);
//   const [snackMessage, setSnackMessage] = useState('')
  const [query, setQuery] = useState({
    name: "",
    password: "",
  });

  const loginData = useSelector((state: RootState) => state.auth.login);

  const onchange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    login(dispatch, query);
  };

  return (
    <Box className="flex flex-col items-center justify-center h-[700px] bg-gray-100">
    {/* <Snackbar open={isVisible} close={() => setSnackbarOpen(false)} message={snackMessage} /> */}
      <Box className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <Typography variant="h5" className="pb-8" gutterBottom>
          Login Page
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box className="mb-8">
            <TextField
              name="name"
              onChange={(e) => onchange(e)}
              value={query.name}
              label="name"
              variant="outlined"
              placeholder="kminchelle"
              fullWidth
              type="text"
              required
            />
            {/* {errors.name && <p>{errors.name.message}</p>} */}
          </Box>

          <Box className="mb-8">
            <TextField
              name="password"
              onChange={(e) => onchange(e)}
              value={query.password}
              label="Password"
              variant="outlined"
              placeholder="0lelplR"
              fullWidth
              type="password"
              required
            />
          </Box>

          <Button
            type="submit"
            className="bg-primary py-4 my-4 hover:bg-secondary"
            variant="contained"
            color="primary"
            fullWidth
          >
            Login
          </Button>
        </form>
        <Box className="mt-4">
          You don't have an account?{" "}
          <Link href="/auth/register">
            <Typography className="text-blue-500">Register here</Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
